import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  const nameLetters = personalInfo.name.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-dark-900 z-[1000] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative text-center">
            {/* Animated name */}
            <div className="flex justify-center mb-8">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl font-bold text-white inline-block"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: 'easeOut',
                  }}
                  style={{
                    textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-dark-600 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                onAnimationComplete={() => setIsLoading(false)}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-gray-400 font-mono text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="loading-text">
                {'Loading'.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0, 255, 240, 0.3), transparent)',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
