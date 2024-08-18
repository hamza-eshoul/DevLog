// images
import heroImage from "@assets/hero_image.jpg";

const Hero = () => {
  return (
    <section className="mb-16">
      <div>
        <img
          src={heroImage}
          className="h-full w-full rounded-2xl"
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
