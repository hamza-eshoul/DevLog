import { useParams } from "react-router-dom";

// hooks
import { useGetBlogPost } from "@/hooks/useGetBlogPost";

// partials
import BlogPostBody from "./components/BlogPostBody";
import BlogPostHeader from "./components/BlogPostHeader";

const BlogPost = () => {
  // const { id: blogPostId } = useParams();

  // const { isPending, error, data } = useGetBlogPost(blogPostId as string);

  const data = {
    date: "20 Jan 2022",
    time_to_read: "10min",
    title:
      "Designing user interface aesthetics that sync with the natural environment",
    description:
      "Understanding the nuances of how light effects can be realised in modern user interface design.",
    author: "Hamza Eshoul",
    author_profession: "Full Stack Developer, Edpulse",
    blog_content:
      "Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: Urban gardening has emerged as a popular trend among city dwellers looking to bring a touch of nature into their bustling lives. From tiny balconies to rooftop gardens, urban spaces are being transformed into green oases that not only enhance the aesthetic appeal of urban environments but also contribute to sustainability and well-being. Urban gardening offers numerous benefits, both for individuals and communities. By growing your own fruits, vegetables, and herbs, you gain access to fresh, organic produce while reducing your carbon footprint. Additionally, urban gardens can help alleviate stress, improve air quality, and foster a sense of community among neighbors. Starting an urban garden doesn’t require a lot of space or specialized equipment. Here are a few simple steps to kickstart your green adventure: ",
  };

  // if (isPending) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <>
      <BlogPostHeader data={data} />
      <BlogPostBody data={data.blog_content} />
    </>
  );
};

export default BlogPost;
