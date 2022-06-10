import express, { NextFunction, Request, Response } from "express";
import { Server } from "./server";
import { UserController } from "./users/userController";

const app = express();
const port = 3000;

const server = new Server(app, port);

server.loadGlobalMiddleware([
  express.json(),
  express.urlencoded({
    extended: true,
  }),
]);
server.loadControllers([new UserController()]);

server.run();
