
// import icons
import { BiHomeAlt} from 'react-icons/bi';
import { FaServicestack } from "react-icons/fa6";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FiBook } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
//import link
import { Link } from 'react-scroll'
const Nav = () => {
  window.onload = function() {
    window.setTimeout(
        function() {
            window.scrollTo(0,0);
            document.body.style.display = "inherit";
        },

    );
};
  /* This should scroll the page to the top before the page refreshes */
  window.onbeforeunload = function() { window.scrollTo(0,0); }
  return(
    
  //  <nav className='fixed sm:top-0 sm:right-0 bottom-0 left-0 right-0 h-full flex flex-col sm:justify-center sm:items-center z-50 sm:mr-5 overflow-hidden'>
  <nav className='fixed bottom-0 left-0 right-0 sm:top-0 sm:right-0 sm:bottom-auto sm:left-auto sm:flex flex-col items-center justify-center sm:h-full h-none z-50 sm:mr-5 sm:mb-0 mb-2 overflow-hidden'>
  <div className="bg-black/20 rounded-full w-full sm:h-96 h-[70px] backdrop-blur-2xl flex sm:flex-col flex-row justify-around items-center text-2xl text-white/50">
  
      <Link 
        to='/'
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BiHomeAlt />
      </Link>

      <Link 
        to='services'
        activeClass='active'
        smooth={true}
        spy={true} 
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <FaServicestack />
      </Link>
      
      <Link 
        to='/book-now'
        activeClass='active'
        smooth={true} 
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <FiBook/>
      </Link>


      <Link 
        to='reviews'
        activeClass='active'
        smooth={true} 
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <RiAccountPinCircleLine />
      </Link>
      

      <Link 
        to='contact'
        activeClass='active'
        smooth={true} 
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BiPhoneCall/>
      </Link>
    </div>
  </nav>
  );
};

export default Nav;
 