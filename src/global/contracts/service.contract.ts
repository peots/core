import { TcpSockActions } from "../../contracts/tcp-application.contract";

export abstract class Service {
  exec: (data: any, sock: TcpSockActions) => Promise<unknown>;
}
