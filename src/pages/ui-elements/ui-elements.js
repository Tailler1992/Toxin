import './ui-elements.pug';
import './ui-elements.scss';

import {default as Dropdown, DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';
import like from '../../components/like/like';
import checkList from '../../components/check-list/check-list';

window.addEventListener('DOMContentLoaded', () => {
  new Dropdown({container: '.ui-elements__guests-drop'});

  like();
  checkList('.ui-elements__checklist', false);
  checkList('.ui-elements__checklist-active', true);
});
