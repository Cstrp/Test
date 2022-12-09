import { generateRandomColors } from "./colors";
import { btns, category, wrapper } from "./utils";

export class App {
  elem = null;
  blocks = [];
  values = [];

  btn = document.querySelector("button");
  input = document.createElement("input");
  form = document.getElementById("form");

  constructor() {}

  generateBlock() {
    for (let i = 0; i < 24; i++) {
      this.elem = document.createElement("div");
      this.elem.classList.add("blocks");
      this.blocks.push(this.elem);
    }

    this.blocks.forEach((i) => {
      i.classList.add(generateRandomColors());
      wrapper.appendChild(i);
    });
  }

  getInputValue() {
    const submit = document.createElement("button");
    submit.textContent = "Отправить";
    submit.disabled = true;

    this.input.addEventListener("focus", (evt) => {
      evt.preventDefault();
      submit.disabled = false;
    });

    submit.onclick = (evt) => {
      evt.preventDefault();
      this.values.push(this.input.value.split(" "));
      this.filter();
      submit.disabled = true;
    };

    this.form.onsubmit = (evt) => {
      evt.preventDefault();
      this.values.push(this.input.value.split(" "));
      this.filter();
    };

    this.form.append(submit);
    this.form.append(this.input);
  }

  filter() {
    const btn = document.createElement("button");
    const fakeBtn = document.createElement("button");

    this.values.forEach((i) => {
      const [name, fakeName] = i;

      btn.textContent = name;
      fakeBtn.textContent = fakeName;

      btn.addEventListener("click", () => {
        for (let i = 0; i < category.length; i++) {
          if (category[i].classList.contains(name)) {
            category[i].classList.toggle("hide");
          }
        }

        btn.disabled = true;
      });

      fakeBtn.addEventListener("click", () => {
        this.btn.textContent = "Не стоит";
        btn.disabled = false;
      });
    });

    btns.appendChild(btn);
    btns.appendChild(fakeBtn);

    this.input.value = "";
  }

  render() {
    this.btn.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.generateBlock();
      this.getInputValue();
      this.btn.disabled = true;
    });
  }
}
