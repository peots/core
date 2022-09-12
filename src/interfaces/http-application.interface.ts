export abstract class HttpResponse {
  headers?: object;
  statusCode: number;
  body?: any;
}

export abstract class HttpRequest<T> {
  body?: T | unknown;
  params?: unknown;
  header?: unknown;
}

export type RouteMethod = "post" | "get" | "put" | "patch" | "delete";

export abstract class Route {
  controller: Controller;
  path: string;
  method: RouteMethod;
}

export abstract class Controller {
  action: (request: HttpRequest<unknown>) => Promise<HttpResponse>;
}

export abstract class HttpApp {
  init: () => Promise<this>;
  createRoute: (route: Route[]) => void;
  request: <T = any>(req: any) => HttpRequest<T>;
  response: (res: HttpResponse, adapterResponse: any) => any;
  listen: (port: number) => void;
}
