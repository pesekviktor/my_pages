export const SCREEN = {
  maxMedium: "@media only screen and (max-width: 990px)",
};

const shared = {
  black: "black",
  blue: "blue",
  navyBlue: "navyBlue",
  radiusStyle: "border-radius: 12px;",
  spacedFlexbox: (spaceBetween) => `
    && {
      display: flex;
      flex-wrap: wrap;
      margin-left: ${-spaceBetween}px;
      margin-right: ${-spaceBetween}px;
      > * {
        margin-left: ${spaceBetween / 2}px;
        margin-right: ${spaceBetween / 2}px;
      }
    }
  `,
};

const light = {
  ...shared,
  background: { color: "white" },
  shadow: (spread) => `0px 0px ${spread}px 0px rgba(0, 0, 0, 0.8)`,
};

const dark = {
  ...shared,
  background: { color: "black" },
  global: {
    color: "white",
  },
  shadow: (spread) => `0px 0px ${spread}px 0px rgba(0, 0, 0, 0.8)`,
};

export const themes = { light: light, dark: dark };

export const DEFAULT_THEME = "light";
