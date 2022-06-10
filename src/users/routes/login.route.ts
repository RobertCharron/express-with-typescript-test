import { Request, Response, NextFunction } from "express";
import { IApiRoute } from "../../abstracts/IApiRoute";
import { Methods } from "../../constants/methods.enum";
import { BadRequestException } from "../../exceptions/badRequest.exception";
import { UserLoginDto } from "../dto/userLoginDto";
import { UsersService } from "../usersService";

export class LoginRoute implements IApiRoute {
  apiPath = "/login";
  method = Methods.post;
  handler = this.handleLogin;

  async handleLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const usersService = UsersService.getInstance();
      const userLoginDto = req.body as UserLoginDto;
      if (!userLoginDto.username || !userLoginDto.password) {
        throw new BadRequestException(
          "You must provide the username and password."
        );
      }
      const result = usersService.attemptLogin(
        userLoginDto.username,
        userLoginDto.password
      );

      if (!result) {
        res.status(401).send({ message: "Invalid credentials. " }).end();
      }
      res.send(result).end();
    } catch (e) {
      console.log(e);
      res.status(403).send({ message: e.getMessage() });
    }
    next();
  }
}
