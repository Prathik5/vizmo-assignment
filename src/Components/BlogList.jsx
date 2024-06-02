import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { getBlogs, deleteBlog } from '../localStorageHandler';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    setBlogs(getBlogs());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">Vizmo Assignment</h1>
        <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FaPlus />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
