import '../../components/library.blocks/material-icons/material-icons';
import { DropdownRooms, DropdownGuests } from '../../components/common.blocks/composite/dropdown/dropdown';
import dataDrop from '../../components/common.blocks/composite/date-dropdown/date-dropdown';
import filterDataDrop from '../../components/common.blocks/composite/filter-date-dropdown/filter-date-dropdown';
import like from '../../components/common.blocks/primitives/like/like';
import rating from '../../components/common.blocks/primitives/rating/rating';
import rangeSlider from '../../components/common.blocks/composite/range-slider/range-slider';
import pagination from '../../components/common.blocks/primitives/pagination/pagination';
import checkList from '../../components/common.blocks/composite/check-list/check-list';
import mask from '../../components/common.blocks/primitives/text-field/text-field';

window.addEventListener('DOMContentLoaded', () => {

  new DropdownGuests({ container: '.ui-elements__guests-drop', closingClick: true }).init();

  mask('[data="text-mask"]');
  dataDrop('.date-dropdown');
  filterDataDrop({
    container: '.filter-date-dropdown',
    startDate: '2022.08.25',
    endDate: '2022.08.27',
  });

  like();
  rating();
  rangeSlider();
  pagination({ 'currentPage': 1, 'totalPages': 15 });

  new DropdownRooms({ container: '.ui-elements__drop-room' }).init();
  new DropdownRooms({ container: '.ui-elements__drop-room-active', isActive: true }).init();
  new DropdownGuests({ container: '.ui-elements__drop-guest', isActive: true }).init();
  new DropdownGuests({ container: '.ui-elements__drop-guest-filled', isActive: true }).init();

  checkList('.ui-elements__checklist', false);
  checkList('.ui-elements__checklist-active', true);
});

import './ui-elements.pug';
import './ui-elements.scss';
