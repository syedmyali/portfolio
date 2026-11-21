import { IoLogoReact, IoLogoAngular } from "react-icons/io5";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import {
  SiMongodb,
  SiAzuredevops,
  SiApachekafka,
  SiApacheairflow,
  SiJira,
  SiConfluence,
  SiSnowflake,
} from "react-icons/si";
import { FaAws, FaPython, FaDatabase } from "react-icons/fa";
import medicineChecker from "../assets/medicineExpiryChecker.png";
import AlumniTrackingApp from "../assets/AlumniTrackingApp.png";
import EmployeeMS from "../assets/EmployeeMS.png";
import TaskManagement from "../assets/TaskManagement.png";
import OnlineStore from "../assets/OnlineStore.png";
import WeatherApp from "../assets/Weather.png";

export const PROFILE = {
  name: "Syed Ali",
  tagline:
    "Passionate Data/Software Engineer with a strong technical mindset and analytical problem-solving abilities, driven to realise my full potential",
  jobTitle: "Data/Software Engineer",
  location: "United Kingdom",
  yearsOfExperience: "10+",
  skills: [
    "Java",
    "Python",
    "Snowflake",
    "Airflow",
    "dbt",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "SQL",
    "NoSQL",
    "Spring Boot",
    "Microservices",
    "REST API",
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
      "Responsive web application to check expiry dates and track stock quantities of the available products for any business",
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
    projectName: "Employee Management App",
    techStack: "Java, Spring Boot, Angular, MySQL",
    description:
      "Web application which manages employee details. Users can add, show, update, delete, search and filter employee details",
    image: EmployeeMS,
    githubLink: "https://github.com/syedmyali/Employee-Management-App",
  },
  {
    id: "04",
    projectName: "Task Management Microservices",
    techStack: "Java, Spring Boot, PostgreSQL, REST APIs",
    description:
      "The microservices consist of three services: User Service, Task Service and Submission Service",
    image: TaskManagement,
    githubLink: "https://github.com/syedmyali/Task-Management-Microservices",
  },
  {
    id: "05",
    projectName: "Weather Application",
    techStack: "React JS, Bootstrap, OpenWeather API",
    description:
      "The application provides the weather, local time and temperature of the searched location",
    image: WeatherApp,
    githubLink: "https://github.com/syedmyali/Weather-App",
  },
  {
    id: "06",
    projectName: "Online Store App",
    techStack: "React JS, JSON API, CSS",
    description:
      "Online store application developed to add, update, delete and search products",
    image: OnlineStore,
    githubLink: "https://github.com/syedmyali/online-store-app",
  },
];

export const SKILLS = [
  {
    id: "01",
    icon: BiLogoJava,
    title: "Java",
    expertise: "Mid-level",
  },
  {
    id: "02",
    icon: FaPython,
    title: "Python",
    expertise: "Mid-level",
  },
  {
    id: "03",
    icon: FaDatabase,
    title: "SQL",
    expertise: "Mid-level",
  },
  {
    id: "04",
    icon: SiSnowflake,
    title: "Snowflake",
    expertise: "Mid-level",
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    expertise: "Mid-level",
  },
  {
    id: "06",
    icon: FaAws,
    title: "AWS",
    expertise: "Mid-level",
  },
  {
    id: "07",
    icon: SiApachekafka,
    title: "Kafka",
    expertise: "Mid-level",
  },
  {
    id: "08",
    icon: SiApacheairflow,
    title: "Airflow",
    expertise: "Mid-level",
  },
  {
    id: "09",
    icon: IoLogoReact,
    title: "React",
    expertise: "Mid-level",
  },
  {
    id: "10",
    icon: IoLogoAngular,
    title: "Angular",
    expertise: "Mid-level",
  },
  {
    id: "11",
    icon: BiLogoSpringBoot,
    title: "Spring Boot",
    expertise: "Mid-level",
  },
  {
    id: "12",
    icon: SiAzuredevops,
    title: "Azure",
    expertise: "Mid-level",
  },
  {
    id: "13",
    icon: SiJira,
    title: "Jira",
    expertise: "Mid-level",
  },
  {
    id: "14",
    icon: SiConfluence,
    title: "Confluence",
    expertise: "Mid-level",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "1",
    company: "Infosys Limited, London",
    position: "Data Engineer",
    duration: "June 2026 - Present",
    responsibilities: `# Data Engineer: June 2026 - Present
Client: Goldman Sachs, London (Financial Services / Investment Banking)
• Architected canonical data models in Goldman Sachs Legend and implemented Slowly Changing Dimensions (SCD Type 2) in Snowflake.
• Built modular, automated ELT/ETL pipelines using Apache Airflow, dbt, and SQL across Snowflake and RDBMS sources.
• Real-Time and Batch Ingestion: Engineered high-throughput, low-latency data ingestion pipelines integrating Apache Kafka, REST APIs, and AWS S3 to process trade and market data feeds.
• Containerised data pipelines and services with Docker and automated build, test, and release workflows using GitLab CI/CD and GitHub, reducing deployment errors.
• Data Governance & Collaboration: Documented end-to-end data lineage, schema definitions, and operational runbooks in Confluence, delivering sprint milestones via Jira.`,
  },
  {
    id: "2",
    company: "Infosys Limited, London",
    position: "Applications / Data Engineer",
    duration: "June 2022 - May 2026",
    responsibilities: `# Applications / Data Engineer | June 2022 - May 2026
Client Engagement: Scottish and Southern Energy, SSE plc (Energy Services)
• Enterprise Data Integration: Developed, tested, and supported Marketflow, an enterprise Java / Spring Boot data-sharing platform facilitating mission-critical industry data exchanges across development and production environments.
• Pipeline Monitoring & Incident Management: Monitored two-way data flows, diagnosed data discrepancies, and resolved production incidents via ServiceNow CSM/CRM, protecting data availability and SLA compliance.
• Data Validation & Quality: Executed end-to-end testing and validation across upstream and downstream data interfaces within Agile delivery teams.`,
  },
  {
    id: "3",
    company: "Caley Ocean Systems Ltd, Glasgow",
    position: "Senior Consultant",
    duration: "2019 - 2021",
    responsibilities: `# Performed structural and mechanical system design, analysis, and technical documentation for complex engineering projects in accordance with industry standards.`,
  },
  {
    id: "4",
    company: "National Oilwell Varco, Glasgow",
    position: "Senior Consultant",
    duration: "2017 - 2018",
    responsibilities: `# Generated compliance matrix, data sheet, product specification, Basis of Design (BoD), standard operating procedure (SOP), and test plan/procedure.
# Performed Finite Element Analysis (FEA) and hand calculations using industry-standard simulation packages to validate the final physical product.`,
  },
  {
    id: "5",
    company: "Aquaterra Energy Limited, Norwich",
    position: "Design Engineer",
    duration: "2012 - 2016",
    responsibilities: `# Designed prototypes of Topsides, Well Head Support Structure (WSS), Centralisers, Running Tools, Drilling Templates, Tension Ring, Riser Monitoring System (RMS), Lifting System, Test Jigs, etc.
# Prepared Factory Acceptance Test reports, in-house testing, installation procedures, Front End Engineering Design reports, manufacturing drawings, Bills of Materials, schematics, and layouts.`,
  },
];

export const ABOUT_ME = {
  introduction:
    "Data/Software Engineer with 4+ years of enterprise data platform, pipeline engineering, and systems integration experience across Investment Banking (Goldman Sachs) and Energy (SSE plc), supported by an MSc in Engineering (Distinction). Specialised in designing scalable ETL/ELT pipelines, medallion architectures, dimensional data models (SCD Type 2), and real-time streaming workflows using Snowflake, Goldman Sachs Legend, dbt, Apache Airflow, Apache Kafka, AWS S3, Python, and SQL. Proven track record delivering reliable, production-grade data solutions in regulated Agile environments.",
  background: "I completed my Master's and Bachelor's degrees in Engineering.",
  skills:
    "My favourite technologies: Java, Python, SQL (MySQL, Oracle), NoSQL (MongoDB), HTML, CSS, JavaScript, TypeScript, Bootstrap, React, Angular, Maven, Spring Boot, REST API, Microservices, MVC, JDBC, JUnit, Postman, AWS, Azure, Docker, Git, GitHub, Citrix.",
  projects:
    "Some of my notable projects are: Weather App (JavaScript), Signup-Login Full Stack App with authentication and authorization (Java, Spring Boot, React), Task Management Microservices (Java, Spring Boot), Employee Management Full Stack App (Java, Spring Boot, Angular).",
  interests:
    "Outside of my professional work, I enjoy travelling, reading newspapers, and playing cricket.",
  careerGoals:
    "I aim to continue sharpening my skills and become a more knowledgeable software developer by exploring the new technologies to come.",

  stats: {
    yearsOfExperience: "10+",
    numberOfProjects: 15,
    certificationsEarned: 5,
  },
};
