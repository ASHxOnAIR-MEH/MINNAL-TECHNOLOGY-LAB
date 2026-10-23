import React from 'react';
import { Users, Linkedin, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '90px 0 110px',
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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <div className="section-badge section-badge-light">
            <Users size={14} />
            <span>THE PEOPLE BEHIND THE IDEAS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              color: 'var(--navy-900)',
              marginBottom: '16px',
            }}
          >
            Meet the Team
          </h2>

          <p
            style={{
              color: 'var(--ink-500)',
              fontSize: '1.08rem',
              lineHeight: 1.65,
            }}
          >
            A multidisciplinary team combining engineering expertise, IoT development, hardware prototyping, and entrepreneurial thinking to turn innovative ideas into practical solutions.
          </p>
        </div>

        {/* 3 Team Cards Grid — Beautiful balanced 3-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
          className="team-grid"
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="cat-card"
              style={{
                borderRadius: '24px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: '#FFFFFF',
              }}
            >
              {/* Top Row: Avatar & LinkedIn Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '22px',
                }}
              >
                {/* Neutral Professional Placeholder Avatar */}
                <div
                  style={{
                    width: '82px',
                    height: '82px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)',
                    border: '2px solid rgba(100, 200, 220, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 28px -6px rgba(7, 20, 61, 0.22)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--cyan-400)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {member.initials}
                  </span>

                  {/* Verified indicator badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      right: '-5px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--blue-500)',
                      border: '2px solid #FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    }}
                  >
                    <ShieldCheck size={13} />
                  </div>
                </div>

                {/* LinkedIn Icon Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${member.name}'s LinkedIn profile`}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(36, 107, 253, 0.08)',
                    border: '1px solid rgba(36, 107, 253, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-500)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0077B5';
                    e.currentTarget.style.borderColor = '#0077B5';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(36, 107, 253, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(36, 107, 253, 0.16)';
                    e.currentTarget.style.color = 'var(--blue-500)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Name & Role */}
              <div style={{ marginBottom: '8px' }}>
                <h3
                  style={{
                    fontSize: '1.38rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--navy-900)',
                    fontWeight: 700,
                    marginBottom: '4px',
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--blue-500)',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                  }}
                >
                  {member.role}
                </div>
              </div>

              {/* Headline Pill */}
              <div
                style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--card-border)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.74rem',
                  color: 'var(--ink-700)',
                  fontWeight: 600,
                  lineHeight: 1.45,
                  marginBottom: '16px',
                }}
              >
                {member.headline}
              </div>

              {/* Biography */}
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--ink-500)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {member.bio}
              </p>

              {/* Achievement Badges Pill Cluster */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '22px',
                }}
              >
                {member.badges.map((badge, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(36, 107, 253, 0.06)',
                      color: 'var(--blue-600)',
                      border: '1px solid rgba(36, 107, 253, 0.16)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Detailed Verified Credentials Bullet List */}
              <div
                style={{
                  width: '100%',
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '18px',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--ink-400)',
                    marginBottom: '10px',
                  }}
                >
                  Confirmed Experience
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {member.confirmedAchievements.map((ach, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.78rem',
                        color: 'var(--ink-700)',
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        color="var(--blue-500)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LinkedIn Full Action Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${member.name}'s profile on LinkedIn`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'var(--off-white)',
                  color: 'var(--navy-900)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  padding: '11px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  marginTop: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077B5';
                  e.currentTarget.style.borderColor = '#0077B5';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--off-white)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.color = 'var(--navy-900)';
                }}
              >
                <Linkedin size={16} />
                <span>View LinkedIn Profile</span>
                <ExternalLink size={13} style={{ opacity: 0.7 }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
