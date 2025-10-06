import { Link } from "react-router-dom";
import { ROUTES } from "@/router/router";
import { useEffect } from "react";
import gsap from "gsap";

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2, ease: "power3.out" });

      tl.fromTo(
        "#line",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.5 }
      );

      tl.fromTo(
        "#title",
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.3"
      );

      tl.fromTo(
        "#breadcrumb",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-4">
      <div className="w-full h-52 rounded-xl border relative flex items-end p-8 bg-black overflow-hidden">
        <div className="w-full">
          <div id="line" className="h-1 w-20 bg-background rounded-full mb-3 origin-left scale-x-0" />
          <h1 id="title" className="text-6xl font-extrabold text-background">
            {title}
          </h1>
          <div id="breadcrumb" className="w-full flex items-center mt-2">
            <nav aria-label="Breadcrumb" className="w-full">
              <ol className="flex items-center gap-2 text-sm text-background/80">
                <li className="flex items-center gap-2">
                  <Link
                    to={ROUTES.HOME}
                    className="hover:text-background transition-colors"
                  >
                    Home
                  </Link>
                  <span className="opacity-70">/</span>
                </li>
                <li>
                  <span className="text-background font-medium">{title}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};