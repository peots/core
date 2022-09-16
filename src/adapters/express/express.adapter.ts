import express, { Request, Response } from "express";
import {
  HttpApp,
  HttpRequest,
  HttpResponse,
  Route,
} from "../../contracts/http-application.contract";

export class ExpressAdapter implements HttpApp {
  private _app: express.Express;
  constructor() {
    this._app = express();
  }

  listen(port: number): void {
    this._app.listen(port, () => {
      console.info(`${ExpressAdapter.name} is running on port ${port}`);
    });
  }
  request(expressRequest: Request) {
    return {
      body: expressRequest.body,
      params: expressRequest.params,
    } as HttpRequest<unknown>;
  }

  response(actionResponse: HttpResponse, expressResponse: Response) {
    return expressResponse
      .status(actionResponse.statusCode)
      .send(actionResponse.body);
  }

  async init(): Promise<this> {
    this._app.use(express.json());
    return this;
  }
  createRoute(routes: Route[]): void {
    // receive all route based in our pattern and convert to express version
    routes.forEach((route) =>
      this._app[route.method](route.path, async (req, res) => {
        const actionResponse = await route.controller.action(this.request(req));
        return this.response(actionResponse, res);
      })
    );

    // set config to return 404 when a not valid route is called
    this._app.use((_, res, next) => {
      res.status(404).send();
      next();
    });
  }
}
