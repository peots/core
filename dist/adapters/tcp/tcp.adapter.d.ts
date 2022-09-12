import { TcpApp, TcpSocket } from "../../interfaces/tcp-application.interface";
export declare class TcpAdapter implements TcpApp {
    private readonly _server;
    listen(port: number): this;
    connect(sock: TcpSocket): void;
}
