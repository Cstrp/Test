const form = document.getElementById("form");
const root = document.getElementById("app");

const text = document.getElementById("text");
const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const calc = (v1, v2) => {
  let res = v1 % v2
  return Math.floor(res)
}

export { form, root, text, calc, randomInteger };
