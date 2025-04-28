import { IoCodeSlashOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { PiDatabaseThin } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";

import eventique from '../assets/img-rag-architecture-model.jpg';
import car_accident from '../assets/download.png';
import natours from '../assets/covid19.png';

const skillIconClass = 'w-6 h-6 md:w-8 md:h-8'

export const RESUME_LINK = 'https://drive.google.com/file/d/1VZlpDb1AezUMgRrR5WZ23MPkmhH1bUb1/view?usp=sharing'

export const SKILLS = [
  {
    category: 'languages',
    icon: <IoCodeSlashOutline className={skillIconClass}/>,
    values: ['python', 'java', 'HTML, CSS']
  },
  {
    category: 'Machine Learning & AI',
    icon: <CiServer className={skillIconClass}/>,
    values: ['Deep learning (Neural Networks)', 'Transformers', 'TensorFlow', 'LLMs', 'PyTorch', 'NLP']
  },
  {
    category: 'databases',
    icon: <PiDatabaseThin className={skillIconClass}/>,
    values: ['mySql', 'mongoDB', 'Neo4j']
  },
  {
    category: 'Cloud & MLOps',
    icon: <CiGrid42 className={skillIconClass}/>,
    values: ['AWS(SageMaker)', 'Snowflake', 'Databricks', 'Docker', 'Kubernetes']
  },
  {
    category: 'Data Analytics, Visualization & Tools',
    icon: <VscTools className={skillIconClass}/>,
    values: ['Pandas', 'NumPy', 'Scikit-Learn', 'Power BI', 'Matplotlib', 'Git', 'VS Code', 'Excel', 'PowerPoint', 'Linux', 'JIRA', 'Postman']
  },
  
]

export const EXPERIENCES = [
  {
    year: 'May 2022 - Nov 2023',
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'India',
    description: `Worked on video analytics solutions, with the majority of my efforts focused on building algorithms 
    for detecting black screen frames, extracting large-scale frame data, applying clustering and random 
    forest models for threshold identification, and streamlining the detection process for improved operational efficiency`,
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Machine learning',
      'Image Processing',
    ],
  },
  {
    year: 'May 2022 - Jun 2022',
    role: 'Intern',
    company: 'Tata Consultancy Services',
    location: 'India',
    description: `
    Improved deployment reliability and observability by containerizing services with Docker, 
    orchestrating with Kubernetes, and integrating Prometheus and Grafana for real-time monitoring.`,
    technologies: [
      'Linux',
      'Docker',
      'Kubernetes',
      'Prometheus/Grafana',
    ],
  },
  {
    year: 'Aug 2021 - Dec 2021',
    role: 'Data Science Intern',
    company: 'Dhyanahitha',
    location: 'India',
    description: `Built a credit risk prediction model using machine learning (logistic regression, CatBoost) that improved loan default detection. 
    Analyzed data with SQL and created dashboards to visualize key risk factors.`,
    technologies: ['Python', 'Machine Learning', 'Power BI', 'SQL', 'Pandas', 'NumPy', 'Matplotlib'],
  },
];

export const PROJECTS = [
  {
    title: 'Advanced NLP Research with LLaMA2',
    image: eventique,
    description: `Implemented novel RAG architecture using LangChain and Pinecone, achieving 25% improvement in response accuracy. Conducted extensive experimentation with different embeddings models and retrieval strategies.`,
    technologies: [
      'Python',
      'AWS',
      'LLM',
      'LangChain',
      'Pinecone',
      'CI/CD',
    ],
  },
  {
    title: 'HR Analytics Dashboard with Power BI',
    image: car_accident,
    description:
      'Designed an HR analytics dashboard that visualized employee leave trends, improving workforce management insights.',
    technologies: ['PowerBI', 'Data Analysis', 'Excel', 'SQL', 'Data Modelling'],
  },
  {
    title: 'COVID-19 Case Prediction (Time Series Forecasting)',
    image: natours,
    description:
      'Trained time series ML models (XGBoost, Random Forest, SVM) to forecast COVID-19 cases, achieving 92% accuracy.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Scikit-Learn',
      'SQL',
      'Machine Learning',
    ],
  },
];
