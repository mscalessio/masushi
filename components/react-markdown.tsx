"use client";

import Image from "next/image";

import ReactMarkdownBase from "react-markdown";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeProps } from "react-markdown/lib/ast-to-react";

export default function ReactMarkdown({
  content,
  imageSizes,
}: {
  content: string;
  imageSizes?: Record<string, { width: number; height: number }>;
}) {
  const components = {
    img: (props: any) => {
      if (imageSizes && imageSizes[props.src]) {
        const { src, alt } = props;
        const { width, height } = imageSizes[props.src];
        return <Image src={src} alt={alt} width={width} height={height} />;
      } else {
        return <img {...props} />;
      }
    },
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          showLineNumbers
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };
  return (
    <ReactMarkdownBase
      className="mt-8 prose dark:prose-invert hover:prose-a:text-teal-500 dark:hover:prose-a:text-teal-400"
      components={components}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdownBase>
  );
}
