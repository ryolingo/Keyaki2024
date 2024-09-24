export type PostType = {
  id: number;
  comment: string;
  createdAt: Date;
};

export class ServerActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServerActionError";
  }
}
