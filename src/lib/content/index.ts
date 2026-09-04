import { hunhar } from "./hunhar";
import { mentoria } from "./mentoria";
import { guild } from "./guild";

export const PROGRAMS = {
  hunhar,
  mentoria,
  "the-guild": guild,
} as const;

export type ProgramSlug = keyof typeof PROGRAMS;
