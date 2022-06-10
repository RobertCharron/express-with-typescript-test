import {
  Application,
  NextFunction,
  RequestHandler,
  Request,
  Response,
} from "express";
import http from "http";
import { Controller } from "./abstracts/controller.abstract";

export class Server {
  constructor(private app: Application, private readonly port: number) {}

  public run(): http.Server {
    return this.app.listen(this.port, () => {
      console.log("Application has been started");
    });
  }

  public loadGlobalMiddleware(middleware: Array<RequestHandler>): void {
    middleware.forEach((mw) => {
      this.app.use(mw);
    });

    this.app.use(this.errorHandler);
  }

  public loadControllers(controllers: Array<Controller>): void {
    controllers.forEach((controller) => {
      this.app.use(controller.apiPath, controller.setRoutes());
    });
  }

  errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err.message, req.body);
    res.status(500).send("There was an internal server error.");
  }
}
