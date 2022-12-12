import { Template } from "../template/template.js";

export class Input extends Template {
  getValue = (evt) => {}

  constructor(parent, type, className, value, attr) {
    super(parent, 'input');

    this.element.setAttribute('type', type)

    if (className) this.element.classList.add(...className.split(' '));

    if (value) this.element.setAttribute('value', value);

    if (attr) {
      for (const [key, value] of Object.entries(attr)) {
        this.element.setAttribute(key, value);
      }
    }

    this.element.addEventListener('input', (evt) => this.getValue(evt));
  }

}
