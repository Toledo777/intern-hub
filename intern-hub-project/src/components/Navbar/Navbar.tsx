import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        InternHub
      </div>
      <div className={styles.navLinks}>
      <a className={styles.active} href="#home">Find job</a>
      <a href="#home">Contribute</a>
      <a href="#home">FAQ</a>
      </div>
      <div className={styles.userSection}>
        <div className={styles.location}>Montreal, QC</div>
      </div>
    </nav>
  );
};

export default Navbar;
