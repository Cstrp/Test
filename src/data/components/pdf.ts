import {Template} from "../utils/_template";

export class Pdf extends Template {
    constructor(parent: HTMLElement) {
        super(parent, 'div', 'pdf');

        new Template(this.element, 'img', 'pdf__img', null, {
            src: 'https://webinar.seo-akademiya.com/site-assets/dist/images/file-pdf.svg',
            alt: '#'
        })
        const text__wrapper = new Template(this.element, 'div', 'pdf__text')
        new Template(text__wrapper.element, 'h4', 'pdf__title', 'PDF бонус после регистрации')
        new Template(text__wrapper.element, 'p', 'pdf__subtitle', '15 SEO сервисов, которые помогут продвинуть сайт в ТОП-3 Google')
    }
}
