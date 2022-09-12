export declare type TcpSockActions = {
    on: (pattern: string, fn: (...args: any[]) => void) => void;
    [key: string]: any;
};
export declare type TcpSocket = (sock: TcpSockActions) => Promise<void>;
export declare abstract class TcpApp {
    listen: (port: number) => this;
    connect: (sock: TcpSocket) => void;
}
