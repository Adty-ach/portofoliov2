import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';
import { personalInfo, skills, education } from '../../data/portfolioData';
import SkillBar from '../ui/SkillBar';
import GlassCard from '../ui/GlassCard';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    { key: 'electrical', title: 'Electrical Engineering' },
    { key: 'embedded', title: 'Embedded Systems' },
    { key: 'iot', title: 'IoT & Networking' },
    { key: 'programming', title: 'Programming' },
    { key: 'tools', title: 'Tools & Software' },
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know more about my background, education, and technical expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Bio and Education */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-8" glow>
                <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {personalInfo.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>

                {/* Quick info */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                    <MapPin className="w-4 h-4 text-electric-cyan" />
                    <span className="text-sm text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                    <GraduationCap className="w-4 h-4 text-electric-cyan" />
                    <span className="text-sm text-gray-300">{personalInfo.university}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <GlassCard key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-electric-blue/20 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-electric-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{edu.period}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-electric-cyan text-sm mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <GlassCard key={category.key} className="p-6">
                  <h4 className="text-lg font-semibold text-electric-cyan mb-4">
                    {category.title}
                  </h4>
                  {skills[category.key].map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
