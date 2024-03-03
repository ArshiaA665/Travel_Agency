import { motion } from "framer-motion"
import { ImagesSlider } from '../constants/images-slider'
import { Link } from "react-scroll";
const AppHome = () => {
    const images = [
        "https://mrwallpaper.com/images/hd/hd-airplane-wings-uoypif5iyawe6p6i.jpg",
        "https://wallpapers.com/images/hd/cruise-ship-luxurious-deck-ekar3wl9f5g26a8x.jpg",
        "https://c4.wallpaperflare.com/wallpaper/222/403/661/red-high-speed-train-wallpaper-preview.jpg",
      ];
      return (
        <section id="home" className=" flex items-center justify-center pt-10">
        <ImagesSlider className="sm:h-[40rem] h-[20rem] sm:w-[80%] w-[75%] rounded-3xl opacity-75 justify-center overflow-hidden" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Enjoy the new experience
            </motion.p>
             
            <Link 
            to='book'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Book Now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
            </Link>
          </motion.div>
        </ImagesSlider>
        </section>
      );
}

export default AppHome