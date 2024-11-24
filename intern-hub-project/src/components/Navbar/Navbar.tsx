import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>InternHub</div>
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          end
        >
          Find reviews
        </NavLink>
        <NavLink
          to="/contribute"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Contribute
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          FAQ
        </NavLink>
      </div>
      <div className={styles.userSection}>
        <div className={styles.location}>Montreal, QC</div>
      </div>
    </nav>
  );
};

export default Navbar;
