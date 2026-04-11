import Navbar from "../components/Navbar";
import Resume from "../components/Resume";

const ResumePage = () => {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <Navbar />
      <Resume />
    </div>
  );
};

export default ResumePage;
