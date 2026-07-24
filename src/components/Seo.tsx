import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

/** Lightweight per-route metadata for the SPA. */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = description;
  }, [title, description]);
  return null;
}
