import { info } from "../interface/_info";
import { getData } from "../utils/_api";
import { _empty } from "../utils/_empty";
import { Template } from "../utils/_template";
import { Button } from "./UI/_btn";
import { Input } from "./UI/_input";
import { Option } from "./UI/_option";
import { Select } from "./UI/_select";
import { Pdf } from "./pdf";

const info: string[] = []

export class Bonus extends Template {
    private email!: Input;
    private tel!: Input;
    private btn!: Button
    private state: info = {
        email: '',
        tel: ''
    }
    private select!: Select
    _option!: Option

    constructor(parent: HTMLElement) {
        super(parent, 'form', 'form');


        new Template(this.element, 'label', 'label', 'Ваш e-mail', { for: 'email' })
        this.email = new Input(this.element, 'text', {
            placeholder: 'Введите Ваш email',
            id: 'email'
        }, 'input')
        this.email.getValue = (evt) => this.updState('email', evt)


        new Template(this.element, 'label', 'label', 'Телефон', { for: 'tel' })
        const wrapper = new Template(this.element, 'div', 'tel__wrapper')
        this.select = new Select(wrapper.element)
        new Template(this.element, 'span', 'description', 'Номер телефона используется ТОЛЬКО для напоминания о вебинаре')

        this.tel = new Input(wrapper.element, 'text', {
            placeholder: '(925)1234567',
            id: 'tel'
        }, 'input')
        this.tel.getValue = (evt) => this.updState('tel', evt)

        this.btn = new Button(this.element, '', 'Бесплатная регистрация', false, 'submit')
        this.btn.onClick = () => {
            if (_empty(this.state.tel) && _empty(this.state.email)) {
                const err = new Template(this.element, 'div', '', 'Hello world')
                err.render()
            } else {
                info.push(this.state.tel, this.state.email)
            }
            this.resetState();
        }

        const pdf = new Pdf(this.element)

        pdf.render()

        this.getTel()
    }

    private updInput() {
        if (this.email.element instanceof HTMLInputElement) this.email.element.value = this.state.email
        if (this.tel.element instanceof HTMLInputElement) this.tel.element.value = this.state.tel

        this.btn.element.toggleAttribute('disabled', this.state.tel === '' || this.state.email === '')
    }

    private updState(key: keyof info, evt: Event): void {
        const input: HTMLInputElement = <HTMLInputElement>evt.target

        this.state[key] = input.value

        this.btn.element.toggleAttribute('disabled', this.state.email === '' || this.state.tel === '')
    }

    private async getTel() {
        try {
            const data = await getData()
            const res = data.data
            res.forEach((i, idx) => {
                const { dial_code, name, emoji } = i
                this._option = new Option(<HTMLSelectElement>this.select.element, '', {
                    value: `${dial_code}`,
                    label: `${emoji} ${dial_code} ${name}`,
                    selected: idx === 20,
                    title: name,
                    id: `${i.name}`
                })
            })

        } catch (err) {
            throw new Error(`Oops... ${err}`);
        }
    }

    private resetState() {
        this.state = {
            tel: '',
            email: ''
        }

        this.updInput()
    }
}
