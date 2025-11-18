import { Outlet } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <>
      <DashboardLayout />
      <Outlet />
    </>
  );
};

export default App;
