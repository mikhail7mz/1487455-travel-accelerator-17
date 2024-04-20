const headerElement = document.querySelector('[data-header]');

const setHeight = (element) => {
  const height = element.offsetHeight;
  document.body.style.paddingTop = `${height}px`;
};

const resizeObserver = new ResizeObserver((elements) => setHeight(elements[0].target));

const initFixedHeader = () => {
  setHeight(headerElement);
  resizeObserver.observe(headerElement);
};

export {initFixedHeader};
