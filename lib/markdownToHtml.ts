import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
// import remarkPrism from "remark-prism";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    // .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown);
//   return result.toString();
// }
