import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

function AppLayout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
