const Landing = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white"
        />
        <h1 className="text-5xl font-bold text-white">Hello, I am Pete!</h1>
        <p className="text-2xl text-white/90">Full Stack Developer & UI Designer</p>
      </div>
    </section>
  );
};

export default Landing;