export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
  refresh_token: string;
}

export interface LogoutRes {
  message: string;
}

export interface RegisterReq {
  username: string;
  password: string;
}