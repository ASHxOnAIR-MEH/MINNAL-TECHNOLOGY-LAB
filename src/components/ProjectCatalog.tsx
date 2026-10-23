import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, FileText, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory, ProjectComplexity } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface ProjectCatalogProps {
  selectedCategoryFilter?: ProjectCategory | 'All';
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuotation: (project: ProjectItem) => void;
}

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({
  selectedCategoryFilter = 'All',
  onSelectProject,
  onRequestQuotation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>(selectedCategoryFilter);
  const [activeComplexity, setActiveComplexity] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  // Keep active category in sync if parent changes it
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'IoT & Embedded Systems',
    'Robotics & Automation',
    'Mechanical Engineering',
    'Electronics & Electrical',
    'Software & Web Development',
    'Renewable Energy & Sustainability',
  ];

  const complexities = [
    'All',
    'Mini Project (S3-S5)',
    'Final Year B.Tech (S7-S8)',
    'Working Hardware Prototype',
    'Research & Competition Rig',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category filter
      if (activeCategory !== 'All' && project.category !== activeCategory) {
        return false;
      }

      // Complexity filter
      if (activeComplexity !== 'All' && project.complexity !== activeComplexity) {
        return false;
      }

      // Search query filter (matches title, id, tags, or description)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesId = project.id.toLowerCase().includes(q);
        const matchesDesc = project.shortDescription.toLowerCase().includes(q);
        const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(q));
        const matchesComponents = project.hardwareComponents.some((c) => c.toLowerCase().includes(q));

        if (!matchesTitle && !matchesId && !matchesDesc && !matchesTags && !matchesComponents) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, activeCategory, activeComplexity]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setActiveComplexity('All');
    setVisibleCount(6);
  };

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '70px 0 100px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div className="section-badge section-badge-light">
            <Sparkles size={14} />
            <span>Ready-Made Project Catalog</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--navy-900)',
              marginBottom: '14px',
            }}
          >
            Verified Engineering Projects & Prototypes
          </h2>
          <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Browse tested hardware builds, mini projects, and final-year B.Tech projects with full schematic packages, firmware source code, and university-format documentation.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: 'var(--card-shadow)',
            border: '1px solid var(--card-border)',
            marginBottom: '40px',
          }}
        >
          {/* Top Row: Search Input + Complexity Filter */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flexGrow: 1,
                minWidth: '280px',
              }}
            >
              <Search
                size={18}
                color="var(--ink-400)"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <input
                type="text"
                placeholder="Search by project title, ID (e.g. MNL-IOT-001), sensor, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px 13px 44px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--card-border)',
                  background: 'var(--off-white)',
                  fontSize: '0.92rem',
                  color: 'var(--ink-900)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--blue-500)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
              />
            </div>

            {/* Complexity Filter Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={16} color="var(--ink-500)" />
              <select
                value={activeComplexity}
                onChange={(e) => setActiveComplexity(e.target.value)}
                style={{
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--card-border)',
                  background: 'var(--off-white)',
                  color: 'var(--ink-800)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="All">All Academic Levels & Complexities</option>
                {complexities.slice(1).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--blue-500)' : 'var(--card-border)',
                    background: isSelected ? 'var(--blue-500)' : 'var(--off-white)',
                    color: isSelected ? '#FFFFFF' : 'var(--ink-700)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Active Filter Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            fontSize: '0.88rem',
            color: 'var(--ink-500)',
          }}
        >
          <div>
            Showing <strong style={{ color: 'var(--navy-900)' }}>{filteredProjects.length}</strong> verified engineering project{filteredProjects.length !== 1 ? 's' : ''}
          </div>

          {(searchQuery || activeCategory !== 'All' || activeComplexity !== 'All') && (
            <button
              onClick={resetFilters}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'transparent',
                color: 'var(--blue-500)',
                fontWeight: 600,
                fontSize: '0.84rem',
              }}
            >
              <RotateCcw size={14} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '60px 24px',
              textAlign: 'center',
              border: '1px solid var(--card-border)',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(36, 107, 253, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Search size={28} color="var(--blue-500)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
              No matching projects found
            </h3>
            <p style={{ color: 'var(--ink-500)', fontSize: '0.9rem', marginBottom: '24px' }}>
              We could not find any projects matching &quot;{searchQuery}&quot; under the selected filters. Have a custom project requirement?
            </p>
            <button onClick={resetFilters} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.88rem' }}>
              <span>Clear All Filters</span>
            </button>
          </div>
        ) : (
          /* Project Grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
              marginBottom: '48px',
            }}
          >
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="cat-card"
                style={{
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    overflow: 'hidden',
                    background: 'var(--navy-900)',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(7, 20, 61, 0.15) 0%, rgba(7, 20, 61, 0.75) 100%)',
                    }}
                  />

                  {/* Project ID Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(7, 20, 61, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--cyan-400)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      border: '1px solid rgba(100, 200, 220, 0.3)',
                    }}
                  >
                    ID: {project.id}
                  </div>

                  {/* Complexity Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      background: 'rgba(255, 255, 255, 0.92)',
                      color: 'var(--navy-900)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    {project.complexity}
                  </div>
                </div>

                {/* Card Body */}
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
                  {/* Category */}
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--blue-500)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '6px',
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: '10px',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--ink-500)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                      flexGrow: 1,
                    }}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '20px',
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'var(--off-white)',
                          color: 'var(--ink-700)',
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid var(--card-border)',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--ink-400)',
                          padding: '3px 4px',
                        }}
                      >
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Card Actions: View Details + Request Quotation */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--card-border)',
                    }}
                  >
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-light-secondary"
                      style={{
                        flex: 1,
                        padding: '10px',
                        fontSize: '0.82rem',
                      }}
                    >
                      <FileText size={14} />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onRequestQuotation(project)}
                      className="btn-primary"
                      style={{
                        flex: 1.2,
                        padding: '10px',
                        fontSize: '0.82rem',
                      }}
                    >
                      <span>Quotation</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="btn-light-secondary"
              style={{
                padding: '13px 32px',
                fontSize: '0.92rem',
                fontWeight: 600,
              }}
            >
              <span>Load More Projects ({filteredProjects.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
