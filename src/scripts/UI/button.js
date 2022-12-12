import { Template } from "../template/template.js";

export class Button extends Template {
  onClick = () => {}

  onSubmit = (evt) => {};
  constructor(parent, className, value, state, type) {
    super(parent, 'button', null, value);

    if (className) this.element.classList.add(...className.split(' '));

    if (state) this.setDisable(true);

    this.element.setAttribute('type', type || 'button');

    if (type === 'submit') {
      this.element.onsubmit = (evt) => this.onSubmit(evt);
    }

    this.element.onclick = () => this.onClick();
  }

  setDisable(condition = false) {
    this.element.toggleAttribute('disabled', condition);
  }

  removeDisable() {
    this.element.removeAttribute('disabled');
  }

}
