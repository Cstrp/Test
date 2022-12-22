export const bubblyButtons = document.querySelectorAll('.bubbly-button');

export class AnimateButton {
  constructor() {}

  animate(evt) {
    if (evt instanceof Event) {
      evt.preventDefault();
      evt.target.classList.toggle('animate');

      setTimeout(() => evt.target.classList.remove('animate'), 700);
    }

    bubblyButtons.forEach((i) => i.addEventListener('click', this.animate));
  }
}
