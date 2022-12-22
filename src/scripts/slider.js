import { tns } from 'tiny-slider';

export class Slider {
  constructor() {}

  instSlider() {
    const slider = document.getElementById('cards');
    const prev = document.getElementById('first');
    const next = document.getElementById('second');

    const sdr = tns({
      container: slider,
      items: 3,
      slideBy: 'page',
      mouseDrag: true,
      lazyload: true,
      loop: true,
      prevButton: prev,
      nextButton: next,
      nav: false,
      responsive: {
        320: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2,
        },
        700: {
          gutter: 30,
        },
        900: {
          items: 3,
        },
      },
    });

    sdr.play();
  }

  schoolSlider() {
    const slider = document.getElementById('school');
    const prev = document.getElementById('right');
    const next = document.getElementById('left');
    const nav = document.getElementById('navigation');

    const sdr = tns({
      container: slider,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      lazyload: true,
      autoHeight: true,
      autoWidth: false,
      loop: true,
      prevButton: prev,
      nextButton: next,
      navContainer: nav,
    });

    sdr.play();
  }

  partnersSlider() {
    const slider = document.getElementById('slider');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const nav = document.getElementById('nav');

    const sdr = tns({
      container: slider,
      items: 3,
      slideBy: 'page',
      mouseDrag: true,
      lazyload: true,
      loop: true,
      prevButton: prev,
      nextButton: next,
      navContainer: nav,
      responsive: {
        320: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2,
        },
        700: {
          gutter: 30,
        },
        900: {
          items: 3,
        },
      },
    });

    sdr.play();
  }

  init() {
    this.schoolSlider();
    this.instSlider();
    this.partnersSlider();
  }
}
