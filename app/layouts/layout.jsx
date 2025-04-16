import Header from "./hearde-dashboard";
import Sidebar from "./sidebar-dashboard";

export default function LayoutPages({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Header />
    </>
  );
}
