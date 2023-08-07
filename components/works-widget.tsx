import Image from "next/image";
import React from "react";

const works = [
  {
    company: "Planetaria",
    companyLogo: "planetaria.svg",
    role: "CEO",
    start: "2019",
    end: "Present",
  },
  {
    company: "Airbnb",
    companyLogo: "airbnb.svg",
    role: "Product Designer",
    start: "2014",
    end: "2019",
  },
  {
    company: "Facebook",
    companyLogo: "facebook.svg",
    role: "iOS Software Engineer",
    start: "2011",
    end: "2014",
  },
  {
    company: "Starbucks",
    companyLogo: "starbucks.svg",
    role: "Shift Supervisor",
    start: "2008",
    end: "2011",
  },
];

export default function WorksWidget() {
  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="flex-none w-6 h-6"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {works.map((work) => (
          <li key={work.company} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                alt={work.company}
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                className="text-transparent h-7 w-7"
                src={work.companyLogo}
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {work.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {work.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                <time dateTime={work.start}>{work.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time
                  dateTime={
                    work.end === "Present"
                      ? (new Date().getFullYear() as unknown as string)
                      : work.end
                  }
                >
                  {work.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium transition rounded-md outline-offset-2 active:transition-none bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group"
        href="#"
      >
        Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
}
