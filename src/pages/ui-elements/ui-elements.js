import './ui-elements.pug';
import './ui-elements.scss';

import {default as Dropdown, DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';

window.addEventListener('DOMContentLoaded', () => {
  new Dropdown({container: '.ui-elements__guests-drop'});
  new DropdownGuests({container: '.ui-elements__guests-test'});
  new DropdownRooms({container: '.ui-elements__guests-test2'});
});
