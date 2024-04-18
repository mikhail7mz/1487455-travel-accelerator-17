const toggleElement = document.querySelector('[data-menu-toggle]');
const menuElement = document.querySelector('[data-menu]');

const onToggleElementClick = () => {
  toggleElement.classList.toggle('active');
  menuElement.classList.toggle('active');
};

const initMenu = () => {
  toggleElement.addEventListener('click', onToggleElementClick);
};

export {initMenu};
