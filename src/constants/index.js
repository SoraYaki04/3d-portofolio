export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Face Recognition',
    desc: 'The Face Recognition App is a Python-based application designed to recognize faces from a camera feed in real time.',
    subdesc:
      'Developed with Python, OpenCV, and machine learning models, this application ensures accurate and efficient face detection. It can be integrated into various systems such as security, attendance, or personalized user experiences.',
    href: 'https://github.com/SoraYaki04/face_recognition',
    texture: '/textures/project/facerec.mp4',
    logo: '/assets/python.svg',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #333333',
      boxShadow: '0px 0px 60px 0px #30699866', 
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'OpenCV',
        path: 'assets/opencv.svg',
      }
    ],
  },
  {
    title: 'Anime Info Bot',
    desc: 'Anime Info Bot is a Telegram bot designed to help users quickly find information about their favorite anime, characters, and episodes directly within Telegram.',
    subdesc:
      'Built with Node.js and the Telegram Bot API, this bot integrates with anime databases like MyAnimeList to deliver real-time details such as synopsis, ratings, genres, and release schedules. It is lightweight, fast, and designed to enhance the anime discovery experience for fans.',
    href: '',
    texture: '/textures/project/sorabot.mp4',
    logo: '/assets/telegram.svg',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #333333',
      boxShadow: '0px 0px 60px 0px #1DB95466',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      }
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5.5, 0] : [0.25, -6.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mobile and Desktop Developer Intern',
    pos: 'Junior Developer',
    duration: '2025 - Present',
    title: "Currently doing my internship as a Software Developer Intern, contributing to real projects, learning teamwork, and applying front-end and back-end development skills.",
    icon: '/assets/delphi.svg',
    animation: 'thinking',
  },
  {
    id: 2,
    name: 'Self-Learning Web Development',
    pos: '',
    duration: 'Ongoing',
    title: "Actively learning front-end development with JavaScript. Exploring frameworks and libraries like React and Tailwind CSS to improve my coding skills.",
    icon: '/assets/javascript.svg',
    animation: 'thankful',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'blowkiss',
  // },
];