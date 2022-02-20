import { FC } from "react";
import { SideNav } from "../SideNav";
import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
