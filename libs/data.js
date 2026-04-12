import one from "@/public/projects/1.jpg";
import two from "@/public/projects/2.jpg";
import three from "@/public/projects/3.JPG";
import four from "@/public/projects/4.png";
import five from "@/public/projects/5.png";
import six from "@/public/projects/6.png";
import seven from "@/public/projects/7.png";
import eight from "@/public/projects/8.png";
import nine from "@/public/projects/9.png";
import ten from "@/public/projects/10.png";

export const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Life",
    id: "life",
  },
  {
    name: "Contact",
    id: "contact",
  },
];


export const images = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
};

export const projectsData = [
  {
    title: "Forbes Ranking",
    description: "Forbes Ranking is a 2022 school project exploring wealth, inspired by Forbes magazine. The site uses an HTML search engine and Iframe technology for dynamic content.",
    tags: ["HTML", "JavaScipt", "CSS", 'Github'],
    imageUrl: four,
    link: "https://forbes-ranking.vercel.app/",
  },
  {
    title: "Engineering Club Website",
    description:
      "I built this website for the engineering club I founded in 2022, showcasing our projects since inception—especially our competition wins.",
    tags: ["HTML", "JAVASCRIPT", "CSS", "Vercel"],
    imageUrl: two,
    link: "https://clubinge-lgf.vercel.app/",
  },
  {
    title: "Lili Land",
    description:
      "A website I created for my father's amusement park to reinforce its online presence, displaying pricing, attractions, and a park map.",
    tags: ["HTML", "JAVASCRIPT", "CSS", "Vercel"],
    imageUrl: nine,
    link: "https://lililand.tn/",
  },
  {
    title: "CleanAir",
    description:
      "A website I co-created with a friend for his mother's company, presenting company details, references, and products.",
    tags: [
        "NextJS",
        'MongoDB',
        "Vercel"
    ],
    imageUrl: seven,
    link: "https://clean-air.vercel.app/",
  },
  {
    title: "Le Fumoir",
    description: "A site for a local restaurant designed to boost online visibility by presenting its dishes, prices, and essential information.",
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIT",
      "Github",
    ],
    imageUrl: ten,
    link: "https://lefumoir.github.io",
  },
  {
    title: "Kenko Food Bar",
    description: "I developed a website for this local restaurant to enhance its online presence by showcasing the menu, prices, and details—with an integrated reservation system.",
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIT",
      "Github",
    ],
    imageUrl: eight,
    link: "https://kenkofoodbar.github.io/",
  },

  {
    title: "Internship Project",
    description:
      "Djoby a peer-to-peer service exchange platform from my summer internship at Medianet. It enables neighbors to help with everyday tasks like plumbing and repairs.",
    tags: [
      "REACT",
      "NODE JS",
      "MONGODB",
      "TAILWIND",
      "DAISY UI",
      "VERCEL"
    ],
    imageUrl: one,
    link: "https://front-prod-jade.vercel.app/",
  },
  {
    title: "Association Website",
    description:
      "I created this site for a charity I was involved with. Since it was new and lacked an online presence, the website clearly explains its mission.",
    tags: [
      "NEXT JS",
      "TAILWIND",
      "CLOUDINARY",
      "DAISY UI",
      'VERCEL'
    ],
    imageUrl: five,
    link: "https://interact-club-marsa-mind.vercel.app/",
  },
  {
    title: "TunisianPass",
    description:
      "TunisianPass is a company I co-founded to help local businesses gain online visibility. We secured eight annual clients and average 500 weekly users on our website.",
    tags: [
      "NEXT JS",
      "TAILWIND",
      "MongoDB",
      "DAISY UI",
      "Vercel",
      "SEO",
      "FIGMA"
      
    ],
    imageUrl: six,
    link: "https://tunisian-pass.tn/",
  },
];

export const skillsData = [
  ["JavaScript", "/skills/javascript-js.svg"],
  ["React", "/skills/react.svg"],
  ["Next.js", "/skills/next.svg"],
  ["Node.js", "/skills/node-js.svg"],
  ["Express", "/skills/express-original.svg"],
  ["Tailwind", "/skills/tailwind-css.svg"],
  ["Framer", "/skills/framer.svg"],
  ["Shadcn", "/skills/shadcnui.svg"],
  ["MongoDB", "/skills/mongodb-original.svg"],
  ["Cloudinary", "/skills/cloudinary.svg"],
  ["HTML", "/skills/file-type-html.svg"],
  ["CSS", "/skills/file-type-css.svg"],
  ["Git", "/skills/git.svg"],
  ["GitHub", "/skills/github.svg"],
  ["Vercel", "/skills/vercel.svg"],
  ["Command Line", "/skills/commandline.svg"],
  ["Dart", "/skills/dart.svg"],
  ["Flutter", "/skills/flutter.svg"],
  ["Java", "/skills/java.svg"],
  ["Linux", "/skills/linux.svg"],
  ["Postman", "/skills/postman.svg"],
  ["Python", "/skills/python.svg"],
  ["Photoshop", "/skills/photoshop.svg"],
  ["Premiere Pro", "/skills/premierepro.svg"],
  ["Figma", "/skills/figma.svg"],
  ["Arduino", "/skills/arduino.svg"],
  ["", "/skills/etc.svg"],
];
