import { ProgramContent } from "./types";

export const hunhar: ProgramContent = {
  name: "Hunhar",
  promise: "The student-first freelancing platform",
  metaDescription: "AI-assisted skill verification, flexible bidding, real projects.",
  about: [
    "Hunhar is where student freelancers build real portfolios before they graduate.",
    "Unlike traditional internships, Hunhar lets you pick your pace, stack your wins, and prove yourself in the market.",
    "Every project you complete strengthens your Hunhar badge.",
  ],
  steps: [
    {
      number: 1,
      title: "Build your profile",
      description: "Tell us your skills, link your work, and set your rates.",
    },
    {
      number: 2,
      title: "Bid on projects",
      description: "Browse real work posted by clients.",
    },
    {
      number: 3,
      title: "Deliver and earn",
      description: "Complete the project, get feedback, build your badge.",
    },
    {
      number: 4,
      title: "Level up your career",
      description: "Your Hunhar badge follows you into internships and jobs.",
    },
  ],
  features: [
    {
      icon: "shield",
      title: "AI-Verified Skills",
      description: "Your expertise is validated.",
    },
    {
      icon: "briefcase",
      title: "Real Projects",
      description: "Work on assignments from startups and agencies.",
    },
    {
      icon: "trending-up",
      title: "Build Your Portfolio",
      description: "Every project becomes proof of what you can do.",
    },
    {
      icon: "award",
      title: "Hunhar Badge",
      description: "Earn credibility that speaks louder than a resume.",
    },
    {
      icon: "users",
      title: "Peer Community",
      description: "Learn from and collaborate with freelancers at your stage.",
    },
    {
      icon: "zap",
      title: "Flexible and Fair",
      description: "Work when you want. You keep what you earn.",
    },
  ],
  audience: [
    {
      title: "For students",
      description: "Earn income, build a portfolio, gain real-world experience.",
    },
    {
      title: "For recent grads",
      description: "Hunhar lets you show, not just tell.",
    },
  ],
  faq: [
    {
      question: "What kind of projects are posted?",
      answer: "Design, development, writing, marketing, data, and more.",
    },
    {
      question: "How much can I earn?",
      answer: "It depends on your skill, scope, and market.",
    },
    {
      question: "Do I need prior experience?",
      answer: "No. Your skill matters more than your history.",
    },
    {
      question: "How does the badge work?",
      answer: "Your badge reflects completed projects. Use it on your resume.",
    },
  ],
  cta: {
    headline: "Ready to start freelancing?",
    subheading: "Join thousands of students earning on Hunhar.",
    buttons: [
      { label: "Get on the waitlist", variant: "primary" },
      { label: "Learn more", variant: "ghost" },
    ],
  },
  form: {
    headline: "Join the Hunhar waitlist",
    roles: ["Designer", "Developer", "Writer", "Marketer", "Data analyst"],
    variant: "waitlist",
  },
};
