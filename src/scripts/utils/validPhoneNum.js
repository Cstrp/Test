export const validPhoneNum = (str) => {
  const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,12}$/im;

  return reg.test(str);
};
