import { Brain, Bug, Cloud, Layers, Monitor, Palette, Server, Smartphone, type LucideIcon } from "lucide-react";

export const categoryIconMap: Map<string, LucideIcon> = new Map([
  ["frontend development", Monitor],
  ["backend development", Server],
  ["full stack engineering", Layers],
  ["devops / cloud", Cloud],
  ["cloud", Cloud],
  ["ui/ux design", Palette],
  ["ui", Palette],
  ["ux", Palette],
  ["data science / ai", Brain],
  ["ai", Brain],
  ["mobile development", Smartphone],
  ["quality assurance (qa)", Bug],
]);