import React from 'react';
import { Trophy, Award, Globe, Rocket, CheckCircle2, Milestone } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/teamData';

export const AchievementsSection: React.FC = () => {
  const milestones = [
    {
      year: '2026',
      title: 'IEFK 2026 International Finalist',
      desc: 'Selected as an International Finalist at the International Entrepreneurship Festival Kerala 2026 for high-impact IoT innovation.',
    },
    {
      year: '2026',
      title: 'Prototype 3.0 State Level Winner',
      desc: 'Won 1st prize at College of Engineering Perumon for the rapid fabrication and demonstration of an advanced hardware prototype.',
    },
    {
      year: '2025-26',
      title: 'Kerala Startup Mission (KSUM) & RINK',
      desc: 'Academic internship and active technology evaluation association with Research Innovation Network Kerala.',
    },
    {
      year: '2025',
      title: 'IEDC UKFCET Incubation',
      desc: 'Official incubation under IEDC UKFCET and Government of India MSME registration (UDYAM-KL-06).',
    },
  ];

  return (
    <section
      id="achievements"
      className="circuit-bg-navy"
      style={{
        padding: '90px 0 110px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Outlined Watermark Word */}
      <div
        className="watermark-text watermark-navy"
        style={{
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
        }}
      >
        EXCELLENCE
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Headline matching reference styling */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-badge section-badge-navy">
            <Trophy size={14} />
            <span>Proven Track Record</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.5rem)',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Engineering Ambition Into{' '}
            <span
              className="font-script"
              style={{
                color: 'var(--cyan-400)',
                fontSize: '1.2em',
                textShadow: '0 0 30px rgba(100, 200, 220, 0.4)',
              }}
            >
              Achievement
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            From state-level prototyping championships to international innovation stages and premier research fellowships at IIT Kanpur.
          </p>
        </div>

        {/* 4 Cards Grid with Large Metric Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.title}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '36px 28px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(100, 200, 220, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Badge */}
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(100, 200, 220, 0.15)',
                  color: 'var(--cyan-400)',
                  border: '1px solid rgba(100, 200, 220, 0.25)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '16px',
                  letterSpacing: '0.06em',
                }}
              >
                {ach.badge}
              </div>

              {/* Big Metric Display */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '12px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, var(--cyan-400) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {ach.number}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                {ach.title}
              </h3>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: 1.55,
                }}
              >
                {ach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Milestone Timeline Grid */}
        <div
          style={{
            background: 'rgba(7, 20, 61, 0.6)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '36px 40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            <Milestone size={20} color="var(--cyan-400)" />
            <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-sans)' }}>
              Key Innovation Milestones
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {milestones.map((m, idx) => (
              <div
                key={m.title}
                style={{
                  borderLeft: '2px solid rgba(100, 200, 220, 0.4)',
                  paddingLeft: '18px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--cyan-400)',
                    letterSpacing: '0.08em',
                    marginBottom: '4px',
                  }}
                >
                  {m.year}
                </div>
                <div
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '6px',
                  }}
                >
                  {m.title}
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255, 255, 255, 0.68)',
                    lineHeight: 1.5,
                  }}
                >
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
