import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { ProjectCategory } from '../types';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('IoT & Embedded Systems');
  const [budgetRange, setBudgetRange] = useState('₹5,000 – ₹10,000');
  const [description, setDescription] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !institution.trim()) {
      setErrorMsg('Please enter your name, institution/college, and mobile number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*NEW PROJECT INQUIRY — MINNAL TECHNOLOGY LAB*\n` +
    `---------------------------------------\n` +
    `*Name:* ${name}\n` +
    `*Institution:* ${institution}\n` +
    `*Mobile:* ${phone}\n` +
    `*Email:* ${email || 'Not specified'}\n` +
    `*Domain:* ${category}\n` +
    `*Estimated Budget:* ${budgetRange}\n` +
    `*Details:* ${description || 'Requesting project consultation'}`
  );

  return (
    <section
      id="contact"
      className="circuit-bg-navy"
      style={{
        padding: '100px 0 110px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-badge section-badge-navy">
            <Sparkles size={14} />
            <span>Start Your Build</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Have an Idea{' '}
            <span
              className="font-script"
              style={{
                color: 'var(--cyan-400)',
                fontSize: '1.2em',
                textShadow: '0 0 25px rgba(100, 200, 220, 0.4)',
              }}
            >
              Worth Building?
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '1.08rem',
              lineHeight: 1.6,
            }}
          >
            Tell us about your project, requirements, and timeline. Let&apos;s explore what we can create together.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Interactive Enquiry Form */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(16px)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '36px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                color: '#FFFFFF',
                fontFamily: 'var(--font-serif)',
                marginBottom: '8px',
              }}
            >
              Project Consultation Form
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.86rem', marginBottom: '24px' }}>
              Fill in your specifications for a customized timeline and component BOM estimate.
            </p>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10B981',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#FFFFFF',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>

                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  Enquiry Prepared Successfully!
                </h4>

                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  Your project specifications for <strong>{name}</strong> ({institution}) are compiled. Forward them directly to our engineering lead on WhatsApp for instant evaluation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a
                    href={`https://wa.me/917560901337?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      background: '#25D366',
                      padding: '13px 20px',
                      fontSize: '0.92rem',
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Send to Lead Developer via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: 'transparent',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '0.82rem',
                      padding: '6px',
                    }}
                  >
                    Edit details or submit another query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid #EF4444',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      color: '#FCA5A5',
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '18px',
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      College / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UKFCET / TKM / CET"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      WhatsApp Phone *
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
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      Project Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'var(--navy-900)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    >
                      <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                      <option value="Robotics & Automation">Robotics & Automation</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Electronics & Electrical">Electronics & Electrical</option>
                      <option value="Software & Web Development">Software & Web Development</option>
                      <option value="Renewable Energy & Sustainability">Renewable Energy</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                      Target Budget
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'var(--navy-900)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    >
                      <option value="₹2,000 – ₹5,000 (Mini Project)">₹2,000 – ₹5,000 (Mini Project)</option>
                      <option value="₹5,000 – ₹10,000 (Standard Build)">₹5,000 – ₹10,000 (Standard Build)</option>
                      <option value="₹10,000 – ₹20,000 (Final Year B.Tech)">₹10,000 – ₹20,000 (Final Year B.Tech)</option>
                      <option value="₹20,000+ (Research & Robotics Rig)">₹20,000+ (Research Rig)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', fontWeight: 600 }}>
                    Project Description / Hardware Scope
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the objective, any specific sensors (e.g., ESP32, LiDAR, Solar tracker) and required deadline..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      color: '#FFFFFF',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.96rem',
                  }}
                >
                  <Send size={16} />
                  <span>Submit Project Consultation</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct WhatsApp Callout */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(36, 107, 253, 0.15) 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#25D366', fontWeight: 700, letterSpacing: '0.08em' }}>
                    Instant Consultation
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-serif)' }}>
                    Direct WhatsApp Support
                  </h4>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55, marginBottom: '20px' }}>
                Chat directly with our lead developers for instant project topic verification, feasibility checks, and pricing.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href="https://wa.me/917560901337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: '#25D366',
                    padding: '10px 18px',
                    fontSize: '0.84rem',
                  }}
                >
                  <span>WhatsApp: +91 75609 01337</span>
                </a>

                <a
                  href="https://wa.me/918078278945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.84rem',
                  }}
                >
                  <span>Alt: +91 80782 78945</span>
                </a>
              </div>
            </div>

            {/* Verified Location & Lab Details Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <MapPin size={20} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                      Incubation Headquarters
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.5 }}>
                      MINNAL TECHNOLOGY LAB, IEDC UKFCET, UKF College of Engineering and Technology, Meenambalam, Puthenkulam P.O., Parippally, Kollam, Kerala — 691574
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <Mail size={20} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                      Official Correspondence
                    </div>
                    <a
                      href="mailto:contact@minnaltechlab.com"
                      style={{ fontSize: '0.82rem', color: 'var(--cyan-400)', textDecoration: 'underline' }}
                    >
                      contact@minnaltechlab.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <Clock size={20} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                      Laboratory Hours
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.72)' }}>
                      Monday – Saturday: 9:00 AM – 6:30 PM (IST)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
