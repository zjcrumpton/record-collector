import { FC } from "react";
import { SmartLink } from "../SmartLink";
import styles from "./SideNav.module.css";

const SideNav: FC = () => {
  return (
    <nav className={styles.container}>
      <div>
        <h1>Record Collector</h1>
      </div>
      <div className={styles.container}>
        <SmartLink
          href="/"
          className={styles.link}
          activeClassName={styles.activeLink}
          text="Home"
        />
        <SmartLink
          href="/profile"
          className={styles.link}
          activeClassName={styles.activeLink}
          text="My Collection"
        />
      </div>
    </nav>
  );
};

export default SideNav;
