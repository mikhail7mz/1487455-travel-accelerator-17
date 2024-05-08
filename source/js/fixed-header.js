const headerElement = document.querySelector('[data-header]');

const setHeight = (element) => {
  const height = `${element.offsetHeight}px`;
  const linkElements = element.querySelectorAll('a[href^="#"]');

  document.body.style.paddingTop = height;
  linkElements.forEach((link) => {
    const linkTarget = document.querySelector(link.hash);
    linkTarget.style.scrollMarginTop = height;
  });
};

const resizeObserver = new ResizeObserver((elements) => setHeight(elements[0].target));

const initFixedHeader = () => {
  setHeight(headerElement);
  resizeObserver.observe(headerElement);
};

export {initFixedHeader};
