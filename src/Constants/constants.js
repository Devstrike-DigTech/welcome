/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  citrab,
  onboarding,
  ims,
  avatar,
  namek,
  natours,
  photo,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    'Empowering Businesses Through Innovative Digitization Solutions: Meet DevStrike',

    `Welcome to DevStrike, where we specialize in revolutionizing businesses through cutting-edge digitization software. 
    With a combined experience of 5 years in the industry, we take pride in our global recognition for delivering top-notch services in website and mobile app development, 
    graphics and content design, product and strategy planning, and computer network configuration and administration`,

    `We understand that each client is unique and therefore we recognize a different approach on
    how we can deliver properly considering the expectations of each one. With the mix of our
    technical expertise and experience, we provide nothing else but excellence.
  We provide tech solutions to upcoming businesses and startups with an objective to digitise
  their services and processes as well as provide a springboard to exploit their potentials.`,

    `We also take pride in our outstanding, and no-nonsense client-care services being known as
one of the top quality care support specialists globally. With this, we guarantee that any and
all your concerns regarding our software will be addressed properly and in a timely manner.`,
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Bookmi',
    description: `BookMi is a versatile travel platform where users can seamlessly book tours, 
    hotels, car rentals, and even purchase houses. With integrated features for leaving comments,
    ratings, and reviews, it ensures a dynamic and interactive travel experience. 
    Discover and plan your perfect getaway with ease.`,
    image: namek,
    source_code_link: 'https://book-mi.vercel.app/',
    demo_link: 'https://book-mi.vercel.app/',
  },
  {
    name: 'Natours Website Project',
    description: `In this project, we undertook the design of the website for Natours, a prominent 
    tours management and booking platform. Our objective was to enhance the user experience and 
    streamline the booking process for travelers seeking unforgettable adventures.
     The revamped website boasts a fresh, contemporary design, 
     coupled with seamless navigation and captivating imagery to inspire wanderlust. 
     Through meticulous attention to detail and user-centric features,
     we aimed to create a platform that not only showcases Natours' offerings but also facilitates effortless exploration 
    and booking for users.`,
    image: natours,
    source_code_link: 'https://natours-8jhz.onrender.com/',
    demo_link: 'https://natours-8jhz.onrender.com/',
  },
  {
    name: 'Techville',
    description: `We proudly developed the landing page for Techville, a forward-thinking software development company. 
    This modern, user-friendly platform showcases their innovative services and expertise in technology solutions. 
    With a focus on clean design and seamless navigation, 
    the Techville site serves as a powerful digital presence, attracting clients and partners in the tech industry.`,
    image: photo,
    source_code_link: 'https://techville-landing-page.vercel.app/',
    demo_link: 'https://techville-landing-page.vercel.app/',
  },
];

const projects2 = [
  {
    name: 'Envision Management',
    description: `Our team developed a user-friendly and efficient inventory management system that provides real-time tracking of stock levels, 
    streamlined product and supplier management, and seamless order processing. The system includes robust reporting and analytics for informed decision-making, 
    integrates with other business systems, and prioritizes security through authentication and data encryption.`,
    image: ims,
    source_code_link: 'https://github.com/Devstrike-DigTech',
    demo_link: 'https://github.com/Devstrike-DigTech',
  },
  {
    name: 'WalkIt',
    description: `WalkIt is an android demo application that simulates the flow and functionality of an e-commerce customer end application. The case study industry in this demo is a Shoes store e-commerce application where the user can view various shoes by brands, bookmark or add desired shoes to cart, login, select the desired shoe size and colour, as well as make payment for the product. 
    All data in this demo are simulated but would entertain the same flow as with live data.`,
    image: onboarding,
    source_code_link: 'https://drive.google.com/drive/folders/1QewdhjNIzaPdsIfkfXLfU_G0jC3l5u6k?usp=sharing',
    demo_link: 'https://drive.google.com/drive/folders/1QewdhjNIzaPdsIfkfXLfU_G0jC3l5u6k?usp=sharing',
  },
  {
    name: 'Coal City Connect',
    description: `Coal City Connect is a mobile application with the simple objective of connecting various customers on the platform in respect to the services they could need within a vicinity.\n' +
      The application also contains other features such as: a marketplace, an events management centre, music and eyewitness uploads, news and so on.
      It was developed individually for both android platform and iOS platform.`,
    image: citrab,
    source_code_link: 'https://drive.google.com/file/d/1Bs1jZ--jVNj9i_oz_bIctGIHTQ9HzgbT/view?usp=sharing',
    demo_link: 'https://drive.google.com/file/d/1Bs1jZ--jVNj9i_oz_bIctGIHTQ9HzgbT/view?usp=sharing',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'Mobile Application Development',
    icon: 'https://static.vecteezy.com/system/resources/previews/006/430/483/original/flat-app-development-icon-app-coding-and-app-settings-concept-vector.jpg',
    description:
      'Specializing in mobile application development, we craft cutting-edge solutions for iOS and Android platforms. From concept to deployment, our team ensures robust, scalable, and engaging mobile experiences tailored to your business objectives and user needs.',
  },
  {
    id: 'css2',
    title: 'Software Development',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvJPmOzA60D1qCB7KNeq7N440VQx27SDh_Kl0Z8WOeubf_EobOmMN2w8pozWoqcp4Frc&usqp=CAU',
    description:
    'Our software development services encompass full-stack development expertise across a range of technologies. We deliver custom software solutions that align with your unique requirements, leveraging agile methodologies to ensure timely delivery and continuous improvement.',
  },
  {
    id: 'css1',
    title: 'UI/UX Design',
    icon: 'https://www.nyusoft.com/wp-content/themes/twentytwentyone-child/images/services/UI-UX-design-services/banner-image-ui-ux.png',
    description:
    'Our UI/UX design services focus on creating intuitive, visually appealing, and user-friendly interfaces for digital products. We prioritize user research, wireframing, prototyping, and iterative design to ensure seamless user experiences across web and mobile platforms.',
  },
  {
    id: 'css',
    title: 'Software Prototyping',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN2URl3dZzvPlmJAZJuE1u7AiUj_Jsvht14fFL9-6WQ&s',
    description:
    'We offer comprehensive software prototyping services to validate concepts, gather feedback, and iterate quickly. Through rapid prototyping techniques, we transform ideas into tangible prototypes, allowing stakeholders to visualize and refine product features before development, ultimately reducing time-to-market and minimizing risks.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
  projects2
};
