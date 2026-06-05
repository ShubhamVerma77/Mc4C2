import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import './Styles/Layout.css';

export default function MainLayout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="content">
<Outlet />
      </main>

      <Footer />
    </div>
  );
}