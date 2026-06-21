export const personalInfo = {
  name: "Aditya Pratama",
  firstName: "Aditya",
  lastName: "Pratama",
  title: "Electrical Engineering Student",
  subtitle: "IoT Enthusiast | Embedded Systems Developer | Automation Engineer",
  email: "adityagt49@gmail.com",
  phone: "+62 822-5416-6520",
  location: "Central Kalimantan, Indonesia",
  university: "President University",
  degree: "B.E. Electrical Engineering",
  graduationYear: "2029",
  bio: `I'm a passionate Electrical Engineering student with a deep fascination for the intersection of hardware and software. My journey began with taking apart electronics as a kid, and now I'm building smart systems that connect the physical and digital worlds.

  Specializing in IoT, Embedded Systems, and Industrial Automation, I love creating solutions that make technology more accessible and efficient. When I'm not coding microcontrollers or designing PCBs, you'll find me exploring the latest in renewable energy tech or contributing to open-source projects.`,
  profileImage: "/img/me.jpeg",
};

export const socialLinks = {
  github: "https://github.com/Adty-ach",
  linkedin: "https://www.linkedin.com/in/aditya-pratama-756a2b3ba",
  instagram: "https://www.instagram.com/adty.jpg?igsh=aDB6enhoN3pic3M0",
  youtube: "https://youtube.com/@chi_nero?si=Z2w5fC1-rWJZznYX",
  twitter: "https://twitter.com/",
};

export const skills = {
  electrical: [
    { name: "Circuit Design", level: 50 },
    { name: "PCB Layout", level: 45 },
    { name: "Power Electronics", level: 60 },
    { name: "Signal Processing", level: 55 },
    { name: "Control Systems", level: 75 },
  ],
  embedded: [
    { name: "Arduino", level: 85 },
    { name: "ESP32/ESP8266", level: 80 },
    { name: "Raspberry Pi", level: 10 },
    { name: "STM32", level: 10 },
    { name: "PIC Microcontrollers", level: 5 },
  ],
  iot: [
    { name: "MQTT Protocol", level: 88 },
    { name: "LoRaWAN", level: 75 },
    { name: "Bluetooth LE", level: 80 },
    { name: "WiFi Networking", level: 90 },
    { name: "Sensor Integration", level: 92 },
  ],
  programming: [
    { name: "C/C++", level: 90 },
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 75 },
  ],
  tools: [
    { name: "KiCad", level: 75 },
    { name: "Altium Designer", level: 45 },
    { name: "MATLAB/Simulink", level: 30 },
    { name: "PlatformIO", level: 40 },
    { name: "Git/GitHub", level: 70 },
  ],
};

export const education = [
  {
    degree: "B.E. Electrical Engineering",
    institution: "President University",
    period: "2026 - Present",
    description: "Focus on Embedded Systems, IoT, and Power Electronics",
    achievements: ["-"],
  },
  {
    degree: "High School",
    institution: "SMA Swasta Bina Bangsa 01",
    period: "2023 - 2026",
    description: "STEM Concentration with Advanced Physics and Computer Science",
    achievements: ["Valedictorian", "PMR Chairperson", "Science Fair Bronze Medal"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Home IoT System",
    shortDescription: "Complete home automation system with voice control and mobile app",
    fullDescription: `Create an IoT smart home project that can be controlled via a website by connect to ESP32 WiFi. The website contains information from sensors and includes on-off control for lamp.
Using a combination of several sensors: an LDR sensor for light, humidity and temperature sensors, a PIR sensor for object detection, and an ultrasonic sensor for distance detection.`,
    technologies: ["ESP32", "IoT", "Inovation", "Ultrasonic", "TensorFlow Lite", "Sensor"],
    category: "IoT",
    featured: true,
    status: "Completed",
    github: "https://github.com/adityapratama/smart-home",
    demo: "https://smarthome.adityapratama.dev",
    images: [
      "/img/smart home.jpeg",
      "/img/smart home 1.jpeg",
      "/img/smart home 2.jpeg",
    ],
    highlights: [
      "Reduced home energy consumption by 30%",
      "Custom PCB design with 4-layer board",
      "Machine learning for usage pattern detection",
    ],
  },
  {
    id: 2,
    title: "Weather Monitoring Station",
    shortDescription: "IoT-based environmental monitoring with cloud analytics",
    fullDescription: `Create weather monitoring via a website. The website displays real time data from temperature and humidity sensors and LDR sensors. The website also displays weather forecasts and the last update time. Weather predictions are based on calculations from sensor results.`,
    technologies: ["Data Processing", "ESP32", "Node.js", "IoT", "WebDev", "Sensory Integration"],
    category: "IoT",
    featured: true,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/weather-station)",
    demo: "[weather.adityapratama.dev](https://weather.adityapratama.dev)",
    images: [
      "/img/weather station.jpeg",
      "/img/cuaca 1.jpeg",
      "/img/cuaca 2.jpeg",
    ],
    highlights: [
      "Modern web interface with responsive design",
      "Real-time data visualization",
      "Weather prediction accuracy of 85%",
    ],
  },
  {
    id: 3,
    title: "Digital Attendance System",
    shortDescription: "RFID-based attendance tracking with card recognition and data logging",
    fullDescription: `Developed a digital attendance system using RFID technology and ESP32. The system identifies registered cards, records attendance data, and displays information through an integrated interface`,
    technologies: ["RFID", "C++", "ESP32", "OLED", "Django", "TensorFlow"],
    category: "Embedded Systems",
    featured: true,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/attendance-system)",
    demo: "[attendance.adityapratama.dev](https://attendance.adityapratama.dev)",
    images: [
      "/img/absensi.jpeg",
      "/img/hadir 1.jpeg",
      "/img/hadir 2.jpeg",
    ],
    highlights: [
      "99.5% card accuracy",
      "Sub-second attendance logging",
      "Handles 500+ users simultaneously",
      "Deployed in educational institutions",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "Modern, interactive portfolio with HTML, CSS, and JavaScript",
    fullDescription: `A cutting-edge personal portfolio website showcasing modern web development techniques and design principles. Built with React and featuring smooth animations, 3D interactive elements, and a premium glassmorphism design aesthetic.

    The website demonstrates proficiency in frontend development while serving as a professional showcase for engineering projects and achievements. Special attention was given to performance optimization, accessibility, and responsive design.`,
    technologies: ["Style CSS", "Tailwind CSS", "Framer Motion", "HTML", "JavaScript"],
    category: "Web Development",
    featured: false,
    status: "Completed",
    github: "https://github.com/Adty-ach/CodingCamp-220925-adtyprtma",
    demo: "[adityapratama.dev](https://adityapratama.dev)",
    images: [
      "/img/porto web.jpeg",
      "/img/porto 1.jpeg",
      "/img/porto 2.jpeg",
    ],
    highlights: [
      "Lighthouse score of 98+",
      "Fully responsive design",
      "Interactive 3D elements",
      "Optimized for performance",
    ],
  },
  {
    id: 5,
    title: "Scientific Research Project for ISPO Preparation",
    shortDescription: "Conducted a two-year research project exploring the potential of moss as a natural indoor humidifier.",
    fullDescription: `The study focused on the ability of moss to retain and release moisture, contributing to improved indoor humidity levels. Through this project, I gained experience in scientific research, experimentation, data analysis, literature review, and problem-solving while developing environmentally friendly solutions for indoor environments.chievements.`,
    technologies: ["Research", "Environmental Science", "Project Planning", "Chritical Thinking", "Scientific Writing"],
    category: "Research",
    featured: false,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/ISPO-Research-Project)",
    demo: "[adityapratama.dev](https://adityapratama.dev)",
    images: [
      "/img/ispo.jpeg",
      "/img/ispo 1.jpeg",
      "/img/ispo 2.jpeg",
    ],
    highlights: [
      "Moss Potential as Natural Humidifier",
      "Two-Year Research Project",
      "Gained Experience in Scientific Research and Experimentation",
      "Developed Skills in Data Analysis and Scientific Writing",
    ],
  },
  {
    id: 6,
    title: "FLS3N 2025 Short Film Production Project",
    shortDescription: "Collaborated in the production of a short film for the National Student Arts Festival and Competition (FLS3N) 2025.",
    fullDescription: `Contributed as a scriptwriter, video editor, and videographer, participating in the creative development, filming process, and post-production. This experience strengthened my storytelling, visual communication, teamwork, and multimedia production skills.`,
    technologies: ["Film Production", "Scriptwriting", "Directing", "Editing", "Collaboration"],
    category: "Creative",
    featured: false,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/FLS3N-Short-Film-Project)",
    demo: "[adityapratama.dev](https://adityapratama.dev)",
    images: [
      "/img/filpen.jpeg",
      "/img/filpen 1.jpeg",
      "/img/filpen 2.jpeg",
    ],
    highlights: [
      "Collaborative Film Production",
      "Scriptwriting and Editing",
      "Visual Communication and Storytelling",
      "Teamwork and Multimedia Production",
    ],
  },
];

export const experiences = [
  {
    title: "PMR Chairperson in Unit SMAS Bina Bangsa 01",
    company: "Yayasan Wilmar Bina Bangsa",
    location: "Central Kalimantan, Indonesia",
    period: "2024 - 2026",
    type: "organization",
    description: "Led and coordinated PMR activities and programs within the school. Organized health awareness campaigns and social service activities. Managed team coordination and event planning. Developed leadership, communication, and problem-solving skills through organizational activities.",
    achievements: [
      "Medical Support and Event Duty",
      "Achievement in PMI Galaksi Event",
      "Diklat PMR Wira Unit SMAS Bina Bangsa 01",
    ],
  },

];

export const achievements = [
  {
    title: "Informatics Gold Medalist - OSKANTARA",
    organization: "PUSKANTARA",
    year: "2025",
    description: "Awarded a Gold Medal (Grade A+) in the 2025 National Puskantara Science Olympiad (OSKANTARA) for the Informatics category.",
    icon: "trophy",
  },
  {
    title: "Physics Bronze Medalist - OSSN",
    organization: "Jenius Competition",
    year: "2025",
    description: "Awarded a Bronze Medal (Grade B+) in the 2025 National Puskantara Science Olympiad (OSSN) for the Physics category.",
    icon: "trophy",
  },
  {
    title: "Coding Camp Software Engineering RevoU",
    organization: "RevoU",
    year: "2025",
    description: "Completed a Software Engineering Coding Camp by RevoU, learning HTML, CSS, JavaScript, and web development fundamentals. Developed and deployed a website as a final project, strengthening front-end development and problem solving skills.",
    icon: "code",
  },
  {
    title: "Ecopreneur 2025: Sustainable Business Innovation",
    organization: "BEM FEB UNDIP",
    year: "2025",
    description: "Participation in Ecopreneur 2025 organized by BEM FEB Universitas Diponegoro, focusing on entrepreneurship, sustainable business growth, innovation, and leadership development.",
    icon: "certificate",
  },
  {
    title: "AI Engineer Fundamental",
    organization: "Dicoding Academy",
    year: "2025",
    description: "Completed training in Artificial Intelligence, Machine Learning, and Python programming. Gained foundational knowledge in AI concepts, data analysis, machine learning workflows, and practical problem solving using Python.",
    icon: "award",
  },
  {
    title: "FLS3N 2025 - Short Film Competition Participant",
    organization: "FLS3N",
    year: "2025",
    description: "Participated in the 2025 FLS3N Short Film Competition",
    icon: "book",
  },
  {
    title: "Creative Video Competition - PMR Wira Se-Kalimantan Tengah",
    organization: "KSR Unit Universitas Palangkaraya",
    year: "2025",
    description: "participation in the PMR Wira Creative Video Competition organized by KSR PMI Universitas Palangkaraya, demonstrating involvement in creative media production and digital storytelling.",
    icon: "star",
  },
  {
    title: "English Bronze Medalist - ONSB",
    organization: "Braindicator",
    year: "2025",
    description: "Awarded a Bronze Medal (Grade B+) in the 2025 National Puskantara Science Olympiad (ONSB) for the English category.",
    icon: "trophy",
  },
  {
    title: "1st Place Winner - School Photography Competition",
    organization: "SMA Swasta Bina Bangsa 01",
    year: "2025",
    description: "Awarded 1st Place in the 2025 School Photography Competition.",
    icon: "trophy",
  },

];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
