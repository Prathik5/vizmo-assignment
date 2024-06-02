import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogById, saveBlog } from '../localStorageHandler';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    category: '',
    content: '',
    image: ''
  });

  useEffect(() => {
    if (id) {
      const existingBlog = getBlogById(id);
      if (existingBlog) {
        setBlog(existingBlog);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value
    });
  };

  const handleContentChange = (content) => {
    setBlog({
      ...blog,
      content
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlog({
        ...blog,
        image: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title || !blog.author || !blog.category || !blog.content) {
      alert('Please fill in all fields.');
      return;
    }
    const blogToSave = { ...blog, id: blog.id || uuidv4(), date: new Date().toLocaleDateString() };
    saveBlog(blogToSave);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{id ? 'Edit Blog' : 'Create New Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={blog.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={blog.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={blog.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {blog.image && <img src={blog.image} alt="Blog" className="mb-4" />}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <ReactQuill
            value={blog.content}
            onChange={handleContentChange}
            className="bg-white"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? 'Update Blog' : 'Create Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
