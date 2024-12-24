const Landing = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative group w-40 h-40 mx-auto rounded-full overflow-hidden">
          <img
            src="/lovable-uploads/81d5d3b3-a12f-4615-a662-28ede5b826d3.png"
            alt="Profile"
            className="w-full h-full object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-[1px] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
        <h1 className="text-2xl font-bold text-white font-display">Hello, I am Pete!</h1>
        <p className="text-5xl text-white/90 font-sans">A frontend developer specialised in React</p>
      </div>
    </section>
  );
};

export default Landing;