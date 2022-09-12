"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAdapter = void 0;
const express_1 = __importDefault(require("express"));
class ExpressAdapter {
    constructor() {
        this._app = (0, express_1.default)();
    }
    listen(port) {
        this._app.listen(port, () => {
            console.info(`${ExpressAdapter.name} is running on port ${port}`);
        });
    }
    request(expressRequest) {
        return {
            body: expressRequest.body,
            params: expressRequest.params,
        };
    }
    response(actionResponse, expressResponse) {
        return expressResponse
            .status(actionResponse.statusCode)
            .send(actionResponse.body);
    }
    async init() {
        this._app.use(express_1.default.json());
        return this;
    }
    createRoute(routes) {
        // receive all route based in our pattern and convert to express version
        routes.forEach((route) => this._app[route.method](route.path, async (req, res) => {
            const actionResponse = await route.controller.action(this.request(req));
            return this.response(actionResponse, res);
        }));
        // set config to return 404 when a not valid route is called
        this._app.use((_, res, next) => {
            res.status(404).send();
            next();
        });
    }
}
exports.ExpressAdapter = ExpressAdapter;
