import {Template} from "../../utils/_template";

export class Select extends Template {
    constructor(parent: HTMLElement, attr?: Record<string, unknown>) {
        super(parent, 'select', 'select');

        if (attr) {
            for (const [key, value] of Object.entries(attr)) {
                this.element.setAttribute(key, value as string);
            }
        }

    }
}
