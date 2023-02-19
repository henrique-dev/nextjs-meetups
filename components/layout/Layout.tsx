import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
