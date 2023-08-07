import { Metadata } from "next";

import { getAllArticles } from "@/lib/api";

import ArticleType from "@/interfaces/article";

import PageHeader from "@/components/page-header";
import ArticleList from "./article-list";

const title =
  "Writing on software design, company building, and the aerospace industry.";
const description =
  "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
  };
}

export default async function ArticleListPage() {
  const articles = (await getAllArticles([
    "title",
    "date",
    "excerpt",
    "slug",
  ])) as unknown as ArticleType[];
  return (
    <>
      <PageHeader title={title} description={description} />
      <ArticleList>
        {articles.map(({ title, excerpt, date, slug }) => (
          <ArticleList.Item
            key={title}
            title={title}
            excerpt={excerpt}
            date={date}
            slug={slug}
          />
        ))}
      </ArticleList>
    </>
  );
}
