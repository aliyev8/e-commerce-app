import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./layout.scss";

function MainLayout() {
  return (
    <div className="grid_container">
      <div className="grid_item header">
        <Header />
      </div>

      <div className="grid_item body">
        <Outlet />
      </div>

      <div className="grid_item footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
