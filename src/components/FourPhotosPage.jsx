import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart } from 'lucide-react';

export default function FourPhotosPage({ onNext, onBack }) {
  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display text-lg tracking-widest uppercase text-ink mb-1">OUR LITTLE WORLD</h2>
      <div className="heading-rule mb-8"></div>

      <div className="grid grid-cols-2 gap-4 w-full px-2 mb-8">
        {clientData.fourPhotos.map((src, i) => (
          <div key={i} className={`bg-white p-2 pb-6 shadow-polaroid ${i%2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
            <img src={src} className="w-full aspect-square object-cover bg-blush-100" />
          </div>
        ))}
      </div>

      <div className="text-center flex flex-col items-center">
        <p className="font-script text-3xl mb-2">Together is my favorite place</p>
        <Heart size={14} className="fill-ink mt-1" />
      </div>
    </PageShell>
  );
}