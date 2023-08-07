import { format } from "date-fns";
import sizeOf from "image-size";
import { join } from "path";

// import markdownToHtml from "@/lib/markdownToHtml";

import ArticleType from "@/interfaces/article";
import ReactMarkdown from "@/components/react-markdown";

export default async function Article({ article }: { article: ArticleType }) {
  // const content = await markdownToHtml(article.content || "");
  const imageSizes: Record<string, { width: number; height: number }> = {};

  // A regular expression to iterate on all images in the post
  const iterator = article.content.matchAll(/\!\[.*]\((.*)\)/g);

  let match: IteratorResult<RegExpMatchArray, any>;

  while (!(match = iterator.next()).done) {
    const [, src] = match.value;
    try {
      // Images are stored in `public`
      const { width, height } = sizeOf(join("public", src));
      imageSizes[src] = { width: width!, height: height! };
    } catch (err) {
      console.error(`Can’t get dimensions for ${src}:`, err);
    }
  }

  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {article.title}
        </h1>
        <time
          dateTime={article.date}
          className="flex items-center order-first text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          <span className="ml-3">
            {format(new Date(article.date), "MMMM d, yyyy")}
          </span>
        </time>
      </header>
      <ReactMarkdown content={article.content} imageSizes={imageSizes} />
      {/* <div
        className="mt-8 prose dark:prose-invert hover:prose-a:text-teal-500 dark:hover:prose-a:text-teal-400"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div> */}
    </article>
  );
}
