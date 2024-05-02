const formElement = document.querySelector('[data-form]');
const inputElements = formElement.querySelectorAll('input');

const setInputState = (element) => {
  if (element.validity.valid) {
    element.classList.remove('error');
  } else {
    element.classList.add('error');
  }
};

const onInputInvalid = ({target}) => setInputState(target);
const onInputBlur = ({target}) => setInputState(target);

const initInput = (element) => {
  element.addEventListener('invalid', onInputInvalid);
  element.addEventListener('blur', onInputBlur);
};

const initForm = () => {
  inputElements.forEach((element) => initInput(element));
};

export {initForm};
