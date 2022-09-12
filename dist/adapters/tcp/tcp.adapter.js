"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcpAdapter = void 0;
const net_1 = __importDefault(require("net"));
class TcpAdapter {
    constructor() {
        this._server = net_1.default.createServer();
    }
    listen(port) {
        this._server.listen(port, "0.0.0.0", () => console.info(`${TcpAdapter.name} is running on port ${port}`));
        return this;
    }
    connect(sock) {
        this._server.on("connection", sock);
    }
}
exports.TcpAdapter = TcpAdapter;
