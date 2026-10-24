import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

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
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.98) 0%, rgba(206, 68, 10, 0.98) 100%)'
            : 'linear-gradient(135deg, #FF6B00 0%, #EA580C 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: isScrolled
            ? '0 6px 28px -4px rgba(180, 50, 0, 0.45)'
            : '0 4px 20px -2px rgba(220, 70, 0, 0.35)',
          padding: isScrolled ? '12px 0' : '18px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo & Brand Mark (Square bracket container removed) */}
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
            <img
              src="/images/logo-emblem.png"
              alt="MINNAL INNOVATIONS Logo"
              style={{
                width: '42px',
                height: '42px',
                objectFit: 'contain',
                flexShrink: 0,
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25))',
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '1.08rem',
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
                  color: '#FFF2DE',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                Innovations
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
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.textShadow = '0 0 12px rgba(255, 255, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.92)';
                  e.currentTarget.style.textShadow = 'none';
                }}
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
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.32)',
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
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.32)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Search size={16} />
            </button>

            <button
              onClick={onExploreProjects}
              className="desktop-cta"
              style={{
                padding: '9px 20px',
                fontSize: '0.86rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-full)',
                background: 'var(--navy-900)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 4px 14px rgba(7, 20, 61, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#04091A';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(7, 20, 61, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--navy-900)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(7, 20, 61, 0.35)';
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-toggle"
              style={{
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.32)',
                borderRadius: '10px',
                color: '#FFFFFF',
                width: '44px',
                height: '44px',
                minWidth: '44px',
                minHeight: '44px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Scroll Support and High Contrast */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(7, 20, 61, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '90px 24px 32px',
            overflowY: 'auto',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '12px 0',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto', paddingTop: '16px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreProjects();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', minHeight: '48px', justifyContent: 'center' }}
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
              style={{ width: '100%', padding: '14px', minHeight: '48px', justifyContent: 'center' }}
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
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
