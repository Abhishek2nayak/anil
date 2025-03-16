// Define the categories as types
export type CategoryType =
  | "bridal"
  | "traditional"
  | "babyshower"
  | "arabic"
  | "legs"
  | "fullhands"
  | "portrait";

// Define the service image type
export interface ServiceImage {
  id: number;
  title: string;
  img: string;
  alt: string;
  category: CategoryType;
  description: string;
  seoKeywords: string[];
}

// Manually defining image data
const imagesData: ServiceImage[] = [
  // Bridal
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Bridal Design `,
    img: `assets/bridal/${i + 1}.jpeg`,
    alt: `Bridal design ${i + 1}`,
    category: "bridal" as CategoryType,
    description: `Elegant and intricate bridal mehndi design, perfect for weddings.`,
    seoKeywords: [
      "bridal mehndi",
      "wedding henna",
      "dulhan mehndi",
      "bridal henna",
    ],
  })),
  // Traditional
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `Traditional Design`,
    img: `assets/traditional/${i + 1}.jpeg`,
    alt: `Traditional design ${i + 1}`,
    category: "traditional" as CategoryType,
    description: `Classic mehndi patterns with cultural and traditional elements.`,
    seoKeywords: [
      "traditional mehndi",
      "classic henna",
      "cultural mehndi",
      "festive henna",
    ],
  })),
  // Babyshower
  ...Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `Babyshower Design `,
    img: `assets/babyshower/${i + 1}.jpeg`,
    alt: `Babyshower design ${i + 1}`,
    category: "babyshower" as CategoryType,
    description: `Beautiful mehndi designs for expecting mothers at baby showers.`,
    seoKeywords: [
      "babyshower mehndi",
      "pregnancy henna",
      "maternity mehndi",
      "baby bump henna",
    ],
  })),
  // Arabic
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Arabic Design`,
    img: `assets/arabic/${i + 1}.jpeg`,
    alt: `Arabic design ${i + 1}`,
    category: "arabic" as CategoryType,
    description: `Floral and flowing Arabic mehndi patterns with bold strokes.`,
    seoKeywords: [
      "arabic mehndi",
      "simple henna",
      "floral mehndi",
      "bold mehndi",
    ],
  })),
  // Legs
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Legs Design `,
    img: `assets/legs/${i + 1}.jpeg`,
    alt: `Legs design ${i + 1}`,
    category: "legs" as CategoryType,
    description: `Stylish mehndi patterns designed specifically for legs.`,
    seoKeywords: [
      "legs mehndi",
      "feet henna",
      "ankle mehndi",
      "foot mehndi design",
    ],
  })),
  // Fullhands
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `Fullhands Design `,
    img: `assets/fullhands/${i + 1}.jpeg`,
    alt: `Fullhands design ${i + 1}`,
    category: "fullhands" as CategoryType,
    description: `Exquisite full-hand mehndi designs for special occasions.`,
    seoKeywords: [
      "fullhand mehndi",
      "detailed henna",
      "complete hand mehndi",
      "festival henna",
    ],
  })),
  // Portrait
  ...Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `Portrait Design`,
    img: `assets/portrait/${i + 1}.jpeg`,
    alt: `Portrait design ${i + 1}`,
    category: "portrait" as CategoryType,
    description: `Unique portrait mehndi art capturing faces and figures in henna.`,
    seoKeywords: [
      "portrait mehndi",
      "custom henna art",
      "face mehndi design",
      "unique mehndi",
    ],
  })),
];

export default imagesData;
