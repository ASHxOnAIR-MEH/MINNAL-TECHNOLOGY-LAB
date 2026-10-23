import React, { useState } from 'react';
import { Play, ArrowRight, Wrench, X, CheckCircle, ExternalLink, Globe, Building2, Award, Rocket, Network } from 'lucide-react';
import { ECOSYSTEM_ITEMS, ECOSYSTEM_HEADING, ECOSYSTEM_SUBTITLE } from '../data/ecosystemData';

interface FeaturedShowcaseProps {
  onExploreProjects: () => void;
  onRequestPrototype: () => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({
  onExploreProjects,
  onRequestPrototype,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '60px 0 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Oversized Outlined Typography positioned behind card (matching reference) */}
      <div
        className="watermark-text watermark-light"
        style={{
          left: '3%',
          top: '18%',
          fontSize: 'clamp(4rem, 11vw, 8.5rem)',
          letterSpacing: '0.06em',
        }}
      >
        PROTOTYPE
      </div>

      <div
        className="watermark-text watermark-light"
        style={{
          right: '2%',
          bottom: '22%',
          fontSize: 'clamp(4rem, 11vw, 8.5rem)',
          letterSpacing: '0.06em',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}
      >
        INNOVATION
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Eyebrow & Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-badge section-badge-light">
            <Wrench size={13} />
            <span>Interactive Laboratory Demonstration</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
              color: 'var(--navy-900)',
            }}
          >
            From Concept to Prototype
          </h2>
        </div>

        {/* Oversized Media Card with Cyan Geometric Corner Accents */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1060px',
            margin: '0 auto',
          }}
        >
          {/* Rounded Cyan Geometric Shapes behind corners (directly replicating reference) */}
          <div
            className="geo-backdrop-rounded"
            style={{
              width: '180px',
              height: '180px',
              left: '-28px',
              top: '-24px',
              opacity: 0.85,
              zIndex: 1,
            }}
          />
          <div
            className="geo-backdrop-pill"
            style={{
              width: '160px',
              height: '160px',
              right: '-32px',
              bottom: '-28px',
              opacity: 0.85,
              zIndex: 1,
            }}
          />

          {/* Main Media Card */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px -20px rgba(7, 20, 61, 0.35)',
              border: '2px solid rgba(255, 255, 255, 0.9)',
              background: 'var(--navy-900)',
              minHeight: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/featured_lab.jpg"
              alt="Minnal Engineering Laboratory Workspace & Prototype Testing"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.82,
              }}
            />

            {/* Dark Radial Overlay for High Readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at center, rgba(7, 20, 61, 0.45) 0%, rgba(7, 20, 61, 0.88) 100%)',
              }}
            />

            {/* Content Overlaid */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                textAlign: 'center',
                padding: '48px 24px',
                maxWidth: '720px',
              }}
            >
              {/* Glowing Interactive Play Button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                aria-label="Play Prototype Showcase Video"
                className="pulse-glow"
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #246BFD 0%, #64C8DC 100%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '28px',
                  boxShadow: '0 0 35px rgba(36, 107, 253, 0.65)',
                  border: '3px solid rgba(255, 255, 255, 0.7)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              >
                <Play size={32} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
              </button>

              <h3
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                Explore{' '}
                <span
                  className="font-script"
                  style={{
                    color: 'var(--cyan-400)',
                    fontSize: '1.2em',
                    textShadow: '0 0 25px rgba(100, 200, 220, 0.5)',
                  }}
                >
                  What We Build
                </span>
              </h3>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  maxWidth: '560px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Watch real engineering prototypes in action — from custom IoT firmware and precision robotic joints to analog thermal control and renewable solar tracking.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                <button onClick={onExploreProjects} className="btn-primary">
                  <span>View Featured Projects</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={onRequestPrototype} className="btn-secondary">
                  <span>Request a Custom Prototype</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recognised Across Kerala’s Innovation Ecosystem Section */}
        <div
          id="ecosystem"
          style={{
            marginTop: '76px',
            paddingTop: '64px',
            borderTop: '1px solid rgba(7, 20, 61, 0.08)',
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
            <div className="section-badge section-badge-light" style={{ marginBottom: '14px' }}>
              <Globe size={14} />
              <span>INNOVATION ECOSYSTEM</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                color: 'var(--navy-900)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {ECOSYSTEM_HEADING}
            </h2>

            <p
              style={{
                color: 'var(--ink-500)',
                fontSize: '1.04rem',
                lineHeight: 1.65,
                margin: '0 auto',
              }}
            >
              {ECOSYSTEM_SUBTITLE}
            </p>
          </div>

          {/* 4 Ecosystem Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
            className="ecosystem-grid"
          >
            {ECOSYSTEM_ITEMS.map((item) => {
              const renderIcon = () => {
                switch (item.iconType) {
                  case 'building':
                    return <Building2 size={24} color="var(--blue-500)" strokeWidth={1.8} />;
                  case 'award':
                    return <Award size={24} color="var(--blue-500)" strokeWidth={1.8} />;
                  case 'rocket':
                    return <Rocket size={24} color="var(--blue-500)" strokeWidth={1.8} />;
                  case 'network':
                    return <Network size={24} color="var(--blue-500)" strokeWidth={1.8} />;
                  default:
                    return <Globe size={24} color="var(--blue-500)" strokeWidth={1.8} />;
                }
              };

              return (
                <div
                  key={item.id}
                  className="cat-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 8px 24px -4px rgba(7, 20, 61, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px -6px rgba(7, 20, 61, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(36, 107, 253, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(7, 20, 61, 0.05)';
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                  }}
                >
                  {/* Top row: Icon in subtle pill + Geographic indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '22px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'rgba(36, 107, 253, 0.08)',
                        border: '1px solid rgba(36, 107, 253, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {renderIcon()}
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: 'var(--blue-500)',
                        background: 'rgba(36, 107, 253, 0.06)',
                        border: '1px solid rgba(36, 107, 253, 0.12)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        textTransform: 'uppercase',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--cyan-400)',
                        }}
                      />
                      Kerala
                    </span>
                  </div>

                  {/* Label / Badge */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--blue-500)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.label}
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      marginBottom: '12px',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--ink-500)',
                      lineHeight: 1.6,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video / Interactive Laboratory Walkthrough Modal */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '840px',
              background: 'var(--navy-950)',
              color: '#FFFFFF',
              border: '1px solid rgba(100, 200, 220, 0.3)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#10B981',
                  }}
                />
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>
                  MINNAL Lab Showcase & Prototype Walkthrough
                </h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '28px' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <img
                  src="/images/featured_lab.jpg"
                  alt="Prototype Walkthrough"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(4, 9, 26, 0.85) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: 'var(--cyan-400)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '4px',
                      }}
                    >
                      Active Lab Build Environment
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
                      Engineering Prototypes • Testing • Demonstration
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ color: 'var(--cyan-400)', fontSize: '0.75rem', fontWeight: 700 }}>
                    1. HARDWARE BUILD
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                    Breadboard testing, custom PCB layout, component soldering, and physical CAD assembly.
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ color: 'var(--cyan-400)', fontSize: '0.75rem', fontWeight: 700 }}>
                    2. FIRMWARE & LOGIC
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                    C/C++ firmware, sensor drivers, mathematical calibration, and telemetry communication.
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ color: 'var(--cyan-400)', fontSize: '0.75rem', fontWeight: 700 }}>
                    3. DOCUMENTATION & VIVA
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                    University-format B.Tech report, circuit schematics, seminar PPT, and viva defense guide.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    onRequestPrototype();
                  }}
                  className="btn-primary"
                  style={{ padding: '12px 24px' }}
                >
                  <span>Enquire For Your Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
