"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcpServer = exports.HttpServer = void 0;
var express_adapter_1 = require("./adapters/express/express.adapter");
Object.defineProperty(exports, "HttpServer", { enumerable: true, get: function () { return express_adapter_1.ExpressAdapter; } });
var tcp_adapter_1 = require("./adapters/tcp/tcp.adapter");
Object.defineProperty(exports, "TcpServer", { enumerable: true, get: function () { return tcp_adapter_1.TcpAdapter; } });
