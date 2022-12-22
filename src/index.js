import './index.scss';
import { App } from './scripts/app';

const app = new App();
app.render();

function remove() {
  const all = document.querySelectorAll('.tns-liveregion');
  if (all) {
    all.forEach((i) => {
      i.children[0].remove();
    });
  }
}

remove();
