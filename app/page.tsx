import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
