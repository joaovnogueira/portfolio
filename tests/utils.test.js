const {
  shouldShowBackToTop,
  getBackToTopStyles,
} = require("../utils");

test("Não deve mostrar o botão quando scroll é menor que 700", () => {
  expect(shouldShowBackToTop(500)).toBe(false);
});

test("Deve mostrar o botão quando scroll é maior que 700", () => {
  expect(shouldShowBackToTop(701)).toBe(true);
});

test("Botão oculto possui visibility hidden", () => {
  expect(getBackToTopStyles(false).visibility).toBe("hidden");
});

test("Botão visível possui opacity 1", () => {
  expect(getBackToTopStyles(true).opacity).toBe(1);
});

test("Botão visível possui transform scale(1)", () => {
  expect(getBackToTopStyles(true).transform).toBe("scale(1)");
});