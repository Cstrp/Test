import { form, randomInteger, root } from "./utils/utils.js";
import { Input } from "./components/input.js";
import { Button } from "./components/button.js";


export class App {
  btn = null;

  getValue = (obj) => obj;

  inputs = null;

  integerRange = null;
  firstDivisor = null;
  secondDivider = null;
  inputValues = {
    arrOfNum: [],
    divOne: "",
    divTwo: ""
  };

  constructor() {

  }

  getInputValue() {
    this.btn = new Button(root, "btn", "Start", false, "submit");

    this.btn.onClick = () => {
      console.log(this.getValue(this.inputValues));
      const [one, two] = this.inputValues.arrOfNum[this.inputValues.arrOfNum.length - 1];
      for (let i = 0; i < 3; i++) {
        console.log(randomInteger(+one, +two));
      }

      // Я Остановился тут - не забыть че доделать :)
      this.resetState();
    };
  }

  generateInputs() {
    this.integerRange = new Input(form, "text", "input", null);
    this.integerRange.getValue = (evt) => {
      this.updateState("arrOfNum", evt);
    };

    this.firstDivisor = new Input(form, "text", "input", null);
    this.firstDivisor.getValue = (evt) => {
      this.updateState("divOne", evt);
    };

    this.secondDivider = new Input(form, "text", "input", null);
    this.secondDivider.getValue = (evt) => {
      this.updateState("divTwo", evt);
    };
  }

  updateState(key, evt) {
    const input = evt.target;

    const value = input.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");

    switch (key) {
      case "arrOfNum":
        this.inputValues.arrOfNum.push(evt?.target?.value.split(" "));
        break;
      case "divOne":
        this.inputValues[key] = value;
        break;
      case "divTwo":
        this.inputValues[key] = value;
        break;
    }
  }

  updateInputValue() {
    this.integerRange.element.value = this.inputValues.arrOfNum;
    this.firstDivisor.element.value = this.inputValues.divOne;
    this.secondDivider.element.value = this.inputValues.divTwo;
  }

  resetState() {
    this.inputValues = {
      arrOfNum: [],
      divOne: "",
      divTwo: ""
    };

    this.updateInputValue();
  }

  render() {
    this.generateInputs();
    this.getInputValue();
  }
}
