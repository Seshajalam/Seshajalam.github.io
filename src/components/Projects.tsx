'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { projects } from '@/lib/data';
import { FaChevronDown, FaChevronUp, FaPlayCircle } from 'react-icons/fa';

interface ProjectDescription {
  summary: string;
  full: string;
}

function parseDescription(text: string): ProjectDescription {
  const lines = text.split('\n').filter((l) => l.trim());
  const summary = lines.slice(0, 3).join(' ');
  return { summary, full: text };
}

export default function Projects() {
  const [descriptions, setDescriptions] = useState<Record<string, ProjectDescription>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [videoAvailable, setVideoAvailable] = useState<Record<string, boolean>>({});

  useEffect(() => {
    projects.forEach(async (project) => {
      try {
        const res = await fetch(project.descriptionFile);
        const text = await res.text();
        setDescriptions((prev) => ({
          ...prev,
          [project.id]: parseDescription(text),
        }));
      } catch {
        setDescriptions((prev) => ({
          ...prev,
          [project.id]: { summary: 'Description loading...', full: '' },
        }));
      }
    });
    projects.forEach(async (project) => {
      try {
        const res = await fetch(project.video, { method: 'HEAD' });
        setVideoAvailable((prev) => ({ ...prev, [project.id]: res.ok }));
      } catch {
        setVideoAvailable((prev) => ({ ...prev, [project.id]: false }));
      }
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Showcasing my work in AI, computer vision, and deep learning"
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard hover={false} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Video */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black/30">
                    {videoAvailable[project.id] ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--glass-border)]">
                        <FaPlayCircle className="text-5xl text-[var(--accent-primary)] opacity-50 mb-3" />
                        <p className="text-[var(--text-secondary)] text-sm font-medium">Video Demo</p>
                        <p className="text-[var(--text-secondary)]/60 text-xs mt-1">Coming soon</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[var(--accent-primary)] text-sm mb-4">
                      {project.subtitle}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">
                      {descriptions[project.id] ? (
                        <>
                          <p>
                            {expanded[project.id]
                              ? descriptions[project.id].full
                              : descriptions[project.id].summary}
                          </p>
                          <button
                            onClick={() =>
                              setExpanded((prev) => ({
                                ...prev,
                                [project.id]: !prev[project.id],
                              }))
                            }
                            className="mt-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1 text-sm font-medium"
                          >
                            {expanded[project.id] ? (
                              <>
                                Show Less <FaChevronUp size={12} />
                              </>
                            ) : (
                              <>
                                Read More <FaChevronDown size={12} />
                              </>
                            )}
                          </button>
                        </>
                      ) : (
                        <p className="animate-pulse">Loading description...</p>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map(({ label, value }) => (
                        <div
                          key={label}
                          className="text-center p-3 rounded-xl bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10"
                        >
                          <p className="text-lg font-bold gradient-text">{value}</p>
                          <p className="text-xs text-[var(--text-secondary)]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
