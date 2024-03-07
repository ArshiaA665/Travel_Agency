"use client";


import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id="reviews">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Using Travela made everything easier for me. The prices are fair and sometimes, you can even get great deals!",
    name: "Susan",
    
  },
  {
    quote:
      "The attendants were very helpful the found the best way for me to travel to my homeland and the price was great.",
    name: "Nathan",
    
  },
  {
    quote: "Great tours accross the Canada, Great deals, Great customer serevice and also, great website that I have never seen as such.",
    name: "Edgar",
    
  },
  {
    quote:
      "The staff were very professional and helpful. I was able to find a great hotel with a fair price to stay for short amount of time.",
    name: "Jane",
    
  },
  {
    quote:
      "Wow. Just wow. This is like going to a 5 star restaurant but in terms of price and customer servcie it is incredible. Definitely recommended!",
    name: "Herman",
   
  },
];
