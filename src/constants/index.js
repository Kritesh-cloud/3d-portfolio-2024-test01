import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mysql,
  java,
  git,
  figma,
  phonepay,
  encrypter,
  clothingStore,
  newsRestApi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Web Development",
    icon: web,
  },
  {
    title: "Angular Web Development",
    icon: creator,
  },
  {
    title: "RESTful Api Development",
    icon: backend,
  },
  {
    title: "Microservices Architecture",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Product Developer",
    company_name: "Phone pay",
    icon: phonepay,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Complete initial training on Spring Boot, related technologies, and the company's development processes.",
      "Familiarize with the codebase, development environment, and version control system ",
      "Study Spring Boot features and best practices.",
      "Learn about microservices architecture, RESTful APIs, and database integration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Clothing Web Store",
    description:
      "Develop a clothing web store using HTML, CSS for front-end design, and Java for back-end processing, enabling users to browse, purchase, and manage fashion items online.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: clothingStore,
    source_code_link: "https://github.com/Kritesh2nd/willow2",
    live_demo_link: "",
  },
  {
    name: "Encrypter and Decrypter",
    description:
      "Crafted a Simple Encryption Web Project, fortifying data security with user-friendly encryption techniques. Users can encrypt and decrypt a text message with a password.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: encrypter,
    source_code_link: "https://github.com/Kritesh2nd/encrypter",
    live_demo_link: "https://kritesh2nd.github.io/encrypter/",
  },
  {
    name: "News REST Api",
    description:
      "I developed a dynamic RESTful News API with Spring Boot, featuring secure JWT authentication and multi-datasource integration for flexible, scalable endpoints.",
    tags: [
      {
        name: "spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: newsRestApi,
    source_code_link: "https://github.com/Kritesh2nd/news",
    live_demo_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
