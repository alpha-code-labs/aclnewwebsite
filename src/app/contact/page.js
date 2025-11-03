'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const topics = [
    { value: 'gaming-studio', label: 'Gaming Studio' },
    { value: 'ai-agents', label: 'AI Agents' },
    { value: 'I am a Founder', label: 'I am a Founder' },
    { value: 'general', label: 'General Enquiry' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.topic) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Your WhatsApp number (hidden from user)
      const phoneNumber = '919266213335';
      
      // Format the message
      const topicLabel = topics.find(t => t.value === formData.topic)?.label || formData.topic;
      const message = `🚀 New Contact Form Submission

📛 Name: ${formData.name}
📧 Email: ${formData.email}  
💼 Subject: ${topicLabel}
⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

From: Website Contact Form`;

      // Create WhatsApp URL
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab (user will send the message)
      window.open(whatsappURL, '_blank');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', topic: '' }); // Reset form
    } catch (error) {
      console.error('WhatsApp error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Ready to build something amazing together? Whether you&apos;re interested in our gaming studio, AI agents, or have a unique collaboration in mind, we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-100 font-medium">Message sent successfully!</p>
                  <p className="text-green-200 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-red-100 font-medium">Please fill in all required fields</p>
                  <p className="text-red-200 text-sm">Make sure to complete all mandatory fields before submitting.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-100 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              {/* Topic Dropdown */}
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-purple-100 mb-2">
                  Select Topic <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-8 py-3 border border-purple-400/30 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-800 text-purple-100">
                      Choose a topic...
                    </option>
                    {topics.map((topic) => (
                      <option 
                        key={topic.value} 
                        value={topic.value}
                        className="bg-gray-800 text-purple-100"
                      >
                        {topic.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-purple-400/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
                  <p className="text-purple-100 text-sm">We typically respond within 24 hours</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Direct Collaboration</h4>
                  <p className="text-purple-100 text-sm">Let&apos;s build something amazing together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}