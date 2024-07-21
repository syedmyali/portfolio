import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoAngular,
} from "react-icons/io5";
import { BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiAzuredevops } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import medicineChecker from "../assets/medicineExpiryChecker.png";
import AlumniTrackingApp from "../assets/AlumniTrackingApp.png";
import EmployeeMS from "../assets/EmployeeMS.png";
import TaskManagement from "../assets/TaskManagement.png";
import OnlineStore from "../assets/OnlineStore.png";
import WeatherApp from "../assets/Weather.png";

export const PROFILE = {
  name: "Syed Ali",
  tagline:
    "Passionate Software Developer with strong development mind-set and problem solving analytical thinking abilities to excel the potentials",
  jobTitle: "Full Stack Developer",
  location: "United Kingdom",
  yearsOfExperience: "10+",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "SQL",
    "NoSQL",
    "Spring Boot",
    "Micro Services",
    "Rest API",
    "Git",
    "AWS",
    "Azure",
  ],
  email: "syounusa@yahoo.com",
  phone: "+44-7949972554",
  website: "https://syedmyali.github.io/portfolio",
};

export const PROJECTS = [
  {
    id: "01",
    projectName: "Expiry Checking App",
    techStack: "JavaScript, HTML, CSS",
    description:
      "Responsive web application to check expiry date and track stock quantity of the available products for any business",
    image: medicineChecker,
    githubLink: "https://github.com/syedmyali/Medicine-Expiry-Checker",
  },
  {
    id: "02",
    projectName: "Alumni Tracking App",
    techStack: "Python, SQLite, Tkinter",
    description:
      "Desktop application where alumni can register their information so that others can find when and where needed",
    image: AlumniTrackingApp,
    githubLink: "https://github.com/syedmyali/University_Alumni_Tracking_App",
  },
  {
    id: "03",
    projectName: "Employeee Management App",
    techStack: "Java, Spring Boot, Angular, MySQL",
    description:
      "Web application which manages employee details. User can add, show, update, delete, search and filter employee details",
    image: EmployeeMS,
    githubLink: "https://github.com/syedmyali/Employee-Management-App",
  },
  {
    id: "04",
    projectName: "Task Management Microservices",
    techStack: "Java, Spring Boot, PostgreSQL, Rest API's",
    description:
      "The Microservices consists of three services: User Service, Task Service and Submission Service",
    image: TaskManagement,
    githubLink: "https://github.com/syedmyali/Task-Management-Microservices",
  },
  {
    id: "05",
    projectName: "Weather Application",
    techStack: "React JS, Bootstrap, Openweather API",
    description:
      "The application provides weather, local time and temperature of the searched location",
    image: WeatherApp,
    githubLink: "https://github.com/syedmyali/Weather-App",
  },
  {
    id: "06",
    projectName: "Online Store App",
    techStack: "React JS, Json API , CSS",
    description:
      "Online Store Application developed to add, update delete and search products",
    image: OnlineStore,
    githubLink: "https://github.com/syedmyali/online-store-app",
  },
];

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    expertise: "Midlevel",
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    expertise: "Upper Midlevel",
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React",
    expertise: "Midlevel",
  },
  {
    id: "04",
    icon: IoLogoAngular,
    title: "Angular",
    expertise: "Midlevel",
  },
  {
    id: "05",
    icon: BiLogoSpringBoot,
    title: "Spring Boot",
    expertise: "Midlevel",
  },
  {
    id: "06",
    icon: BiLogoJava,
    title: "Java",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: SiMysql,
    title: "MySQL",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: BiLogoPostgresql,
    title: "PostGreSQL",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: SiMongodb,
    title: "MongoDB",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: FaAws,
    title: "AWS",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: SiAzuredevops,
    title: "Azure",
    expertise: "Midlevel",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "1",
    company: "INFOSYS Limited, London",
    position: "Senior Associate: Software Development",
    duration: "2022-Present",
    responsibilities:
      "# Currently consulting in B-C and C-B messaging application, Marketflow for the client, Scottish and Southern Electricity Network (SSE PLC). # Developed full stack applications like File Management Utility App for Infosys Accelerate Programme and enterprise clients.",
  },
  {
    id: "2",
    company: "Caley Ocean systems Ltd, Glasgow",
    position: "Senior Consultant",
    duration: "2019-2021",
    responsibilities:
      "# Carried out Stress/strain/vibration/fatigue and over all structural integrity analysis of mechanical/hydraulic systems in aid of ANSYS, Solid Works, Mathcad and hand calculations. #	Produced 3D prototypes and 2D drawings to relevant standards and best practices.",
  },
  {
    id: "3",
    company: "National Oilwell Varco, Glasgow",
    position: "Senior Consultant",
    duration: "2017-2018",
    responsibilities:
      "# Generated compliance matrix, data sheet, product specification, Basis of Design (BoD) standard operating procedure (SOP), test plan/procedure. # Involved in Finite Element Analysis (FEA) and hand calculation to validate the final physical product using industry standard simulation packages.",
  },
  {
    id: "4",
    company: "Aquaterra Energy Limited, Norwich",
    position: "Design Engineer",
    duration: "2012-2016",
    responsibilities:
      "# Designed prototypes of Topsides, Well Head Support Structure (WSS), Centralisers, Running Tools, Drilling Templates, Tension Ring, Riser Monitoring System (RMS), Lifting System, Test Jigs etc. #	Prepared Factory Acceptance Test report, In house testing, Installation procedure, and Front End Engineering Design report, manufacturing drawings, Bill of Materials, Schematics and Layout.",
  },
];

export const ABOUT_ME = {
  introduction:
    "Hi, I am an Engineering Professional with several years experience in the energy and aerospace industry, where I have worked for different companies in engineering, analysis and design role. All of my skills set are in core technical areas and liaise with suppliers, clients and vendors which will be helpful transferable skills in the software development industry.",
  background:
    "I completed Master's and Bachalor's degree in Engineering & Technical Modules. ",
  skills:
    "My favourite technologies: Java, Python, SQL (MySQL, Oracle), NOSQL (Mongo DB), HTML, CSS, JavaScript, Typescript, Bootstrap, React, Angular, Maven, Spring Boot, Rest API, Micro services, MVC, JDBC, JUnit, Postman, AWS, Azure, Docker, Git, Git Hub, Citrix.",
  projects:
    "Some of my notable projects are: Weather App (JavaScript), Signup-Login Full Stack App with authentication and authorization (Java, Spring Boot, React), Task Management Micro Services (Java, Spring Boot), Employee Management Full Stack App (Java, Spring Boot, Angular).",
  interests:
    " Outside of my professional works I enjoy travelling, reading news papers, playing cricket.",
  careerGoals:
    "I aim to continue sharpening my skills to be more knowledgable software developer by exploring the new technologies to come in the future.",

  stats: {
    yearsOfExperience: "10+",
    numberOfProjects: 15,
    certificationsEarned: 5,
  },
};
