import {default as Dropdown, DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';
import like from '../../components/like/like';
import rating from '../../components/rating/rating';
import slider from '../../components/slider/slider';
import pagination from '../../components/pagination/pagination';
import checkList from '../../components/check-list/check-list';

window.addEventListener('DOMContentLoaded', () => {
  new Dropdown({container: '.ui-elements__guests-drop'});

  like();
  rating();
  slider();
  pagination({'currentPage' : 1, 'totalPages': 15});

  new Dropdown({container: '.ui-elements__drop-room'});
  new Dropdown({container: '.ui-elements__drop-room-active'});
  new Dropdown({container: '.ui-elements__drop-guest'});
  new Dropdown({container: '.ui-elements__drop-guest-filled'});

  checkList('.ui-elements__checklist', false);
  checkList('.ui-elements__checklist-active', true);
});

import './ui-elements.pug';
import './ui-elements.scss';
