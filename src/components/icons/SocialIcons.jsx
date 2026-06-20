import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

const iconComponents = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  email: Mail,
};

const SocialIcon = ({ type, href, delay = 0 }) => {
  const Icon = iconComponents[type];
  if (!Icon) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-4 glass rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-electric-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Icon */}
      <Icon className="relative w-6 h-6 text-gray-400 group-hover:text-electric-cyan transition-colors" />

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ boxShadow: '0 0 0 0 rgba(0, 212, 255, 0)' }}
        whileHover={{
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
        }}
      />
    </motion.a>
  );
};

const SocialIcons = () => {
  const icons = [
    { type: 'github', href: socialLinks.github },
    { type: 'linkedin', href: socialLinks.linkedin },
    { type: 'instagram', href: socialLinks.instagram },
    { type: 'youtube', href: socialLinks.youtube },
    { type: 'twitter', href: socialLinks.twitter },
  ];

  return (
    <div className="flex gap-4">
      {icons.map((icon, index) => (
        <SocialIcon
          key={icon.type}
          type={icon.type}
          href={icon.href}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
