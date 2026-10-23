import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onExploreProjects: () => void;
  onOpenQuotation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onExploreProjects, onOpenQuotation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(7, 20, 61, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          padding: isScrolled ? '12px 0' : '20px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo & Brand Mark */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #246BFD 0%, #64C8DC 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(36, 107, 253, 0.4)',
              }}
            >
              <Zap size={20} color="#FFFFFF" strokeWidth={2.5} fill="#FFFFFF" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                }}
              >
                MINNAL
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  color: 'var(--cyan-400)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Technology Lab
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  padding: '6px 0',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Search + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenSearch}
              aria-label="Search Projects"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.borderColor = 'var(--cyan-400)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              }}
            >
              <Search size={16} />
            </button>

            <button
              onClick={onExploreProjects}
              className="btn-primary desktop-cta"
              style={{
                padding: '9px 20px',
                fontSize: '0.86rem',
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="mobile-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                padding: '6px',
                display: 'none',
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(7, 20, 61, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '100px 32px 40px',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  paddingBottom: '8px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: 'auto' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreProjects();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '14px' }}
            >
              <span>Explore Projects Catalog</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuotation();
              }}
              className="btn-secondary"
              style={{ width: '100%', padding: '14px' }}
            >
              <span>Request Custom Prototype</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
