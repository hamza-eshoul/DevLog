// images
import Logo from "@assets/logo.png";

// components
import Image from "./Image";

const Footer = () => {
  return (
    <footer className="rounded-t-2xl bg-[#111926] pb-10 pt-12 text-white">
      <div className="relative flex flex-col items-center justify-center gap-2">
        <span className="text-2xl">Ready to partner up on your project?</span>
        <span>We're a team of ...</span>
        <button className="rounded-xl border-[1.5px] border-white px-4 py-1.5">
          Get in touch !
        </button>

        <div className="absolute -bottom-4 h-[0.5px] w-[75%] bg-gray-200" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-4 pt-10">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" className="size-16" />
          <span className="font-medium">DevLog</span>
        </div>

        <p>Share my passion for web development ...</p>

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

        <div className="absolute -bottom-4 h-[0.5px] w-[75%] bg-gray-200" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <p>Copyright &copy; 2024 DevLog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
