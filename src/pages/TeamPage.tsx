import { GraduationCap, Globe } from "lucide-react";
import { StudentCard } from "@/components/StudentCard";
import teamBg from "@/assets/Hero_1_without_title.png";

// Uncomment these after adding the faculty photos
// import shajiPhoto from "@/assets/team/shaji.jpg";
// import madhuPhoto from "@/assets/team/madhu.jpg";

const facultyAdvisors = [
  {
    name: "Prof. Anil Shaji",
    role: "Professor",
    // image: shajiPhoto,
    scholar:
      "https://scholar.google.com/citations?user=Pp5t7VsAAAAJ&hl=en",
    website: "https://www.iisertvm.ac.in/faculty/shaji",
  },
  {
    name: "Prof. Madhu Thalakulam",
    role: "Associate Professor",
    // image: madhuPhoto,
    scholar:
      "https://scholar.google.com/citations?user=3--YLbIAAAAJ&hl=en",
    website: "https://www.iisertvm.ac.in/faculty/madhu",
  },
];

const organizers = [
  {
    name: "Naman Agarwal",
    role: "5th Year BS-MS (Physics)",
    // image: img1,
    scholar: "#",
    linkedin: "#",
  },
  {
    name: "Debashis Saikia",
    role: "4th Year BS-MS (Physics)",
    // image: img2,
    scholar: "#",
    linkedin: "#",
  },
  {
    name: "Ajit Gopalakrishna Bhat",
    role: "4th Year BS-MS (Physics)",
    // image: img3,
    scholar: "#",
    linkedin: "#",
  },
  {
    name: "Khushi Tiwari",
    role: "5th Year BS-MS (Physics)",
    // image: img4,
    scholar: "#",
    linkedin: "#",
  },
  {
    name: "Leyana K P",
    role: "4th Year BS-MS (Physics)",
    // image: img5,
    scholar: "#",
    linkedin: "#",
  },
  {
    name: "Aman Vijay Tallur",
    role: "4th Year BS-MS (Physics)",
    // image: img6,
    scholar: "#",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-fixed bg-no-repeat text-foreground"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/55 pointer-events-none" />

      {/* Page content */}
      <div className="relative z-10">

        {/* Hero */}
        <section className="pt-36 pb-20 text-center">
          <div className="container mx-auto px-6">

            <h1 className="text-5xl md:text-6xl font-bold">
              Organizing Committee
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Meet the faculty members and student organizers working together
              to make IBM Qiskit Fall Fest 2026 at IISER Thiruvananthapuram
              a memorable experience.
            </p>

          </div>
        </section>


        {/* Faculty Advisors */}
        <section className="pb-24">
          <div className="container mx-auto px-6">

            <h2 className="text-4xl font-bold text-center">
              Faculty Advisors
            </h2>

            <p className="text-center text-muted-foreground mt-4 mb-16">
              Academic guidance and mentorship for the organizing committee.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

              {facultyAdvisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="flex flex-col items-center text-center"
                >

                  {/* Faculty photo placeholder */}
                  <div className="w-56 h-56 rounded-full bg-muted/80 border-4 border-primary shadow-xl flex items-center justify-center text-6xl font-bold backdrop-blur-sm">
                    {advisor.name
                      .replace("Prof. ", "")
                      .charAt(0)}
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold">
                    {advisor.name}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {advisor.role}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mt-7">

                    <a
                      href={advisor.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/20 backdrop-blur-sm px-5 py-2 hover:bg-primary/10 transition"
                    >
                      <GraduationCap className="w-5 h-5" />
                      Google Scholar
                    </a>

                    <a
                      href={advisor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/20 backdrop-blur-sm px-5 py-2 hover:bg-primary/10 transition"
                    >
                      <Globe className="w-5 h-5" />
                      Website
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* Divider */}
        <div className="container mx-auto px-6">
          <div className="border-t border-border/50" />
        </div>


        {/* Student Organizing Committee */}
        <section className="py-24">
          <div className="container mx-auto px-6">

            <h2 className="text-4xl font-bold text-center">
              Student Organizing Committee
            </h2>

            <p className="text-center text-muted-foreground mt-4 mb-16">
              The student team coordinating IBM Qiskit Fall Fest 2026.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

              {organizers.map((member) => (
                <StudentCard
                  key={member.name}
                  {...member}
                />
              ))}

            </div>

          </div>
        </section>


        {/* Divider */}
        <div className="container mx-auto px-6">
          <div className="border-t border-border/50" />
        </div>


        {/* Volunteers */}
        <section className="py-24">
          <div className="container mx-auto px-6">

            <h2 className="text-4xl font-bold text-center">
              Volunteers
            </h2>

            <p className="text-center text-muted-foreground mt-4">
              Volunteer profiles will be announced soon.
            </p>

          </div>
        </section>

      </div>
    </div>
  );
}
