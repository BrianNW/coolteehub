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
  return (
    <AnimatePresence>
      {snap.into && (
        <motion.section className="home"> {...slideAnimation('left')} 
          <motion.header>
            <img 
              src='./threejs.png'
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