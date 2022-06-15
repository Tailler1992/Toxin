import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const dateDropdown = (container) => {
  const containerSelector = document.querySelector(container);
  const input = containerSelector.querySelectorAll('.text-field__input');
  const inputBtns = containerSelector.querySelectorAll('.text-field__btn');
  const airBtn = {
    content: 'Применить',
    onClick: () => {
        containerCalendar.classList.toggle('-active-');
    }
};

  const airDat = new AirDatepicker(containerSelector, {
    range: true,
    buttons: ['clear', airBtn],
    altFieldDateFormat: 'dd.MM.yyyy',
    startDate: new Date(),
    minDate: new Date(),
    disableNavWhenOutOfRange: false,
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MMMM yyyy',
    },

    onSelect(date) {
      input[0].value = date.formattedDate[0] ?? 'ДД.ММ.ГГГГ';
      input[1].value = date.formattedDate[1] ?? 'ДД.ММ.ГГГГ';
    }
  });

  const containerCalendar = containerSelector.querySelector('.air-datepicker.-inline-');

  function changeStyle() {
    const calendarContainer = airDat.$datepicker;

    calendarContainer.addEventListener('click', (e) => {
        const target = e.target;

        const cellFrom = calendarContainer.querySelector('.-range-from-');
        const cellTo = calendarContainer.querySelector('.-range-to-');

        if (target.classList.contains('-range-from-') && !cellTo) {
            cellFrom.classList.add('-range-to-');
        }
    });
}

changeStyle();

  function toogleCalendar() {
    inputBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        containerCalendar.classList.toggle('-active-');
      });
    });
  }

  toogleCalendar();
};

export default dateDropdown;
