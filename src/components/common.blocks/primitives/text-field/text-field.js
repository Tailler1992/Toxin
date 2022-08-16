import './text-field.scss';
import IMask from '../../../library.blocks/imask/imask';

const textField = (selector) => {
    const dataSelector = document.querySelectorAll(selector);

    function createMask() {
        dataSelector.forEach(input => {
            IMask(input, {
                mask: Date,
                max: new Date()
            });
        });
    }

    createMask();
};

export default textField;
