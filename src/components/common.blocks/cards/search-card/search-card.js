import {DropdownGuests} from '../../composite/dropdown/dropdown';
import dataDrop from '../../composite/date-dropdown/date-dropdown';

const searchCard = () => {
  dataDrop('.search-card__date-dropdown');
  new DropdownGuests({container: '.search-card__dropdown', closingClick: true}).init();
};

export default searchCard;
