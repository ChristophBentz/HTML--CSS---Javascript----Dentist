import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#9182c4] relative w-full min-h-[100px] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">
              <i className="fa fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">
              <i className="fa fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">
              <i className="fa fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">
              <i className="fa fa-instagram text-2xl"></i>
            </a>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-8 mb-8">
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">Home</a></li>
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">About</a></li>
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">Services</a></li>
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">Team</a></li>
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">Contact</a></li>
            <li><a href="#" className="text-white hover:text-[#ebd9dd] transition-colors">Location</a></li>
          </ul>
          
          <p className="text-white text-center">
            &copy;2024-2030 Christoph Moser | All Rights Reserved
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <div className="relative h-[100px]">
          <div 
            className="absolute top-[-100px] left-0 w-full h-[100px] bg-[url('/img/wave.png')] bg-[length:1000px_100px] animate-wave"
            style={{opacity: 1, zIndex: 1000}}
          ></div>
          <div 
            className="absolute top-[-90px] left-0 w-full h-[100px] bg-[url('/img/wave.png')] bg-[length:1000px_100px] animate-wave-reverse"
            style={{opacity: 0.5, zIndex: 999}}
          ></div>
          <div 
            className="absolute top-[-85px] left-0 w-full h-[100px] bg-[url('/img/wave.png')] bg-[length:1000px_100px] animate-wave"
            style={{opacity: 0.2, zIndex: 1000}}
          ></div>
          <div 
            className="absolute top-[-80px] left-0 w-full h-[100px] bg-[url('/img/wave.png')] bg-[length:1000px_100px] animate-wave-reverse"
            style={{opacity: 0.7, zIndex: 999}}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;