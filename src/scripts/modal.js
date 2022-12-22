import { bubblyButtons } from './utils/animateButton';
import { validPhoneNum } from './utils/validPhoneNum';

const input = document.getElementById('phone');

export class Modal {
  inputValue = '';
  constructor() {}

  showModal() {
    const modal = document.getElementById('modal');
    const submit = document.getElementById('submit');
    const err = document.querySelector('.error');
    bubblyButtons.forEach((i) =>
      i.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('active');
      }),
    );

    submit.addEventListener('click', () => {
      if (validPhoneNum(input.value)) {
        input.style.border = '1px solid green';

        err.style.color = 'green';
        err.textContent = 'Готово';
        setTimeout(() => {
          modal.classList.remove('active');
          this.resetValue();
        }, 3000);
      } else {
        input.style.border = '1px solid red';
        err.style.color = 'red';
        err.textContent = 'Неверный формат';
      }
    });
  }
  resetValue() {
    input.value = '';
  }
}
