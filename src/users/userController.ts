import { Controller } from "../abstracts/controller.abstract";
import { IApiRoute } from "../abstracts/IApiRoute";
import { LoginRoute } from "./routes/login.route";
import { UsersService } from "./usersService";

export class UserController extends Controller {
  public apiPath = "/users";
  protected readonly routes: IApiRoute[] = [new LoginRoute()];
  protected usersService: UsersService;
  constructor() {
    super();
    this.usersService = UsersService.getInstance();
  }
}
