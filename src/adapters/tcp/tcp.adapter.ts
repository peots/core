import { Register } from "@clean-arch/register";
import net from "net";
import {
  TcpApp,
  TcpSockActions,
  TcpSocket,
} from "../../contracts/tcp-application.contract";
import { TcpRouteService } from "../../global/tcp/tcp-service.global";

import crypto from "crypto";

export class TcpAdapter implements TcpApp {
  private readonly _server = net.createServer();

  listen(port: number) {
    this._server.listen(port, "0.0.0.0", () =>
      console.info(`${TcpAdapter.name} is running on port ${port}`)
    );

    return this;
  }

  async server(sock: TcpSockActions) {
    sock.id = crypto.randomUUID();
    Register.unique.set(sock);

    console.log(
      `[${sock.id}] start a new connection from: [${sock.remoteAddress}:${sock.remotePort}]`
    );

    sock.on("data", async (raw: Buffer) => {
      try {
        const { topic, ...data } = JSON.parse(raw.toString());
        const { service } = await TcpRouteService.get(topic, data, sock);

        if (service) {
          const response = await service.exec(data, sock);
          if (response) sock.write(JSON.stringify(response));
        }
      } catch (error) {
        console.error(error);
        return sock.end();
      }
    });

    sock.on("close", () => Register.unique.rm(sock));
  }
  connect(externalSock?: TcpSocket) {
    this._server.on("connection", externalSock || this.server.bind(this));
  }
}
