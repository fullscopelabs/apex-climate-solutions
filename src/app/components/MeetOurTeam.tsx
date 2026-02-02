import { motion } from "motion/react";
import { Award, Clock } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { staggerContainer, staggerItem } from "@/app/utils/animations";

const teamMembers = [
  {
    name: "Michael Rodriguez",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    certifications: ["EPA Section 608", "NATE Certified", "MBA"],
    yearsExperience: 26,
    bio: "Founded Apex Climate Solutions in 1998 with a vision to provide exceptional commercial HVAC services.",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    certifications: ["HVAC Engineering", "Building Automation", "LEED AP"],
    yearsExperience: 18,
    bio: "Leads our technology initiatives and energy optimization programs with cutting-edge solutions.",
  },
  {
    name: "James Patterson",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    certifications: ["EPA Universal", "NATE Certified", "OSHA 30"],
    yearsExperience: 22,
    bio: "Oversees daily operations and ensures our team delivers exceptional service on every project.",
  },
  {
    name: "Maria Gonzalez",
    role: "Lead Service Technician",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    certifications: ["EPA 608", "NATE Certified", "Journeyman License"],
    yearsExperience: 15,
    bio: "Our most experienced field technician, specializing in complex commercial installations.",
  },
];

export function MeetOurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600">
            Our certified professionals bring decades of combined experience to
            every project
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-4">
                  {member.role}
                </p>

                {/* Experience Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="size-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {member.yearsExperience}
                    </span>{" "}
                    years experience
                  </span>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="size-4 text-blue-600" />
                    <span className="text-xs font-semibold text-gray-700">
                      Certifications:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-100"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
