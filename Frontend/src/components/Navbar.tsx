// images
import Logo from "@assets/logo.png";

// components
import Image from "./Image";

const Navbar = () => {
  return (
    <nav className="mb-4 flex justify-between">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" className="size-16" />
        <span className="font-medium">DevLog</span>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
