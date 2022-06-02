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
    this.toggleForm();
  }

  toggleForm() {
    this.input.classList.toggle('text-field__input_active');
    this.input.classList.toggle('text-field__input_boxy');
    this.input.nextSibling.classList.toggle('text-field__btn_active');
    this.blindSelector.classList.toggle('dropdown__blind_active');
  }






}
