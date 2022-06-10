import { NextFunction, Request, Response } from "express";
import { Methods } from "../constants/methods.enum";

export interface IApiRoute {
  apiPath: string;
  method: Methods;
  handler: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void | Promise<void>;
}
