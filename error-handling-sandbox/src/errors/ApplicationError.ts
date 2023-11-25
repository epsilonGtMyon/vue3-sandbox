class ApplicationError extends Error {
  public handleGlobal: boolean = false;
  public handleLocal: boolean = false;

  constructor(message?: string) {
    super(message);
  }
}

export { ApplicationError };
