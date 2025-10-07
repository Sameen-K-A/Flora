import { ROUTES } from "@/router/router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: ROUTES.HOME },
      { name: "Pricing", href: ROUTES.HOME },
      { name: "Marketplace", href: ROUTES.HOME },
      { name: "Features", href: ROUTES.HOME },
    ],
  },
  {
    title: "Other",
    links: [
      { name: "About", href: ROUTES.HOME },
      { name: "Terms", href: ROUTES.HOME },
      { name: "Privacy", href: ROUTES.HOME },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: ROUTES.HOME, label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: ROUTES.HOME, label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: ROUTES.HOME, label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: ROUTES.HOME, label: "LinkedIn" },
];

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(animationRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=50",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="rounded-t-2xl border-t bg-muted p-4">
      <div ref={animationRef} className="rounded-2xl bg-background p-4 py-10 shadow-2xl/5">
        <div className="flex flex-col md:flex-row w-full justify-between gap-10">
          <div className="flex w-full items-center md:items-start flex-col gap-4">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link to={ROUTES.HOME}>
                <h3 className="font-logo text-2xl font-bold">
                  Flora
                </h3>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Your one-stop shop for fashion, electronics, and lifestyle products. Quality and style delivered to your doorstep.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {defaultSocialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <Link to={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full md:w-md justify-around gap-4">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-sm text-center">{section.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-center">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.href}
                        className="font-medium hover:text-primary hover:underline hover:underline-offset-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 mb-10 md:mb-0 flex flex-col items-center w-full gap-2 text-xs font-medium text-muted-foreground">
          <p>©{new Date().getFullYear()} Flora All rights reserved.</p>
          <ul className="flex justify-center gap-4">
            <li className="hover:text-primary hover:underline hover:underline-offset-2">
              <Link to={ROUTES.HOME}>Terms and Conditions</Link>
            </li>
            <li className="hover:text-primary hover:underline hover:underline-offset-2">
              <Link to={ROUTES.HOME}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};