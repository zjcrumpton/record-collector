import { FC } from "react";
import { SideNav } from "../SideNav";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
