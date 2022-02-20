import { FC } from "react";
import { SmartLink } from "../SmartLink";
import styles from "./SideNav.module.css";

const SideNav: FC = () => {
  return (
    <nav className={styles.sidenav}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Record Collector</h1>
        </div>
        <div className={styles.container}>
          <SmartLink
            href="/"
            className={styles.link}
            activeClassName={styles.activeLink}
            text="Home"
          />
          <SmartLink
            href="/collection"
            className={styles.link}
            activeClassName={styles.activeLink}
            text="My Collection"
          />
        </div>
      </div>
      <div className={styles.container}>
        <SmartLink
          href="/settings"
          className={styles.link}
          activeClassName={styles.activeLink}
          text="Settings"
        />
      </div>
    </nav>
  );
};

export default SideNav;
