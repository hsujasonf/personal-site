import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <main>
        <div className="relative">
          <Hero />
          <Navbar />
        </div>
        <Resume />
      </main>
    </div>
  );
};

export default Home;
