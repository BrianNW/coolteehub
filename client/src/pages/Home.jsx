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
    <div>Home</div>
  )
}

export default Home