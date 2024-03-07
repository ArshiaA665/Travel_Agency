import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const AppFooter = () => {
  return (
    <footer className="footer footer-center p-10 text-white rounded" id="contact">
  <nav className="grid grid-flow-col gap-10">
    <a className="link link-hover sm:text-lg text-sm" href="">About me</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="https://github.com/ArshiaA665/Travel_Agency.git"><FaGithub className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" /></a>
    <a href="https://www.linkedin.com/in/arshia-aryanfar-8427141a5/"><FaLinkedin className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" /></a>
    </div>
  </nav> 
  <aside>
    <p className="sm:text-lg text-sm">Copyright © 2024 - All right reserved by Travela Ltd</p>
  </aside>
</footer>
  )
}

export default AppFooter;
