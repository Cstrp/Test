import { Template } from "../template/template.js";

export class Paragraph extends Template {
  constructor(parent, className, value) {
    super(parent, "p");

    if (className) this.element.classList.add(...className.split(" "));
    if (typeof value === "string") this.element.textContent = value;
  }
}
