import {default as Dropdown, DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';
import like from '../../components/like/like';
import rating from '../../components/rating/rating';
import slider from '../../components/slider/slider';
import pagination from '../../components/pagination/pagination';
import checkList from '../../components/check-list/check-list';

window.addEventListener('DOMContentLoaded', () => {
  new DropdownGuests({container: '.ui-elements__guests-drop'}).init();

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
