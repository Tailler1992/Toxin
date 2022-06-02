import './ui-elements.pug';
import './ui-elements.scss';

import Dropdown from '../../components/dropdown/dropdown';

window.addEventListener('DOMContentLoaded', () => {
  new Dropdown({container: '.ui-elements__guests-drop'});
});
