import type { Metadata } from "next";
import ProgramPage from "@/components/page/ProgramPage";
import { PROGRAMS } from "@/lib/content";

const content = PROGRAMS["the-guild"];

export const metadata: Metadata = {
  title: `${content.name} — ${content.promise}`,
  description: content.metaDescription,
};

export default function Page() {
  return <ProgramPage content={content} />;
}
