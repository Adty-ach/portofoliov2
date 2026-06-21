import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, BookOpen, Star, Code, Medal } from 'lucide-react';
import { experiences, achievements } from '../../data/portfolioData';
import TimelineCard from '../ui/TimelineCard';
import GlassCard from '../ui/GlassCard';
import { useState } from 'react';
import AchievementModal from '../ui/AchievementModal';
import ExperienceModal from '../ui/ExperienceModal';

const iconMap = {
  trophy: Trophy,
  award: Award,
  book: BookOpen,
  star: Star,
  code: Code,
  certificate: Medal,
};

const Experience = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="section-title mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey, certifications, and notable accomplishments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Experience
            </motion.h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                >
                  <GlassCard className="p-6 cursor-pointer"
                          glow
                              onClick={() => setSelectedExperience(exp)}>
                    <div className="flex items-start gap-4">
                      {/* Timeline dot */}
                      <div className="relative">
                        <motion.div
                          className="w-4 h-4 bg-electric-cyan rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(0, 255, 240, 0.4)',
                              '0 0 0 8px rgba(0, 255, 240, 0)',
                            ],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {index !== experiences.length - 1 && (
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-electric-cyan to-transparent" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs px-3 py-1 bg-electric-blue/20 text-electric-cyan rounded-full">
                            {exp.period}
                          </span>
                          <span className="text-xs text-gray-500">{exp.type}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                        <p className="text-electric-cyan text-sm mb-2">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Achievements & Certifications
            </motion.h3>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.icon] || Award;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard
                       className="p-5 group cursor-pointer"
                            hover
                              onClick={() => setSelectedAchievement(achievement)}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-electric-blue/20 to-electric-cyan/20 rounded-xl group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-electric-cyan" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500">{achievement.year}</span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-500">{achievement.organization}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-electric-cyan transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <AchievementModal
            achievement={selectedAchievement}
           isOpen={!!selectedAchievement}
           onClose={() => setSelectedAchievement(null)}/>

      <ExperienceModal
            experience={selectedExperience}
           isOpen={!!selectedExperience}
           onClose={() => setSelectedExperience(null)}/>
    </section>
  );
}

export default Experience;
