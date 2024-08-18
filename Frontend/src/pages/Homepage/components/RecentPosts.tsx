import RecentPostCard from "./RecentPostCard";

const RecentPosts = () => {
  // data
  const recentPostsData = [
    {
      id: 1,
      title: "Post One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 2,
      title: "Post Two",
      date: "2022-02-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Post Three",
      date: "2022-03-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Post One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 5,
      title: "Post Two",
      date: "2022-02-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Post Three",
      date: "2022-03-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      title: "Post One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 8,
      title: "Post Two",
      date: "2022-02-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      title: "Post Three",
      date: "2022-03-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="mb-20 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Recent blog posts</h2>

      {recentPostsData && (
        <div className="grid grid-cols-3 gap-6">
          {recentPostsData.map((post) => (
            <RecentPostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center justify-center">
        <button className="transform rounded-xl bg-black px-4 py-2 font-medium text-white duration-300 ease-in-out hover:opacity-70">
          Load more
        </button>
      </div>
    </section>
  );
};

export default RecentPosts;
