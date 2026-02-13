import ContactInfo from './resume/ContactInfo';
import ProfessionalSummary from './resume/ProfessionalSummary';
import TechnicalSkills from './resume/TechnicalSkills';
import WorkExperience from './resume/WorkExperience';

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center px-6 py-20 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        <ContactInfo />
        <ProfessionalSummary />
        <TechnicalSkills />
        <WorkExperience />
      </div>
    </section>
  );
};

export default Resume;
