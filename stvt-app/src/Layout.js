import { Outlet } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";

export default function Layout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
