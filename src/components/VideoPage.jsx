import { useState, useRef } from 'react';
import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoPage({ onBack, goHome }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoData = clientData.video || {};

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <PageShell onNext={goHome} onBack={onBack}>
      <h2 className="font-display italic text-lg tracking-widest uppercase text-[#5C2438] mb-2 text-center">
        {videoData.sectionTitle || "ONE MORE THING"}
      </h2>
      
      {/* الخط الفاصل */}
      <div className="flex items-center gap-3 mb-8 w-48 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={12} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>

      <div className="w-[110%] -ml-[5%] sm:w-[120%] sm:-ml-[10%] aspect-[4/3] relative bg-black rounded-md shadow-polaroid overflow-hidden mb-10 border-[5px] border-white mx-auto flex items-center justify-center">
        
        {!isPlaying && (
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-2xl"
            >
              <Play size={32} className="fill-white text-white ml-2" />
            </motion.div>
          </div>
        )}

        <video 
          ref={videoRef}
          controls 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover relative z-0"
          poster={videoData.poster}
        >
          <source src={videoData.src} type="video/mp4" />
        </video>
      </div>

      <div className="text-center flex flex-col items-center">
        <p className="font-script italic text-4xl mb-3 text-[#5C2438]">{videoData.footerQuote}</p>
        <Heart size={16} className="fill-[#5C2438] text-[#5C2438] mt-1" />
      </div>
    </PageShell>
  );
}