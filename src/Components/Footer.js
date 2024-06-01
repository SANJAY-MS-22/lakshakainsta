// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Our Location</h2>
          <p>Lakshaka Insta Management Private Limited<br/>
            No. 359, 1st Floor, Natraj Building,<br/>
            Dr. Nanjappa Road, Coimbatore,<br/>
            Tamilnadu, India. 641018.</p>
          <div className="my-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.77653327145094!2d76.96630420550375!3d11.006740447567681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b422f30c1f%3A0x10da09d7d153a853!2sCoimbatore%20Brethren%20Church%2C%20Gandhipuram!5e0!3m2!1sen!2sin!4v1717139152837!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2">© 2024 My Website. All rights reserved.</p>
          <p>
            Follow us on 
            <a href="https://www.linkedin.com/in/lakshaka-insta-management-private-limited-411a6b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-400 mx-1">Linked In</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
