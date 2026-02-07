import ScoreDashoard from './results/ScoreDashoard'
import DiagnosisHeader from './results/DiagnosisHeader'
import RoutineSection from './results/RoutineSection'
import BundleCTA from './results/BundleCTA'

function SkinResult({scores}) {
  if (!scores) return null

  return (
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScoreDashoard scores={scores}/>

            {/* Right: Recommendations */}
            <div className="flex-1 space-y-16">
              <DiagnosisHeader/>
              <RoutineSection/>
              <BundleCTA/>
            </div>
          </div>
        </div>
  )
}

export default SkinResult