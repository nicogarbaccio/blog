/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MostRecent({ post }) {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl text-gray-500">Latest Post:</h2>
        <p className="my-2 text-3xl" data-testid="latest-post-title">
          {post.title}
        </p>
        <span
          className="italic text-sm my-5"
          data-testid="latest-post-category"
        >
          {post.category}
        </span>
        <Link to={`/post/${post.slug}`}>
          <Button
            gradientDuoTone="greenToBlue"
            className="rounded-xl w-full"
            data-testid="read-latest-post-button"
          >
            Read post
          </Button>
        </Link>
      </div>
      <div className="p-7 flex-1 flex">
        <img className="rounded-md" src={post.image} />
      </div>
    </div>
  );
}
