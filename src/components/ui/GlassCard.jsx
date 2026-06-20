import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, glow = false, ...props }) => {
  return (
    <motion.div
      className={`
        relative glass rounded-2xl overflow-hidden
        ${glow ? 'glow-border' : ''}
        ${hover ? 'glass-hover' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
