import '../../primitives/heading/heading';
import '../../primitives/checkbox/checkbox';
import './check-list.scss';

const checkList = () => {
  const checkContainer = document.querySelectorAll('.check-list');

  function init() {
    checkContainer.forEach(item => {
      const checkBtn = item.querySelector('.check-list__btn');
      const checkBlind = item.querySelector('.check-list__blind');

      toggleList(checkBtn, checkBlind);
    });
  }

  function toggleList(checkBtn, checkBlind) {
    checkBtn.addEventListener('click', () => {
      checkBtn.classList.toggle('check-list__btn_active');
      checkBlind.classList.toggle('check-list__blind_active');
    });
  }

  init();
};

export default checkList;
