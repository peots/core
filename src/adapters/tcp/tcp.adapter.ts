import net from "net";
import { TcpApp, TcpSocket } from "../../interfaces/tcp-application.interface";

export class TcpAdapter implements TcpApp {
  private readonly _server = net.createServer();

  listen(port: number) {
    this._server.listen(port, "0.0.0.0", () =>
      console.info(`${TcpAdapter.name} is running on port ${port}`)
    );

    return this;
  }

  connect(sock: TcpSocket) {
    this._server.on("connection", sock);
  }
}
