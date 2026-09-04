import { ProgramContent } from "./types";

export const guild: ProgramContent = {
  name: "The Guild",
  promise: "On-ground chapters in 12 Indian cities",
  metaDescription: "Local meetups, speaker sessions, demo days, and campus ambassadors.",
  about: [
    "The Guild is THEUNOiA in your city. We run monthly chapters in 12 Indian cities where students meet offline.",
    "Guild chapters host speaker sessions from founders and leaders, demo days where members showcase projects.",
    "Join a Guild chapter and become part of a thriving local community.",
  ],
  steps: [
    {
      number: 1,
      title: "Find your chapter",
      description: "We have chapters in 12 cities.",
    },
    {
      number: 2,
      title: "Attend a meetup",
      description: "Join monthly in-person sessions. Meet peers and hear from speakers.",
    },
    {
      number: 3,
      title: "Share your work",
      description: "Showcase your project at a demo day.",
    },
    {
      number: 4,
      title: "Build connections",
      description: "Network with fellow students, mentors, and collaborators.",
    },
  ],
  features: [
    {
      icon: "map-pin",
      title: "12 City Chapters",
      description: "Bangalore, Mumbai, Delhi, Hyderabad, Pune, Chennai, and more.",
    },
    {
      icon: "users",
      title: "Monthly Meetups",
      description: "In-person gatherings with food and community.",
    },
    {
      icon: "mic",
      title: "Speaker Sessions",
      description: "Hear from founders and leaders in your city.",
    },
    {
      icon: "trophy",
      title: "Demo Days",
      description: "Showcase your work and get real-time feedback.",
    },
    {
      icon: "star",
      title: "Campus Ambassadors",
      description: "Lead your chapter. Build community at your college.",
    },
    {
      icon: "zap",
      title: "Collaboration Hub",
      description: "Find co-founders and teammates.",
    },
  ],
  audience: [
    {
      title: "For students",
      description: "Meet other students in your city who are freelancing and building.",
    },
    {
      title: "For ambassadors",
      description: "Lead your Guild chapter. We provide everything you need.",
    },
  ],
  cities: [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Indore",
  ],
  faq: [
    {
      question: "When and where do chapters meet?",
      answer: "First Monday of each month, 6–8 PM local time.",
    },
    {
      question: "Is it free to attend?",
      answer: "Yes. Meetups are free. We provide snacks and drinks.",
    },
    {
      question: "How do I become a campus ambassador?",
      answer: "Apply on our app. We look for passion and community spirit.",
    },
    {
      question: "Can I start a chapter in my city?",
      answer: "Yes. Email us and we'll support your launch.",
    },
  ],
  cta: {
    headline: "Join a Guild chapter in your city.",
    subheading: "Monthly meetups and a community of students building together.",
    buttons: [
      { label: "Find my chapter", variant: "primary" },
      { label: "Learn about ambassador roles", variant: "ghost" },
    ],
  },
  form: {
    headline: "Get chapter updates",
    variant: "register",
  },
};
