import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import GlassCard from './GlassCard';

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
  project: Code,
};

const TimelineCard = ({ 
  title, 
  subtitle, 
  period, 
  description, 
  items = [], 
  type = 'work',
  index = 0 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = iconMap[type] || Briefcase;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <GlassCard className="p-6" glow>
          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
            <div className="p-2 bg-electric-blue/20 rounded-lg">
              <Icon className="w-5 h-5 text-electric-cyan" />
            </div>
            <span className="text-xs text-electric-cyan font-mono">{period}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-3">{subtitle}</p>
          
          {description && (
            <p className="text-sm text-gray-300 mb-4">{description}</p>
          )}
          
          {items.length > 0 && (
            <ul className={`space-y-2 ${isEven ? 'text-right' : 'text-left'}`}>
              {items.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                  {!isEven && <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />}
                  <span className="flex-1">{item}</span>
                  {isEven && <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />}
                </li>
              ))}
            </ul>
          )}
        </GlassCard>
      </div>

      {/* Timeline dot */}
      <div className="relative">
        <motion.div
          className="w-4 h-4 bg-electric-cyan rounded-full relative z-10"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(0, 255, 240, 0.4)',
              '0 0 0 10px rgba(0, 255, 240, 0)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-electric-blue to-transparent -translate-x-1/2 -z-10 h-32" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </motion.div>
  );
};

export default TimelineCard;
