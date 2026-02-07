import { CheckCircle2 } from 'lucide-react';
import { SKIN_QUESTIONS } from '../../../data/mockData';
import { useState } from 'react';

function SkinQuestions({setStep, answers, setAnswers}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = SKIN_QUESTIONS[currentQuestionIndex]

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))

    const nextIndex = currentQuestionIndex + 1

    if(nextIndex < SKIN_QUESTIONS.length){
      setCurrentQuestionIndex(nextIndex)
    } else {
      setStep('results')
    }
  }

  return (
        <div className="max-w-2xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">Assessment 01/05</div>
            <div className="h-[2px] w-32 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/5 bg-indigo-600" />
            </div>
          </div>
          
          <h2 className="serif text-4xl text-slate-900 mb-12">{currentQuestion.question}</h2>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option, i) => (
              <button 
                key={i}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="w-full p-8 rounded-3xl border border-slate-100 hover:border-indigo-600 hover:bg-indigo-50/30 text-left transition-all group flex justify-between items-center"
              >
                <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-900">{option.label}</span>
                <div className="w-6 h-6 rounded-full border border-slate-200 group-hover:border-indigo-600 group-hover:bg-indigo-600 flex items-center justify-center transition-all">
                  <CheckCircle2 size={14} className="text-white opacity-0 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        </div>
  )
}

export default SkinQuestions