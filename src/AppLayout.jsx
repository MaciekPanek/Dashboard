import { Outlet } from "react-router-dom";
import NavBar from "./features/navigation/Navbar";

function AppLayout() {
  return (
    <div className="flex flex-row">
      <NavBar />

      <main className=" flex-1 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
