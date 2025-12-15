'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Clock, Briefcase, Github, Twitter, Instagram, Facebook } from 'lucide-react';
import Navbar from './Navbar';
import NetworkBackground from './NetworkBackground';
import About from './About';
import Journal from './Journal';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:m4uricedgzmn@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 500);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/mauricedgzmn', color: 'hover:text-purple-400' },
    { icon: Twitter, label: 'X/Twitter', href: 'https://twitter.com/mauricedgzmn', color: 'hover:text-sky-400' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/mauricedgzmn', color: 'hover:text-pink-400' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/mauricedgzmnn', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-white font-semibold text-lg">Available for Work</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Currently open to freelance projects and collaboration opportunities
              </p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 text-sm">General Santos, Philippines</p>
              <p className="text-gray-400 text-xs mt-1">GMT+8 (PHT)</p>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Response Time</h3>
              </div>
              <p className="text-gray-300 text-sm">Usually within 24 hours</p>
              <p className="text-gray-400 text-xs mt-1">Monday - Friday, 9AM - 6PM PHT</p>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">What are you looking for?</h3>
              <div className="space-y-2">
                {[
                  { label: 'Hiring Inquiry', icon: Briefcase },
                  { label: 'Collaboration', icon: Mail },
                  { label: 'General Question', icon: Send },
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const subject = encodeURIComponent(`${option.label}: `);
                      window.location.href = `mailto:m4uricedgzmn@gmail.com?subject=${subject}`;
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-black/50 rounded-lg text-gray-300 hover:text-white hover:bg-black/70 transition-all text-sm"
                  >
                    <option.icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-6 h-6 text-white" />
                <p className="text-gray-300 text-lg">m4uricedgzmn@gmail.com</p>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                    status === 'sending'
                      ? 'bg-gray-600 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : status === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Opening Email Client...</span>
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Email Client Opened!</span>
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Try Again</span>
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-700 text-center"
              >
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <NetworkBackground />
          <div className="max-w-6xl w-full text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-8xl md:text-[12rem] lg:text-[14rem] font-bold text-white mb-12 leading-none font-[family-name:var(--font-danfo)]"
            >
              MARCHI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Hi! I'm a student at HCDC, I'm currently developing my abilities in web development, UI/UX design, and problem-solving, and I'm always eager to learn new technologies and grow as a creator.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg text-base transition-all hover:bg-gray-100"
              >
                About Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg text-base border-2 border-white transition-all hover:bg-white hover:text-black"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Journal Section */}
        <Journal />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}