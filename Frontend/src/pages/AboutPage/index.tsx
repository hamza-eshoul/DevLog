// partials
import Header from "./components/Header";

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Header />
      <h1 className="mb-6 text-3xl font-bold">About DevLog</h1>

      <section className="mb-8">
        <p className="mb-4 text-lg">
          Welcome to <strong>DevLog</strong>, a blog created to share my passion
          for programming and web development! My name is [Your Name], and I've
          been deeply immersed in the world of coding for several years. Through
          DevLog, I aim to provide valuable insights, practical tips, and
          engaging content for fellow developers and tech enthusiasts.
        </p>

        <p className="mb-4 text-lg">
          DevLog is designed to be a hub for all things related to programming.
          Whether you're interested in learning new programming languages,
          exploring cutting-edge web technologies, or seeking solutions to
          common development challenges, you'll find a wealth of resources here.
          From beginner-friendly tutorials to advanced coding techniques, my
          goal is to make complex topics accessible and enjoyable.
        </p>

        <p className="mb-4 text-lg">
          Here at DevLog, you can expect to find a variety of content,
          including:
        </p>

        <ul className="mb-4 list-inside list-disc text-lg">
          <li>
            Tutorials and How-To Guides: Step-by-step instructions on various
            programming topics and tools.
          </li>
          <li>
            Code Examples and Snippets: Practical code snippets to help you
            solve real-world problems.
          </li>
          <li>
            Industry News and Trends: Updates on the latest technologies and
            developments in the programming world.
          </li>
          <li>
            Personal Experiences and Insights: Reflections on my journey as a
            developer and lessons learned along the way.
          </li>
        </ul>

        <p className="mb-4 text-lg">
          I believe that coding is not just about writing lines of code but
          about creating solutions that make a difference. Through this blog, I
          hope to foster a community of like-minded individuals who are
          passionate about technology and eager to learn and grow together.
        </p>

        <p className="text-lg">
          Thank you for visiting DevLog! I encourage you to explore the blog,
          leave comments on posts, and connect with me through the contact form
          if you have any questions or feedback. Your support and engagement
          mean a lot, and I'm excited to have you join me on this journey of
          discovery and learning.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
