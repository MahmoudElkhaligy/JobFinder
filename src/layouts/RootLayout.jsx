import { NavLink, Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobFinder</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
        <BreadCrumb />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
