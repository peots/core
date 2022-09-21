import { Service } from "../global/contracts/service.contract";

export type TcpSockActions = {
  on: (pattern: string, fn: (...args: any[]) => void) => void;
  json: (data: Record<string, any>) => void;
  write: (data: string) => void;
  end: () => void;
  id?: string;
  [key: string]: any;
};
export type TcpSocket = (sock: TcpSockActions) => Promise<void>;

export abstract class TcpApp {
  listen: (port: number) => this;
  server?: TcpSocket;
  connect: (externalSock?: TcpSocket) => void;
}

export type MiddlewareFunction = (
  sock: TcpSockActions,
  topic?: string,
  data?: unknown
) => Promise<void>;

export interface TcpRouteItem {
  service: Service;
  middleware: [...MiddlewareFunction[]];
}

export interface TcpRoute {
  [topic: string]: TcpRouteItem;
}
