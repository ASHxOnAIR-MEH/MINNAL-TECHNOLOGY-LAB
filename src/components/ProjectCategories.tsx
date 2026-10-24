import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { ProjectCategory } from '../types';

interface ProjectCategoriesProps {
  onSelectCategory: (category: ProjectCategory) => void;
}

export const ProjectCategories: React.FC<ProjectCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section
      id="categories"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '60px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Outlined Watermark Word behind section */}
      <div
        className="watermark-text watermark-light"
        style={{
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
          letterSpacing: '0.12em',
        }}
      >
        ENGINEERING
      </div>

      {/* Decorative Cyan circle accent from reference */}
      <div
        style={{
          position: 'absolute',
          right: '4%',
          top: '120px',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'var(--cyan-400)',
          opacity: 0.75,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header matching reference */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <div className="section-badge section-badge-light">
            <Layers size={14} />
            <span>Core Engineering Disciplines</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--navy-900)',
              marginBottom: '16px',
            }}
          >
            Engineering Projects for Every Ambition
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--ink-500)',
              lineHeight: 1.6,
            }}
          >
            Explore ideas, discover solutions, and find the right starting point for your next school, college, or startup project.
          </p>
        </div>

        {/* 4 Cards Across Desktop Layout (matching reference layout hierarchy) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
          className="categories-grid"
        >
          {CATEGORIES_DATA.slice(0, 4).map((cat) => (
            <div
              key={cat.id}
              className="cat-card"
              style={{
                borderRadius: '24px',
              }}
            >
              {/* Image Frame with dark navy treatment and badge */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden',
                  background: 'var(--navy-900)',
                  borderTopLeftRadius: '24px',
                  borderTopRightRadius: '24px',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Dark Vignette Overlay for crisp editorial look */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(7, 20, 61, 0.2) 0%, rgba(7, 20, 61, 0.75) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Overlaid Badge matching reference styling */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(7, 20, 61, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--cyan-400)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    border: '1px solid rgba(100, 200, 220, 0.3)',
                  }}
                >
                  {cat.badge}
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  background: '#FFFFFF',
                  borderBottomLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--blue-500)',
                      display: 'inline-block',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--ink-500)',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {cat.shortDescription}
                </p>

                <button
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--blue-500)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    background: 'transparent',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1952CE')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--blue-500)')}
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Additional Categories in secondary grid to showcase all 8 disciplines */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
          }}
        >
          {CATEGORIES_DATA.slice(4).map((cat) => (
            <div
              key={cat.id}
              className="cat-card cat-card-horizontal"
              style={{
                borderRadius: '24px',
                flexDirection: 'row',
                alignItems: 'stretch',
              }}
            >
              <div
                style={{
                  width: '40%',
                  minHeight: '190px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--navy-900)',
                  borderTopLeftRadius: '24px',
                  borderBottomLeftRadius: '24px',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(7, 20, 61, 0.2) 0%, rgba(7, 20, 61, 0.75) 100%)',
                  }}
                />
              </div>

              <div
                style={{
                  width: '60%',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--blue-500)',
                      display: 'inline-block',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1.22rem',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--ink-500)',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                  }}
                >
                  {cat.shortDescription}
                </p>

                <button
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--blue-500)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    background: 'transparent',
                    padding: 0,
                  }}
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cat-card-horizontal {
            flex-direction: column !important;
          }
          .cat-card-horizontal > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
