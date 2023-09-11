const URL = 'http://127.0.0.1:3000';

const API = {
  PRODUCT_LIST: `${URL}/data/products.json`,
  EMAIL_VERIFICATION: `${URL}/users/email-check`,
  LOGIN: `${URL}/users/login`,
  JOIN: `${URL}/users/`,
  COUNTRIES: `${URL}/users`,
  CART: `${URL}/orders`,
  PAYMENT: `${URL}/payments`,
  PRODUCT_DETAIL: `${URL}/products/`,
  ADD_CART: `${URL}/orders`,
};

export default API;
