import { format } from "date-fns";
import Link from "next/link";
import React from "react";

export default function ArticleList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col max-w-3xl space-y-16">{children}</div>
      </div>
    </div>
  );
}

interface ArticleListItemProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const ArticleListItem = ({
  title,
  date,
  excerpt,
  slug,
}: ArticleListItemProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="relative flex flex-col items-start md:col-span-3 group">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <Link href={`/articles/${slug}`}>
            <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          dateTime={date}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {format(new Date(date), "MMMM d, yyyy")}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {excerpt}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500"
        >
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="w-4 h-4 ml-1 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <time
        className="relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500"
        dateTime={date}
      >
        {format(new Date(date), "MMMM d, yyyy")}
      </time>
    </article>
  );
};

ArticleList.Item = ArticleListItem;
