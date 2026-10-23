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
import saudadePhoto from "@/public/images/Work/saudade-qr-detail.webp";
import welockPreview from "@/public/previews/welock.webp";
import financeTrackerPreview from "@/public/previews/finance-tracker.webp";
import mathpartyPreview from "@/public/previews/mathparty.webp";

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

// Curated manual display order: preserve existing priorities and keep prototypes
// toward the end of the list.
export const projectsData = [
  {
    id: "tunisianpass",
    title: "TunisianPass",
    highlight: true,
    highlightDetails: [
      {
        label: "Building a business",
        description: "TunisianPass pushed me to think beyond development: who the product was for, why a business would use it, and how to turn an idea into a paid service.",
      },
    ],
    category: "website",
    status: "First business",
    description:
      "TunisianPass was my first company in Tunisia. I co-founded it to help local restaurants and shops build their online presence, taking the idea from a website to a service businesses paid for.",
    role: "Co-founder · Website development",
    outcome: "More than 500 monthly users · Sold to more than 20 restaurants and shops",
    tags: ["Next.js", "MongoDB", "Tailwind", "SEO", "Figma"],
    imageUrl: "/previews/tunisianpass.webp",
    imageAlt: "Homepage screenshot of TunisianPass",
    previewType: "website",
    previewDomain: "tunisian-pass.tn",
    link: "https://tunisian-pass.tn/",
    accent: "#c65e3c",
  },
  {
    id: "welockin",
    title: "WeLockIn",
    highlight: true,
    highlightDetails: [
      {
        label: "One idea, several platforms",
        description: "Working on a desktop app and an iOS version means adapting the same focus experience to different devices. The website brings those versions together and explains what I’m building.",
      },
    ],
    category: "desktop",
    categories: ["desktop", "mobile"],
    status: "Desktop app · iOS on the App Store",
    description:
      "I’m building WeLockIn, a desktop app that helps students stay focused during their work sessions. Its website introduces the app, and an iOS version is also available on the App Store.",
    role: "Product creation · Development",
    outcome: "Desktop focus app · iOS version available",
    tags: ["Student tools", "Focus", "Desktop app"],
    imageUrl: "/previews/welockin.webp",
    imageAlt: "Homepage screenshot of WeLockIn",
    previewType: "website",
    previewDomain: "welock.in",
    link: "https://welock.in/",
    appStoreLink: "https://apps.apple.com/us/app/welockin-lock-in-study/id6796330736",
    appStoreLabel: "See on App Store",
    accent: "#7568b5",
  },
  {
    id: "gustave-motors",
    title: "Gustave Motors",
    subtitle: "Electric Solar Car",
    category: "engineering",
    highlight: true,
    highlightLabel: "Personal favourite",
    year: "2022–2023",
    status: "Engineering team project",
    description:
      "Gustave Motors is the project I’m most attached to. In 2022, a few friends and I wanted to build a solar-electric car. That idea became our school’s engineering club, a team of around twenty students, and a project that taught me how to lead by doing.",
    role: "Club co-founder & president (2022–2025) · Project coordinator",
    outcome: "Projet X 2023 · High-school prize",
    tags: ["Team leadership", "3D modelling", "Electronics", "Solar energy"],
    imageUrl: "/images/Club/21.jpg",
    imageAlt: "Side view of a person seated at the wheel of the vehicle prototype outdoors",
    imageFit: "contain",
    imagePosition: "center",
    gallery: [
      { src: "/images/Club/18.jpg", alt: "Three people facing rows of salvaged metal and vehicle parts in a scrapyard", caption: "Looking for parts we could reuse.", fit: "contain" },
      { src: "/images/Club/25.jpg", alt: "Vehicle chassis, seat and steering wheel surrounded by tools in a workshop at night", caption: "One of the long nights in the school workshop.", fit: "contain" },
      { src: "/images/Club/27.jpg", alt: "Close-up of hands working beside the chain drive, rear axle and wheels", caption: "Making the rear axle, chain and wheels work together.", fit: "contain" },
      { src: "/images/Club/22.jpg", alt: "Two people beside the steering wheel and seat of the unfinished vehicle in a workshop", caption: "Learning by doing, with help in the workshop.", fit: "contain" },
      { src: "/images/Club/24.jpg", alt: "Two people beside a vehicle prototype with a solar panel mounted at the front", caption: "Bringing the solar panel and the vehicle together.", fit: "contain" },
      { src: "/images/Club/1.jpg", alt: "A group standing behind the solar vehicle prototype, holding documents", caption: "Our engineering club team with Gustave Motors.", fit: "contain" },
    ],
    link: "https://www.linkedin.com/pulse/la-r%C3%A9volution-%C3%A9tudiante-de-linvention-dun-v%C3%A9hicule-21hxc/",
    linkLabel: "Read article",
    sourceLinks: [
      { label: "Participation certificate", href: "/certificates/projet-x-2023.pdf" },
    ],
    caseStudy: {
      title: "From a school idea to a car we could drive.",
      facts: [
        { value: "~20", label: "Students recruited in our first year" },
        { value: "2022–2025", label: "My club presidency" },
        { value: "Projet X 2023", label: "High-school prize" },
      ],
      chapters: [
        { title: "Starting a club and learning to build.", storyIndexes: [0, 1], photoIndexes: [0, 1] },
        { title: "Making salvaged parts work together.", storyIndexes: [2, 3], photoIndexes: [2, 3] },
        { title: "The project I still come back to.", storyIndexes: [4], photoIndexes: [4, 5] },
      ],
      document: {
        href: "/certificates/projet-x-2023.pdf",
        preview: {
          src: "/certificates/projet-x-2023.webp",
          alt: "Hedi Fourati’s Projet X participation certificate dated 25 May 2023",
          caption: "Projet X 2023 · Participation certificate · 25 May 2023",
          fit: "contain",
        },
      },
    },
    story: [
      {
        label: "Taking responsibility",
        description:
          "Leading the club meant managing the budget, approving purchases, coordinating the team and staying in touch with the school administration. I also got involved in modelling, coding and sourcing parts, with guidance from a Tunisian mechatronics engineer and our technology teacher.",
      },
      {
        label: "Learning before building",
        description:
          "We spent our first months learning how a car works and estimating the motor power our vehicle would need. We designed the steel chassis in 3D, then gave the school’s metalworker the drawings and specifications. Plenty of our decisions came through trying, checking and starting again.",
      },
      {
        label: "Making the parts work together",
        description:
          "With a friend, I visited mechanics and scrapyards to find parts we could reuse: a steering rack, a steering wheel and a quad rear axle. We adapted Vespa wheels for the rear-wheel-drive system and bicycle wheels at the front. A metalworking specialist helped us machine the wheel fittings accurately.",
      },
      {
        label: "The details that took patience",
        description:
          "We placed the lead-acid batteries under the seat to balance the car. One challenge was switching between charging them in parallel and driving with them in series, so the car had to stop to charge. We also added cable-operated disc braking, lights, a horn and a dashboard made with CNC tools.",
      },
      {
        label: "What stayed with me",
        description:
          "Our prototype won the high-school prize at Projet X 2023 while we were still refining the car. I remember the long workshop nights and the last-minute preparations to transport it. Most of all, I’m grateful to the mentors and teammates who trusted us and helped turn an ambitious student idea into a vehicle we could drive.",
      },
    ],
    accent: "#9a774b",
  },
  {
    id: "a-bot",
    title: "A-BOT",
    category: "engineering",
    highlight: false,
    year: "2023–2024",
    status: "Student robotics prototype",
    description:
      "A-BOT grew out of a question I had after an exhausting year of school, chess competitions and building Gustave Motors: could a desk companion help us notice when we need a break? With the club, I explored that idea through a small, cat-shaped robot.",
    role: "Club co-founder & president (2022–2025) · Project coordinator",
    outcome: "Projet X 2024 · High-school prize",
    tags: ["Robotics", "HuskyLens", "micro:bit"],
    imageUrl: "/images/Club/6.jpg",
    imageAlt: "A-BOT prototype with a blue cat-shaped body, displays and front sensors",
    imageFit: "contain",
    imagePosition: "center",
    gallery: [
      { src: "/images/Club/6.jpg", alt: "A blue cat-shaped robot with a camera, displays and front sensors", caption: "A-BOT’s cat-shaped shell brought together the camera, displays and sensors.", fit: "contain" },
      { src: "/images/Club/28.jpg", alt: "HuskyLens camera displaying a face-detection test", caption: "Testing the vision camera used in our exploration of fatigue cues.", fit: "contain" },
      { src: "/images/Club/30.jpg", alt: "Two people beside a laptop and wired robot electronics", caption: "Wiring and assembling A-BOT with the team in the technology lab." },
    ],
    link: "https://www.linkedin.com/pulse/a-bot-linnovation-%C3%A9tudiante-contre-le-burn-out-club-ing%C3%A9nieur-lgf-koz2e/",
    linkLabel: "Read article",
    sourceLinks: [
      { label: "View award certificate", href: "/certificates/projet-x-2024.pdf" },
    ],
    story: [
      {
        label: "A quiet companion",
        description:
          "We wanted a friendly presence that could sit on a desk without interrupting someone’s concentration. The cat-shaped body, moving arms and expressive eyes made that idea tangible. Its purpose was to encourage us to pay attention to our working habits.",
      },
      {
        label: "Making it more autonomous",
        description:
          "Our prototype combined a vision camera, temperature and light sensors, a work timer and a display. We experimented with signs of drowsiness, obstacle avoidance and desk-edge detection. We also worked on a charging dock so the companion could stay on the desk with less intervention.",
      },
      {
        label: "Ideas to handle carefully",
        description:
          "Air-quality monitoring and Wi-Fi alerts to a trusted contact were extensions we discussed. They raised questions about privacy, consent and how far a companion should intervene. A-BOT remained an experimental student project about study habits and well-being.",
      },
      {
        label: "My part in the project",
        description:
          "I continued to coordinate the team, budget and purchasing, working alongside our engineer and technology teacher on design and implementation. We received the high-school prize at Projet X 2024. For me, the interesting part was connecting robotics, interaction design and the experience of a long working day.",
      },
    ],
    accent: "#537f92",
  },
  {
    id: "welock",
    title: "WeLock",
    category: "website",
    status: "Web app",
    description:
      "I created WeLock to make joining a study room simple. Students can open a room and study together without creating an account, using a familiar meeting-room flow similar to Google Meet.",
    role: "Product creation · Development",
    outcome: "Study rooms without an account",
    tags: ["Student tools", "Study rooms", "Web app"],
    imageUrl: welockPreview,
    imageAlt: "WeLock study-room homepage",
    previewType: "website",
    previewDomain: "welock.app",
    link: "https://welock.app/",
    accent: "#51807a",
  },
  {
    id: "mydiaryskills",
    title: "MyDiarySkills",
    category: "mobile",
    status: "iOS on the App Store · Web app",
    description:
      "I created MyDiarySkills to turn everyday experiences into an evolving skill tree. You can write about your day and see the skills you are developing, with optional AI analysis to help make those connections.",
    role: "Product creation · Development",
    outcome: "Available on iOS and the web",
    tags: ["Lifestyle", "Personal progress", "iOS", "Web app"],
    imageUrl: "/previews/mydiaryskills.webp",
    imageAlt: "Homepage screenshot of MyDiarySkills",
    previewType: "website",
    previewDomain: "mydiaryskills.thehnh.tech",
    link: "https://mydiaryskills.thehnh.tech/",
    appStoreLink: "https://apps.apple.com/us/app/mydiaryskills/id6767645628",
    accent: "#997b48",
  },
  {
    id: "mygymskills",
    title: "MyGymSkills",
    category: "mobile",
    status: "iOS on the App Store",
    description:
      "I built MyGymSkills for straightforward workout tracking. You can record your gym sessions on your iPhone without Wi-Fi or an account, keeping the app useful while you are actually training.",
    role: "Product creation · Development",
    outcome: "Offline workout tracking · No account required",
    tags: ["Fitness", "Workout tracking", "iOS", "Offline"],
    imageUrl: "/previews/mygymskills.webp",
    imageAlt: "Homepage screenshot of MyGymSkills",
    previewType: "website",
    previewDomain: "mygymskills.thehnh.tech",
    link: "https://mygymskills.thehnh.tech/",
    appStoreLink: "https://apps.apple.com/us/app/mygymskills/id6769463423",
    accent: "#627952",
  },
  {
    id: "saudade",
    title: "Picture me by Saudade",
    category: "mobile",
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
    appStoreLink: "https://apps.apple.com/ch/app/picture-me-by-saudade/id6765511449",
    accent: "#9c6571",
  },
  {
    id: "cipher",
    title: "Cipher",
    highlight: false,
    category: "mobile",
    categories: ["mobile", "opensource"],
    status: "Experimental · Open source",
    description:
      "I’m developing Cipher, a mobile messaging app with one-to-one conversations and an encrypted vault for profile data and private keys. An optional AI assistant connects through the backend to Groq.",
    role: "Mobile app & backend development",
    outcome: "Experimental project · MIT-licensed mobile code",
    tags: ["React Native", "Expo", "TypeScript", "Express", "MongoDB"],
    previewStack: ["React Native + Expo", "Express + MongoDB"],
    link: "https://github.com/thehnh-tech/mobile-cypher",
    linkLabel: "Mobile source",
    sourceLinks: [
      { label: "Backend source", href: "https://github.com/thehnh-tech/backend-cypher" },
    ],
    availability: "Open-source mobile app · Development build",
    highlightDetails: [
      {
        label: "Architecture",
        description:
          "The TypeScript app uses React Native and Expo, with an Express/MongoDB API for accounts and messages. Conversations update through REST requests and HTTP long polling.",
      },
      {
        label: "Encryption experiment",
        description:
          "Vaults and direct-message payloads are encrypted on the client. This custom protocol is experimental and has not been independently audited. Optional AI chats are processed in plaintext by the backend and Groq.",
      },
    ],
    accent: "#58bfb1",
  },
  {
    id: "mathparty",
    title: "MathParty",
    category: "website",
    status: "In development",
    description:
      "I’m developing MathParty, a live, turn-based maths game for students. The goal is to solve problems from France’s Course aux nombres before a bomb explodes.",
    role: "Web app development",
    outcome: "Work in progress · Not yet fully functional",
    tags: ["Maths", "Student games", "Real-time", "Turn-based"],
    imageUrl: mathpartyPreview,
    imageAlt: "MathParty guest lobby with room creation and multiplayer rooms",
    previewType: "website",
    previewDomain: "mathparty.thehnh.tech",
    link: "https://mathparty.thehnh.tech/",
    linkLabel: "Preview project",
    accent: "#8b735d",
  },
  {
    id: "focusgym",
    title: "FocusGym",
    category: "website",
    status: "Sold to the company",
    description:
      "I built and sold a website to FocusGym, a Tunisian sportswear company. It includes a product catalogue, checkout, and tools for managing products and orders, giving the company a way to sell online.",
    role: "Website development · Client delivery",
    outcome: "Website sold to FocusGym · Estimated 100 potential buyers per month",
    tags: ["Client work", "E-commerce", "Sportswear"],
    imageUrl: "/previews/focusgym.webp",
    imageAlt: "Homepage screenshot of FocusGym",
    previewType: "website",
    previewDomain: "focusgym.tn",
    link: "https://focusgym.tn/",
    accent: "#94703f",
  },
  {
    id: "cleanair",
    title: "CleanAir",
    category: "website",
    status: "Sold to the company",
    description:
      "I co-created CleanAir’s website with a friend and sold it to the company. It brings together the company’s information, references, and products in one place.",
    role: "Co-creation · Website development",
    outcome: "Website sold to CleanAir",
    tags: ["Client work", "Next.js", "MongoDB", "Vercel"],
    imageUrl: "/previews/cleanair.webp",
    imageAlt: "Homepage screenshot of CleanAir",
    previewType: "website",
    previewDomain: "www.cleanair.com.tn",
    link: "https://www.cleanair.com.tn/",
    accent: "#598796",
  },
  {
    id: "dieu-et-cie",
    title: "Dieu et Cie",
    category: "website",
    status: "In development",
    description:
      "I’m developing a website for Dieu et Cie, a French manufacturer of custom promotional leather goods. The project gives me another opportunity to translate a company’s products and craft into a website.",
    role: "Website development",
    outcome: "Work in progress",
    tags: ["Website", "In development"],
    imageUrl: "/previews/dieu-et-cie.webp",
    imageAlt: "Homepage screenshot of Dieu et Cie",
    previewType: "website",
    previewDomain: "www.dieu-et-cie.fr",
    link: "https://www.dieu-et-cie.fr/",
    accent: "#89775a",
  },
  {
    id: "lilidecoai",
    title: "LiliDecoAI",
    category: "website",
    status: "In development",
    description:
      "I’m developing LiliDecoAI, an art and decor storefront where customers can visualise compatible products in their own interiors. The idea is to help people see how a piece could look in their space before choosing it.",
    role: "Product development",
    outcome: "Work in progress",
    tags: ["Product", "In development"],
    imageUrl: "/previews/lilidecoai.webp",
    imageAlt: "Homepage screenshot of LiliDecoAI",
    previewType: "website",
    previewDomain: "lilidecoai-web.vercel.app",
    link: "https://lilidecoai-web.vercel.app/",
    accent: "#8c745c",
  },
  {
    id: "forbes-ranking",
    title: "Forbes Ranking",
    category: "website",
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
    category: "website",
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
    category: "website",
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
    category: "website",
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
    category: "website",
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
    category: "website",
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
    category: "website",
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
  {
    id: "finance-tracker",
    title: "FinanceTracker",
    category: "website",
    status: "Freelance prototype",
    description:
      "I vibe-coded this small finance template with Codex for a potential freelance project. The opportunity did not go ahead, so I kept the prototype as a working demo. It includes transaction tracking, budgets, CSV imports, and report exports.",
    role: "Prototype development · Codex-assisted",
    outcome: "Freelance project did not go ahead · Live demo",
    tags: ["Codex", "Prototype", "Web app", "Finance"],
    imageUrl: financeTrackerPreview,
    imageAlt: "Finance Tracker demo dashboard with fictional transactions and budgets",
    previewType: "website",
    previewDomain: "finance.thehnh.tech",
    link: "https://finance.thehnh.tech/",
    linkLabel: "Try demo",
    demoCredentials: {
      email: "tester@finance.dev",
      password: "test1234",
    },
    accent: "#54766a",
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
    projectLink: "https://github.com/DateTon/402-Dateton",
    previewLink: "https://dorahacks.io/build/41295",
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
    projectLink: "https://github.com/StartHack-CamelCase/StartCase1",
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
