import { AnimateButton } from './utils/animateButton';
import { Slider } from './slider';
import { menuButton, toggleable } from './utils/burgerMenu';
import { Modal } from './modal';

export class App {
  constructor() {}

  animateBtn() {
    const btn = new AnimateButton();
    btn.animate();
  }

  modal() {
    const mdl = new Modal();
    mdl.showModal();
  }

  burger() {
    menuButton.addEventListener('click', toggleable);
  }

  slider() {
    const slider = new Slider();
    slider.init();
  }

  letItSnow() {
    const snow = document.getElementById('snow');
    const snowflake = document.getElementById('snowflake');

    snowflake.onclick = (evt) => {
      evt.preventDefault();
      snow.classList.contains('snow') ? snow.classList.remove('snow') : snow.classList.add('snow');
    };
  }

  render() {
    this.burger();
    this.modal();
    this.animateBtn();
    this.slider();
    this.letItSnow();
  }
}
