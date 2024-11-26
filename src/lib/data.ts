import { LoginUser, UserFromDb } from "../models/User";
import { dataBaseUsers } from "../seed/seed";

export function getUserFromDb(user: LoginUser) {
  try {
    const request = dataBaseUsers.find((userInDb) => {
      return (
        userInDb.email === user.email && userInDb.password === user.password
      );
    });

    if (!request) {
      return null;
    }

    const userFromDb: UserFromDb = {
      name: request.name,
      email: request.email,
      accessToken: "123a",
      refreshToken: "123r",
    };

    return userFromDb;
  } catch (error) {
    console.log(error);
    return null;
  }
}
