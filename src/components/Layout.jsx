import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

const Layout = () => (
  <div className="app-shell">
    <Sidebar />
    <div className="app-main">
      <Topbar />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
