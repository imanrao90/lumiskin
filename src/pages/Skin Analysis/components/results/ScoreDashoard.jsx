import React from 'react'
import HealthScoreCard from './HealthScoreCard'
import StatBar from './StatBar'

function ScoreDashoard({scores}) {
    const stats = [
        { label: "Hydration", score: scores.hydration },
        { label: "Clarity", score: scores.clarity },
        { label: "Sensitivity", score: scores.sensitivity },
        { label: "UV Resistance", score: scores.uvResistance }
    ]

    return (
        <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
                <HealthScoreCard scores={scores}/>

                <div className="space-y-6 px-4">
                    {stats.map((stat, i) => <StatBar key={i} {...stat}/>)}
                </div>
            </div>
        </div>
    )
}

export default ScoreDashoard