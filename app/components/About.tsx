'use client';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-8"
          style={{
            WebkitTextStroke: '1px rgb(45, 212, 191)',
            textStroke: '1px rgb(45, 212, 191)'
          }}
        >
          About Me
        </h2>
        <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
          <p>
            Hi! I'm Jason Hsu. This is my personal website where I share my work,
            thoughts, and experiences.
          </p>
          <p>
            I'm passionate about technology, design, and creating meaningful
            digital experiences. This space serves as a platform to showcase my
            journey and connect with others.
          </p>
          <p>
            Feel free to explore and get in touch if you'd like to collaborate or
            just have a chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
