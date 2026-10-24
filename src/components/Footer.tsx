import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';
import { ProjectCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProjectCategory) => void;
  onExploreProjects: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onExploreProjects }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories: ProjectCategory[] = [
    'Mechanical Engineering Projects',
    'Mechanical & Industrial Innovation Projects',
    'Robotics & Automation Projects',
    'Microcontroller & Electronics Projects',
    'Internet of Things (IoT) Projects',
    'Composite Material Projects',
    'PHP / Web Application Projects',
    'Web & Software Projects',
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--navy-950)',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '3px',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/logo-emblem.png"
                  alt="MINNAL INNOVATIONS Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.04em' }}>
                  MINNAL
                </div>
                <div style={{ fontSize: '0.64rem', color: 'var(--cyan-400)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                  Innovations
                </div>
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Ideas Into Innovation. MSME-registered engineering enterprise incubated at IEDC UKFCET, building robust hardware prototypes, IoT systems, robotics, and academic project solutions.
            </p>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '8px 12px',
                fontSize: '0.74rem',
                color: 'var(--cyan-400)',
                display: 'inline-block',
              }}
            >
              UDYAM-KL-06-0078293 • IEDC UKFCET
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Projects', 'Categories', 'About', 'Team', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontSize: '0.86rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-400)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Domains */}
          <div>
            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              Project Categories
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    style={{
                      background: 'transparent',
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontSize: '0.86rem',
                      textAlign: 'left',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-400)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              Direct Contacts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <Phone size={15} color="var(--cyan-400)" />
                <a href="tel:+917560901337" style={{ color: 'inherit' }}>+91 75609 01337 / +91 80782 78945</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <Mail size={15} color="var(--cyan-400)" />
                <a href="mailto:contact@minnaltechlab.com" style={{ color: 'inherit' }}>contact@minnaltechlab.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <MapPin size={15} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>UKFCET Campus, Parippally, Kollam, Kerala - 691574</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>MINNAL INNOVATIONS</strong>. All rights reserved. MSME Registered Enterprise.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.8)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cyan-400)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
