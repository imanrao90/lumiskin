import { useState, useRef, useEffect } from 'react';
import SkinIntro from './components/SkinIntro';
import SkinScanning from './components/SkinScanning';
import SkinQuestions from './components/SkinQuestions';
import SkinResult from './components/SkinResult';
import { calculateSkinScores } from '../../services/skin/skinScoreEngine';

const SkinAnalysis = () => {
  const [answers, setAnswers] = useState({
    afterWash: '',
    skinType: '',
    breakouts: '',
    reaction: '',
    sunExposure: ''
  })
  const [scores, setScores] = useState(null)
  const [step, setStep] = useState('intro');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const streamRef = useRef(null);

  useEffect(() => {
    if(step === 'results'){
      const result = calculateSkinScores(answers)
      setScores(result)
    }
  }, [step, answers])

  // Simulated scan animation
  useEffect(() => {
    if (step === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('questions'), 800);
            return 100;
          }
          return prev + 1;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {step === 'intro' && <SkinIntro setStep={setStep}/>}
      {step === 'scanning' && <SkinScanning setStep={setStep}/>}
      {step === 'questions' && <SkinQuestions setStep={setStep} answers={answers} setAnswers={setAnswers}/>}
      {step === 'results' && <SkinResult scores={scores}/>}
    </div>
  );
};

export default SkinAnalysis;
