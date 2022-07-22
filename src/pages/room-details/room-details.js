import '../../components/library.blocks/material-icons/material-icons';
import '../../components/common.blocks/composite/header/header';
import '../../components/common.blocks/primitives/information/information';
import pieChart from '../../components/common.blocks/primitives/pie-chart/pie-chart';
import '../../components/common.blocks/composite/comment/comment';
import '../../components/common.blocks/primitives/bullet-list/bullet-list';
import bookingCard from '../../components/common.blocks/cards/booking-card/booking-card';
import '../../components/common.blocks/composite/footer/footer';
import './room-details.scss';


window.addEventListener('DOMContentLoaded', () => {
  pieChart();
  bookingCard();
});
