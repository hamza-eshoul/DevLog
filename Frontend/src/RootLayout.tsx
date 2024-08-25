import { Outlet } from "react-router-dom";

// hooks
import { useCheckActivePage } from "@hooks/useCheckActivePage";

// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const RootLayout = () => {
  const isBlogPostPage = useCheckActivePage("post");

  const containerStyles = `flex-grow ${isBlogPostPage ? "pl-16" : "px-16"}`;

  return (
    <div className="flex min-h-screen flex-col">
      <div className={containerStyles}>
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
