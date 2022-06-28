import '../../primitives/text-field/text-field';
import './filter-date-dropdown.scss';

import AirDatepicker from '../../libraries/air-datepicker/air-datepicker';

const filterDateDropdown = ({ container, startDate = '', endDate = '' }) => {
  const containerSelector = document.querySelector(container);
  const containerFDP = containerSelector.querySelector('.filter-date-dropdown__datepicker');
  const input = containerSelector.querySelector('.filter-date-dropdown__input');

  function createCalendar() {
    const btnApply = {
      content: 'Применить',
      onClick: () => {
        dateDrop.hide();
      }
    };

    const dateDrop = new AirDatepicker(input, {
      range: true,
      buttons: ['clear', btnApply],
      container: containerFDP,
      multipleDates: 2,
      multipleDatesSeparator: ' - ',
      selectedDates: [startDate, endDate],
      dateFormat: 'dd MMM',
      minDate: new Date(),
      disableNavWhenOutOfRange: false,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      navTitles: {
        days: 'MMMM yyyy',
      },
      onSelect: ({ datepicker }) => {
        showHint(datepicker);
        changeStateBtnClose(datepicker);
        handleCellClick(datepicker);
      },
      onShow: () => {
        changeStateBtnClose(dateDrop);
        handleCellClick(dateDrop);
      }
    });

    showHint(dateDrop);
  }

  function showHint(dateDrop) {
    if (dateDrop.selectedDates.length === 0) {
      input.style.textTransform = 'none';
      input.value = 'Укажите даты пребывания';
    } else {
      input.style.textTransform = 'lowercase';
    }
  }

  function changeStateBtnClose(dateDrop) {
    const btnClear = dateDrop.$datepicker.querySelectorAll('.air-datepicker-button');

    if (dateDrop.selectedDates.length === 0) {
      btnClear[0].style.visibility = 'hidden';
    } else {
      btnClear[0].style.visibility = 'visible';
    }
  }

  function handleCellClick(dateDrop) {
    if (dateDrop.selectedDates.length > 0) {
      try {
        const calendar = dateDrop.$datepicker;
        const cellSelected = calendar.querySelector('.-selected-');
        const cellFrom = calendar.querySelector('.-range-from-');
        const cellTo = calendar.querySelector('.-range-to-');
        const cellRange = calendar.querySelector('.-in-range-');

        if (cellSelected.classList.contains('-range-from-') && !cellTo && !cellRange) {
          cellFrom.classList.add('-range-to-');
        }
      } catch (error) { }
    }
  }

  createCalendar();
};

export default filterDateDropdown;
