import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PageShell({ children, onNext, onBack, hideNav = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full min-h-[100dvh] flex flex-col py-10 px-6 relative"
    >
      <div className="flex-1 w-full max-w-md mx-auto flex flex-col items-center justify-center mt-4 text-[#5C2438]">
        {children}
      </div>

      {!hideNav && (
        <div className="w-full max-w-md mx-auto flex items-center justify-between mt-8 pb-4 px-2">
          <button 
            onClick={onBack} 
            className="w-10 h-10 rounded-full bg-[#B43F6E] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          
          <div className="flex gap-1.5 items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#B43F6E] opacity-40"></div>
             <div className="w-4 h-1.5 rounded-full bg-[#B43F6E]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-[#B43F6E] opacity-40"></div>
          </div>

          <button 
            onClick={onNext} 
            className="w-10 h-10 rounded-full bg-[#B43F6E] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </motion.div>
  );
}