interface BlogPostBodyProps {
  data: string;
}

const BlogPostBody = ({ data }: BlogPostBodyProps) => {
  return (
    <section className="my-20 flex gap-20 pr-16">
      <div className="flex-1 flex-grow">
        <p className="text-justify leading-[1.8]">{data}</p>
      </div>

      <aside className="w-[20%] flex-none">
        {" "}
        <ul className="flex cursor-pointer flex-col gap-3 font-bold">
          <li className="border-b border-black py-2">Introduction</li>
          <li className="border-b border-black py-2">Cameras and tools</li>
          <li className="border-b border-black py-2">How you work</li>
          <li className="border-b border-black py-2">
            Advice for photographers
          </li>
          <li className="border-b border-black py-2">What's next?</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlogPostBody;
