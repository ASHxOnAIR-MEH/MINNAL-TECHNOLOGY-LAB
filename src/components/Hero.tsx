import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onDiscussProject }) => {
  return (
    <section
      id="home"
      className="circuit-bg-navy"
      style={{
        position: 'relative',
        color: '#FFFFFF',
        paddingTop: '130px',
        paddingBottom: '140px',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Cyan / Teal Geometric Shapes behind visual matching reference */}
      <div
        className="geo-backdrop-pill"
        style={{
          width: '360px',
          height: '480px',
          right: '5%',
          top: '12%',
          opacity: 0.28,
          filter: 'blur(10px)',
          transform: 'rotate(-8deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '2%',
          top: '32%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'var(--cyan-400)',
          opacity: 0.85,
          zIndex: 2,
          boxShadow: '0 8px 24px rgba(100, 200, 220, 0.4)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            alignItems: 'center',
            gap: '36px',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(36, 107, 253, 0.16)',
                border: '1px solid rgba(100, 200, 220, 0.3)',
                color: 'var(--cyan-400)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              <Sparkles size={14} />
              <span>MSME Registered Enterprise • Rapid Engineering Prototypes</span>
            </div>

            {/* Main Editorial Headline matching reference styling */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                lineHeight: 1.08,
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '24px',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Building Ideas.{' '}
              <span
                className="font-script"
                style={{
                  color: 'var(--cyan-400)',
                  fontSize: '1.18em',
                  fontWeight: 700,
                  display: 'inline-block',
                  marginRight: '6px',
                  textShadow: '0 0 35px rgba(100, 200, 220, 0.4)',
                }}
              >
                Engineering
              </span>{' '}
              the Future.
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                marginBottom: '36px',
                maxWidth: '560px',
                fontWeight: 400,
              }}
            >
              From student project concepts to working engineering prototypes,{' '}
              <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>MINNAL INNOVATIONS</strong> helps schools,
              colleges, and innovators turn ideas into practical, industry-grade solutions.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '32px',
              }}
            >
              <button
                onClick={onExploreProjects}
                className="btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '0.96rem',
                }}
              >
                <span>Explore Project Catalog</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onDiscussProject}
                className="btn-secondary"
                style={{
                  padding: '14px 26px',
                  fontSize: '0.98rem',
                }}
              >
                <MessageSquare size={17} color="var(--cyan-400)" />
                <span>Discuss Your Project</span>
              </button>
            </div>

            {/* Key Micro Trust Pillars */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.72)',
                fontSize: '0.84rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="var(--cyan-400)" />
                <span>Tested Working Hardware</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="var(--cyan-400)" />
                <span>Complete Viva & Report Package</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="var(--cyan-400)" />
                <span>Direct WhatsApp Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual matching reference composition */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Rounded Cyan backdrop card behind image (directly inspired by reference's teal card behind Jonathan) */}
            <div
              style={{
                position: 'absolute',
                width: '88%',
                height: '92%',
                right: '2%',
                bottom: '-6%',
                background: 'linear-gradient(135deg, rgba(100, 200, 220, 0.22) 0%, rgba(36, 107, 253, 0.35) 100%)',
                border: '1px solid rgba(100, 200, 220, 0.4)',
                borderRadius: '38px',
                zIndex: 1,
                transform: 'rotate(2deg)',
              }}
            />

            {/* Main Engineering Prototype Visual Card */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.65), 0 0 40px rgba(100, 200, 220, 0.2)',
                border: '1.5px solid rgba(255, 255, 255, 0.18)',
                background: 'var(--navy-850)',
                width: '100%',
                maxWidth: '520px',
              }}
            >
              <img
                src="/images/hero_arm.jpg"
                alt="Minnal Engineering Prototype: Precision Robotic Arm & Cybernetic Circuit Assembly"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* Overlay Glass Badge on image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '18px',
                  right: '18px',
                  background: 'rgba(7, 20, 61, 0.82)',
                  backdropFilter: 'blur(12px)',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--cyan-400)', letterSpacing: '0.1em', fontWeight: 700 }}>
                    Active Prototype Build
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFFFFF' }}>
                    Precision Hardware & AI Automation
                  </div>
                </div>
                <div
                  style={{
                    background: 'rgba(36, 107, 253, 0.3)',
                    border: '1px solid var(--cyan-400)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    color: 'var(--cyan-400)',
                    fontWeight: 700,
                  }}
                >
                  TRL-6 Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Angled / Curved Edge Transitioning into Off-White Section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70px',
          background: 'var(--off-white)',
          clipPath: 'polygon(0 75%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 3,
        }}
      />

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          #home {
            padding-top: 105px !important;
            padding-bottom: 90px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-cta-group button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
