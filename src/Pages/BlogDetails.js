import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blogData';
import Nav from '../Components/Nav';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogData.find(post => post.id === parseInt(id)); 

  if (!post) {
    return <div>Blog post not found</div>; 
  }

  return (
    <>
    <Nav/>
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </div>
    </>
  );
};

export default BlogDetails;
