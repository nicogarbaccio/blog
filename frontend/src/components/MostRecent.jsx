/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function MostRecent({ post }) {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Most Recent Post
            </h2>
            <p className='text-gray-500 my-2 text-2xl'>
               {post.title}
            </p>
            <p className='text-gray-500 my-2'>
               {post.description}
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <Link to={`/post/${post.slug}`} target='_blank' rel='noopener noreferrer'>
                    Read post
                </Link>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={post.image} />
        </div>
    </div>
  )
}
