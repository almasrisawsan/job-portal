import { Box, type LucideIcon } from "lucide-react";
import { categoryIconMap } from "./icons";
import type { ICardItem, ICategoryFromAPI } from "~/@types";

const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, " ").trim();

export const pickTheIcon = (name: string): LucideIcon => {

    return categoryIconMap.get(normalize(name)) ?? Box;
}

const ACRONYMS = new Set([
  "UI", "UX", "QA", "AI", "API", "SQL", "HTML", "CSS", "JS", "TS",
]);

function titleWord(w: string) {
  
  if (/^devops$/i.test(w)) return "DevOps";

  
  if (ACRONYMS.has(w.toUpperCase())) return w.toUpperCase();

  
  return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
}

export function normalizeDisplayName(name: string): string {
  if (!name) return "";

  let s = name.trim().replace(/\s+/g, " ");

  
  s = s.replace(/\s*\/\s*/g, " / ");

  
  return s
    .split(" ")
    .map((tok) => {
      if (tok === "/" || tok === "-" || tok === "&") return tok;

      const paren = tok.match(/^\((.*)\)$/);
      if (paren) {
        const inner = paren[1];
        const normalizedInner = ACRONYMS.has(inner.toUpperCase())
          ? inner.toUpperCase()
          : titleWord(inner);
        return `(${normalizedInner})`;
      }

      return titleWord(tok);
    })
    .join(" ");
}

export function mapCategoriesToCardItems(arr: ICategoryFromAPI[]): ICardItem[] {
  if (!Array.isArray(arr)) return [];
  return arr.map((c) => ({
    id: c.id,
    Icon: pickTheIcon(c.name),
    title: normalizeDisplayName(c.name),
  }));
}

export const keyOf = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

export function buildCategoryIndex(
  cats: ICategoryFromAPI[]
): Map<string, number> {
  const map = new Map<string, number>();
  for (const c of cats ?? []) {
    const idNum = Number(c.id);
    if (!Number.isNaN(idNum)) {
      map.set(keyOf(c.name), idNum);
    }
  }
  return map;
}