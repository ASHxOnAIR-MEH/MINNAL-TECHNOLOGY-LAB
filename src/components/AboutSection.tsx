import React from 'react';
import { Target, Compass, Award, Building, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onDiscussProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscussProject }) => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Editorial Image Composition with Cyan Geometric Accent */}
          <div style={{ position: 'relative' }}>
            {/* Cyan Geometric Shape behind corner */}
            <div
              className="geo-backdrop-rounded"
              style={{
                width: '160px',
                height: '160px',
                left: '-24px',
                bottom: '-24px',
                opacity: 0.8,
                zIndex: 1,
              }}
            />

            {/* Main Visual */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px -15px rgba(7, 20, 61, 0.2)',
                border: '2px solid #FFFFFF',
                background: 'var(--navy-900)',
              }}
            >
              <img
                src="/images/cat_elec.jpg"
                alt="Minnal Engineering Circuit Fabrication & Prototype Testing"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />

              {/* Overlaid Institutional Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  background: 'rgba(7, 20, 61, 0.88)',
                  backdropFilter: 'blur(12px)',
                  padding: '18px 22px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Building size={16} color="var(--cyan-400)" />
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--cyan-400)', fontWeight: 700, letterSpacing: '0.08em' }}>
                    Institutional Incubation
                  </span>
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 600 }}>
                  IEDC UKFCET • MSME Reg. UDYAM-KL-06
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div>
            <div className="section-badge section-badge-light">
              <Target size={14} />
              <span>About Minnal Technology Lab</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                color: 'var(--navy-900)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Practical Innovation.{' '}
              <span
                className="font-script"
                style={{
                  color: 'var(--blue-500)',
                  fontSize: '1.18em',
                  fontWeight: 700,
                }}
              >
                Purposeful
              </span>{' '}
              Engineering.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--ink-700)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              <strong>MINNAL TECHNOLOGY LAB</strong> is an MSME-registered enterprise proudly incubated at the Innovation and Entrepreneurship Development Centre (IEDC), UKF College of Engineering and Technology (UKFCET), Parippally, Kollam, Kerala.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--ink-500)',
                lineHeight: 1.65,
                marginBottom: '32px',
              }}
            >
              We bridge the gap between academic textbooks and functioning hardware reality. From secondary school science innovations and college mini-projects to high-stakes final-year B.Tech engineering theses and competition prototypes, our lab provides end-to-end prototyping, component sourcing, firmware engineering, and academic documentation.
            </p>

            {/* Mission & Vision Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px',
                marginBottom: '36px',
              }}
            >
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 4px 14px rgba(7, 20, 61, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Target size={18} color="var(--blue-500)" />
                  <h4 style={{ fontSize: '1rem', color: 'var(--navy-900)', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                    Our Mission
                  </h4>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--ink-500)', lineHeight: 1.5, margin: 0 }}>
                  To democratize hands-on engineering by equipping students and innovators with working, bench-tested hardware and uncompromised technical guidance.
                </p>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 4px 14px rgba(7, 20, 61, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Compass size={18} color="var(--blue-500)" />
                  <h4 style={{ fontSize: '1rem', color: 'var(--navy-900)', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                    Our Vision
                  </h4>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--ink-500)', lineHeight: 1.5, margin: 0 }}>
                  To be Kerala&apos;s leading grassroots prototype development studio, advancing technical literacy and student patent-readiness.
                </p>
              </div>
            </div>

            <button onClick={onDiscussProject} className="btn-primary">
              <span>Discuss Your Engineering Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
};
