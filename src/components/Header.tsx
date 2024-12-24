import { Facebook, Github, Linkedin, X, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: X, href: "https://x.com", label: "X" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <header
      className={`fixed w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black/80 backdrop-blur-sm z-50`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex space-x-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-white hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-[1px] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </a>
          ))}
        </div>
        <nav className="flex space-x-8">
          {["projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className="group relative overflow-hidden text-white hover:text-primary transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-[1px] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;