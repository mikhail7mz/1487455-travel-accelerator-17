const addClass = (className) => document.documentElement.classList.add(className);

const detectWebp = () => {
  const img = new Image();
  img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  img.onload = () => {
    const result = img.width > 0 && img.height > 0;
    addClass(result ? 'webp' : 'fallback');
  };
  img.onerror = () => {
    addClass('fallback');
  };
};

export {detectWebp};
