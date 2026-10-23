import React from 'react';
import { Award, Building2, Cpu, Trophy } from 'lucide-react';

export const CredibilityCard: React.FC = () => {
  const credentials = [
    {
      icon: <Award size={26} color="var(--blue-500)" strokeWidth={1.8} />,
      title: 'MSME Registered',
      badge: 'UDYAM-KL-06',
      subtitle: 'Government of India Recognized Micro Enterprise',
    },
    {
      icon: <Building2 size={26} color="var(--blue-500)" strokeWidth={1.8} />,
      title: 'IEDC UKFCET',
      badge: 'Incubated Enterprise',
      subtitle: 'Innovation and Entrepreneurship Development Centre',
    },
    {
      icon: <Cpu size={26} color="var(--blue-500)" strokeWidth={1.8} />,
      title: '100+ Project Builds',
      badge: 'Practical Experience',
      subtitle: 'Hardware prototypes, mini & final-year projects delivered',
    },
    {
      icon: <Trophy size={26} color="var(--blue-500)" strokeWidth={1.8} />,
      title: '50+ Team Achievements',
      badge: 'Recognized Excellence',
      subtitle: 'Prototype 3.0 Winner, IEFK 2026 & NEC Top 4',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 25,
        marginTop: '-55px',
        marginBottom: '60px',
      }}
    >
      <div className="container">
        <div className="credibility-card">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              position: 'relative',
            }}
            className="credibility-grid"
          >
            {credentials.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '8px 16px',
                  position: 'relative',
                }}
              >
                {/* Icon in subtle pill */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(36, 107, 253, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    border: '1px solid rgba(36, 107, 253, 0.12)',
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--blue-500)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '4px',
                  }}
                >
                  {item.badge}
                </div>

                <div
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    color: 'var(--navy-900)',
                    lineHeight: 1.2,
                    marginBottom: '6px',
                  }}
                >
                  {item.title}
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--ink-500)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.subtitle}
                </p>

                {/* Subtle vertical separator on desktop */}
                {idx < credentials.length - 1 && (
                  <div
                    className="credibility-separator"
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '10%',
                      bottom: '10%',
                      width: '1px',
                      background: 'rgba(7, 20, 61, 0.08)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .credibility-separator {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
