import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      Footer
    </div>
  );
};

export default Root;
