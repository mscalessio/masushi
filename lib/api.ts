import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import ArticleType from "@/interfaces/article";

const articlesDirectory = join(process.cwd(), "content/articles");
const projectsDirectory = join(process.cwd(), "content/projects");

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getArticleSlugs();
  const posts = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}