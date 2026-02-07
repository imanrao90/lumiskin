export const ALL_PRODUCTS = [
  {
    id: '1',
    name: "Dermive Urea Economy Pack",
    description: "Deep hydration therapy for extremely dry and compromised skin.",
    price: 2250,
    originalPrice: 2600,
    rating: 5,
    reviewsCount: 3,
    variants: [
      {
        id: 'v1',
        name: 'Full Size',
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 'v2',
        name: 'Travel Size',
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '2',
    name: "Clarevo Salicylic Acid Facewash",
    description: "Clinically formulated cleanser to target acne and excess oil.",
    price: 1098,
    rating: 4.8,
    reviewsCount: 36,
    variants: [
      {
        id: 'v1',
        name: 'Full Size',
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '3',
    name: "Brightening Coffee Soap",
    description: "Revitalizing coffee-infused soap for brighter, smoother skin.",
    price: 480,
    rating: 4.9,
    reviewsCount: 133,
    variants: [
      {
        id: 'v1',
        name: 'Bar',
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '4',
    name: "Zero Hairfall Duo",
    description: "Advanced hair strengthening system to reduce breakage.",
    price: 2466,
    rating: 5,
    reviewsCount: 12,
    variants: [
      {
        id: 'v1',
        name: 'Duo Pack',
        image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '5',
    name: "Sun Guard SPF 50+",
    description: "Broad-spectrum protection against UVA & UVB rays.",
    price: 1550,
    rating: 4.7,
    reviewsCount: 89,
    variants: [
      {
        id: 'v1',
        name: '50ml',
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '6',
    name: "Hydrating Hyaluronic Serum",
    description: "Lightweight serum delivering long-lasting hydration.",
    price: 1850,
    rating: 4.9,
    reviewsCount: 245,
    variants: [
      {
        id: 'v1',
        name: 'Dropper Bottle',
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '7',
    name: "Anti-Aging Retinol Cream",
    description: "Dermatologist-approved retinol for smoother skin texture.",
    price: 3200,
    originalPrice: 3500,
    rating: 4.6,
    reviewsCount: 56,
    variants: [
      {
        id: 'v1',
        name: 'Night Cream',
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },

  {
    id: '8',
    name: "Scalp Revive Treatment",
    description: "Nourishing scalp treatment to restore hair vitality.",
    price: 1200,
    rating: 4.5,
    reviewsCount: 42,
    variants: [
      {
        id: 'v1',
        name: 'Treatment',
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
];


export const SKIN_QUESTIONS = [
  {
    id: 'gender',
    question: 'What is your gender?',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'pns', label: 'Prefer not to say' }
    ]
  },
  {
    id: 'age',
    question: 'Which age range do you fall into?',
    options: [
      { value: 'teenager', label: '13–19' },
      { value: 'youngAdult', label: '20–29' },
      { value: 'adult', label: '30–59' }
    ]
  },

  // CORE SKIN TYPE
  {
    id: 'skinType',
    question: 'How does your skin usually feel by the end of the day?',
    options: [
      { value: 'normal', label: 'Comfortable and balanced' },
      { value: 'oily', label: 'Shiny or greasy' },
      { value: 'dry', label: 'Tight or flaky' },
      { value: 'combination', label: 'Oily in some areas, dry in others' },
      { value: 'sensitive', label: 'Easily irritated or red' }
    ]
  },

  // OIL PRODUCTION
  {
    id: 'oilTiming',
    question: 'When does your skin get oily the most?',
    options: [
      { value: 'morning', label: 'Within a few hours after washing' },
      { value: 'afternoon', label: 'By midday or afternoon' },
      { value: 'allDay', label: 'Almost all day' },
      { value: 'never', label: 'Rarely or never' }
    ]
  },

  // ACNE & BREAKOUTS
  {
    id: 'breakouts',
    question: 'How often do you get pimples or breakouts?',
    options: [
      { value: 'rare', label: 'Rarely' },
      { value: 'occasional', label: 'Once in a while' },
      { value: 'frequent', label: 'Often' },
      { value: 'constant', label: 'Almost always' }
    ]
  },

  // SENSITIVITY
  {
    id: 'reaction',
    question: 'How does your skin react to new products?',
    options: [
      { value: 'noReaction', label: 'No reaction at all' },
      { value: 'mild', label: 'Slight tingling or redness' },
      { value: 'strong', label: 'Burning, itching, or breakouts' }
    ]
  },

  // HYDRATION
  {
    id: 'afterWash',
    question: 'How does your skin feel after washing with a cleanser?',
    options: [
      { value: 'comfortable', label: 'Clean and comfortable' },
      { value: 'tight', label: 'Dry and tight' },
      { value: 'oily', label: 'Oily again very quickly' }
    ]
  },

  // ENVIRONMENTAL DAMAGE
  {
    id: 'sunExposure',
    question: 'How much sun exposure do you get daily?',
    options: [
      { value: 'low', label: 'Very little' },
      { value: 'moderate', label: 'Some daily exposure' },
      { value: 'high', label: 'A lot of direct sun' }
    ]
  },

  // SKIN CONCERNS
  {
    id: 'mainConcern',
    question: 'What is your biggest skin concern?',
    options: [
      { value: 'acne', label: 'Acne & pimples' },
      { value: 'darkSpots', label: 'Dark spots / pigmentation' },
      { value: 'dryness', label: 'Dryness' },
      { value: 'oil', label: 'Excess oil' },
      { value: 'redness', label: 'Redness / sensitivity' }
    ]
  }
];
