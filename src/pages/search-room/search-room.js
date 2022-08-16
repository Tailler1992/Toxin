import '../../components/library.blocks/material-icons/material-icons';
import '../../components/common.blocks/composite/header/header';
import '../../components/common.blocks/primitives/heading/heading';
import dataDrop from '../../components/common.blocks/composite/date-dropdown/date-dropdown';
import { DropdownRooms, DropdownGuests } from '../../components/common.blocks/composite/dropdown/dropdown';
import rangeSlider from '../../components/common.blocks/composite/range-slider/range-slider';
import '../../components/common.blocks/primitives/checkbox/checkbox';
import checkList from '../../components/common.blocks/composite/check-list/check-list';
import roomCard from '../../components/common.blocks/cards/room-card/room-card';
import pagination from '../../components/common.blocks/primitives/pagination/pagination';
import '../../components/common.blocks/composite/footer/footer';
import './search-room.scss';


window.addEventListener('DOMContentLoaded', () => {
  dataDrop({container: '.search-room__filter-date-dropdown', startDate: ['2023.08.19', '2023.08.23']});

  new DropdownGuests({
    container: '.search-room__guests-drop',
    closingClick: true
  }).init();

  new DropdownRooms({
    container: '.search-room__drop-room',
    closingClick: true
  }).init();

  rangeSlider();
  checkList('.search-room__checklist', false);
  roomCard();
  pagination({ currentPage: 1, totalPages: 15 });
});
