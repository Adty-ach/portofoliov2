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
    fullDescription: `A comprehensive smart home automation system that integrates lighting, climate control, security, and appliance management into a unified platform. The system uses a custom ESP32-based hub that communicates with various sensors and actuators throughout the home.

    Key features include voice control integration with Google Assistant and Alexa, real-time monitoring through a custom React Native mobile app, and machine learning-based energy optimization that reduces power consumption by up to 30%.`,
    technologies: ["ESP32", "MQTT", "React Native", "Node.js", "TensorFlow Lite", "PCB Design"],
    category: "IoT",
    featured: true,
    status: "Completed",
    github: "https://github.com/adityapratama/smart-home",
    demo: "https://smarthome.adityapratama.dev",
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop)",
    ],
    highlights: [
      "Reduced home energy consumption by 30%",
      "Custom PCB design with 4-layer board",
      "Over-the-air firmware updates",
      "Machine learning for usage pattern detection",
    ],
  },
  {
    id: 2,
    title: "Weather Monitoring Station",
    shortDescription: "IoT-based environmental monitoring with cloud analytics",
    fullDescription: `A professional-grade weather monitoring station that collects and analyzes environmental data including temperature, humidity, pressure, wind speed, UV index, and air quality. The station uses LoRaWAN for long-range communication and can operate off-grid with solar power.

    Data is transmitted to a cloud platform where it's processed and visualized through an interactive dashboard. The system also provides predictive weather analytics using historical data and machine learning models.`,
    technologies: ["LoRaWAN", "ESP32", "Solar Power", "AWS IoT", "Python", "Grafana"],
    category: "IoT",
    featured: true,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/weather-station)",
    demo: "[weather.adityapratama.dev](https://weather.adityapratama.dev)",
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&h=600&fit=crop)",
    ],
    highlights: [
      "10km LoRaWAN transmission range",
      "Solar-powered with 7-day battery backup",
      "Real-time data visualization",
      "Weather prediction accuracy of 85%",
    ],
  },
  {
    id: 3,
    title: "Digital Attendance System",
    shortDescription: "RFID-based attendance tracking with facial recognition",
    fullDescription: `An innovative attendance management system combining RFID technology with facial recognition for enhanced security and accuracy. The system eliminates buddy punching and provides real-time attendance analytics for educational institutions and businesses.

    The hardware consists of custom-designed RFID readers with integrated cameras, connected to a central server that processes attendance data. The web-based dashboard provides comprehensive reporting, including attendance trends, late arrivals, and absence patterns.`,
    technologies: ["RFID", "OpenCV", "Raspberry Pi", "PostgreSQL", "Django", "TensorFlow"],
    category: "Embedded Systems",
    featured: true,
    status: "Completed",
    github: "[github.com](https://github.com/adityapratama/attendance-system)",
    demo: "[attendance.adityapratama.dev](https://attendance.adityapratama.dev)",
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop)",
    ],
    highlights: [
      "99.5% facial recognition accuracy",
      "Sub-second attendance logging",
      "Handles 500+ users simultaneously",
      "Deployed in 3 educational institutions",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "Modern, interactive portfolio with 3D elements and animations",
    fullDescription: `A cutting-edge personal portfolio website showcasing modern web development techniques and design principles. Built with React and featuring smooth animations, 3D interactive elements, and a premium glassmorphism design aesthetic.

    The website demonstrates proficiency in frontend development while serving as a professional showcase for engineering projects and achievements. Special attention was given to performance optimization, accessibility, and responsive design.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js", "Vite"],
    category: "Web Development",
    featured: false,
    status: "Completed",
    github: "https://github.com/Adty-ach/CodingCamp-220925-adtyprtma",
    demo: "[adityapratama.dev](https://adityapratama.dev)",
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop)",
    ],
    highlights: [
      "Lighthouse score of 98+",
      "Fully responsive design",
      "Interactive 3D elements",
      "Optimized for performance",
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
