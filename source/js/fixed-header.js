const headerElement = document.querySelector('[data-header]');

const initFixedHeader = () => {
  const headerHeight = headerElement.offsetHeight;
  document.body.style.paddingTop = `${headerHeight}px`;
};

export {initFixedHeader};
