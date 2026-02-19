'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFileAlt, FaCode, FaBrain } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import Modal from './ui/Modal';
import { resumes } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ml: FaBrain,
  general: FaFileAlt,
  cpp: FaCode,
};

export default function Resumes() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const openPreview = (file: string, title: string) => {
    setPreviewUrl(file);
    setPreviewTitle(title);
  };

  return (
    <section id="resumes" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Resumes"
          subtitle="Download or preview my resume versions"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, index) => {
            const Icon = iconMap[resume.icon] || FaFileAlt;
            return (
              <motion.div
                key={resume.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-border flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--bg-primary)] flex items-center justify-center">
                      <Icon className="text-2xl text-[var(--accent-primary)]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold mb-1">{resume.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-6">
                    {resume.description}
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href={resume.file}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white hover:scale-105 transition-transform"
                    >
                      <FaDownload size={12} /> Download
                    </a>
                    <button
                      onClick={() => openPreview(resume.file, resume.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 hover:scale-105 transition-all"
                    >
                      <FaEye size={12} /> Preview
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <Modal
          isOpen={!!previewUrl}
          onClose={() => setPreviewUrl(null)}
          title={previewTitle}
          pdfUrl={previewUrl || ''}
        />
      </div>
    </section>
  );
}
