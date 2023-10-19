import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pl-5 md:px-6 lg:pl-0">
          <div className="md:col-span-3 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: contact@doctorservice.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Links</h2>
            <ul>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
              <li><a href="/appointments" className="hover:text-blue-400">Appointments</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Departments</h2>
            <ul>
              <li><a href="/departments/cardiology" className="hover:text-blue-400">Cardiology</a></li>
              <li><a href="/departments/dermatology" className="hover:text-blue-400">Dermatology</a></li>
              <li><a href="/departments/orthopedics" className="hover:text-blue-400">Orthopedics</a></li>
              <li><a href="/departments/pediatrics" className="hover:text-blue-400">Pediatrics</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          {/* <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for updates and promotions.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded border border-gray-600"
              />
              <button
                type="submit"
                className="bg-blue-400 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        <hr className="border-t border-gray-700 my-6" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Doctor Service. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
