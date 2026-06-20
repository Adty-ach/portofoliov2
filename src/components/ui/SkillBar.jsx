import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, level, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-electric-cyan">{level}%</span>
      </div>
      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
