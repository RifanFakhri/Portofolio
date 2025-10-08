// pages/about.tsx

// Data untuk pengalaman kerja bisa dipisah seperti ini agar lebih rapi
const experiences = [
  {
    date: "Apr 2024",
    title: "Amoeba UX Research Internship",
    description: "Project Based Internship UX Research Telkom Digital Amoeba x Rakamin Academy. I honed my UX Research skills through comprehensive practices in Design Thinking, User and Product Research, and utilizing UX Research Tools. My experience includes conducting thorough User Research, creating detailed Personas."
  },
  {
    date: "Nov 2023",
    title: "Niagahoster UI/UX Designer Internship",
    description: "Project Based Internship UI/UX Designer Niagahoster x Rakamin Academy. I've extensively studied UI/UX Design, covering Design Thinking, Design Process, and Testing, UI/UX Fundamentals, User and Product Research, Prototyping, Visual Design, and Wireframing."
  },
  {
    date: "Aug 2023",
    title: "Nuri UI/UX Designer Internship",
    description: "Project Based Internship UI/UX Designer PT Nuri Gaya Citra x Rakamin Academy. I deepen my UI/UX Design skills through the practices of Design Thinking, Sketching and Testing, UI/UX Fundamentals, User and Product Research, Prototyping, Visual Design, and Wireframing."
  },
  {
    date: "Feb 2023",
    title: "Junior Graphic Designer - VSGA",
    description: "Vocational School Graduate Academy Digital Talent Scholarship Kominfo. During my training as a Junior Graphic Designer, I mastered the basic principles of design and communication, implemented creative ideas, and honed my skills using various design software."
  }
];

// Komponen Card untuk setiap pengalaman
const ExperienceCard = ({ date, title, description }: { date: string; title: string; description: string; }) => (
  <div className="bg-[#1C1C1C] p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors duration-300">
    <p className="text-gray-400 text-sm mb-3">{date}</p>
    <h3 className="font-bold text-white text-lg mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);


export default function AboutPage() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-sans">
      {/* Container utama dengan padding atas bawah */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          
          {/* === Bagian About Me === */}
          <section>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              As a UI/UX Designer, I derive immense joy from aiding individuals in developing their businesses. I am thrilled to share my creativity and expertise in shaping outstanding user experiences by harmonizing captivating design aesthetics with a deep comprehension of user needs.
            </p>
          </section>

          {/* === Bagian Experience === */}
          <section className="mt-16 sm:mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Experience
            </h2>
            {/* Grid untuk kartu pengalaman */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  date={exp.date}
                  title={exp.title}
                  description={exp.description}
                />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

