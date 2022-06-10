import { Router } from "express";
import { IApiRoute } from "./IApiRoute";

export abstract class Controller {
  public router: Router = Router();
  public abstract apiPath: string;
  protected abstract readonly routes: Array<IApiRoute>;

  public setRoutes(): Router {
    for (const route of this.routes) {
      this.router[route.method](route.apiPath, route.handler);
    }
    return this.router;
  }
}
