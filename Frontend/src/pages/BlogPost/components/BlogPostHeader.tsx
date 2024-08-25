import { BlogPost } from "@/types";

// images
import testImage from "@assets/hero_image.jpg";
import authorImage from "@assets/author_image.jpeg";

// components
import Image from "@/components/Image";

interface BlogPostHeaderProps {
  data: BlogPost;
}

const BlogPostHeader = ({ data }: BlogPostHeaderProps) => {
  return (
    <section className="flex h-[80vh]">
      <div className="flex w-[48%] flex-col justify-center gap-5">
        <time className="text-gray-500">
          {data.date} &bull; {data.time_to_read}
        </time>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <h2 className="text-gray-500">{data.description}</h2>
        <div className="flex items-center gap-3">
          <img
            src={authorImage}
            className="size-11 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="font-medium">{data.author}</span>
            <span>{data.author_profession}</span>
          </div>
        </div>
      </div>

      <div className="w-[52%]">
        <Image alt="blog post image" src={testImage} />
      </div>
    </section>
  );
};

export default BlogPostHeader;
