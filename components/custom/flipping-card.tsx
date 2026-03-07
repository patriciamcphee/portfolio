'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

interface CardData {
  byline: string
  title: string
  description: string
  frontContent: string[]
  checkYourKnowledge: {
    question: string
    options: string[]
    correctAnswer: number
    explanations: { text: string; isCorrect: boolean }[]
  }
}

function CardComponent({
  byline, title, description, frontContent, checkYourKnowledge, isFlipped, onFlip,
}: CardData & { isFlipped: boolean; onFlip: () => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleFlip = () => {
    onFlip()
    if (!isFlipped) {
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowExplanation(true)
  }

  const correctExplanation = checkYourKnowledge.explanations.find((e) => e.isCorrect)?.text || ''
  const selectedExplanation = selectedAnswer !== null ? checkYourKnowledge.explanations[selectedAnswer]?.text || '' : ''

  return (
    <div
      className="cursor-pointer [perspective:1000px]"
      onClick={handleFlip}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleFlip() }}
      role="button"
      aria-label={isFlipped ? 'Show front of the card' : 'Show back of the card'}
      tabIndex={0}
    >
      <div
        className="relative w-full min-h-[320px] transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg border bg-[var(--card)] p-6 flex flex-col">
          <div className="flex-1">
            <div className="text-xs text-[var(--muted-foreground)] mb-1">{byline}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
            {frontContent.map((c, i) => (
              <p key={i} className="text-sm text-[var(--muted-foreground)]">{c}</p>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 text-sm rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-medium hover:opacity-90"
            onClick={handleFlip}
          >
            Quiz Yourself
          </button>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border bg-[var(--card)] p-6 flex flex-col">
          <div className="flex-1" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs text-[var(--muted-foreground)] mb-3">{title}</div>
            {showExplanation ? (
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {selectedAnswer === checkYourKnowledge.correctAnswer ? 'Correct!' : 'Incorrect.'}
                </h3>
                {selectedAnswer !== checkYourKnowledge.correctAnswer && (
                  <p className="text-sm text-[var(--color-utility-red-100)] mb-2">{selectedExplanation}</p>
                )}
                <p className="text-sm text-[var(--color-utility-green-100)]">{correctExplanation}</p>
              </div>
            ) : (
              <>
                <h5 className="text-sm font-semibold mb-3">{checkYourKnowledge.question}</h5>
                <div className="space-y-2">
                  {checkYourKnowledge.options.map((option, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="quiz"
                        value={i}
                        checked={selectedAnswer === i}
                        onChange={() => setSelectedAnswer(i)}
                        className="accent-[var(--primary)]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                <button
                  className="mt-4 px-4 py-2 text-sm rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-medium hover:opacity-90 disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                >
                  Check Your Answer
                </button>
              </>
            )}
          </div>
          <div className="mt-2">
            <ChevronLeft size={16} className="text-[var(--muted-foreground)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FlippingCard({ data }: { data: CardData[] }) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {data.map((card, i) => (
        <CardComponent
          key={i}
          {...card}
          isFlipped={flippedIndex === i}
          onFlip={() => setFlippedIndex(flippedIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
