import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      navbar
      <Outlet />
      Footer
    </div>
  );
};

export default Root;
