export interface Certificate {
  id: string;
  title: string;
  institution?: string;
  category: string;
  description: string;
  image: string;
  certificateUrl?: string;
}

export const certifications: Certificate[] = [
  {
    id: "01",
    title: "Industrial Training — Flutter & Dart",
    category: "Industrial Training",
    description:
      "Completed industrial training focused on Flutter and Dart development and practical mobile application development.",
    image: "/certificates/flutter-dart.svg",
  },
  {
    id: "02",
    title: "Fundamentals of Object-Oriented Programming",
    institution: "IIT Kanpur",
    category: "Programming Fundamentals",
    description:
      "Training/course covering fundamental object-oriented programming concepts and programming principles.",
    image: "/certificates/iit-kanpur-oop.svg",
  },
  {
    id: "03",
    title: "Java Programming",
    category: "Programming",
    description:
      "Completed Java programming training/course covering core programming concepts and Java fundamentals.",
    image: "/certificates/java-programming.svg",
  },
];
