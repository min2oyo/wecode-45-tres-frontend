const URL = 'http://127.0.0.1:3000';
// const URL = 'http://13.125.231.183:3000';

const API = {
  EMAIL_VERIFICATION_API: `${URL}/users/email-check`,
  LOGIN_API: `${URL}/users/login`,
  JOIN_API: `${URL}/users/`,
  COUNTRIES_API: `${URL}/users`,
  CART_API: `${URL}/orders`,
  PAYMENT_API: `${URL}/payments`,
  PRODUCT_DETAIL: `${URL}/products/`,
  ADD_CART: `${URL}/orders`,
  PRODUCTLIST_API: `${URL}/products?countryId=`,
};

export default API;
