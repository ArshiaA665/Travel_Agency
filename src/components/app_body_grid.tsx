import journey from "../assets/journey.webp"
import revolution from '../assets/revolution.webp'
import design from "../assets/design.webp"
import hotel from "../assets/hotel.webp"
import nature from "../assets/nature.webp"
import help from "../assets/help.webp"
import save from "../assets/save.webp"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
export function BentoGridDemo() {
  return (
    <section id="services">
    <BentoGrid className=" h-full w-[75%] mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
         
          className={i === 3 || i === 6 ? "md:col-span-2 bg-black/10" : "bg-black/10"}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
const items = [
  {
    title: "The Road of Innovation",
    description: "Explore the birth of groundbreaking ideas and advanture",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={journey} alt="" className=" justify-center items-center rounded-xl" />
  </div>,    
    
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={revolution} alt="" className="h-full w-full justify-center items-center rounded-xl" />
  </div>,
   
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: 
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={design} alt="" className="h-full w-full justify-center items-center rounded-xl" />
  </div>,
  
  },
  {
    title: "Amazing Nature Tours",
    description:
      "Experience the Canadian natural places",
    header: 
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={nature} alt="" className="h-full w-full object-cover justify-center items-center rounded-xl" />
  </div>,
    
  },
  {
    title: "Looking For a Hotel ?",
    description: "We can find you the one you need  ",
    header: 
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={hotel} alt="" className="h-full w-full justify-center items-center rounded-xl" />
  </div>,
    
  },
  {
    title: "We Can Help You",
    description: "Don't hesitate if you have any questions",
    header: 
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={help} alt="" className="h-full w-full object-cover justify-center items-center rounded-xl" />
  </div>,
    
  },
  {
    title: "Save Money!",
    description: "Become a member and recieve great deals",
    header: 
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={save} alt="" className="w-full h-full object-cover bg-bottom justify-center items-center rounded-xl" />
  </div>,
    
  },
];
