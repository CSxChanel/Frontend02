import "../styles/globals.css";
import Header from "../layouts/hearde-dashboard";
import Sidebar from "../layouts/sidebar-dashboard";

export default function LayoutDashboard({ children }) {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
    </>
  );
}
