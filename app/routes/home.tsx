import type { Route } from "./+types/home";
import { ArticlesList } from "../features/articles/ArticlesList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main article page" },
    { name: "description", content: "Main article page" },
  ];
}

export default function Home() {
  return <ArticlesList />;
}
