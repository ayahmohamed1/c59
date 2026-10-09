import { Heart } from 'lucide-react'
import PageShell from './PageShell'
import ClientData from '../ClientData'

export default function GreetingPage({ onNext }) {
  const { salutation, lines, cta } = ClientData.greeting

  return (
    <PageShell>
      <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <span className="text-3xl mb-6" aria-hidden>
          🌸
        </span>

        <h1 className="font-script text-4xl text-blush-800 mb-6">{salutation}</h1>

        <div className="font-body text-[15px] leading-relaxed text-blush-900/90 space-y-4 max-w-xs">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <button
          type="button"
          onClick={onNext}
          className="mt-10 font-script text-2xl text-blush-700 flex flex-col items-center gap-2"
        >
          {cta}
          <Heart size={16} fill="currentColor" />
        </button>

        <span className="text-2xl mt-6" aria-hidden>
          🌸
        </span>
      </div>
    </PageShell>
  )
}
