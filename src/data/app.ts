import {Timer} from "./utils/_timer";
import {Bonus} from "./components/_bonus";

export class App {
    constructor() {
    }

    timer() {
        const timer = new Timer()
        timer.startTimer()
    }

    bonus() {
        const bonusWrapper: HTMLElement = <HTMLElement>document.querySelector('.bonus')
        const bns: HTMLElement = <HTMLElement> document.getElementById('bonus')

        new Bonus(bns).render()
        new Bonus(bonusWrapper).render()
    }

    render() {
        this.timer()
        this.bonus()
    }
}




