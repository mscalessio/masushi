import Nav from "./nav";
import { ModeToggle } from "./mode-toggle";
import { MobileMenu } from "./mobile-menu";

export default function Header() {
  return (
    <header
      className="relative z-50 flex flex-col flex-none pointer-events-none"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div className="sticky top-0 z-10 h-16 pt-6">
        <div className="fixed sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
          <div className="w-full mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="max-w-2xl mx-auto lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex justify-end flex-1 md:justify-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <MobileMenu />
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: 0,
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: 0,
                        display: "none",
                      }}
                    ></div>
                    <Nav className="hidden" />
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
