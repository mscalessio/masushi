import { cn } from "@/lib/utils";
import Link from "next/link";

const footerNavItems = [
  {
    name: "About",
    href: "/about",
    disabled: false,
  },
  {
    name: "Articles",
    href: "/articles",
    disabled: false,
  },
  {
    name: "Projects",
    href: "/Projects",
    disabled: true,
  },
  {
    name: "Speaking",
    href: "/speaking",
    disabled: true,
  },
  {
    name: "Uses",
    href: "/uses",
    disabled: true,
  },
];

export default function Footer() {
  return (
    <footer className="flex-none mt-32">
      <div className="sm:px-8">
        <div className="w-full mx-auto max-w-7xl lg:px-8">
          <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="max-w-2xl mx-auto lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center text-sm font-medium gap-x-6 gap-y-1 text-zinc-800 dark:text-zinc-200">
                    {footerNavItems.map((item) =>
                      item.disabled ? (
                        <FooterItem
                          key={item.name}
                          className="text-muted-foreground"
                        >
                          {item.name}
                        </FooterItem>
                      ) : (
                        <FooterLink key={item.name} href={item.href}>
                          {item.name}
                        </FooterLink>
                      )
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    © 2023 Masushi. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        "transition hover:text-teal-500 dark:hover:text-teal-400",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

const FooterItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={cn("", className)}>{children}</span>;
};
