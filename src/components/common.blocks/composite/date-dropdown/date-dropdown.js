import '../../primitives/heading/heading';
import '../../primitives/text-field/text-field';
import './date-dropdown.scss';

import AirDatepicker from '../../libraries/air-datepicker/air-datepicker';
import IMask from '../../../library.blocks/imask/imask';

const dateDropdown = ({ container, startDate = [] } = {}) => {
  const containerDD = document.querySelector(container);
  const dd = containerDD.querySelector('.date-dropdown');
  const startInput = dd.querySelector('.date-dropdown__input-start');
  const endInput = dd.querySelector('.date-dropdown__input-end');
  const altInput = dd.querySelector('.date-dropdown__input-alt');

  function init() {
    const mask = createMask();
    const dateDrop = createCalendar(mask);

    dateDrop.selectDate(startDate);
    showCalendar(dateDrop);
    changeStateBtns(dateDrop);
    toogleCalendar(dateDrop);
    changeDateInInput(dateDrop);
    handleCellClick(dateDrop);
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

    return [IMask(startInput, param), IMask(endInput, param)];
  }

  function createCalendar(mask) {
    const containerSelector = dd.querySelector('.date-dropdown__datepicker');
    const [startMask, endMask] = mask;
    const btnApply = {
      content: 'Применить',
      attrs: { type: 'button' },
      onClick: () => {
        dateDrop.hide();
      }
    };
    const btnClear = {
      content: 'Очистить',
      className: 'btn-clear',
      attrs: { type: 'button' },
      onClick: () => {
        dateDrop.clear();
      }
    };

    const dateDrop = new AirDatepicker(containerSelector, {
      range: true,
      buttons: [btnClear, btnApply],
      locale: {
        monthsShort: [
          'янв', 'фев', 'мар',
          'апр', 'май', 'июн',
          'июл', 'авг', 'сен',
          'окт', 'ноя', 'дек'
        ]
      },
      altField: altInput,
      altFieldDateFormat: 'd MMM',
      multipleDatesSeparator: ' - ',
      multipleDates: 2,
      minDate: new Date(),
      disableNavWhenOutOfRange: false,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      navTitles: {
        days: 'MMMM yyyy',
      },
      onSelect: ({ formattedDate, datepicker }) => {
        addValuesToTextFields(formattedDate);
        changeStateBtns(datepicker);
        handleCellClick(datepicker);
        startMask.updateValue();
        endMask.updateValue();

      },
    });

    return dateDrop;
  }

  function addValuesToTextFields(formattedDate) {
    if (formattedDate.length === 0) {
      startInput.value = 'ДД.ММ.ГГГГ';
      endInput.value = 'ДД.ММ.ГГГГ';
      altInput.value = 'Укажите даты пребывания';
    }
    if (formattedDate.length === 1) {
      startInput.value = formattedDate[0];
      endInput.value = 'ДД.ММ.ГГГГ';
    }
    if (formattedDate.length > 1) {
      startInput.value = formattedDate[0];
      endInput.value = formattedDate[1];
    }
  }

  function toogleCalendar(dateDrop) {
    const buttons = dd.querySelectorAll('.text-field__btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        dateDrop.$datepicker.classList.toggle('-active-');
      });
    });

    altInput.addEventListener('click', () => {
      dateDrop.$datepicker.classList.toggle('-active-');
    });

    document.addEventListener('mouseup', (e) => {
      const withinBoundaries = e.composedPath().includes(dd);

      if (!withinBoundaries &&
        dateDrop.$datepicker.classList.contains('-active-')) {
        dateDrop.$datepicker.classList.remove('-active-');
      }
    });
  }

  function changeDateInInput(dateDrop) {
    const textFieldsContainer = dd.querySelector('.date-dropdown__inputs');
    const inputs = textFieldsContainer.querySelectorAll('.text-field__input');

    inputs.forEach(input => {
      input.addEventListener('change', () => {
        dateDrop.clear();

        const convertedValues = [
          startInput.value.split('.').reverse().join('.'),
          endInput.value.split('.').reverse().join('.')
        ];

        const convertedDates = filterAnArrayOfDates(convertedValues);

        if (convertedDates.length > 1 && convertedDates[0] === convertedDates[1]) {
          let newDate = new Date(convertedDates[1]);
          convertedDates[1] = newDate.setDate(newDate.getDate() + 1);
        }

        dateDrop.selectDate(convertedDates);
      });
    });
  }

  function filterAnArrayOfDates(arr) {
    return arr.filter(item => {
      if (/^\d{4}.\d{2}.\d{2}$/.test(item)) {
        return item;
      }
    });
  }

  function changeStateBtns(dateDrop) {
    const btnClear = dateDrop.$datepicker.querySelector('.btn-clear');

    if (dateDrop.selectedDates.length === 0) {
      btnClear.style.visibility = 'hidden';
    } else {
      btnClear.style.visibility = 'visible';
    }
  }

  function showCalendar(dateDrop) {
    const inputs = dd.querySelector('.date-dropdown__inputs');
    const filter = dd.querySelector('.date-dropdown__filter');

    if (dd.offsetWidth > 300) {
      filter.style.display = 'none';
    } else {
      dateDrop.$datepicker.classList.add('-mini-');
      inputs.style.display = 'none';
      filter.style.display = 'block';
    }
  }

  function handleCellClick(dateDrop) {
    if (dateDrop.selectedDates.length > 0) {
        const calendar = dateDrop.$datepicker;
        const cellSelected = calendar.querySelector('.-selected-.-range-from-');
        const cellTo = calendar.querySelector('.-range-to-');
        const cellRange = calendar.querySelector('.-in-range-');

        if (cellSelected && !cellTo && !cellRange) {
          cellSelected.classList.add('-range-to-');
        }
    }
  }

  init();

};

export default dateDropdown;
