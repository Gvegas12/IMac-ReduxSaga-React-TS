import { ILoginRequestPayload, IUserResponse } from "./auth.types";

const mockAuthUsers = [
  {
    email: "mock1@root.com",
    password: "root",
  },
  {
    email: "mock2@root.com",
    password: "root",
  },
  {
    email: "mock3@root.com",
    password: "root",
  },
];

/**
 * * Принимает обьект со свойствами:
 * @param {string} email - email пользователя
 * @param {string} password - password пользователя
 * * Возвращает:
 * @returns Promise с данными о пользователе
 * @description Отправляет запрос на вход/авторизацию пользователя
 */
export const fetchLogin = ({
  email,
  password,
}: ILoginRequestPayload): Promise<IUserResponse> =>
  new Promise((resv) => {
    const checkEmail = mockAuthUsers.find((user) => user.email === email);
    const checkPassword = mockAuthUsers.find(
      (user) => user.password === password
    );
    if (!checkEmail && !checkPassword) {
      throw new Error(`Не правильный email и пароль`);
    }
    if (!checkEmail) {
      throw new Error(`Не правильный email, 
         должен быть в формате mock@root.com
      `);
    }
    if (!checkPassword) {
      throw new Error(`Не правильный пароль`);
    }
    resv({ email });
  });

/**
 * @returns Удаляет токен из LocalStorage
 */
export const logout = () => localStorage.removeItem("token");
