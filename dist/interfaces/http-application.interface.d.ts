export declare abstract class HttpResponse {
    headers?: object;
    statusCode: number;
    body?: any;
}
export declare abstract class HttpRequest<T> {
    body?: T | unknown;
    params?: unknown;
    header?: unknown;
}
export declare type RouteMethod = "post" | "get" | "put" | "patch" | "delete";
export declare abstract class Route {
    controller: Controller;
    path: string;
    method: RouteMethod;
}
export declare abstract class Controller {
    action: (request: HttpRequest<unknown>) => Promise<HttpResponse>;
}
export declare abstract class HttpApp {
    init: () => Promise<this>;
    createRoute: (route: Route[]) => void;
    request: <T = any>(req: any) => HttpRequest<T>;
    response: (res: HttpResponse, adapterResponse: any) => any;
    listen: (port: number) => void;
}
