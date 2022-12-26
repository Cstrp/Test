const TIME_LIMIT: number = 90;
let TIME_PASSED: number = 0;
let TIME_LEFT: number = TIME_LIMIT;
let TIME_INTERVAL: number = 0

export class Timer {
    timer: HTMLElement = <HTMLElement>document.getElementById('timer');

    min!: number
    sec!: number | string;

    constructor() {}

    public formatTime(time: number): string {
        this.min = Math.floor(time / 60)
        this.sec = time % 60
        if (this.sec < 10) {
            this.sec = `0${this.sec}`
        }

        const [first, second] = this.sec.toString().split('')

        return `
        <div class="min">
            <div class="min__row">
                <span class="min-count">0</span>
                <span class="min-count">${this.min}</span>
            </div>
            <i>Минута</i>
        </div>
        <div class="sep">:</div>
        <div class="sec">
              <div class="sec__row">
                  <span class="sec-count">${first}</span>
                  <span class="sec-count">${second}</span>
              </div>
             <i>Секунд</i>
        </div>
        `
    }

    public startTimer(): void {
        TIME_INTERVAL = setInterval(() => {
            TIME_PASSED = TIME_PASSED += 1;
            TIME_LEFT = TIME_LIMIT - TIME_PASSED;
            this.timer.innerHTML = this.formatTime(TIME_LEFT);

            if (TIME_LEFT === 0) this.onTimesUp();
        }, 1000)
    }

    private onTimesUp(): void {
        clearInterval(TIME_INTERVAL)
    }
}











