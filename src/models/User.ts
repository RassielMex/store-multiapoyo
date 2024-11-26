export interface LoginUser {
  email: string;
  password: string;
}

export interface UserFromDb {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface UserInDb {
  name: string;
  email: string;
  password: string;
}
