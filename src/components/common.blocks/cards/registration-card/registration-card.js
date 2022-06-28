import '../../primitives/text-field/text-field';
import '../../primitives/radio/radio';
import '../../primitives/heading/heading';
import '../../primitives/toggle/toggle';
import '../../primitives/btn/btn';
import './registration-card.scss';

import textMask from '../../primitives/text-field/text-field';

const registrationCard = () => {
  textMask('[data="text-mask"]');
};

export default registrationCard;
