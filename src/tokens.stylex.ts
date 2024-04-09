import * as stylex from "@stylexjs/stylex";

export const fonts = stylex.defineVars({
  Forum: "Forum, serif",
  Satoshi: "Satoshi, sans-serif",
  headingXLarge: "14rem",
  headingLarge: "11.2rem",
  headingMedium: "9.6rem",
  headingSmall: "8rem",
  h1FontSize: "6.4rem",
  h2FontSize: "4rem",
  h3FontSize: "3.2rem",
  h4FontSize: "2.4rem",
  h5FontSize: "2.2rem",
  h6FontSize: "1.6rem",
  headingXLargeLineHeight: "100%",
  headingLargeLineHeight: "100%",
  headingMediumLineHeight: "110%",
  headingSmallLineHeight: "110%",
  h1LineHeight: "110%",
  h2LineHeight: "120%",
  h3LineHeight: "120%",
  h4LineHeight: "120%",
  h5LineHeight: "120%",
  h6LineHeight: "120%",
  TextLineHeightXLarge: "160%",
  TextLineHeightLarge: "160%",
  TextLineHeightMedium: "150%",
  TextLineHeightDefault: "180%",
  TextLineHeightSmall: "150%",
  TextLineHeightMeta: "130%",
});

export const colors = stylex.defineVars({
  textDefault: "#efe7d2",
  error: "#f43f5e",
  textMuted: " rgba(245, 242, 234, 0.7)",
  textInverse: "#0a0b0a",
  backgroundDefault: "#0a0b0a",
  backgroundMuted: "rgba(24, 24, 24, 0.5)",
  backgroundPrimary: "#efe7d2",
  borderDefault: "rgba(239, 231, 210, 0.15)",
  iconDefault: "#efe7d2",
  iconInverse: "#0a0b0a",
});

export const badgeSizes = stylex.defineVars({
  iconSmall: "18px",
  badgeBoxSmall: "36px",
  iconDefault: "20px",
  badgeBoxDefault: "48px",
});
