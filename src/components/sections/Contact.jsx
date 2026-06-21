import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../icons/SocialIcons';
import GlassCard from '../ui/GlassCard';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    await emailjs.send(
      'service_f40cy7b',
      'template_46djj0i',
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
      },
      'doZ1XCr7AhfDW_JqN'
    );

    setStatus('success');
    setFormState({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => setStatus('idle'), 3000);
  } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("STATUS:", error.status);
  console.log("TEXT:", error.text);

  setStatus('error');
}
};

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="section-title mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-electric-blue/20 rounded-xl">
                    <Mail className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-electric-cyan transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-electric-blue/20 rounded-xl">
                    <MapPin className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-electric-blue/20 rounded-xl">
                    <Phone className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-white">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social links */}
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <SocialIcons />
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all bg-transparent text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all bg-transparent text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all bg-transparent text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <Send className="w-5 h-5" />
                      Error sending message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
