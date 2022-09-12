export type TcpSockActions = {
  on: (pattern: string, fn: (...args: any[]) => void) => void;
  [key: string]: any;
};
export type TcpSocket = (sock: TcpSockActions) => Promise<void>;

export abstract class TcpApp {
  listen: (port: number) => this;
  connect: (sock: TcpSocket) => void;
}
