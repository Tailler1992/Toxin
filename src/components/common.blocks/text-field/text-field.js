import IMask from 'imask';

const textField = (selector) => {
    const dataSelector = document.querySelectorAll(selector);

    dataSelector.forEach(input => {
        IMask(input, {
            mask: Date,
            max: new Date()
        });
    });
};

export default textField;
