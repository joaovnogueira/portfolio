function shouldShowBackToTop(scrollY) {
  return scrollY > 700;
}

function getBackToTopStyles(show) {
  return {
    visibility: show ? "visible" : "hidden",
    opacity: show ? 1 : 0,
    transform: show ? "scale(1)" : "scale(0)",
  };
}

function isTabKey(key) {
  return key === "Tab";
}

function shouldHideButton(scrollY) {
  return scrollY <= 700;
}

module.exports = {
  shouldShowBackToTop,
  getBackToTopStyles,
  isTabKey,
  shouldHideButton,
};