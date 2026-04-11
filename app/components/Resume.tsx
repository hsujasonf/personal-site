import ContactInfo from './resume/ContactInfo';
import ProfessionalSummary from './resume/ProfessionalSummary';
import TechnicalSkills from './resume/TechnicalSkills';
import WorkExperience from './resume/WorkExperience';

const Resume = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Fixed sidebar — contact info + skills */}
      <aside className="w-64 shrink-0 fixed top-[76px] bottom-0 px-5 pt-8 border-r border-white/[0.06] space-y-8 overflow-hidden">
        <ContactInfo />
        <TechnicalSkills />
      </aside>

      {/* Scrollable main content — summary + work experience */}
      <main className="flex-1 overflow-y-auto px-8 pt-8 ml-64">
        <ProfessionalSummary />
        <WorkExperience />
      </main>
    </div>
  );
};

export default Resume;
