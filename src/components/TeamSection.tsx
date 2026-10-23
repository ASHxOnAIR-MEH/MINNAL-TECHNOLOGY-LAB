import React from 'react';
import { Users, Award, CheckCircle2, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '80px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Watermark Typography */}
      <div
        className="watermark-text watermark-light"
        style={{
          right: '5%',
          top: '20px',
          fontSize: 'clamp(4rem, 11vw, 8rem)',
          letterSpacing: '0.1em',
        }}
      >
        LEADERSHIP
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <div className="section-badge section-badge-light">
            <Users size={14} />
            <span>Engineering Leadership</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--navy-900)',
              marginBottom: '16px',
            }}
          >
            Meet the Minds Behind the Innovation
          </h2>
          <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Guided by proven hardware builders, academic researchers, and startup mentors committed to turning student concepts into functional engineering realities.
          </p>
        </div>

        {/* 4 Team Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="cat-card"
              style={{
                borderRadius: '24px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Elegant Neutral Placeholder Avatar (as specifically instructed in prompt: "Otherwise use elegant neutral placeholders rather than invented people") */}
              <div
                style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)',
                  border: '2px solid rgba(100, 200, 220, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 12px 28px -6px rgba(7, 20, 61, 0.25)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--cyan-400)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {member.initials}
                </span>

                {/* Sub-badge indicating verified credential */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    right: '-6px',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--blue-500)',
                    border: '2px solid #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <ShieldCheck size={14} />
                </div>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--navy-900)',
                  fontWeight: 700,
                  marginBottom: '4px',
                }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--blue-500)',
                  fontWeight: 700,
                  marginBottom: '12px',
                  letterSpacing: '0.02em',
                }}
              >
                {member.role}
              </div>

              {/* Domain Pill */}
              <div
                style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--card-border)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.74rem',
                  color: 'var(--ink-700)',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                {member.domain}
              </div>

              {/* Short Bio */}
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--ink-500)',
                  lineHeight: 1.5,
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {member.bio}
              </p>

              {/* Confirmed Achievements List */}
              <div
                style={{
                  width: '100%',
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '16px',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--ink-400)',
                    marginBottom: '8px',
                  }}
                >
                  Verified Credentials
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {member.confirmedAchievements.map((ach, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.78rem',
                        color: 'var(--ink-700)',
                        lineHeight: 1.35,
                      }}
                    >
                      <CheckCircle2
                        size={13}
                        color="var(--blue-500)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
