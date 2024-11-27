import { ProductFilter } from "../models/Product";
import { LoginUser, UserFromDb } from "../models/User";
import { dataBaseProducts, dataBaseUsers } from "../seed/seed";

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

export function getProducts(filter?: ProductFilter) {
  try {
    let request;

    if (!filter) {
      request = dataBaseProducts.slice();
      return request;
    }

    if (filter.category && filter.search) {
      const filteredProducts = dataBaseProducts.filter((product) => {
        return product.title.includes(filter.search!);
      });

      request = filteredProducts.filter((product) => {
        return product.title.includes(filter.search!);
      });
      return request;
    }

    if (filter.search) {
      request = dataBaseProducts.filter((product) => {
        return product.title.includes(filter.search!);
      });
      return request;
    }

    if (filter.category) {
      request = dataBaseProducts.filter((product) => {
        return product.category === filter.category;
      });
      return request;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function getProductById(producId: string) {
  try {
    const request = dataBaseProducts.find((product) => {
      return product.id === producId;
    });
    if (!request) {
      return null;
    }
    return request;
  } catch (error) {
    console.log(error);
    return null;
  }
}
