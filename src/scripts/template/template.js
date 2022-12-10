export class Template {
  element = null;
  constructor(parent, tagName, className, value, attr) {
    this.element = document.createElement(tagName);

    if (parent) parent.append(this.element);
    if (typeof value === "string") this.element.textContent = value;
    if (typeof className === "string") this.element.classList.add(...className.split(" "));
    if (attr) {
      for (const [key, value] of Object.entries(attr)) {
        this.element.setAttribute(key, value);
      }
    }
  }
}
