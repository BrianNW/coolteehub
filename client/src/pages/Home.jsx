import {motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';

import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {

  // one current snapshot of this state
  const snap = useSnapshot(state);
  
  // Check if snap is working
  console.log("Snap Intro:", snap.into);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>         
          <motion.header>
            <img 
              src={snap.logoDecal}
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home