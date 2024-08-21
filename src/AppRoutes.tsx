import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/mollecules/DashboardLayout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<>Hola</>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
