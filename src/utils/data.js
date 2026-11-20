import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoAngular,
} from "react-icons/io5";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb, SiAzuredevops, SiApachekafka, SiApacheairflow, SiJira, SiConfluence } from "react-icons/si";
import { FaAws,FaPython,FaDatabase } from "react-icons/fa";
import medicineChecker from "../assets/medicineExpiryChecker.png";
import AlumniTrackingApp from "../assets/AlumniTrackingApp.png";
import EmployeeMS from "../assets/EmployeeMS.png";
import TaskManagement from "../assets/TaskManagement.png";
import OnlineStore from "../assets/OnlineStore.png";
import WeatherApp from "../assets/Weather.png";

export const PROFILE = {
  name: "Syed Ali",
  tagline:
    "Passionate Data/Software Engineer with strong technical mind-set and problem solving analytical thinking abilities to excel the potentials",
  jobTitle: "Data/Software Engineer",
  location: "United Kingdom",
  yearsOfExperience: "10+",
  skills: [
    "Java",
    "Python",
    "Snowflake",
    "Airflow",
    "DBT",
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
    icon: BiLogoJava,
    title: "Java",
    expertise: "Midlevel",
  },
  {
    id: "02",
    icon: FaPython,
    title: "Python",
    expertise: "Midlevel",
  },
  {
    id: "03",
    icon: FaDatabase,
    title: "SQL",
    expertise: "Midlevel",
  },
  {
    id: "04",
    icon: IoLogoJavascript,
    title: "Snowflake",
    expertise: "Midlevel",
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    expertise: "Midlevel",
  },
  {
    id: "06",
    icon: FaAws,
    title: "AWS",
    expertise: "Midlevel",
  },
  {
    id: "07",
    icon: SiApachekafka,
    title: "Kafka",
    expertise: "Midlevel",
  },
  {
    id: "08",
    icon: SiApacheairflow,
    title: "Airflow",
    expertise: "Midlevel",
  },
   {
    id: "09",
    icon: IoLogoReact,
    title: "React",
    expertise: "Midlevel",
  },
  {
    id: "10",
    icon: IoLogoAngular,
    title: "Angular",
    expertise: "Midlevel",
  },
  {
    id: "11",
    icon: BiLogoSpringBoot,
    title: "Spring Boot",
    expertise: "Midlevel",
  },
  {
    id: "12",
    icon: SiAzuredevops,
    title: "Azure",
    expertise: "Midlevel",
  },
  {
    id: "13",
    icon: SiJira,
    title: "Jira",
    expertise: "Midlevel",
  },
  {
    id: "14",
    icon: SiConfluence ,
    title: "Confluence",
    expertise: "Midlevel",
  }
];

export const WORK_EXPERIENCE = [
  {
    id: "1",
    company: "INFOSYS Limited, London",
    position: "Data Engineer/ Software Engineer",
    duration: "2022-Present",
    responsibilities:
      "# Data Engineer: June 2026 – Present
Client: Goldman Sachs, London (Financial Services / Investment Banking)
•	Architected canonical data models in Goldman Sachs Legend and implemented Slowly Changing Dimensions (SCD Type 2) in Snowflake.
•	Built modular, automated ELT/ETL pipelines using Apache Airflow, dbt, and SQL across Snowflake and RDBMS sources.
•	Real-Time Batch Ingestion: Engineered high-throughput and low latency data ingestion pipelines integrating Apache Kafka, REST APIs, and AWS S3 to process trade and market data feeds.
•	Containerised data pipelines and services with Docker and automated build, test, and release workflows using GitLab CI/CD and GitHub, reducing deployment errors.
•	Data Governance & Collaboration: Documented end-to-end data lineage, schema definitions, and operational run books in Confluence delivering sprint milestones via Jira.
",
  },
  {
    id: "2",
    company: "INFOSYS Limited, London",
    position: "Data Engineer/ Software Engineer",
    duration: "2022-Present",
    responsibilities:
      "# Applications / Data Engineer | March 2022 – May 2026
Client Engagement: Scottish and Southern Energy, SSE plc (Energy Services)
•	Enterprise Data Integration: Developed, tested, and supported Marketflow, an enterprise Java / Spring Boot data-sharing platform facilitating mission-critical industry data exchanges across development and production environments.
•	Pipeline Monitoring & Incident Management: Monitored two-way data flows, diagnosed data discrepancies, and resolved production incidents via ServiceNow CSM/CRM, protecting data availability and SLA compliance.
•	Data Validation & Quality: Executed end-to-end testing and validation across upstream and downstream data interfaces within Agile delivery teams.",
  },
{ id: "3",
  company: "Caley Ocean systems Ltd, Glasgow",
    position: "Senior Consultant",
    duration: "2019-2021",
  responsibilities:
      "# Performed structural and mechanical system design, analysis, and technical documentation for complex engineering projects in accordance with industry standards.",
},
  {
    id: "4",
    company: "National Oilwell Varco, Glasgow",
    position: "Senior Consultant",
    duration: "2017-2018",
    responsibilities:
      "# Generated compliance matrix, data sheet, product specification, Basis of Design (BoD) standard operating procedure (SOP), test plan/procedure. # Involved in Finite Element Analysis (FEA) and hand calculation to validate the final physical product using industry standard simulation packages.",
  },
  {
    id: "5",
    company: "Aquaterra Energy Limited, Norwich",
    position: "Design Engineer",
    duration: "2012-2016",
    responsibilities:
      "# Designed prototypes of Topsides, Well Head Support Structure (WSS), Centralisers, Running Tools, Drilling Templates, Tension Ring, Riser Monitoring System (RMS), Lifting System, Test Jigs etc. #	Prepared Factory Acceptance Test report, In house testing, Installation procedure, and Front End Engineering Design report, manufacturing drawings, Bill of Materials, Schematics and Layout.",
  },
];

export const ABOUT_ME = {
  introduction:
    "Data/Software Engineer with 4+ years of enterprise data platform, pipeline engineering, and systems integration experience across Investment Banking (Goldman Sachs) and Energy (SSE plc), supported by an MSc in Engineering (Distinction). Specialised in designing scalable ETL/ELT pipelines, medallion architectures, dimensional data models (SCD Type 2), and real-time streaming workflows using Snowflake, Goldman Sachs Legend, dbt, Apache Airflow, Apache Kafka, AWS S3, Python, and SQL. Proven track record delivering reliable, production-grade data solutions in regulated Agile environments.",
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
