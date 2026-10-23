import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';

interface QuotationModalProps {
  project?: ProjectItem | null;
  onClose: () => void;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({ project, onClose }) => {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<ProjectCategory | ''>(project?.category || 'IoT & Embedded Systems');
  const [complexity, setComplexity] = useState(project?.complexity || 'Mini Project (S3-S5)');
  const [budgetRange, setBudgetRange] = useState('₹3,000 – ₹7,000 (Mini Project)');
  const [description, setDescription] = useState(
    project ? `Inquiring about project build for ${project.id}: "${project.title}".` : ''
  );

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !institution.trim()) {
      setErrorMsg('Please provide your name, institution/college, and mobile number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const formattedWhatsAppText = encodeURIComponent(
    `*MINNAL INNOVATIONS — PROJECT ENQUIRY*\n` +
    `--------------------------------------\n` +
    `*Name:* ${name}\n` +
    `*Institution:* ${institution}\n` +
    `*Phone:* ${phone}\n` +
    `*Email:* ${email || 'Not provided'}\n` +
    `*Category:* ${category}\n` +
    `*Academic Level:* ${complexity}\n` +
    `*Estimated Budget:* ${budgetRange}\n` +
    (project ? `*Selected Project ID:* ${project.id} (${project.title})\n` : '') +
    `*Requirement / Description:* ${description || 'Ready-made prototype quotation requested'}`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '640px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 28px',
            borderBottom: '1px solid var(--card-border)',
            background: 'var(--off-white)',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                color: 'var(--blue-500)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              Direct Project Consultation
            </div>
            <h2
              style={{
                fontSize: '1.4rem',
                color: 'var(--navy-900)',
                fontFamily: 'var(--font-serif)',
                margin: 0,
              }}
            >
              {project ? `Request Quotation: ${project.id}` : 'Request a Custom Prototype Quotation'}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'rgba(7, 20, 61, 0.06)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                }}
              >
                <CheckCircle2 size={36} color="#10B981" />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
                Enquiry Summary Generated!
              </h3>

              <p
                style={{
                  color: 'var(--ink-500)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  maxWidth: '460px',
                  margin: '0 auto 28px',
                }}
              >
                Thank you, <strong>{name}</strong>! To get an immediate official response and quotation from our lead developers, forward your enquiry directly to MINNAL via WhatsApp.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  maxWidth: '380px',
                  margin: '0 auto',
                }}
              >
                <a
                  href={`https://wa.me/917560901337?text=${formattedWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: '#25D366',
                    padding: '14px',
                    fontSize: '0.95rem',
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp (+91 75609 01337)</span>
                </a>

                <a
                  href={`mailto:contact@minnaltechlab.com?subject=Project%20Quotation%20Request%20-%20${encodeURIComponent(
                    name
                  )}&body=${formattedWhatsAppText}`}
                  className="btn-light-secondary"
                  style={{ padding: '12px' }}
                >
                  <span>Send via Email</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'transparent',
                    color: 'var(--ink-400)',
                    fontSize: '0.82rem',
                    padding: '6px',
                    marginTop: '8px',
                  }}
                >
                  Edit enquiry details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div
                  style={{
                    background: '#FEF2F2',
                    border: '1px solid #F87171',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#991B1B',
                    fontSize: '0.86rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '20px',
                  }}
                >
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Irfan Sharnas / Navami A."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    College / School / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UKF College of Engineering (UKFCET)"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 7560901337"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. student@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    Domain / Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      background: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                    <option value="Robotics & Automation">Robotics & Automation</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electronics & Electrical">Electronics & Electrical</option>
                    <option value="Software & Web Development">Software & Web Development</option>
                    <option value="Renewable Energy & Sustainability">Renewable Energy & Sustainability</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      fontSize: '0.9rem',
                      background: '#FFFFFF',
                      outline: 'none',
                    }}
                  >
                    <option value="₹2,000 – ₹5,000 (Mini Project / Basic Sensor)">₹2,000 – ₹5,000 (Basic Mini Project)</option>
                    <option value="₹5,000 – ₹10,000 (Standard Hardware Prototype)">₹5,000 – ₹10,000 (Standard Hardware Prototype)</option>
                    <option value="₹10,000 – ₹20,000 (Advanced B.Tech / IoT System)">₹10,000 – ₹20,000 (Advanced B.Tech / IoT System)</option>
                    <option value="₹20,000+ (Research Rig / Multi-Axis Robot / Custom)">₹20,000+ (Research Rig / Custom Build)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--navy-900)',
                    marginBottom: '6px',
                  }}
                >
                  Project Requirement / Custom Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your team size, deadline, specific sensors/actuators required, or university syllabus guidelines..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--card-border)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-light-secondary"
                  style={{ padding: '11px 22px' }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ padding: '11px 26px' }}>
                  <Send size={15} />
                  <span>Generate Quotation Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
