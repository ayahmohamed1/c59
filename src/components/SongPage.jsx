import { useState, useRef, useEffect } from 'react';
import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart, Play, Pause, RotateCcw, FastForward } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SongPage({ onNext, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  const songData = clientData.song || {};

  // تنسيق الوقت إلى دقائق وثواني (مثال: 3:45)
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio play prevented:", err);
      });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // تقديم 10 ثواني
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    }
  };

  // إرجاع 10 ثواني
  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  // الضغط على شريط الصوت للتقديم أو الترجيع إلى نقطة معينة
  const handleSeek = (e) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display italic text-base sm:text-lg tracking-widest uppercase text-[#5C2438] mb-1 text-center">
        {songData.sectionTitle || "A SONG FOR YOU"}
      </h2>
      
      <div className="flex items-center gap-3 mb-5 w-40 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={10} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>

      {/* صورة الكفر الدائرية اللي بتلف مع تشغيل الموسيقى */}
      <motion.div 
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-44 h-44 sm:w-48 sm:h-48 rounded-full relative flex items-center justify-center mb-5 mx-auto overflow-hidden shadow-polaroid"
      >
        <img 
          src={songData.coverArt || "/cover.png"} 
          alt="cover" 
          className="w-full h-full object-cover rounded-full" 
        />
      </motion.div>

      <div className="text-center w-full">
        <h3 className="font-display italic text-xl mb-1 text-[#5C2438]">{songData.title}</h3>
        <p className="text-xs font-body italic opacity-90 mb-4 flex items-center justify-center gap-2 text-[#5C2438]">
          {songData.artist} <Heart size={10} className="opacity-70" />
        </p>

        {/* شريط التقدم التفاعلي الحي للأغنية */}
        <div 
          ref={progressBarRef}
          onClick={handleSeek}
          className="w-full h-2 bg-[#5C2438]/20 rounded-full mb-2 relative cursor-pointer group py-1"
          title="اضغط للتقديم أو الترجيع"
        >
          <div 
            className="h-full bg-[#B43F6E] rounded-full relative transition-all duration-100"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#5C2438] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
        </div>

        {/* التوقيت الحقيقي المحسوب من الأغنية */}
        <div className="flex justify-between font-body italic text-[11px] sm:text-xs opacity-80 mb-5 text-[#5C2438]">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* أزرار التحكم في التشغيل */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            type="button"
            onClick={skipBackward}
            title="رجوع 10 ثواني"
            className="text-[#5C2438] opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all p-1"
          >
            <RotateCcw size={20} />
          </button>
          
          <button 
            type="button"
            onClick={togglePlay}
            title={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
            className="w-13 h-13 sm:w-14 sm:h-14 bg-[#B43F6E] rounded-full flex items-center justify-center shadow-lg active:scale-95 hover:brightness-105 transition-all"
          >
            {isPlaying ? 
              <Pause size={22} className="fill-white text-white" /> : 
              <Play size={22} className="fill-white text-white ml-0.5" />
            }
          </button>
          
          <button
            type="button"
            onClick={skipForward}
            title="تقديم 10 ثواني"
            className="text-[#5C2438] opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all p-1"
          >
            <FastForward size={20} />
          </button>
        </div>

        <p className="font-script italic text-3xl sm:text-4xl text-[#5C2438] leading-tight px-2">
          {songData.footerQuote}
        </p>

        {/* عنصر الصوت الفعلي مع الاستماع للتحديثات الحية */}
        <audio 
          ref={audioRef} 
          src={songData.audioSrc || "/song.mp3"}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </PageShell>
  );
}