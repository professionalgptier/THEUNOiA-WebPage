import { ProgramContent } from "./types";

export const mentoria: ProgramContent = {
  name: "Mentoria",
  promise: "Mentorship that meets you where you are",
  metaDescription: "1:1 mentors, peer circles, office hours, and live feedback.",
  about: [
    "Mentoria connects you with mentors who've walked your path.",
    "We run peer circles, monthly office hours, and 1:1 mentorship arcs.",
    "Your Mentoria badge shows employers that you're serious about growth.",
  ],
  steps: [
    {
      number: 1,
      title: "Find your mentor match",
      description: "Browse mentors by expertise and pick someone you'll learn from.",
    },
    {
      number: 2,
      title: "Join a peer circle",
      description: "Monthly meetups with peers and a mentor.",
    },
    {
      number: 3,
      title: "Get live feedback",
      description: "Submit your work and get mentor input during office hours.",
    },
    {
      number: 4,
      title: "Earn your badge",
      description: "Complete your arc and carry the badge into your career.",
    },
  ],
  features: [
    {
      icon: "user-check",
      title: "Vetted Mentors",
      description: "Every mentor is verified and credible.",
    },
    {
      icon: "users",
      title: "Peer Circles",
      description: "Meet peers monthly and build friendships.",
    },
    {
      icon: "mic",
      title: "Live Office Hours",
      description: "Get answers in real time.",
    },
    {
      icon: "target",
      title: "Mentorship Arcs",
      description: "Structured arcs focused on your goals.",
    },
    {
      icon: "award",
      title: "Mentoria Badge",
      description: "Proof that you're committed to growth.",
    },
    {
      icon: "heart",
      title: "Human-first",
      description: "Support for you as a person, not just a learner.",
    },
  ],
  audience: [
    {
      title: "For students",
      description: "Get honest feedback, career clarity, and a mentor who remembers what it's like to be you.",
    },
    {
      title: "For career changers",
      description: "Navigate a pivot with someone who's been there.",
    },
  ],
  faq: [
    {
      question: "What's the time commitment?",
      answer: "Typically 2–4 hours per month.",
    },
    {
      question: "How much does it cost?",
      answer: "Mentoria is in beta and currently free for students.",
    },
    {
      question: "Can I switch mentors?",
      answer: "Yes. If it's not the right fit, we'll help you find a better match.",
    },
    {
      question: "What if I don't finish my arc?",
      answer: "Life happens. You can pause or extend without penalty.",
    },
  ],
  cta: {
    headline: "Find your mentor.",
    subheading: "Mentoria connects you with people who've been exactly where you are.",
    buttons: [
      { label: "Get on the waitlist", variant: "primary" },
      { label: "Meet our mentors", variant: "ghost" },
    ],
  },
  form: {
    headline: "Apply for Mentoria",
    variant: "apply",
  },
};
