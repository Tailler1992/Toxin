import './pagination.scss';

const pagination = ({ currentPage = 1, totalPages = 15 } = {}) => {
  const pagination = document.querySelector('.pagination');
  const pagItems = pagination.querySelector('.pagination__items');
  const description = pagination.querySelector('.pagination__description');
  const btnPrev = pagination.querySelector('.pagination__btn_prev');
  const btnNext = pagination.querySelector('.pagination__btn_next');

  function init(currentPage, totalPages) {
    renderContent(currentPage, totalPages);
    handleBtnClick(btnPrev);
    handleBtnClick(btnNext);
  }

  function renderContent(currentPage, totalPages) {
    let listCreatedPages = '';
    let prevPage = currentPage - 1;
    let nextPage = currentPage + 1;

    listCreatedPages = showFirstBreakView(currentPage, listCreatedPages);

    for (let pageLength = prevPage; pageLength <= nextPage; pageLength++) {
      if (pageLength > totalPages) {
        continue;
      }
      if (pageLength == 0) {
        pageLength += 1;
        nextPage += 1;
      }

      let activeLi = (currentPage == pageLength) ? 'pagination__item_current' : '';
      listCreatedPages += `<li class='pagination__item ${activeLi}' data=${pageLength}>${pageLength}</li>`;
    }

    listCreatedPages = showSecondBreakView(currentPage, listCreatedPages);

    pagItems.innerHTML = listCreatedPages;
    changeBtnsVisibility(currentPage);
    handleItemClick(pagItems);
  }

  function showFirstBreakView(currentPage, listCreatedPages) {
    if (currentPage > 2) {
      listCreatedPages += `<li class='pagination__item' data = 1>1</li>`;
      if (currentPage > 3) {
        listCreatedPages += `<li class='pagination__item pagination__item_invisible'>...</li>`;
      }
    }
    return listCreatedPages;
  }

  function showSecondBreakView(currentPage, listCreatedPages) {
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        listCreatedPages += `<li class='pagination__item pagination__item_invisible'>...</li>`;
      }
      listCreatedPages += `<li class='pagination__item' data=${totalPages}>${totalPages}</li>`;
    }
    return listCreatedPages;
  }

  function changeBtnsVisibility(currentPage) {
    if (currentPage > 1) {
      btnPrev.classList.add('pagination__btn_visible');
    }
    if (currentPage <= 1) {
      btnPrev.classList.remove('pagination__btn_visible');
    }
    if (currentPage < totalPages) {
      btnNext.classList.add('pagination__btn_visible');
    }
    if (currentPage == totalPages) {
      btnNext.classList.remove('pagination__btn_visible');
    }
  }

  function handleItemClick(pagItems) {
    const listPages = pagItems.querySelectorAll('.pagination__item');

    listPages.forEach(page => {
      if (page.hasAttribute('data')) {

        page.addEventListener('click', () => {
          const pageNumber = +page.getAttribute('data');

          changeDescription(pageNumber);
          renderContent(pageNumber, totalPages);
        });
      }
    });
  }

  function changeDescription(pageNumber) {
    let startNumberPageElements = 1;
    let endNumberPageElements = 12;

    startNumberPageElements = pageNumber * endNumberPageElements - 11;
    endNumberPageElements = pageNumber * endNumberPageElements;

    description.textContent = `${startNumberPageElements} – ${endNumberPageElements} из 100+ вариантов аренды`;
  }

  function handleBtnClick (btn) {
    btn.addEventListener('click', () => {
      const activeElem = pagination.querySelector('.pagination__item_current');
      let pageNumber = +activeElem.getAttribute('data');

      pageNumber = (btn == btnPrev) ? pageNumber - 1 : pageNumber + 1;

      changeDescription(pageNumber);
      renderContent(pageNumber, totalPages);
    });
  }

  init(currentPage, totalPages);
};

export default pagination;
