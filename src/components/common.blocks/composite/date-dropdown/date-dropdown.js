import '../../primitives/heading/heading';
import '../../primitives/text-field/text-field';
import './date-dropdown.scss';

import AirDatepicker from '../../libraries/air-datepicker/air-datepicker';
import IMask from '../../../library.blocks/imask/imask';

const dateDropdown = (container) => {
  const containerSelector = document.querySelector(container);
  const startInput = containerSelector.querySelector('.date-dropdown__input-start');
  const endInput = containerSelector.querySelector('.date-dropdown__input-end');
  const containerDP = containerSelector.querySelector('.date-dropdown__datepicker');
  let startInputValue;
  let endInputValue;

  function init() {
    const mask = createMask();
    const dp = createCalendar(mask);

    changeDateInInput(dp, mask);
    toogleCalendar();

    try {
      changeStyle(dp);
    } catch (error) { }

    handleCellClick(dp);
    changeStateBtns(dp);
  }

  function getConvertValueInputs() {
    startInputValue = startInput.value.split('.').reverse().join('-');
    endInputValue = endInput.value.split('.').reverse().join('-');
  }

  function createCalendar(mask) {
    const airBtn = {
      content: 'Применить',
      onClick: () => {
        dp.$datepicker.classList.toggle('-active-');
      }
    };

    getConvertValueInputs();

    const dp = new AirDatepicker(containerDP, {
      range: true,
      buttons: ['clear', airBtn],
      inline: true,
      multipleDates: 2,
      selectedDates: [startInputValue, endInputValue],
      minDate: new Date(),
      disableNavWhenOutOfRange: false,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      navTitles: {
        days: 'MMMM yyyy',
      },

      onSelect: function (date) {
        startInput.value = date.formattedDate[0] ?? 'ДД.ММ.ГГГГ';
        endInput.value = date.formattedDate[1] ?? 'ДД.ММ.ГГГГ';

        getConvertValueInputs();
        updateMask(mask);
        changeStateBtns(dp);
      }
    });

    return dp;
  }

  function createMask() {
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);

    const param = {
      mask: Date,
      autofix: true,
      lazy: false,
      min: minDate,
      blocks: {
        d: { mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 31, maxLength: 2 },
        m: { mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2 },
        Y: { mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1900, to: 9999, maxLength: 4 }
      },
    };

    let startMask = IMask(startInput, param);
    let endMask = IMask(endInput, param);

    return [startMask, endMask];
  }

  function updateMask(mask) {
    const [startMask, endMask] = mask;

    startMask.updateValue();
    endMask.updateValue();
  }

  function changeDateInInput(dp, mask) {
    const inputs = containerSelector.querySelectorAll('.text-field__input');

    inputs.forEach(input => {
      input.addEventListener('change', () => {
        getConvertValueInputs();
        dp.clear();

        if (Date.parse(startInputValue) || Date.parse(endInputValue)) {

          if (Date.parse(startInputValue) === Date.parse(endInputValue)) {
            let newDate = new Date(endInputValue);

            newDate.setDate(newDate.getDate() + 1);

            dp.selectDate([startInputValue, newDate], {
              silent: true
            });
          }
          else {
            dp.selectDate([startInputValue, endInputValue], {
              silent: true
            });

            dp.setViewDate(startInputValue);
          }

          if (Date.parse(startInputValue) > Date.parse(endInputValue)) {
            [startInput.value, endInput.value] = [endInput.value, startInput.value];
          }
        }

        changeStyle(dp);
        updateMask(mask);
        changeStateBtns(dp);
      });
    });
  }

  function toogleCalendar() {
    const buttons = containerSelector.querySelectorAll('.text-field__btn');
    const datepicker = containerSelector.querySelector('.air-datepicker.-inline-');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        datepicker.classList.toggle('-active-');
      });
    });
  }

  function changeStyle(dp) {
    const calendar = dp.$datepicker;
    const cellSelected = calendar.querySelector('.-selected-');
    const cellFrom = calendar.querySelector('.-range-from-');
    const cellTo = calendar.querySelector('.-range-to-');
    const cellRange = calendar.querySelector('.-in-range-');

    if (cellSelected.classList.contains('-range-from-') && !cellTo && !cellRange) {
      cellFrom.classList.add('-range-to-');
    }
  }

  function handleCellClick(dp) {
    const calendar = dp.$datepicker;

    calendar.addEventListener('click', (e) => {
      const target = e.target;
      const cellFrom = calendar.querySelector('.-range-from-');
      const cellTo = calendar.querySelector('.-range-to-');
      const cellRange = calendar.querySelector('.-in-range-');

      if (target.classList.contains('-range-from-') && !cellTo && !cellRange) {
        cellFrom.classList.add('-range-to-');
      }
    });
  }

  function changeStateBtns(dp) {
    const btnClear = dp.$datepicker.querySelectorAll('.air-datepicker-button');

    btnClear.forEach(btn => {
      btn.setAttribute('type', 'button');
    });

    if (Date.parse(startInputValue) || Date.parse(endInputValue)) {
      btnClear[0].style.visibility = 'visible';
    }
    else {
      btnClear[0].style.visibility = 'hidden';
    }
  }

  init();
};

export default dateDropdown;
