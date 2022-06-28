import '../../primitives/heading/heading';
import '../../primitives/checkbox/checkbox';
import './check-list.scss';

const checkList = (checkSelector, isActive) => {
  const checkContainer = document.querySelector(checkSelector);
  const checkBlind = checkContainer.querySelector('.check-list__blind');
  const checkBtn = checkContainer.querySelector('.check-list__btn');

  function init() {
    if (isActive) {
      toggleList();
    }

    checkBtn.addEventListener('click', () => {
      toggleList();
    });
  }

  function toggleList() {
    checkBlind.classList.toggle('check-list__blind_active');
    checkBtn.classList.toggle('check-list__btn_active');
  }

  init();
};

export default checkList;
