  const experienceData = [
    {
      id: 1,
      title: "Technical Head @UIETPD2.0",
      icon: '/icon1.jpg',
      items: [
        "Led the development of a discord server for a competition with 300-400 participants while managing on day issues and queries",
        "Was responsible for the smooth working of the platform",
        "Managed technical documentation and support",
      ],
    },
    {
      id:2,
      title: "Alcohol Detector",
      icon: '/icon3.png',
      items: [
        "Designed and prototyped an embedded alcohol detection system using an Arduino Uno and MQ-3 sensor, bridging hardware components with custom logic.",
        "Developed C++ firmware within the Arduino IDE to process analog sensor inputs, implementing real-time data monitoring and threshold-based decision logic.",
        "Calibrated sensor sensitivity to accurately trigger distinct alert states (e.g., visual or auditory indicators), ensuring reliable performance in varying environmental conditions",
      ],
    },
     {
      id: 3,
      title: "E-Commerce With SQL database",
      icon: '/icon2.png',
      items: [
        "Architected and developed a full-stack e-commerce application, integrating a responsive frontend with a robust SQL database to manage dynamic product catalogs and user data.",
        "Implemented core business logic including cart management and checkout, ensuring data integrity.",
       "Built a secure Admin Dashboard enabling sellers to perform CRUD operations on inventory, real-time order tracking, and sales visualization",
      ],
    },   
]


const gallery = [
  {
    id: 1,
    link: '/seattle.jpg'
  },
  {
    id: 2,
    link: '/santorini.jpg'
  },
  {
    id: 3,
    link: '/f1.jpg'
  },
  {
    id: 4,
    link: '/aurora.jpg'
  },
  {
    id: 4,
    link: '/motivation.jpg'
  },
  {
    id: 4,
    link: '/me.jpeg'
  },
  
]


export const projects = [
  {
    id: 1,
    name: "Resume Builder",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/projects/resume.png",
    bgImage: "/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Redux" },
    ],
  },
  {
    id: 2,
    name: "Book Recommender",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "projects/plant-shop.jpg",
    bgImage: "/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Real Time Chat App",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "projects/apple-tech-store.jpg",
    bgImage: "/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "Express" },
      { id: 3, name: "NodeJS" },
      { id: 4, name: "React" },
      { id: 5, name: "Socket.IO" },
      { id: 5, name: "TailwindCSS" },
    ],
  },
  {
    id: 4,
    name: "E-Commerce Electronics Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "projects/electronics-store.jpg",
    bgImage: "/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Discord Server",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "projects/discord.png",
    bgImage: "/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Discord" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "projects/game-store.jpg",
    bgImage: "/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

  export  { experienceData, gallery } 
