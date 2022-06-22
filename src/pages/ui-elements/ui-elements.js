import {DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';
import dataDrop from '../../components/date-dropdown/date-dropdown';
import filterDataDrop from '../../components/filter-date-dropdown/filter-date-dropdown';
import like from '../../components/like/like';
import rating from '../../components/rating/rating';
import slider from '../../components/slider/slider';
import pagination from '../../components/pagination/pagination';
import checkList from '../../components/check-list/check-list';
import mask from '../../components/text-field/text-field';

window.addEventListener('DOMContentLoaded', () => {
  new DropdownGuests({container: '.ui-elements__guests-drop', closingClick: true}).init();
  mask('[data="text-mask"]');
  dataDrop('.date-dropdown');
  filterDataDrop({
    container:'.filter-date-dropdown',
    startDate: '2022.06.25',
    endDate: '2022.06.27',
  });

  like();
  rating();
  slider();
  pagination({'currentPage' : 1, 'totalPages': 15});

  new DropdownRooms({container: '.ui-elements__drop-room'}).init();
  new DropdownRooms({container: '.ui-elements__drop-room-active', isActive: true}).init();
  new DropdownGuests({container: '.ui-elements__drop-guest', isActive: true}).init();
  new DropdownGuests({container: '.ui-elements__drop-guest-filled', isActive: true}).init();

  checkList('.ui-elements__checklist', false);
  checkList('.ui-elements__checklist-active', true);
});

import './ui-elements.pug';
import './ui-elements.scss';
