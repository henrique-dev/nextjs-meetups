import syles from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={syles.header}>
      <div className={syles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/meetups/new">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
