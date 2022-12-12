const form = document.getElementById("form");
const root = document.getElementById("app");

const text = document.getElementById("text");
const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { form, root, text, randomInteger };
