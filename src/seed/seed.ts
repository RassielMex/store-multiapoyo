import { ProductCategory, ProductFromDb } from "../models/Product";
import { UserInDb } from "../models/User";
import { v4 as uuidv4 } from "uuid";

export const dataBaseUsers: UserInDb[] = [
  {
    name: "Rassiel",
    email: "rassiel@gmail.com",
    password: "123abc",
  },
];

export const dataBaseProducts: ProductFromDb[] = [
  {
    id: uuidv4(),
    title: "Gaming Laptop",
    description: "Powerful laptop for demanding games and applications.",
    category: ProductCategory.TECH,
    price: 1299.99,
    imgUrl: "../../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Comfortable T-Shirt",
    description: "Soft and breathable cotton t-shirt for everyday wear.",
    category: ProductCategory.CLOTHING,
    price: 19.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Stylish Coffee Mug",
    description:
      "Insulated mug to keep your coffee hot and your hands comfortable.",
    category: ProductCategory.HOME,
    price: 14.95,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Organic Pasta",
    description:
      "Made with high-quality durum wheat for a delicious and healthy meal.",
    category: ProductCategory.FOOD,
    price: 3.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Wireless Headphones",
    description: "Enjoy crystal-clear audio with freedom of movement.",
    category: ProductCategory.TECH,
    price: 79.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Cozy Sweater",
    description: "Warm and snuggly sweater for cooler weather.",
    category: ProductCategory.CLOTHING,
    price: 34.5,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Stainless Steel Cookware Set",
    description: "Durable and versatile cookware for all your cooking needs.",
    category: ProductCategory.HOME,
    price: 99.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Fresh Fruit Basket",
    description:
      "Assortment of seasonal fruits for a healthy and refreshing treat.",
    category: ProductCategory.FOOD,
    price: 9.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Smartwatch",
    description:
      "Track your fitness goals and stay connected with notifications.",
    category: ProductCategory.TECH,
    price: 249.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
  {
    id: uuidv4(),
    title: "Stylish Jeans",
    description: "Classic and comfortable jeans for any occasion.",
    category: ProductCategory.CLOTHING,
    price: 49.99,
    imgUrl: "../assets/img/dummy.jpeg",
  },
];
