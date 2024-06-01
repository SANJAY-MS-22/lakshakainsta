import React from 'react';


const Nav = () => {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <span className="text-orange-600 font-bold">LAKSHAKA INSTA MANAGEMENT PRIVATE LIMITED<br/>GST No: 33AAFCL1334C1Z6</span>
          </div>
          <div className="flex ">
          {/* <ul className="flex gap-[20px]">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="text-white">Blog</Link>
            </li>
            <li>
              <Link to="/login" className="text-white">Login</Link>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;