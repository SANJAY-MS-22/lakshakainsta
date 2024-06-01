import React from 'react';
import Nav from '../Components/Nav';
import LandingSection from '../Components/LandingSection';
import Blog from '../Components/Blog';
import blogData from '../blogData';
import { Link } from 'react-router-dom';
import About from './About';
import Footer from '../Components/Footer';

const Home = () => {
  const latestPosts = blogData.slice(0, 3);

  return (
    <>
    <Nav />
    <LandingSection/>
    <About/>
    <Footer/>
    {/* <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPosts.map(post => (
            <Blog
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
            />
          ))}
        </div>
      </section>
      <div className='flex w-full justify-center items-center mb-[100px]'>
      <button class="bg-black text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"><Link to="/blog" className="text-white">View More</Link></button></div> */}
    </>
  )
};

export default Home;
