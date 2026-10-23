import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Cpu, Layers } from 'lucide-react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface QuickSearchModalProps {
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return PROJECTS_DATA.slice(0, 4);
    const q = query.toLowerCase();
    return PROJECTS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '620px',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        {/* Search Input Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '18px 24px',
            borderBottom: '1px solid var(--card-border)',
            gap: '12px',
          }}
        >
          <Search size={20} color="var(--blue-500)" />
          <input
            type="text"
            autoFocus
            placeholder="Type project ID (e.g. MNL-IOT-001), keyword, or sensor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flexGrow: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              color: 'var(--navy-900)',
              background: 'transparent',
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'rgba(7, 20, 61, 0.06)',
              border: 'none',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ padding: '20px 24px', maxHeight: '420px', overflowY: 'auto' }}>
          <div
            style={{
              fontSize: '0.74rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 700,
              color: 'var(--ink-400)',
              marginBottom: '12px',
            }}
          >
            {query.trim() ? `Search Results (${results.length})` : 'Popular & Featured Projects'}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {results.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProject(p);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--off-white)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--blue-500)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--off-white)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: 'var(--navy-900)',
                        color: 'var(--cyan-400)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {p.id}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--blue-500)', fontWeight: 600 }}>
                      {p.category}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--navy-900)' }}>
                    {p.title}
                  </div>
                </div>

                <ArrowRight size={16} color="var(--ink-400)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
