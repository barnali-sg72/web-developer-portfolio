import ThemeToggle from "./ThemeToggle";

import logo from "../assets/images/logo.png";

import { AppView } from "../App";
import Navbar from "./Navbar";

const Header = () => {
  //const navigate = useNavigate();

  return (
    <header className=" z-10 cursor-pointer sticky top-0 flex items-center bg-white dark:bg-slate-950 px-3 py-1 justify-between">
      <a
        href={AppView === "Single Page" ? "/#hero" : "/home"}
        className="flex items-center"
      >
        <img className=" w-14 h-14" src={logo} alt="logo" loading="lazy" />
      </a>
      {/*{AppView === "Single Page" ? <NavbarSinglePage /> : <NavbarMultiPage />}*/}
      <Navbar />
      <ThemeToggle />
    </header>
  );
};

export default Header;
