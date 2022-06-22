export interface Auth {
  isAuthenticated: boolean;
  user: User| null;
}
export interface User {
  userName: string | null | undefined;
  password: string | null | undefined;
}
export interface LoginRespose {
  authToken: string;
}