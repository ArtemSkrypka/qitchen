import * as stylex from "@stylexjs/stylex";

export const layout = stylex.create({
  default: {
    display: "grid",
    position: "relative", // Attaching header to aout grid
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    flexGrow: "1", // Pressing footer to bottom of the page
  },
  homePage: {
    gridTemplateColumns: "auto 42rem",
  },
});
