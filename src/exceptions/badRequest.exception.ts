export class BadRequestException implements Error {
  constructor(public message: string) {}
  name = "Bad Request Exception";
  stack?: string;
  getMessage(): string {
    return this.message;
  }
}
