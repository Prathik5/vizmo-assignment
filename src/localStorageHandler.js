const BLOGS_KEY = "blogs";

export const getBlogs = () => {
  const blogs = localStorage.getItem(BLOGS_KEY);
  return blogs ? JSON.parse(blogs) : [];
};

export const getBlogById = (id) => {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.id === id);
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  const existingBlogIndex = blogs.findIndex((b) => b.id === blog.id);
  if (existingBlogIndex > -1) {
    blogs[existingBlogIndex] = blog;
  } else {
    blogs.push(blog);
  }
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  blogs = blogs.filter((blog) => blog.id !== id);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};
