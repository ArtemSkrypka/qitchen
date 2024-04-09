import * as stylex from "@stylexjs/stylex";
import { styles } from "../styles/buttonStyles";
import { ReactNode } from "react";

type variant = "primary" | "muted" | "text" | "icon";
type btnType = "button" | "submit" | "reset";

type ButtonProps = {
  children: ReactNode;
  variant?: variant;
  customStyle?: stylex.StyleXStyles;
  type?: btnType;
};

function Button({ type, variant, customStyle, children }: ButtonProps) {
  return (
    <button
      type={type ? type : "button"}
      {...stylex.props(
        styles.default,
        variant && styles[variant],
        customStyle && customStyle
      )}
    >
      {children}
    </button>
  );
}

export default Button;
