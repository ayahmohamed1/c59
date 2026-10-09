import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart } from 'lucide-react';

export default function MessagePage({ onNext, onBack }) {
  const { salutation, paragraphs = [], closing } = clientData.message || {};

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <div className="bg-[#F4E3E1] w-full max-w-sm mx-auto rounded-sm shadow-polaroid p-8 relative border border-white/20">
        <div className="text-center mb-6">
          <h2 className="font-script italic text-5xl text-[#451A28]">{salutation}</h2>
        </div>
        
        <div className="space-y-4 text-[#451A28]/90 text-[17px] leading-relaxed text-center font-body italic">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-col items-center">
          <p className="font-script italic text-4xl mb-3 text-[#9A3B5C]">{closing}</p>
          <Heart size={14} className="fill-[#9A3B5C] text-[#9A3B5C]" />
        </div>
      </div>
    </PageShell>
  );
}