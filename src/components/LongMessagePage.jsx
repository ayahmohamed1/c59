import PageShell from './PageShell';
import { clientData } from '../data';

export default function LongMessagePage({ onNext, onBack }) {
  // استخراج نص الرسالة سواء كانت نصاً كاملاً أو مصفوفة
  const rawMessage = clientData.longMessage;
  let messageText = "";

  if (typeof rawMessage === 'string') {
    messageText = rawMessage;
  } else if (rawMessage && typeof rawMessage.text === 'string') {
    messageText = rawMessage.text;
  } else if (rawMessage && Array.isArray(rawMessage.paragraphs)) {
    messageText = rawMessage.paragraphs.join('\n\n');
  } else if (rawMessage && typeof rawMessage.paragraphs === 'string') {
    messageText = rawMessage.paragraphs;
  }

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      {/* الكارت الأبيض الشيك للرسالة الطويلة */}
      <div className="bg-white w-full max-w-[390px] mx-auto rounded-3xl shadow-polaroid p-6 sm:p-8 relative border border-white/80">
        
        {/* جسم الرسالة مع سكرول بار ناعم، ويدعم النزول لسطر جديد تلقائياً */}
        <div 
          dir="rtl"
          className="max-h-[60vh] sm:max-h-[64vh] overflow-y-auto custom-scrollbar px-2 sm:px-3 py-1 text-right"
        >
          <div className="font-arabic text-[15px] sm:text-[16px] text-[#451A28]/90 leading-[2.2] font-normal whitespace-pre-line text-justify">
            {messageText}
          </div>
        </div>

      </div>
    </PageShell>
  );
}
