export interface Auth {
  isAuthenticated: boolean;
  user: User| null;
}
export interface User {
  userName: string;
  password: string;
}