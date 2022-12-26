import {content, Template} from "../../utils/_template";

export class Input extends Template {
    public getValue: (evt: Event) => void = () => {
    }
    constructor(
        parent: HTMLElement,
        type: string,
        attr: Record<string, string>,
        className?: content,
        value?: content)
    {
        super(parent, 'input', null);

        this.element.setAttribute('type', type);

        if (className) {
            if (typeof className === "string") {
                this.element.classList.add(...className.split(' '));
            }
        }

        if (value) {
            if (typeof value === "string") {
                this.element.setAttribute('value', value);
            }
        }

        if (attr) {
            for (const [key, value] of Object.entries(attr)) {
                this.element.setAttribute(key, value);
            }
        }

        this.element.addEventListener('input', (evt) => this.getValue(evt));
    }


}
