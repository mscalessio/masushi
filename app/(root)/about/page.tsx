import Image from "next/image";
import Link from "next/link";

import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";

const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/SucciMas",
    icon: BsTwitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mscalessio",
    icon: BsInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/mscalessio",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alessiomasucci/",
    icon: BsLinkedin,
  },
];

const email = "alessio.masucci@me.com";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            alt="Portrait"
            loading="lazy"
            width="800"
            height="800"
            decoding="async"
            className="object-cover text-transparent aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            sizes="(min-width: 1024px) 32rem, 20rem"
            src="/portrait.jpg"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I&apos;m Alessio Masucci. I live in Rome, where I develop the
          future.
        </h1>
        <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;ve loved making things for as long as I can remember, and
            wrote my first program when I was 6 years old, just two weeks after
            my mom brought home the brand new Macintosh LC 550 that I taught
            myself to type on.
          </p>
          <p>
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister&apos;s motorcycle helmet, counted down
            from three, and jumped — hoping the tree was tall enough that with
            just a bit of momentum I&apos;d be able to get to orbit.
          </p>
          <p>
            I spent the next few summers indoors working on a rocket design,
            while I recovered from the multiple surgeries it took to fix my
            badly broken legs. It took nine iterations, but when I was 15 I sent
            my dad&apos;s Blackberry into orbit and was able to transmit a photo
            back down to our family computer from space.
          </p>
          <p>
            Today, I&apos;m the founder of Planetaria, where we&apos;re working
            on civilian space suits and manned shuttle kits you can assemble at
            home so that the next generation of kids really <em>can</em> make it
            to orbit — from the comfort of their own backyards.
          </p>
        </div>
      </div>
      <div className="lg:pl-20">
        <ul role="list" className="space-y-4">
          {socials.map((social) => {
            const Ico = social.icon;
            return (
              <li key={social.name} className="flex">
                <Link
                  className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  href={social.href}
                >
                  <Ico />
                  <span className="ml-4">Follow on {social.name}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40">
            <Link
              className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href={`mailto:${email}`}
            >
              {/* <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                ></path>
              </svg> */}
              <BsEnvelope className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
              <span className="ml-4">{email}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
