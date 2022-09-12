import express, { Request, Response } from "express";
import { HttpApp, HttpRequest, HttpResponse, Route } from "../../interfaces/http-application.interface";
export declare class ExpressAdapter implements HttpApp {
    private _app;
    constructor();
    listen(port: number): void;
    request(expressRequest: Request): HttpRequest<unknown>;
    response(actionResponse: HttpResponse, expressResponse: Response): express.Response<any, Record<string, any>>;
    init(): Promise<this>;
    createRoute(routes: Route[]): void;
}
