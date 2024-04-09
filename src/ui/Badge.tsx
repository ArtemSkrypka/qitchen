import Icons from "../../icons/icons.svg";
import * as stylex from "@stylexjs/stylex";
import { colors, badgeSizes } from "../tokens.stylex";
import { iconName, variant } from "../types/badge";

type BadgeProps = {
  variant?: variant;
  iconName?: iconName;
  boxCustomStyle?: stylex.StyleXStyles;
  svgCustomStyle?: stylex.StyleXStyles;
};

const badgeBox = stylex.create({
  default: {
    cursor: "pointer",
    width: badgeSizes.badgeBoxDefault,
    height: badgeSizes.badgeBoxDefault,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "50%",
    borderColor: colors.borderDefault,
  },
  smallDefault: {
    width: badgeSizes.badgeBoxSmall,
    height: badgeSizes.badgeBoxSmall,
  },
  smallPrimary: {
    width: badgeSizes.badgeBoxSmall,
    height: badgeSizes.badgeBoxSmall,
    backgroundColor: colors.textDefault,
  },
  defaultPrimary: {
    backgroundColor: colors.textDefault,
  },
  smallMuted: {
    width: badgeSizes.badgeBoxSmall,
    height: badgeSizes.badgeBoxSmall,
    backgroundColor: colors.backgroundMuted,
  },
  defaultMuted: {
    backgroundColor: colors.backgroundMuted,
  },
});

const svgStyle = stylex.create({
  default: {
    height: badgeSizes.iconDefault,
    width: badgeSizes.iconDefault,
    fill: colors.textDefault,
  },
  smallDefault: {
    height: badgeSizes.iconSmall,
    width: badgeSizes.iconSmall,
  },
  smallPrimary: {
    height: badgeSizes.iconSmall,
    width: badgeSizes.iconSmall,
    fill: colors.iconInverse,
  },
  defaultPrimary: {
    fill: colors.iconInverse,
  },
  smallMuted: {
    height: badgeSizes.iconSmall,
    width: badgeSizes.iconSmall,
  },
  defaultMuted: {},
});

function Badge({
  variant,
  iconName,
  boxCustomStyle,
  svgCustomStyle,
}: BadgeProps) {
  return (
    <div
      {...stylex.props(
        badgeBox.default,
        variant && badgeBox[variant],
        boxCustomStyle && boxCustomStyle
      )}
    >
      <svg
        className="icon"
        {...stylex.props(
          svgStyle.default,
          variant && svgStyle[variant],
          svgCustomStyle && svgCustomStyle
        )}
      >
        <use
          xlinkHref={`${Icons}#${iconName ? iconName : "ph_arrow-right-light"}`}
        ></use>
      </svg>
    </div>
  );
}

export default Badge;
