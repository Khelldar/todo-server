export interface User {
  id: string;
  dateCreated: Date;
  dateUpdated: Date;
  email: string;

  cursor?: string;
}
