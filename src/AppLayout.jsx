import { Outlet } from "react-router-dom";
import NavBar from "./features/navigation/Navbar";

function AppLayout() {
  return (
    <div className=" flex flex-row ">
      <NavBar />

      <main className=" absolute left-[15%] flex-1 w-[85%]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
