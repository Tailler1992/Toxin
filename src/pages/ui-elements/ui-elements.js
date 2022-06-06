import './ui-elements.pug';
import './ui-elements.scss';

import {default as Dropdown, DropdownRooms, DropdownGuests} from '../../components/dropdown/dropdown';
import like from '../../components/like/like';
import rating from '../../components/rating/rating';

window.addEventListener('DOMContentLoaded', () => {
  new Dropdown({container: '.ui-elements__guests-drop'});

  like();
  rating();
});
