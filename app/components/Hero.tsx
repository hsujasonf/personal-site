'use client';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-6 animate-fade-in"
          style={{
            WebkitTextStroke: '1px rgb(45, 212, 191)',
            textStroke: '1px rgb(45, 212, 191)'
          }}
        >
          Jason Hsu
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          Welcome to my personal space on the web
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#resume"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
