import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import MostRecent from "../components/MostRecent";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const mostRecentPost = () => {
    return posts.length > 0 ? posts[0] : null;
  };

  return (
    <div>
      <div className="flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Hey there!</h1>
        <p className="text-black dark:text-white md:text-md sm:text-sm">
          Welcome to my cozy corner of the internet where we'll dive into the
          exciting world of QA engineering! If you're ready to level up your
          testing game (or at least see cute cat pictures) you've come to the
          right place. We'll explore the ins and outs of manual testing, share
          tips and tricks, and even get our hands dirty with some automation.
          But don't worry, this isn't your typical boring blog. We'll keep
          things fun, fresh, and easy to understand. Whether you're a seasoned
          QA pro or just starting out, there's something here for everyone. So
          grab a cup of coffee (or your beverage of choice), settle in, and
          let's write some tests together. Along the way, we'll learn, grow, and
          maybe even have a few laughs. Get ready to sharpen your skills and
          become the QA engineer you always knew you could be!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
          data-testid="view-all-posts-top"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        {mostRecentPost() && <MostRecent post={mostRecentPost()} />}
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
              data-testid="view-all-posts-bottom"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
