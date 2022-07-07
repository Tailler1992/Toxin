import '../../primitives/room-info/room-info';
import '../../composite/date-dropdown/date-dropdown';
import '../../primitives/heading/heading';
import '../../composite/dropdown/dropdown';
import '../../primitives/btn/btn';
import './booking-card.scss';

import {DropdownGuests} from '../../composite/dropdown/dropdown';
import dataDrop from '../../composite/date-dropdown/date-dropdown';

const bookingCard = () => {
  dataDrop({container: '.booking-card__date-dropdown'});
  new DropdownGuests({container: '.booking-card__dropdown', closingClick: true}).init();
};

export default bookingCard;
