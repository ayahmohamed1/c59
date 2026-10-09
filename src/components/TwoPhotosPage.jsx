import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart } from 'lucide-react';

export default function TwoPhotosPage({ onNext, onBack }) {
  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display text-lg tracking-widest uppercase text-[#5C2438] mb-2 text-center">OUR FIRST PHOTOS</h2>
      
      <div className="flex items-center gap-3 mb-8 w-48 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={10} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>

      {/* الـ Container الجديد اللي بيخلي الصور جنب بعض وواخدة راحتها */}
      <div className="flex justify-center items-center gap-3 sm:gap-6 w-full max-w-[420px] mx-auto my-6 px-2">
        
        {/* الصورة الأولى */}
        <div className="relative w-[48%] bg-white p-2.5 pb-10 shadow-polaroid -rotate-6">
          {/* شكل اللزقة الشفافة */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/50 backdrop-blur-sm shadow-sm rotate-[-3deg]"></div>
          <img 
            src={clientData.firstPhotos[0]} 
            alt="1" 
            className="w-full aspect-[4/5] object-cover" 
          />
        </div>

        {/* الصورة التانية - نازلة لتحت شوية (mt-12) زي الديزاين */}
        <div className="relative w-[48%] bg-white p-2.5 pb-10 shadow-polaroid rotate-3 mt-12">
          {/* شكل اللزقة الشفافة */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/50 backdrop-blur-sm shadow-sm rotate-[2deg]"></div>
          <img 
            src={clientData.firstPhotos[1]} 
            alt="2" 
            className="w-full aspect-[4/5] object-cover" 
          />
        </div>

      </div>

      <div className="mt-8 text-center flex flex-col items-center">
        <p className="font-script text-5xl mb-3 text-[#5C2438]">You & Me</p>
        <Heart size={14} className="fill-[#5C2438] text-[#5C2438]" />
      </div>
    </PageShell>
  );
}