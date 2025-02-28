const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'GK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gokhula Krishnan Thangavel',
  role: 'Grad Student at ',
  description:
    "Hi! I am pursuing a Master's in Computer Science at Northeastern University, with a passion for building cohesive and robust solutions. Through hands-on projects, I have honed my technical skills and developed intuitive, user-friendly web applications. I seek opportunities to apply my expertise and collaborate with like-minded professionals.",
  resume:
    'https://drive.google.com/file/d/1kHuAy9NydCinsSu5lSbOgpUXOZyOcJPi/view?usp=sharing',
  social: {
    linkedin:
      'https://www.linkedin.com/in/gokhula-krishnan-thangavel-05685b1b7/',
    github: 'https://github.com/GokhulaKrishnan/',
    leetcode: 'https://leetcode.com/u/Gokhula_Krishnan/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Image Manipulator And Enhancer',
    description:
      'Developed a Java-based image manipulation application with a Swing UI, featuring 15 filters, partial image preview, compression, and real-time histogram display. Designed with MVC architecture for scalability and maintainability. Achieved 90% test coverage with JUnit and supported commands via console, CLI, and interactive GUI.',
    stack: ['Java', 'JUnit'],
    sourceCode:
      'https://github.com/GokhulaKrishnan/ImageManipulatorAndEnhancer',
  },
  {
    name: 'Kanbas',
    description:
      'Built Kanbas, a Canvas-inspired OLMS for managing courses, assignments, grades, quizzes, and modules. Designed role-based access control with real-time CRUD operations. Developed scalable RESTful APIs using Node.js and MongoDB, ensuring high performance for 1,000+ concurrent users. Enhanced system reliability by debugging critical backend issues with Postman and Chrome DevTools.',
    stack: ['HTML', 'CSS', 'React', 'Redux', 'Express', 'Node.js', 'MongoDB'],
    sourceCode:
      'https://p--lovely-gingersnap-ab8753.netlify.app/#/Kanbas/Account/Signin',
  },
  {
    name: 'LinkedIn Clone',
    description:
      "The LinkedIn Clone is a feature-rich web application created with React, Redux, and Firebase that replicates the core functionality of LinkedIn. Users can create accounts and share posts in the same way as LinkedIn does. A dynamic news feed and secure user authentication are part of the project. The project's goal is to create a seamless and safe professional networking platform.",
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://linkedin-clone-6bd15.web.app',
  },
  {
    name: 'Streamify',
    description:
      'Built a responsive video streaming platform with ReactJS, featuring authentication, a home page, and video playback via React Router. Integrated Fuse.js for accurate search, allowing users to find content easily, even with partial or misspelled terms. Designed a modular UI with Styled Components, minimizing CSS redundancy and ensuring cross-device compatibility.',
    stack: ['ReactJs', 'Router', 'Firebase', 'FuseJs', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/GokhulaKrishnan/Streamify',
  },

  {
    name: 'Banking App',
    description:
      'Developed a web-based Banking Application Model using JavaScript, simulating a functional banking system. Features include secure user authentication, real-time balance tracking, money transfers, loan requests, and account deletion. Implemented automatic logout after inactivity to enhance security and protect sensitive financial data.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/GokhulaKrishnan/Banking-app',
  },

  {
    name: 'Namma Kadai',
    description:
      'Developed a Food Ordering Application using React, enabling users to browse restaurant menus, add items to a dynamic cart, and place orders seamlessly. The cart updates in real time, displaying item count and total cost. Planned enhancements include user accounts, restaurant reviews, real-time order tracking, and payment integration for an improved ordering experience.',
    stack: ['HTML', 'CSS', 'React'],
    sourceCode: 'https://gokhulakrishnan.github.io/Food-App/',
  },
]

const workExperience = [
  {
    name: 'Software Developer Intern',
    company: 'Revolite',
    work_years: 'Jun 2023 - Jul 2023',
    workExperiencePoints: [
      'Developed a role-based dashboard for an application called Edu360 using React, SASS, TypeScript, Spring Boot, and PostgreSQL',
      'Identified, debugged, and fixed more than 10 critical bugs by closely collaborating with cross-functional teams, significantly improving application stability.',
      'Optimized database queries and refactored legacy code to enhance performance and ensure a seamless user experience.',
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
]

const education = [
  {
    name: 'Northeastern University',
    description: "Master's in Computer Science",
    // gpa: "9.04 / 10",
    years: '2024 - Present',
    isPublication: true,
    isEducation: true,
  },
  {
    name: 'SRM University',
    description: 'B.Tech in Computer Science and Engineering',
    gpa: '9.72 / 10',
    years: '2020 - 2024',
    isPublication: true,
    isEducation: true,
  },
]

const skills = {
  Python: 90,
  Java: 80,
  JavaScript: 95,
  C: 60,
  'C++': 90,
  SpringBoot: 80,
  'Unit Tests': 80,
  CSS: 80,
  HTML: 90,
  Git: 80,
  RestAPI: 90,
  NodeJS: 80,
  PostgreSQL: 80,
  MySQL: 80,
  MongoDB: 85,
  Firebase: 75,
}

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   "Java",
//   "Python",
//   "C",
//   "JavaScript",
//   "SpringBoot",
//   "FastAPI",
//   "Flask",
//   "Django",
//   "ReactJS",
//   "VueJS",
//   "ExpressJS",
//   "NodeJS",
//   "Git",
//   "Google Cloud",
//   "Microsoft Azure",
//   ""

// ]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gokhulakrishnant@gmail.com',
}

export { header, about, projects, skills, contact, education, workExperience }
