import '../../composite/date-dropdown/date-dropdown';
import '../../primitives/heading/heading';
import '../../composite/dropdown/dropdown';
import '../../primitives/btn/btn';
import './search-card.scss';

import {DropdownGuests} from '../../composite/dropdown/dropdown';
import dataDrop from '../../composite/date-dropdown/date-dropdown';

const searchCard = () => {
  dataDrop({container: '.search-card__date-dropdown'});
  new DropdownGuests({container: '.search-card__dropdown', closingClick: true}).init();
};

export default searchCard;
