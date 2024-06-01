import React from 'react';

const Blog = ({ title, content, author }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-700">{content}</p>
        <p className="mt-4 text-gray-500">Author: {author}</p>
      </div>
    </div>
  );
};

export default Blog;
