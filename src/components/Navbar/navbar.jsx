import styles from "./navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftPanel}>
        <div className={styles.logo}>Animatory (logo)</div>

        <ul className={styles.navList}>
          {["Genre", "Comic List", "Popular", "Contact us"].map(
            (item, index) => {
              return <li key={index}>{item}</li>;
            }
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
