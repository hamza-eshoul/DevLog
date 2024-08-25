// images
import heroImage from "@assets/hero_image.jpg";

const Header = () => {
  return (
    <section className="mb-16">
      <div className="h-[60vh] w-full">
        <img
          src={heroImage}
          className="h-full w-full rounded-2xl object-cover"
          alt="about header image"
        />
      </div>
    </section>
  );
};

export default Header;
