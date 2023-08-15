import images from "../../constants/images";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>
            <h5 className={styles.titleStudio}>KIMETSU NO YAIBA</h5>
            <h1>
              <span>DEMON </span>
              <span>SLAYER</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
