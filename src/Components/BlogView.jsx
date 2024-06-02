import React from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../localStorageHandler';
import { FaUser } from "react-icons/fa";

const BlogView = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  if (!blog) {
    return <div className="container mx-auto p-4">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="flex items-center text-gray-700 text-base mb-2">
          <FaUser className="mr-2" />
          <span>{blog.author}</span>
          <span className="mx-2"></span> 
          <span>June 02, 2024</span> 
        </div>
        {blog.image && <img className="w-full mb-4 rounded" src={blog.image} alt={blog.title} />}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-gray-700 text-base" />
      </div>
    </div>
  );
};

export default BlogView;
