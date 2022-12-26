import {content, Template} from "../../utils/_template";

export class Button extends Template {
    onClick: () => void = () => {}
    onSubmit: (evt: Event) => void = () => {}
    constructor(parent: HTMLElement, className?: string, value?: content, state: boolean = false, type?: string) {
        super(parent, 'button', null, value);

        if (className) this.element.classList.add(...className.split(' '));

        if (state) this.setDisable(true);

        this.element.setAttribute('type', type || 'button');

        if (type === 'submit') {
            this.element.onsubmit = (evt) => {
                evt.preventDefault();
                this.onSubmit(evt);
            };
        }

        this.element.onclick = () => this.onClick();
    }

    public setDisable(condition: boolean = false): void {
        this.element.toggleAttribute('disabled', condition);
    }

    public removeDisable(): void {
        this.element.removeAttribute('disabled');
    }
}
