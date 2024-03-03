
import './App.css';
import { BackgroundBeams } from './components/BackgroundBeams';
import { TracingBeam } from "@/constants/tracing-beam";
import AppHome from './components/app_home';
import { BentoGridDemo } from './components/app_body_grid';
import { InfiniteMovingCardsDemo } from './components/app_moving_cards';
import  Nav  from "@/components/Nav"
import { BookNow } from './constants/BookNow';
import { LampDemo } from './components/ui/lamp';
import AppFooter from './components/app_footer';
// import BackgroundBeams from './components/ui/BackgroundBeams';

function App() {
 
  return (
    <div className='relative'>
        <Nav />
        <BackgroundBeams className='bg-neutral-950 absolute'/>
          <TracingBeam>
            <AppHome />
            <LampDemo/>  
            <BentoGridDemo />
            <BookNow/>
            <InfiniteMovingCardsDemo />
            <AppFooter/>
          </TracingBeam>
        </div>
   
  );
}

export default App;
