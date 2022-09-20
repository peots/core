import { Register } from "@clean-arch/register";
import {
  TcpRoute,
  TcpRouteItem,
  TcpSockActions,
} from "../../contracts/tcp-application.contract";

export class TcpRouteService {
  static async get(topic: string, data: unknown, sock: TcpSockActions) {
    const { middleware, service } = Register.get<TcpRoute>("tcp-routes")[topic];

    try {
      for (const mdw of middleware) {
        await mdw(sock, topic, data);
      }
      return { service };
    } catch (error) {
      sock.write(JSON.stringify({ error: `fail trying to get service.` }));
      return { error };
    }
  }

  static set(tcpRoute: TcpRoute) {
    Register.sync.set(
      Object.assign(Register.get("tcp-routes") || {}, tcpRoute),
      "tcp-routes"
    );
  }
}
