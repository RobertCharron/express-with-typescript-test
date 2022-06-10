import { User } from "./entities/user.entity";

const users: User[] = [
  {
    id: 1,
    username: "test",
    password: "hashedPassword",
  },
  {
    id: 2,
    username: "test2",
    password: "hashedPassword",
  },
];

export class UsersService {
  private static instance: UsersService;
  private constructor() {}

  public static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  public attemptLogin(username: string, password: string): User | false {
    const user = users.find((user) => (user.username = username));
    if (!user) {
      return false;
    }

    return this.matchPassword(password, user.password) ? user : false;
  }

  private matchPassword(password: string, passwordHash: string): boolean {
    //Pretend to do the decryption w/ bcrypt or something.
    return passwordHash === "hashedPassword" && password === "secretPassword";
  }
}
