import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/types";

// utils
import { formatDate } from "@/utils/formatDates";

// images
import testImage from "@assets/hero_image.jpg";
import authorImage from "@assets/author_image.jpeg";

// icons
import { ArrowUpRight } from "lucide-react";

// components
import Image from "@/components/Image";

interface RecentPostCardProps {
  post: BlogPost;
}

const RecentPostCard = ({ post }: RecentPostCardProps) => {
  // library hooks
  const navigate = useNavigate();

  // functions
  const navigateToBlogPost = () => {
    navigate("/post");
  };

  return (
    <article
      className="flex cursor-pointer flex-col gap-4"
      onClick={navigateToBlogPost}
    >
      <div className="h-80 w-full">
        <Image
          src={post.image}
          alt="blog article image"
          className="rounded-2xl"
        />
      </div>

      <div className="flex justify-between">
        <h3 className="text-xl font-medium">{post.title}</h3>
        <ArrowUpRight
          className="transform cursor-pointer duration-300 ease-in-out hover:scale-125"
          onClick={navigateToBlogPost}
        />
      </div>

      <p>{post.description} ...</p>

      <div className="flex items-center gap-4">
        <div className="size-10">
          <Image src={authorImage} alt="post author" className="rounded-full" />
        </div>

        <span className="font-medium">
          Hamza Eshoul &bull;
          {/* {formatDate(post.created_at)}{" "} */}
        </span>
      </div>
    </article>
  );
};

export default RecentPostCard;
