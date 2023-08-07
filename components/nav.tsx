import { cn } from "@/lib/utils";

export default function Nav({ className }: { className?: string }) {
  return (
    <nav className={cn("pointer-events-auto md:block", className)}>
      <ul className="flex flex-col px-3 text-sm font-medium rounded-full shadow-lg md:flex-row md:bg-background">
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            href="/articles"
          >
            Articles
          </a>
        </li>
        <li>
          <NavItem className="text-muted-foreground">Projects</NavItem>
        </li>
        <li>
          <NavItem className="text-muted-foreground">Speaking</NavItem>
        </li>
        <li>
          <NavItem className="text-muted-foreground">Uses</NavItem>
        </li>
      </ul>
    </nav>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
      href={href}
    >
      {children}
    </a>
  );
};

Nav.Link = NavLink;

const NavItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("relative block px-3 py-2", className)}>
      {children}
    </span>
  );
};
