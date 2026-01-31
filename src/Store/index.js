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
    image: "/projects/resume.png",
    bgImage: "/backgrounds/blanket.jpg",
    url : "https://resume-builder-fresh.vercel.app/",
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
    image: "projects/book.png",
    bgImage: "/backgrounds/curtains.jpg",
    url : "https://github.com/sparsh-hub/gradio-book-recommender",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Matplotlib" },
      { id: 3, name: "Gradio" },
      { id: 4, name: "Pandas" },
    ],
  },
  {
    id: 3,
    name: "DogStudio Clone",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    image: "projects/dogstudio.png",
    bgImage: "/backgrounds/map.jpg",
    url : "https://github.com/sparsh-hub/dogStudio",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Three.js" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "TailwindCSS" },
    ],
  },
  {
    id: 4,
    name: "N8N workflow",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    image: "projects/n8n.png",
    bgImage: "/backgrounds/poster.jpg",
    url : "https://n8n.io/",
    frameworks: [
      { id: 1, name: "N8N" },
      { id: 2, name: "javascript" },
    ],
  },
  {
    id: 5,
    name: "Discord Server",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    image: "projects/discord.png",
    bgImage: "/backgrounds/table.jpg",
    url : "https://discord.com/",
    frameworks: [
      { id: 1, name: "Discord" },
    ],
  },
];

  export  { experienceData, gallery } 




