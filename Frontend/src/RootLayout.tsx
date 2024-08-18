import { Outlet } from "react-router-dom";

// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow px-16">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
