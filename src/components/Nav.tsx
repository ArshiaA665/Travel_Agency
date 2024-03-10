import React from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { Link as LinkSlider } from "react-scroll";
import { BiHomeAlt } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Nav: React.FC = () => {
  const location = useLocation();
  return (
    <nav className='fixed bottom-0 left-0 right-0 sm:top-0 sm:right-0 sm:bottom-auto sm:left-auto sm:flex flex-col items-center justify-center sm:h-full h-none z-50 sm:mr-5 sm:mb-0 mb-2 overflow-hidden'>
      <div className="bg-black/20 rounded-full w-full sm:h-96 h-[70px] backdrop-blur-2xl flex sm:flex-col flex-row justify-around items-center text-2xl text-white/50">
        {location.pathname === "/" ? (
          <>
            <LinkSlider
              to="home"
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiHomeAlt />        
            </LinkSlider>

            <LinkRouter
              to="/sign-up"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <IoIosContact />
            </LinkRouter>

            <LinkRouter
              to="/book-now"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FiBook />
            </LinkRouter>

            <LinkSlider
              to="services" // Navigate directly to the services section
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaServicestack />
            </LinkSlider>
            
            <LinkSlider
              to='reviews'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <MdOutlineTextsms />
            </LinkSlider>

            <LinkSlider
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiPhoneCall />
            </LinkSlider>
            
          </>
        ) : (
          <>
            <LinkRouter
              to="/"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiHomeAlt />
            </LinkRouter>

            <LinkRouter
              to="/sign-up"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <IoIosContact />
            </LinkRouter>

            <LinkRouter
              to="/book-now"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FiBook />
            </LinkRouter>

            <LinkRouter
              to="/"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaServicestack />
            </LinkRouter>

            <LinkRouter
              to="/"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <MdOutlineTextsms />
            </LinkRouter>

            <LinkRouter
              to="/"
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiPhoneCall />
            </LinkRouter>
          </>
        )}
        
      </div>
    </nav>
  );
};

export default Nav;
