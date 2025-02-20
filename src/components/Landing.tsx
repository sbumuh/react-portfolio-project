import { useEffect, useState } from "react";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineOpacity = Math.max(0, Math.min(1, 1 - scrollPosition / 400));

  return (
    <>
      <section className="h-screen bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center relative">
        <div 
          className="absolute bottom-0 w-full h-[2px] backdrop-blur-sm shadow-lg transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, transparent, rgba(255,255,255,${lineOpacity}), transparent)`,
            opacity: lineOpacity,
          }}
        />
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative group w-40 h-40 mx-auto rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/81d5d3b3-a12f-4615-a662-28ede5b826d3.png"
              alt="Profile"
              className="w-full h-full object-cover border-4 border-white shadow-[inset_0_0_10px_rgba(255,255,255,0.6)] group-hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)"
              }}
            />
            <div className="absolute inset-0 ring-4 ring-white/50 rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-[1px] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
          <h1 className="text-2xl font-bold text-white font-display">Hello, I am Pete!</h1>
          <p className="text-5xl text-white/90 font-sans">A frontend developer specialised in React</p>
        </div>
      </section>
    </>
  );
};

export default Landing;