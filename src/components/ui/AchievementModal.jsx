import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const AchievementModal = ({ achievement, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!achievement) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'photos', label: 'Photos' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + achievement.images.length) % achievement.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 glass rounded-3xl overflow-hidden z-[201] flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">{achievement.title}</h2>
                <p className="text-sm text-gray-400">{achievement.category} • {achievement.status}</p>
              </div>
              <div className="flex items-center gap-3">
                {achievement.github && (
                  <a
                    href={achievement.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {achievement.demo && (
                  <a
                    href={achievement.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-4 border-b border-white/10 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-electric-blue text-dark-900'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={achievement.images[0]}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {achievement.fullDescription}
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'photos' && (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* Main image viewer */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-800">
                      <motion.img
                        key={currentImageIndex}
                        src={achievement.images[currentImageIndex]}
                        alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setLightboxOpen(true)}
                      />
                      
                      {/* Navigation arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Zoom indicator */}
                      <div className="absolute bottom-4 right-4 p-2 glass rounded-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>

                      {/* Image counter */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 glass rounded-full text-sm">
                        {currentImageIndex + 1} / {achievement.images.length}
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-4">
                      {achievement.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`aspect-video rounded-lg overflow-hidden transition-all ${
                            currentImageIndex === index
                              ? 'ring-2 ring-electric-cyan scale-105'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>


          {/* Lightbox */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxOpen(false)}
              >
                <motion.img
                  src={achievement.images[currentImageIndex]}
                  alt={achievement.title}
                  className="max-w-full max-h-full object-contain"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(false);
                  }}
                  className="absolute top-6 right-6 p-3 glass rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 glass rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 glass rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default AchievementModal;
