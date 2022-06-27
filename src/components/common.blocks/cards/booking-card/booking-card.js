import {DropdownGuests} from '../../composite/dropdown/dropdown';
import dataDrop from '../../composite/date-dropdown/date-dropdown';

const bookingCard = () => {
  dataDrop('.booking-card__date-dropdown');
  new DropdownGuests({container: '.booking-card__dropdown', closingClick: true}).init();
};

export default bookingCard;
