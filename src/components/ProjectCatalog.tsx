import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  SlidersHorizontal, 
  X, 
  Layers, 
  MessageCircle, 
  Eye, 
  ChevronDown 
} from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
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
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter);
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'id-asc' | 'id-desc' | 'title-asc' | 'title-desc'>('default');
  const [visibleCount, setVisibleCount] = useState(12);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category if parent changes it
  useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
      setVisibleCount(12);
    }
  }, [selectedCategoryFilter]);

  const categories = [
    'All',
    'Mechanical Engineering Projects',
    'Mechanical & Industrial Innovation Projects',
    'PHP / Web Application Projects',
    'Microcontroller & Electronics Projects',
    'Robotics & Automation Projects',
    'Internet of Things (IoT) Projects',
    'Mechanical Mechanism Projects',
    'Web & Software Projects',
  ];

  const catalogGroups = [
    { code: 'All', label: 'All Series (1,334)' },
    { code: 'ME', label: 'ME — Mechanical (336)' },
    { code: 'MI', label: 'MI — Industrial (273)' },
    { code: 'PHP', label: 'PHP — Web Apps (236)' },
    { code: 'MC', label: 'MC — Microcontrollers (183)' },
    { code: 'MR', label: 'MR — Robotics (129)' },
    { code: 'IOT', label: 'IOT — Connected (77)' },
    { code: 'MH', label: 'MH — Mechanisms (67)' },
    { code: 'CWEB', label: 'CWEB — Software (33)' },
  ];

  const filteredProjects = useMemo(() => {
    let list = PROJECTS_DATA.filter((project) => {
      // Category filter (supports exact official categories and friendly aliases)
      if (activeCategory !== 'All') {
        if (activeCategory === 'Mechanical Projects' || activeCategory === 'Mechanical Engineering') {
          if (
            project.category !== 'Mechanical Engineering Projects' &&
            project.category !== 'Mechanical Mechanism Projects' &&
            project.catalogGroup !== 'ME' &&
            project.catalogGroup !== 'MH'
          ) {
            return false;
          }
        } else if (activeCategory === 'Mechanical & Industrial Innovation') {
          if (
            project.category !== 'Mechanical & Industrial Innovation Projects' &&
            project.catalogGroup !== 'MI'
          ) {
            return false;
          }
        } else if (activeCategory === 'Robotics & Automation') {
          if (
            project.category !== 'Robotics & Automation Projects' &&
            project.catalogGroup !== 'MR'
          ) {
            return false;
          }
        } else if (activeCategory === 'IoT & Embedded Systems') {
          if (
            project.category !== 'Internet of Things (IoT) Projects' &&
            project.catalogGroup !== 'IOT'
          ) {
            return false;
          }
        } else if (activeCategory === 'Electronics & Electrical') {
          if (
            project.category !== 'Microcontroller & Electronics Projects' &&
            project.catalogGroup !== 'MC'
          ) {
            return false;
          }
        } else if (activeCategory === 'Software & Web Development') {
          if (
            project.category !== 'Web & Software Projects' &&
            project.category !== 'PHP / Web Application Projects' &&
            project.catalogGroup !== 'CWEB' &&
            project.catalogGroup !== 'PHP'
          ) {
            return false;
          }
        } else if (project.category !== activeCategory) {
          return false;
        }
      }

      // Catalog Group filter
      if (activeGroup !== 'All' && project.catalogGroup !== activeGroup) {
        return false;
      }

      // Live search query matching
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesOriginal = project.originalTitle ? project.originalTitle.toLowerCase().includes(q) : false;
        const matchesId = project.id.toLowerCase().includes(q);
        const matchesCategory = project.category.toLowerCase().includes(q);
        const matchesGroup = project.catalogGroup ? project.catalogGroup.toLowerCase().includes(q) : false;
        const matchesDesc = project.shortDescription ? project.shortDescription.toLowerCase().includes(q) : false;
        const matchesTags = (project.tags || []).some((t) => t.toLowerCase().includes(q));
        const matchesComponents = (project.hardwareComponents || []).some((c) => c.toLowerCase().includes(q));

        if (!matchesTitle && !matchesOriginal && !matchesId && !matchesCategory && !matchesGroup && !matchesDesc && !matchesTags && !matchesComponents) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === 'id-asc') {
      list = [...list].sort((a, b) => a.id.localeCompare(b.id));
    } else if (sortBy === 'id-desc') {
      list = [...list].sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === 'title-asc') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'title-desc') {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }, [searchQuery, activeCategory, activeGroup, sortBy]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setActiveGroup('All');
    setSortBy('default');
    setVisibleCount(9);
  };

  const isFilteringActive = searchQuery.trim() !== '' || activeCategory !== 'All' || activeGroup !== 'All' || sortBy !== 'default';

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '70px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          <div className="section-badge section-badge-light" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} />
            <span>ENGINEERING PROJECT CATALOGUE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              color: 'var(--navy-900)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Explore Tested Projects & Working Prototypes
          </h2>

          <p
            style={{
              color: 'var(--ink-500)',
              fontSize: '1.04rem',
              lineHeight: 1.65,
              margin: '0 auto',
            }}
          >
            Browse real mechanical assemblies, robotics platforms, IoT systems, electronics controls, and software prototypes complete with university-format reports, circuit diagrams, and firmware.
          </p>
        </div>

        {/* Filter Controls Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '24px 20px',
            boxShadow: '0 8px 30px -6px rgba(7, 20, 61, 0.06)',
            border: '1px solid var(--card-border)',
            marginBottom: '32px',
          }}
        >
          {/* Top Search Bar + Sort & Mobile Filter Toggle */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '18px',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 280px',
                minWidth: '240px',
              }}
            >
              <Search
                size={18}
                color="var(--blue-500)"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <input
                type="text"
                aria-label="Search projects by code or title"
                placeholder="Search by code (e.g. MH001, MR019, IOT), title, or keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(9);
                }}
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 44px',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--off-white)',
                  fontSize: '0.92rem',
                  color: 'var(--ink-900)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--blue-500)';
                  e.target.style.background = '#FFFFFF';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--card-border)';
                  e.target.style.background = 'var(--off-white)';
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(7, 20, 61, 0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--ink-700)',
                  }}
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '0 0 auto' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink-500)', fontWeight: 600 }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort projects"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--off-white)',
                  color: 'var(--navy-900)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="default">Default Order</option>
                <option value="id-asc">Project Code (A → Z)</option>
                <option value="id-desc">Project Code (Z → A)</option>
                <option value="title-asc">Title (A → Z)</option>
                <option value="title-desc">Title (Z → A)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills — Horizontally Scrollable on Mobile with Touch Momentum */}
          <div>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '6px',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="category-scroll-pills"
            >
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setVisibleCount(9);
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--blue-500)' : 'var(--card-border)',
                      background: isSelected ? 'var(--blue-500)' : 'var(--off-white)',
                      color: isSelected ? '#FFFFFF' : 'var(--ink-700)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog Group Series Pills (MH, MR, MI, ME, IOT, EE, SW, RE) */}
          <div
            style={{
              marginTop: '14px',
              paddingTop: '14px',
              borderTop: '1px dashed rgba(7, 20, 61, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
            }}
          >
            <span style={{ fontSize: '0.74rem', color: 'var(--ink-500)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
              Series Filter:
            </span>
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              {catalogGroups.map((grp) => {
                const isSelected = activeGroup === grp.code;
                return (
                  <button
                    key={grp.code}
                    onClick={() => {
                      setActiveGroup(grp.code);
                      setVisibleCount(9);
                    }}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--navy-900)' : 'rgba(7, 20, 61, 0.1)',
                      background: isSelected ? 'var(--navy-900)' : 'transparent',
                      color: isSelected ? '#FFFFFF' : 'var(--ink-700)',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    {grp.code}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Bar: Counter & Reset Filter CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px',
            fontSize: '0.88rem',
            color: 'var(--ink-500)',
          }}
        >
          <div>
            Showing <strong style={{ color: 'var(--navy-900)' }}>{displayedProjects.length}</strong> of{' '}
            <strong style={{ color: 'var(--navy-900)' }}>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
            {isFilteringActive && (
              <span style={{ color: 'var(--blue-500)', marginLeft: '6px' }}>
                (filtered)
              </span>
            )}
          </div>

          {isFilteringActive && (
            <button
              onClick={resetFilters}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(36, 107, 253, 0.08)',
                color: 'var(--blue-500)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <RotateCcw size={13} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Empty State When No Projects Match */}
        {filteredProjects.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 24px',
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--card-border)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(36, 107, 253, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--blue-500)',
              }}
            >
              <Search size={28} />
            </div>
            <h3
              style={{
                fontSize: '1.3rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--navy-900)',
                marginBottom: '8px',
              }}
            >
              No matching projects found
            </h3>
            <p style={{ color: 'var(--ink-500)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              We couldn't find any engineering projects matching your current search "{searchQuery}" or filter selection.
            </p>
            <button
              onClick={resetFilters}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <RotateCcw size={15} />
              <span>Clear All Search & Filters</span>
            </button>
          </div>
        )}

        {/* Responsive Projects Grid: 1 col on mobile, 2 col on tablet, 3 on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
          className="projects-grid"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="cat-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--card-border)',
                boxShadow: '0 8px 24px -4px rgba(7, 20, 61, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 18px 36px -6px rgba(7, 20, 61, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(36, 107, 253, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(7, 20, 61, 0.06)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              {/* Card Image Frame (Fixed 16:10 Aspect Ratio, No Layout Shift, Lazy Loading) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  background: 'var(--navy-900)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (project.fallbackImage && target.src !== project.fallbackImage) {
                      target.src = project.fallbackImage;
                    } else if (target.src !== '/images/cat_elec.jpg') {
                      target.src = '/images/cat_elec.jpg';
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Overlaid Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 2,
                  }}
                >
                  {/* Project Code Pill */}
                  <span
                    style={{
                      background: 'var(--navy-900)',
                      color: 'var(--cyan-400)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    {project.id}
                  </span>

                  {/* Catalog Group Pill */}
                  {project.catalogGroup && (
                    <span
                      style={{
                        background: 'rgba(36, 107, 253, 0.9)',
                        color: '#FFFFFF',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.catalogGroup}
                    </span>
                  )}
                </div>

                {/* Custom Render Verified Badge */}
                {project.hasCustomImage && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(7, 20, 61, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--cyan-400)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.66rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      border: '1px solid rgba(100, 200, 220, 0.3)',
                      zIndex: 2,
                    }}
                  >
                    <Sparkles size={11} />
                    <span>3D Render</span>
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div
                style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                {/* Category Label */}
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: 'var(--blue-500)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '8px',
                  }}
                >
                  {project.category}
                </div>

                {/* Project Title (Full wrapping, no clipping) */}
                <h3
                  style={{
                    fontSize: '1.18rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    color: 'var(--navy-900)',
                    lineHeight: 1.3,
                    marginBottom: '10px',
                  }}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--ink-500)',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.shortDescription || project.fullOverview}
                </p>

                {/* Key Deliverables Tag List */}
                {project.tags && project.tags.length > 0 && (
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
                          padding: '3px 9px',
                          borderRadius: '6px',
                          fontWeight: 500,
                          border: '1px solid rgba(7, 20, 61, 0.06)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        style={{
                          background: 'transparent',
                          color: 'var(--ink-400)',
                          fontSize: '0.72rem',
                          padding: '3px 4px',
                          fontWeight: 600,
                        }}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Dual Action Buttons */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginTop: 'auto',
                  }}
                >
                  {/* View Details Action */}
                  <button
                    onClick={() => onSelectProject(project)}
                    aria-label={`View details for ${project.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: 'var(--off-white)',
                      color: 'var(--navy-900)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      padding: '10px 8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--navy-900)';
                      e.currentTarget.style.borderColor = 'var(--navy-900)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--off-white)';
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.color = 'var(--navy-900)';
                    }}
                  >
                    <Eye size={14} />
                    <span>View Project</span>
                  </button>

                  {/* Enquire Action */}
                  <button
                    onClick={() => onRequestQuotation(project)}
                    aria-label={`Enquire about ${project.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: 'var(--blue-500)',
                      color: '#FFFFFF',
                      border: '1px solid var(--blue-500)',
                      borderRadius: '12px',
                      padding: '10px 8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(36, 107, 253, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1b56d3';
                      e.currentTarget.style.borderColor = '#1b56d3';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--blue-500)';
                      e.currentTarget.style.borderColor = 'var(--blue-500)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button For Smooth Mobile Performance */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              aria-label="Load more engineering projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FFFFFF',
                color: 'var(--navy-900)',
                border: '1.5px solid var(--card-border)',
                borderRadius: 'var(--radius-full)',
                padding: '14px 32px',
                fontSize: '0.94rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(7, 20, 61, 0.05)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--navy-900)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = 'var(--navy-900)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = 'var(--navy-900)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Load More Projects</span>
              <span
                style={{
                  background: 'rgba(36, 107, 253, 0.12)',
                  color: 'var(--blue-500)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                }}
              >
                +{filteredProjects.length - visibleCount} remaining
              </span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
