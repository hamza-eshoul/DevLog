import { Link, useNavigate } from "react-router-dom";

// images
import Logo from "@assets/logo.png";

// hooks
import { useCheckActivePage } from "@/hooks/useCheckActivePage";

// components
import Image from "./Image";

const Navbar = () => {
  // custom hooks
  const isBlogPostPage = useCheckActivePage("post");

  // library hooks
  const navigate = useNavigate();

  // functions
  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <nav className={`mb-4 flex justify-between ${isBlogPostPage && "pr-16"}`}>
      <div
        className="flex cursor-pointer items-center"
        onClick={navigateToHomepage}
      >
        <Image src={Logo} alt="logo" className="size-16" />
        <span className="font-medium">DevLog</span>
      </div>

      <ul className="flex items-center gap-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
