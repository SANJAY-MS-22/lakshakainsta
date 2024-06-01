import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import Blog from '../Components/Blog';
import blogData from '../blogData';

export const BlogPage = () => {
  return (
    <div>
      <Nav />
      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Blog
                title={post.title}
                content={post.content}
                author={post.author}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
