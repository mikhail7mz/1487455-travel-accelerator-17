const toggleElement = document.querySelector('[data-menu-toggle]');
const menuElement = document.querySelector('[data-menu]');
const menuLinkElements = menuElement.querySelectorAll('[data-menu-link]');

const toggleMenu = () => {
  document.body.classList.toggle('scroll-locked');
  toggleElement.classList.toggle('active');
  menuElement.classList.toggle('active');
};

const onToggleElementClick = () => toggleMenu();
const onMenuLinkElementClick = () => {
  if (document.body.clientWidth < 1440) {
    toggleMenu();
  }
};

const initMenu = () => {
  toggleElement.addEventListener('click', onToggleElementClick);
  menuLinkElements.forEach((link) => {
    link.addEventListener('click', onMenuLinkElementClick);
  });
};

export {initMenu};
