const URL = 'http://127.0.0.1:3000';
// const URL = 'http://13.125.231.183:3000';

const API = {
  EMAIL_VERIFICATION: `${URL}/users/email-check`,
  LOGIN: `${URL}/users/login`,
  JOIN: `${URL}/users/`,
  COUNTRIES: `${URL}/users`,
  CART: `${URL}/orders`,
  PAYMENT: `${URL}/payments`,
  PRODUCT_DETAIL: `${URL}/products/`,
  ADD_CART: `${URL}/orders`,
  PRODUCTLIST: `${URL}/products?countryId=`,
};

export default API;
