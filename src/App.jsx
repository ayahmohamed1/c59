import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopePage from './components/EnvelopePage';
import MessagePage from './components/MessagePage';
import LongMessagePage from './components/LongMessagePage';
import SongPage from './components/SongPage';

const PAGES = ['envelope', 'message', 'longMessage', 'song'];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, PAGES.length - 1));
  const back = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const goHome = () => setCurrentIndex(0);

  const current = PAGES[currentIndex];

  return (
    <div className="w-full min-h-screen bg-[#F0AEC3] text-[#5C2438] relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {current === 'envelope' && <EnvelopePage key="env" onOpen={next} />}
        {current === 'message' && <MessagePage key="msg" onNext={next} onBack={back} />}
        {current === 'longMessage' && <LongMessagePage key="longMsg" onNext={next} onBack={back} />}
        {current === 'song' && <SongPage key="song" onNext={goHome} onBack={back} />}
      </AnimatePresence>
    </div>
  );
}