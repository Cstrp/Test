import { form, randomInteger, root, text } from "./utils/utils.js";
import { Input } from "./UI/input.js";
import { Button } from "./UI/button.js";
import { Paragraph } from "./UI/paragraph.js";


export class App {
  btn = null;
  getValue = (obj) => obj;
  paragraph = null;
  integerRange = null;
  firstDivisor = null;
  secondDivider = null;
  inputValues = {
    arrOfNum: [],
    arrOfText: [],
    divOne: "",
    divTwo: ""
  };


  constructor() {

  }

  getInputValue() {
    this.btn = new Button(root, "btn", "Start", false, "submit");
    let counter = 0;
    this.btn.onClick = () => {
      counter++;
      if (counter > 1) text.textContent = "";
      this.counting();
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

  counting() {
    try {
      const [one, two] = this.inputValues.arrOfNum[this.inputValues.arrOfNum.length - 1];
      const divOne = +this.inputValues.divOne;
      const divTwo = +this.inputValues.divTwo;

      for (let i = 0; i < 3; i++) {
        this.paragraph = new Paragraph(null, "text", `${randomInteger(+one, +two)}`);
        this.inputValues.arrOfText.push(this.paragraph);
      }

      this.inputValues.arrOfText.forEach((i) => {
        const values = +i.element.textContent;

        if (Math.round(values % divOne) === 0) {
          i.element.textContent = "Alter";
          text.append(i.element);
        } else {
          text.append(i.element);
        }

        if (Math.round(values % divTwo) === 0) {
          i.element.textContent = "Web";
          text.append(i.element);
        } else {
          text.append(i.element);
        }

        if (Math.round(values % divOne) === 0 && Math.round(values % divTwo) === 0) {
          i.element.textContent = "AlterWeb";
          text.append(i.element);
        } else {
          text.append(i.element);
        }
      });
    } catch (e) {
      if (e) {
        text.style.color = "red";
      }
      text.textContent = `Поля не могут быть пустыми`;
    }
  }

  resetState() {
    this.inputValues = {
      arrOfNum: [],
      arrOfText: [],
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
