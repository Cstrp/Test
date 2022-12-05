import './index.scss';

class App {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  calculate() {
    return this.x * this.y;
  }
}

const calculator = new App(50, 50);

console.log(calculator.calculate());
console.log('asdasdads');
