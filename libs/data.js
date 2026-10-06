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
import welockinPhoto from "@/public/work/welockin-schedule.webp";
import saudadePhoto from "@/public/work/saudade-qr-detail.webp";

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
    name: "Work",
    id: "projects",
  },
  {
    name: "Hackathons",
    id: "hackathons",
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
    id: "tunisianpass",
    title: "TunisianPass",
    category: "venture",
    status: "First business",
    description:
      "TunisianPass was my first company in Tunisia. I co-founded it to help local restaurants and shops build their online presence, taking the idea from a website to a service businesses paid for.",
    role: "Co-founder · Website development",
    outcome: "More than 500 monthly users · Sold to more than 20 restaurants and shops",
    tags: ["Next.js", "MongoDB", "Tailwind", "SEO", "Figma"],
    imageUrl: six,
    link: "https://tunisian-pass.tn/",
    accent: "#c65e3c",
  },
  {
    id: "welockin",
    title: "WeLockIn",
    category: "product",
    status: "Web app · Mobile in development",
    description:
      "I’m building WeLockIn for students who want to stay focused during their work sessions. The web app is available, and I’m working on a mobile version to bring the same idea to their phones.",
    role: "Product creation · Development",
    outcome: "Web app available · Mobile version in progress",
    tags: ["Student tools", "Focus", "Web app"],
    imageUrl: welockinPhoto,
    imageAlt: "WeLockIn schedule interface",
    imageFit: "contain",
    link: "https://welock.in/",
    accent: "#7568b5",
  },
  {
    id: "welock",
    title: "WeLock",
    category: "product",
    status: "Web app",
    description:
      "I created WeLock to make joining a study room simple. Students can open a room and study together without creating an account, using a familiar meeting-room flow similar to Google Meet.",
    role: "Product creation · Development",
    outcome: "Study rooms without an account",
    tags: ["Student tools", "Study rooms", "Web app"],
    imageUrl: null,
    link: "https://welock.app/",
    accent: "#51807a",
  },
  {
    id: "mydiaryskills",
    title: "MyDiarySkills",
    category: "product",
    status: "iOS on the App Store · Web app",
    description:
      "I created MyDiarySkills to turn everyday experiences into an evolving skill tree. You can write about your day and see the skills you are developing, with optional AI analysis to help make those connections.",
    role: "Product creation · Development",
    outcome: "Available on iOS and the web",
    tags: ["Lifestyle", "Personal progress", "iOS", "Web app"],
    imageUrl: null,
    link: "https://mydiaryskills.thehnh.tech/",
    appStoreLink: "https://apps.apple.com/us/app/mydiaryskills/id6767645628",
    accent: "#997b48",
  },
  {
    id: "mygymskills",
    title: "MyGymSkills",
    category: "product",
    status: "iOS on the App Store",
    description:
      "I built MyGymSkills for straightforward workout tracking. You can record your gym sessions on your iPhone without Wi-Fi or an account, keeping the app useful while you are actually training.",
    role: "Product creation · Development",
    outcome: "Offline workout tracking · No account required",
    tags: ["Fitness", "Workout tracking", "iOS", "Offline"],
    imageUrl: null,
    link: "https://mygymskills.thehnh.tech/",
    appStoreLink: "https://apps.apple.com/us/app/mygymskills/id6769463423",
    accent: "#627952",
  },
  {
    id: "saudade",
    title: "Picture me by Saudade",
    category: "product",
    status: "iOS on the App Store",
    description:
      "With Saudade, I connected a physical T-shirt to an app. Each shirt has a QR code on the back: someone scans it, takes a photo, and sends it to the shirt’s owner. The iOS app is called Picture me by Saudade.",
    role: "Concept creation · App development",
    outcome: "A QR-coded T-shirt connected to an iOS app",
    tags: ["Fashion", "Photography", "QR code", "iOS"],
    imageUrl: saudadePhoto,
    imageAlt: "The physical Saudade T-shirt with its printed QR code",
    imagePosition: "center 65%",
    link: "https://saudade.thehnh.tech/",
    appStoreLink: "https://apps.apple.com/de/app/picture-me-by-saudade/id6765511449",
    accent: "#9c6571",
  },
  {
    id: "focusgym",
    title: "FocusGym",
    category: "client",
    status: "Sold to the company",
    description:
      "I built and sold a website to FocusGym, a Tunisian sportswear company. It includes a product catalogue, checkout, and tools for managing products and orders, giving the company a way to sell online.",
    role: "Website development · Client delivery",
    outcome: "Website sold to FocusGym · Estimated 100 potential buyers per month",
    tags: ["Client work", "E-commerce", "Sportswear"],
    imageUrl: null,
    link: "https://focusgym.tn/",
    accent: "#94703f",
  },
  {
    id: "cleanair",
    title: "CleanAir",
    category: "client",
    status: "Sold to the company",
    description:
      "I co-created CleanAir’s website with a friend and sold it to the company. It brings together the company’s information, references, and products in one place.",
    role: "Co-creation · Website development",
    outcome: "Website sold to CleanAir",
    tags: ["Client work", "Next.js", "MongoDB", "Vercel"],
    imageUrl: seven,
    link: "https://www.cleanair.com.tn/",
    accent: "#598796",
  },
  {
    id: "dieu-et-cie",
    title: "Dieu et Cie",
    category: "in-progress",
    status: "In development",
    description:
      "I’m developing a website for Dieu et Cie, a French manufacturer of custom promotional leather goods. The project gives me another opportunity to translate a company’s products and craft into a website.",
    role: "Website development",
    outcome: "Work in progress",
    tags: ["Website", "In development"],
    imageUrl: null,
    link: "https://www.dieu-et-cie.fr/",
    accent: "#89775a",
  },
  {
    id: "lilidecoai",
    title: "LiliDecoAI",
    category: "in-progress",
    status: "In development",
    description:
      "I’m developing LiliDecoAI, an art and decor storefront where customers can visualise compatible products in their own interiors. The idea is to help people see how a piece could look in their space before choosing it.",
    role: "Product development",
    outcome: "Work in progress",
    tags: ["Product", "In development"],
    imageUrl: null,
    link: "https://lilidecoai-web.vercel.app/",
    accent: "#8c745c",
  },
  {
    id: "welockin-mobile",
    title: "WeLockIn Mobile",
    category: "in-progress",
    status: "In development",
    description:
      "I’m developing the mobile version of WeLockIn, extending the focus-session app I built for students to their phones.",
    role: "Mobile app development",
    outcome: "Mobile version in progress",
    tags: ["Student tools", "Focus", "Mobile app"],
    imageUrl: null,
    link: "https://welock.in/",
    accent: "#7568b5",
  },
  {
    id: "forbes-ranking",
    title: "Forbes Ranking",
    category: "early",
    status: "School project",
    year: "2022",
    description:
      "I made this school project to explore wealth rankings, inspired by Forbes. It was an early opportunity to work with HTML, JavaScript, search, and embedded content.",
    role: "Website development",
    outcome: "An early school project in web development",
    tags: ["HTML", "JavaScript", "CSS", "GitHub"],
    imageUrl: four,
    link: "https://forbes-ranking.vercel.app/",
    accent: "#807268",
  },
  {
    id: "engineering-club",
    title: "Engineering Club Website",
    category: "early",
    status: "Club project",
    description:
      "I built a website for the engineering club I founded in 2022. It gave us a place to share the projects we worked on and our competition results.",
    role: "Club founder · Website development",
    outcome: "A home for the club’s projects and activities",
    tags: ["HTML", "JavaScript", "CSS", "Vercel"],
    imageUrl: two,
    link: "https://clubinge-lgf.vercel.app/",
    accent: "#647e87",
  },
  {
    id: "lili-land",
    title: "Lili Land",
    category: "early",
    status: "Website",
    description:
      "I created this website for my father’s amusement park. It brings together prices, attractions, and a park map to help visitors plan their day.",
    role: "Website development",
    outcome: "Visitor information gathered in one website",
    tags: ["HTML", "JavaScript", "CSS", "Vercel"],
    imageUrl: nine,
    link: "https://lililand.tn/",
    accent: "#ad7a51",
  },
  {
    id: "le-fumoir",
    title: "Le Fumoir",
    category: "early",
    status: "Restaurant website",
    description:
      "I created a website for a local restaurant to present its dishes, prices, and practical information to people looking it up online.",
    role: "Website development",
    outcome: "Menu and restaurant information available online",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
    imageUrl: ten,
    link: "https://lefumoir.github.io",
    accent: "#9d6c54",
  },
  {
    id: "kenko-food-bar",
    title: "Kenko Food Bar",
    category: "early",
    status: "Restaurant website",
    description:
      "I developed a website for Kenko Food Bar with its menu, prices, restaurant details, and a reservation system.",
    role: "Website development",
    outcome: "Restaurant information and reservations in one place",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
    imageUrl: eight,
    link: "https://kenkofoodbar.github.io/",
    accent: "#678466",
  },
  {
    id: "djoby",
    title: "Djoby · Medianet Internship",
    category: "early",
    status: "Internship project",
    description:
      "During my summer internship at Medianet, I worked on Djoby, a service-exchange platform for neighbours. The idea was to connect people who needed help with everyday tasks, such as repairs, with people nearby.",
    role: "Intern · Web development",
    outcome: "Experience building a service-exchange platform",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "DaisyUI"],
    imageUrl: one,
    link: "https://front-prod-jade.vercel.app/",
    accent: "#6d789c",
  },
  {
    id: "association-website",
    title: "Association Website",
    category: "early",
    status: "Community project",
    description:
      "I created this website for a charity I was involved with. The association was new, and the website gave it a place to explain its mission and introduce its work.",
    role: "Website development",
    outcome: "An online introduction to the association’s mission",
    tags: ["Next.js", "Tailwind", "Cloudinary", "DaisyUI", "Vercel"],
    imageUrl: five,
    link: "https://interact-club-marsa-mind.vercel.app/",
    accent: "#94768b",
  },
];

export const hackathonsData = [
  {
    id: "alphathon",
    title: "Telegram Dating App",
    event: "Alphathon · EPFL",
    location: "Lausanne, Switzerland",
    description:
      "At Alphathon, I built a Telegram dating app with Next.js. The concept let someone commit money towards a date and the other person raise the amount. The funds would then be locked to help organise the date.",
    role: "App development",
    outcome: "A dating concept built around Telegram and committed funds",
    tags: ["Next.js", "Telegram", "Dating"],
    accent: "#997086",
  },
  {
    id: "start-hack",
    title: "AI Purchase Security",
    event: "START HACK",
    location: "St. Gallen, Switzerland",
    description:
      "At START HACK, I worked on a security system for purchases made by AI. It checked a proposed product against the customer’s requirements to help prevent the AI from buying the wrong item.",
    role: "Security system development",
    outcome: "Purchase checks against customer requirements",
    tags: ["AI", "Purchase checks", "Security"],
    accent: "#5c7e86",
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
