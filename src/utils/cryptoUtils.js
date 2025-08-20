

import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const SECRET_KEY = ""; 

// Encrypt data before storing it in cookies
export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt data when retrieving it from cookies
export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData ? JSON.parse(decryptedData) : null;
};

// Store encrypted data in cookies
export const setEncryptedCookie = (key, value) => {
  const encryptedValue = encryptData(value);
  Cookies.set(key, encryptedValue, { expires: 7, secure: true, sameSite: "Strict" });
};

// Retrieve and decrypt data from cookies
export const getDecryptedCookie = (key) => {
  const encryptedValue = Cookies.get(key);
  return encryptedValue ? decryptData(encryptedValue) : null;
};
