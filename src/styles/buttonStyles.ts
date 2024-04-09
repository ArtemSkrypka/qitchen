import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../tokens.stylex";

export const styles = stylex.create({
  default: {
    justifyContent: "center",
    display: "inline-flex",
    alignItems: "center",
    gap: "1rem",
    textTransform: "uppercase",
    color: colors.textDefault,
    fontFamily: fonts.Satoshi,
    backgroundColor: "transparent",
    outline: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.borderDefault,
    fontWeight: 400,
    fontSize: "1.2rem",
    padding: "1rem 1.5rem",
    borderRadius: "0.8rem",
    letterSpacing: "0.2em",
    cursor: "pointer",
  },
  primary: {
    backgroundColor: colors.textDefault,
    color: colors.textInverse,
  },
  muted: {
    backgroundColor: colors.backgroundMuted,
  },
  text: {
    borderWidth: "0px",
    fontFamily: fonts.Forum,
    color: colors.textDefault,
    fontSize: "1.6rem",
    textDecoration: "underline",
    padding: 0,
    margin: 0,
    lineHeight: "120%",
    letterSpacing: "0.2em",
    // eslint-disable-next-line @stylexjs/valid-styles
    textUnderlineOffset: "8px",
    marginBottom: "5px",
  },
  icon: {
    borderWidth: "0px",
    fontFamily: fonts.Forum,
    color: colors.textDefault,
    fontSize: "1.6rem",
    padding: 0,
    margin: 0,
    lineHeight: "120%",
    letterSpacing: "0.2em",
    marginBottom: "5px",
  },
});
