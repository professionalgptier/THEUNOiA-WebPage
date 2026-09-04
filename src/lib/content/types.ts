export interface ProgramContent {
  name: string;
  promise: string;
  metaDescription: string;
  about: string[];
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  audience: Array<{
    title: string;
    description: string;
  }>;
  cities?: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    headline: string;
    subheading: string;
    buttons: Array<{
      label: string;
      variant: "primary" | "ghost";
    }>;
  };
  form: {
    headline: string;
    roles?: string[];
    variant: "waitlist" | "apply" | "register";
  };
}
