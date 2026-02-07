const BASE_SCORE = 70;

const clamp = (value, min = 0, max = 100) =>
  Math.min(max, Math.max(min, value));

const WEIGHTS = {
  hydration: {
    afterWash: {
      tight: -25,
      normal: 0,
      soft: +10
    },
    skinType: {
      dry: -20,
      normal: 0,
      oily: +5
    }
  },

  clarity: {
    breakouts: {
      none: +10,
      occasional: -10,
      frequent: -25,
      constant: -40
    }
  },

  sensitivity: {
    reaction: {
      none: +10,
      mild: -20,
      strong: -40
    }
  },

  uvResistance: {
    sunExposure: {
      low: +15,
      medium: 0,
      high: -30
    }
  }
};

export const calculateSkinScores = (answers) => {
  let scores = {
    hydration: BASE_SCORE,
    clarity: BASE_SCORE,
    sensitivity: BASE_SCORE,
    uvResistance: BASE_SCORE
  };

  // HYDRATION
  if (answers.afterWash && WEIGHTS.hydration.afterWash[answers.afterWash]) {
    scores.hydration += WEIGHTS.hydration.afterWash[answers.afterWash];
  }

  if (answers.skinType && WEIGHTS.hydration.skinType[answers.skinType]) {
    scores.hydration += WEIGHTS.hydration.skinType[answers.skinType];
  }

  // CLARITY
  if (answers.breakouts && WEIGHTS.clarity.breakouts[answers.breakouts]) {
    scores.clarity += WEIGHTS.clarity.breakouts[answers.breakouts];
  }

  // SENSITIVITY
  if (answers.reaction && WEIGHTS.sensitivity.reaction[answers.reaction]) {
    scores.sensitivity += WEIGHTS.sensitivity.reaction[answers.reaction];
  }

  // UV RESISTANCE
  if (answers.sunExposure && WEIGHTS.uvResistance.sunExposure[answers.sunExposure]) {
    scores.uvResistance += WEIGHTS.uvResistance.sunExposure[answers.sunExposure];
  }

  // FINAL NORMALIZATION
  return {
    hydration: clamp(scores.hydration),
    clarity: clamp(scores.clarity),
    sensitivity: clamp(scores.sensitivity),
    uvResistance: clamp(scores.uvResistance)
  };
};
