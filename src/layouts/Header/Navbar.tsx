import { FlaskConical, FolderKanban } from "lucide-react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "../../components/ThemeToggle";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNav__list}>
        <li className={styles.mainNav__item}>
          <Link to="/" className={styles.mainNav__brand}>
            <span className={styles.fullBrand}>Christophe AGOSTINHO</span>
            <span className={styles.shortBrand}>C.A</span>
          </Link>
        </li>
        <li className={styles.mainNav__item}>
          <NavLink to="/lab" className={styles.mainNav__link}>
            <FlaskConical />
            <span>Labo</span>
          </NavLink>
        </li>
        <li className={styles.mainNav__item}>
          <NavLink to="/projects" className={styles.mainNav__link}>
            <FolderKanban />
             <span>Projets</span>
          </NavLink>
        </li>
        <li className={styles.mainNav__item}>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
