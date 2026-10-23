import React from 'react';
import { GitPullRequest, Search, Compass, Cpu, FileCheck } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover the Requirement',
      icon: <Search size={22} color="var(--blue-500)" />,
      description: 'We review your university syllabus, project guidelines, problem statement, team scope, and target deadline.',
      detail: 'Syllabus alignment & feasibility review',
    },
    {
      step: '02',
      title: 'Select the Project Direction',
      icon: <Compass size={22} color="var(--blue-500)" />,
      description: 'Choose from our proven catalog of ready builds or formulate a bespoke hardware architecture with custom sensors.',
      detail: 'BOM finalization & block diagram',
    },
    {
      step: '03',
      title: 'Develop & Test the Prototype',
      icon: <Cpu size={22} color="var(--blue-500)" />,
      description: 'Components are procured, circuits breadboarded and soldered, firmware written, and the system stress-tested on lab benches.',
      detail: 'Circuit calibration & hardware validation',
    },
    {
      step: '04',
      title: 'Demonstrate & Document the Result',
      icon: <FileCheck size={22} color="var(--blue-500)" />,
      description: 'Receive full academic documentation, presentation slides, viva voce Q&A guide, and a live functioning hardware demo.',
      detail: 'KTU format report & viva preparation',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--off-white)',
        padding: '80px 0 100px',
        position: 'relative',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-badge section-badge-light">
            <GitPullRequest size={14} />
            <span>Structured Engineering Process</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--navy-900)',
              marginBottom: '16px',
            }}
          >
            Our Approach to Engineering Success
          </h2>
          <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A disciplined, four-stage development workflow engineered to take your ideas from raw concepts to fully demonstrable academic prototypes.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="cat-card"
              style={{
                borderRadius: '24px',
                padding: '32px 26px',
                position: 'relative',
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: 'var(--blue-500)',
                  lineHeight: 1,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.step}</span>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(36, 107, 253, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--navy-900)',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--ink-500)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--card-border)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--blue-500)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>• {item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
