export interface PersonalProject {
  number: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  technicalHighlights: string[];
  image: string;
  url?: string;
  githubUrl?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    number: "01",
    title: "Travel Booking & Itinerary Planner",
    category: "Full-Stack Web Application",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "SMTP",
    ],
    description:
      "A full-stack travel booking and itinerary planning application designed to help users organize trips, manage travel plans and create a more structured travel experience.",
    technicalHighlights: [
      "Python backend",
      "Flask web framework",
      "HTML/CSS frontend",
      "JavaScript interactions",
      "Supabase integration",
      "SMTP-based email functionality",
      "Travel booking workflow",
      "Itinerary planning",
    ],
    image: "/projects/travel-planner.jpg",
  },
  {
    number: "02",
    title: "JARVIS — Personal AI Agent",
    category: "AI / Python / Personal Agent",
    technologies: [
      "Python",
      "speech_recognition",
      "pyttsx3",
      "webbrowser",
    ],
    description:
      "A personal AI agent built with Python to explore intelligent assistance, automation and computer-based interactions.",
    technicalHighlights: [
      "Python-based architecture",
      "Python standard & specialized libraries",
      "Personal assistant functionality",
      "Automation routines",
      "Intelligent computer interaction",
    ],
    image: "/projects/jarvis.jpg",
  },
  {
    number: "03",
    title: "Real Estate Mobile App",
    category: "Mobile Application",
    technologies: [
      "Flutter",
      "Dart",
      "Android Studio",
    ],
    description:
      "A real estate mobile application developed during my industrial training using Flutter and Dart, focused on property browsing and a clean mobile user experience.",
    technicalHighlights: [
      "Flutter development",
      "Dart programming",
      "Mobile UI development",
      "Property listing interface",
      "Real estate application flow",
      "Responsive mobile layouts",
    ],
    image: "/projects/real-estate-app.jpg",
  },
];
