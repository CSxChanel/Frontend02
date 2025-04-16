import Header from "./header";
import Sidebar from "./sidebar";

export default function LayoutPages({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Header />
    </>
  );
}
