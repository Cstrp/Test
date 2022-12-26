import {Template} from "../../utils/_template";

export class Option  extends  Template {
    constructor(parent: HTMLSelectElement, className?: string, attr?: Record<string, unknown>,) {
        super(parent, 'option', null);

        if (className) {
            this.element.classList.add(...className.split(' '));
        }


        if (attr) {
            for (const [key, value] of Object.entries(attr)) {
                this.element.setAttribute(key, value as string);
            }
        }
    }

}
