import './welcome.scss';

import AirDatepicker from '../../components/common.blocks/libraries/air-datepicker/air-datepicker';

const dp = new AirDatepicker('.ui-cards__air', {
  range: true,
  buttons: ['clear', { content: 'Применить' }],
  inline: true,
  multipleDates: 2,
  selectedDates: ['2019.08.19', '2019.08.23'],
  prevHtml: '<span class="material-icons">arrow_back</span>',
  nextHtml: '<span class="material-icons">arrow_forward</span>',
  navTitles: {
    days: 'MMMM yyyy',
  },
  onRenderCell({ date }) {
    if (date.getDate() === 8 && date.getMonth() === 7) {
      return { classes: '-current-' };
    }
  }
});

dp.$datepicker.style.display = 'block';
dp.$datepicker.style.top = 0;
