import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const ProfileCard3D = () => {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        className="relative w-80 h-[420px] cursor-pointer preserve-3d"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect behind card */}
        <motion.div
          className="absolute inset-0 rounded-3xl blur-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(0, 255, 240, 0.3), rgba(139, 92, 246, 0.3))',
          }}
          animate={{
            opacity: isHovering ? 0.8 : 0.4,
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <div className="relative h-full glass rounded-3xl overflow-hidden glow-border">
          {/* Holographic overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(
                ${isHovering ? '135deg' : '180deg'},
                transparent 0%,
                rgba(0, 212, 255, 0.1) 25%,
                rgba(0, 255, 240, 0.1) 50%,
                rgba(139, 92, 246, 0.1) 75%,
                transparent 100%
              )`,
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: isHovering ? ['0% 0%', '100% 100%'] : '50% 50%',
            }}
            transition={{
              duration: 2,
              repeat: isHovering ? Infinity : 0,
              repeatType: 'reverse',
            }}
          />

          {/* Card header */}
          <div className="relative p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-400 font-mono">profile.tsx</span>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative p-6 flex flex-col items-center">
            <motion.div
              className="relative w-32 h-32 mb-4"
              animate={{
                y: isHovering ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue to-electric-cyan blur-lg opacity-50" />
              
              {/* Profile image */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-full h-full rounded-full object-cover border-2 border-white/20"
              />

              {/* Status indicator */}
              <motion.div
                className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-900"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Name and title */}
            <h3 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h3>
            <p className="text-sm text-electric-cyan mb-2">{personalInfo.title}</p>
            
            {/* University badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-xs text-gray-300">{personalInfo.university}</span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 w-full mt-2">
              {[
                { label: 'Projects', value: '8' },
                { label: 'Years Exp', value: '1+' },
                { label: 'Certs', value: '9' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-lg font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom scan line effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue/20 rounded-full blur-sm"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-12 h-12 bg-electric-cyan/20 rounded-full blur-md"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileCard3D;
