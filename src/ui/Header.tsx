import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { styles } from "../styles/buttonStyles";
import logo from "/images/logo.svg";

const headerStylex = stylex.create({
  default: {
    backgroundColor: colors.backgroundDefault,
    borderRadius: "12px",
    position: "fixed",
    marginLeft: "4.8rem",
    marginTop: "4.8rem",
    zIndex: "99",
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    height: "60px",
    padding: "8px",
  },
});

const linkStyles = stylex.create({
  navLink: {
    textDecoration: "none",
    color: colors.textDefault,
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    fontSize: "1.2rem",
    fontWeight: 400,
  },
});

const listStyles = stylex.create({
  default: {
    listStyle: "none",
    marginLeft: "0",
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    gap: "4px",
  },
});

const navStyles = stylex.create({
  default: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
});

const listItemStyles = stylex.create({
  default: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
  },
});

function Header() {
  return (
    <header {...stylex.props(headerStylex.default)}>
      <div>Btn Menu</div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <nav {...stylex.props(navStyles.default)}>
        <ul {...stylex.props(listStyles.default)}>
          <li {...stylex.props(listItemStyles.default)}>
            <a {...stylex.props(linkStyles.navLink)} href="#">
              Menu
            </a>
          </li>
          <li {...stylex.props(listItemStyles.default)}>
            <a {...stylex.props(linkStyles.navLink)} href="#">
              About
            </a>
          </li>
        </ul>
        <li {...stylex.props(styles.default, styles.muted)}>
          <a {...stylex.props(linkStyles.navLink)} href="#">
            Book a table
          </a>
        </li>
      </nav>
    </header>
  );
}

export default Header;
