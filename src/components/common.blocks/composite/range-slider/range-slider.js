import noUiSlider from '../../libraries/no-ui-slider/no-ui-slider';

const rangeSlider = () => {

  const slider = document.querySelector('#range-slider');
  const textContainer = document.querySelector('.range-slider__text');
  const price = textContainer.querySelector('.heading__description');

  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 100,
    range: {
      'min': 1000,
      'max': 16000
    },
  });

  slider.noUiSlider.on('update', function (values) {
    const leftValue = Math.round(values[0]).toLocaleString();
    const rightValue = Math.round(values[1]).toLocaleString();

    price.textContent = `${leftValue}₽ - ${rightValue}₽`;
  });
};

export default rangeSlider;
