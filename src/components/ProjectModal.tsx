import React from 'react';
import { X, CheckCircle2, Cpu, Code2, Clock, Send, MessageCircle, FileCheck, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuotation: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuotation,
}) => {
  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello MINNAL TECHNOLOGY LAB! I am interested in project ${project.id} - "${project.title}". Please share the quotation, academic deliverables, and availability.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 30px',
            borderBottom: '1px solid var(--card-border)',
            background: 'var(--off-white)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  background: 'var(--navy-900)',
                  color: 'var(--cyan-400)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                {project.id}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--blue-500)', fontWeight: 600 }}>
                {project.category}
              </span>
            </div>
            <h2
              style={{
                fontSize: '1.45rem',
                color: 'var(--navy-900)',
                fontFamily: 'var(--font-serif)',
                margin: 0,
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(7, 20, 61, 0.06)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--navy-900)',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '30px' }}>
          {/* Top Banner Image with Complexity pill */}
          <div
            style={{
              position: 'relative',
              height: '240px',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '28px',
              background: 'var(--navy-900)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 20, 61, 0.85) 0%, transparent 50%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--navy-900)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                }}
              >
                {project.complexity}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(7, 20, 61, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--cyan-400)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: '1px solid rgba(100, 200, 220, 0.3)',
                }}
              >
                <Clock size={14} />
                <span>Build Time: {project.estimatedTimeline}</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '28px' }}>
            {project.originalTitle && project.originalTitle !== project.title && (
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-500)', fontStyle: 'italic', marginBottom: '8px' }}>
                Original Catalogue Entry: "{project.originalTitle}"
              </div>
            )}
            <h3
              style={{
                fontSize: '1.1rem',
                color: 'var(--navy-900)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              Project Overview
            </h3>
            <p style={{ color: 'var(--ink-700)', fontSize: '0.94rem', lineHeight: 1.65 }}>
              {project.fullOverview || project.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h3
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--navy-900)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                Key Engineering Features
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: 'var(--ink-700)',
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--blue-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hardware Components & Software Stack Columns */}
          {((project.hardwareComponents && project.hardwareComponents.length > 0) || (project.softwareStack && project.softwareStack.length > 0)) && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '28px',
              }}
            >
              {/* Hardware BOM */}
              {project.hardwareComponents && project.hardwareComponents.length > 0 && (
                <div
                  style={{
                    background: 'var(--off-white)',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    <Cpu size={18} color="var(--blue-500)" />
                    <span>Hardware Components / BOM</span>
                  </div>
                  <ul style={{ paddingLeft: '18px', color: 'var(--ink-700)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {project.hardwareComponents.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Software Stack */}
              {project.softwareStack && project.softwareStack.length > 0 && (
                <div
                  style={{
                    background: 'var(--off-white)',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    <Code2 size={18} color="var(--blue-500)" />
                    <span>Software & Firmware Stack</span>
                  </div>
                  <ul style={{ paddingLeft: '18px', color: 'var(--ink-700)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {project.softwareStack.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Academic Deliverables Package */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(36, 107, 253, 0.05) 0%, rgba(100, 200, 220, 0.08) 100%)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(36, 107, 253, 0.2)',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--navy-900)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  marginBottom: '14px',
                }}
              >
                <FileCheck size={20} color="var(--blue-500)" />
                <span>Complete Deliverables Package Included</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {project.deliverables.map((del, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.86rem',
                      color: 'var(--ink-800)',
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--blue-500)',
                      }}
                    />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid var(--card-border)',
            }}
          >
            <div style={{ fontSize: '0.84rem', color: 'var(--ink-500)' }}>
              Pricing is customized by exact university syllabus requirements.
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={`https://wa.me/917560901337?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  background: '#25D366',
                  borderColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  fontSize: '0.88rem',
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onRequestQuotation(project);
                }}
                className="btn-primary"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.88rem',
                }}
              >
                <Send size={15} />
                <span>Request Project Quotation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
