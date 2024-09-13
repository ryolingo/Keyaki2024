export type PostType = {
  id: number;
  comment: string;
  createdAt: string;
};

export class ServerActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServerActionError";
  }
}
