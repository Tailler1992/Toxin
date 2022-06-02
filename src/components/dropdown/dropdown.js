export default class Dropdown {
  constructor({
    container
  }) {
    this.mainContainer = document.querySelector(container);
    this.dropdown = this.mainContainer.querySelector('.dropdown');
    this.input = this.mainContainer.querySelector('.text-field__input');
    this.inputBtn = this.mainContainer.querySelector('.text-field__btn');
    this.blindSelector = this.mainContainer.querySelector('.dropdown__blind');
    this.controlsSelector = this.blindSelector.querySelectorAll('.dropdown__control');
    this.countersSelector = this.blindSelector.querySelectorAll('.dropdown__count');
    this.totalAmount = 0;
    this.init();
  }

  init() {
    this.mainContainer.addEventListener('click', (e) => {
      if (e.target === this.inputBtn) {
        this.toggleForm();
      }
    });

    this.controlsSelector.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        const target = e.target;
        const valueElem = item.querySelector('.dropdown__count');

        if (target.hasAttribute('data-minus')) {
          valueElem.textContent--;
          this.totalAmount--;
          this.calcAmount();
        }
        if (target.hasAttribute('data-plus')) {
          valueElem.textContent++;
          this.totalAmount++;
          this.calcAmount();
        }
      });
    });


  }

  calcAmount() {
    if (this.totalAmount === 0) {
      this.input.setAttribute('value', 'Укажите количество');
    } else {
      this.input.setAttribute('value', `${this.totalAmount}`);
    }
  }

  toggleForm() {
    this.input.classList.toggle('text-field__input_active');
    this.input.classList.toggle('text-field__input_boxy');
    this.input.nextSibling.classList.toggle('text-field__btn_active');
    this.blindSelector.classList.toggle('dropdown__blind_active');
  }






}
