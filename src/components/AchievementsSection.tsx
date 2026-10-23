import React from 'react';
import { Award, Zap, Trophy, Target, Building2, User, Users } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/teamData';

export const AchievementsSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Award size={22} color="var(--cyan-400)" />;
      case 'zap':
        return <Zap size={22} color="var(--cyan-400)" />;
      case 'trophy':
        return <Trophy size={22} color="var(--cyan-400)" />;
      case 'target':
        return <Target size={22} color="var(--cyan-400)" />;
      default:
        return <Award size={22} color="var(--cyan-400)" />;
    }
  };

  return (
    <section
      id="achievements"
      className="circuit-bg-navy"
      style={{
        padding: '100px 0 110px',
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
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <div className="section-badge section-badge-navy">
            <Trophy size={14} />
            <span>ACHIEVEMENTS & RECOGNITION</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
              color: '#FFFFFF',
              marginBottom: '18px',
            }}
          >
            Innovation Recognised.{' '}
            <span
              className="font-script"
              style={{
                color: 'var(--cyan-400)',
                fontSize: '1.2em',
                textShadow: '0 0 30px rgba(100, 200, 220, 0.4)',
              }}
            >
              Ideas in Action.
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '1.08rem',
              lineHeight: 1.65,
            }}
          >
            Our team brings together engineering innovation, entrepreneurial thinking, hardware expertise, and hands-on project development, supported by recognition from innovation programmes, national entrepreneurship platforms, and technology competitions.
          </p>
        </div>

        {/* 4 Polished Achievement Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '26px',
          }}
        >
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '32px 26px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(100, 200, 220, 0.45)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(100, 200, 220, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card Header: Icon + Year Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(100, 200, 220, 0.12)',
                    border: '1px solid rgba(100, 200, 220, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(ach.iconType)}
                </div>

                {ach.year && (
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      borderRadius: 'var(--radius-full)',
                      padding: '3px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.75)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {ach.year}
                  </span>
                )}
              </div>

              {/* Recognition Badge */}
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(100, 200, 220, 0.12)',
                  color: 'var(--cyan-400)',
                  border: '1px solid rgba(100, 200, 220, 0.25)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '14px',
                  letterSpacing: '0.06em',
                  width: 'fit-content',
                }}
              >
                {ach.badge}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  marginBottom: '8px',
                }}
              >
                {ach.title}
              </h3>

              {/* Event / Organising Body */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'rgba(255, 255, 255, 0.65)',
                  marginBottom: '14px',
                  fontWeight: 500,
                }}
              >
                <Building2 size={13} color="var(--cyan-400)" style={{ flexShrink: 0 }} />
                <span>{ach.organization}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {ach.description}
              </p>

              {/* Recipient Classification Footer */}
              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.76rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {ach.recipientType === 'Individual Achievement' ? (
                  <User size={13} color="var(--cyan-400)" />
                ) : (
                  <Users size={13} color="var(--cyan-400)" />
                )}
                <span>
                  <strong style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{ach.recipient}</strong> ({ach.recipientType})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
