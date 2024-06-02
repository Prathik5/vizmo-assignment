import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg m-4 p-4">
      <Link to={`/blog/${blog.id}`} className="block">
        {blog.image && (
          <div className="mb-4">
            <img className="w-full h-72 object-cover rounded" src={blog.image} alt={blog.title} />
          </div>
        )}
        <div className="px-4 py-2">
          <div className="text-blue-500 font-semibold text-sm uppercase mb-2">
            {blog.category}
          </div>
          <div className="font-bold text-xl mb-2 text-black">{blog.title}</div>
          <div className="flex justify-between text-sm text-gray-700">
            <span className="flex items-center">
              <FaUser className="mr-1" />
              {blog.author}
            </span>
            <span>June 03, 24</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between mt-4">
          <Link to={`/edit/${blog.id}`} className="text-green-500 hover:text-green-700"><MdEdit/></Link>
          <button onClick={() => onDelete(blog.id)} className="text-red-500 hover:text-red-700"><MdDelete/></button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
