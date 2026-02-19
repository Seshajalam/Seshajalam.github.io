import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRobot,
  FaTerminal,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiStreamlit,
  SiScikitlearn,
  SiNumpy,
  SiKeras,
  SiVsco,
  SiJupyter,
  SiGooglecolab,
  SiOpenai,
  SiGooglegemini,
  SiMeta,
  SiAnthropic,
} from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resumes", href: "#resumes" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seshajalam-g-37545a214/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/seshajalam0",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:seshajalamg@gmail.com",
    icon: FaEnvelope,
  },
];

export const stats = [
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "" },
  { label: "Model Accuracy", value: 95, suffix: "%" },
  { label: "Resumes", value: 3, suffix: "" },
];

export const projects = [
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition",
    subtitle: "Real-Time YouTube Control System",
    descriptionFile: "/project_descriptions/hand.txt",
    video: "https://www.youtube.com/embed/EjSEVPDqWfI",
    techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Keras", "PyAutoGUI"],
    metrics: [
      { label: "Accuracy", value: "~95%" },
      { label: "Latency", value: "<0.2s" },
      { label: "Gestures", value: "6 classes" },
    ],
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection",
    subtitle: "Automated Chest X-Ray Analysis",
    descriptionFile: "/project_descriptions/pneumonia.txt",
    video: "https://www.youtube.com/embed/Wi4hqOZdHUU",
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
    metrics: [
      { label: "Accuracy", value: "93.8%" },
      { label: "AUC-ROC", value: "0.96" },
      { label: "Models", value: "CheXNet+FPN" },
    ],
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: FaJsSquare },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Streamlit", icon: SiStreamlit },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Keras", icon: SiKeras },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "MySQL", icon: SiMysql },
      { name: "VS Code", icon: SiVsco },
      { name: "Cursor AI", icon: FaRobot },
      { name: "Claude Code", icon: FaTerminal },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Colab", icon: SiGooglecolab },
    ],
  },
  {
    title: "AI Models",
    skills: [
      { name: "GPT", icon: SiOpenai },
      { name: "Gemini Flash", icon: SiGooglegemini },
      { name: "LLaMA", icon: SiMeta },
      { name: "Claude Opus 4.5", icon: SiAnthropic },
      { name: "Claude Sonnet", icon: SiAnthropic },
      { name: "Claude Haiku", icon: SiAnthropic },
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Evolve Robot Lab",
    period: "Oct 2025 — Present",
    description:
      "Promoted from AI Research Intern to AI Engineer. Developing and deploying production-grade ML models, optimizing inference pipelines, and building end-to-end AI solutions for robotics applications.",
  },
  {
    role: "AI Research Intern",
    company: "Evolve Robot Lab",
    period: "Jun 2025 — Sep 2025",
    description:
      "Conducted research in computer vision and deep learning for robotic systems. Built gesture recognition prototypes, trained object detection models, and contributed to research publications.",
  },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Kingston Engineering College, Vellore",
    period: "2019 — 2023",
    description:
      "Core foundation in data structures, algorithms, databases, and software engineering principles.",
  },
  {
    degree: "M.Tech in AI & Machine Learning",
    institution: "VIT University, Vellore",
    period: "2023 — 2025",
    description:
      "Specialization in deep learning, computer vision, and natural language processing. Research focus on medical image analysis and gesture recognition systems.",
  },
];

export const resumes = [
  {
    title: "ML Resume",
    description: "Machine Learning & AI focused",
    file: "/pdfs/sesha_ml.pdf",
    icon: "ml",
  },
  {
    title: "General Resume",
    description: "Full-stack & general purpose",
    file: "/pdfs/seshajalam_general.pdf",
    icon: "general",
  },
  {
    title: "C++ Resume",
    description: "Systems & competitive programming",
    file: "/pdfs/sesha_cpp.pdf",
    icon: "cpp",
  },
];

export const contactInfo = {
  email: "seshajalamg@gmail.com",
  phone: "+91-6379064475",
  location: "Vellore, India",
};
