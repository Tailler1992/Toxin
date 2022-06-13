import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const dateDropdown = (container) => {
  const containerSelector = document.querySelector(container);
  const input = containerSelector.querySelectorAll('.text-field__input');
  const inputBtns = containerSelector.querySelectorAll('.text-field__btn');

  const airDat = new AirDatepicker(containerSelector, {
    range: true,
    classes: 'date-dropdown__air',
    altFieldDateFormat: 'dd.MM.yyyy',
    startDate: new Date(),
    minDate: new Date(),
    disableNavWhenOutOfRange: false,
    navTitles: {
      days: 'MMMM yyyy',
    },

    onSelect(date) {
      input[0].value = date.formattedDate[0] ?? 'ДД.ММ.ГГГГ';
      input[1].value = date.formattedDate[1] ?? 'ДД.ММ.ГГГГ';
    }
  });

  function toogleCalendar() {
    const containerCalendar = containerSelector.querySelector('.date-dropdown__air');

    inputBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        containerCalendar.classList.toggle('date-dropdown__air_active');
      });
    });
  }

  toogleCalendar();
};

export default dateDropdown;
