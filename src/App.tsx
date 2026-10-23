import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityCard } from './components/CredibilityCard';
import { ProjectCategories } from './components/ProjectCategories';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { ProjectCatalog } from './components/ProjectCatalog';
import { TeamSection } from './components/TeamSection';
import { AchievementsSection } from './components/AchievementsSection';
import { AboutSection } from './components/AboutSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { QuotationModal } from './components/QuotationModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ProjectItem, ProjectCategory } from './types';

export const App: React.FC = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quotationModalOpen, setQuotationModalOpen] = useState(false);
  const [quotationProject, setQuotationProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | 'All'>('All');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: ProjectCategory) => {
    setCategoryFilter(category);
    scrollToSection('projects');
  };

  const handleOpenQuotation = (project?: ProjectItem | null) => {
    setQuotationProject(project || null);
    setQuotationModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Slim Header */}
      <Navbar
        onOpenSearch={() => setSearchModalOpen(true)}
        onExploreProjects={() => scrollToSection('projects')}
        onOpenQuotation={() => handleOpenQuotation()}
      />

      <main style={{ flexGrow: 1 }}>
        {/* 1. Midnight Navy Hero */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onDiscussProject={() => scrollToSection('contact')}
        />

        {/* 2. Floating Credibility Card */}
        <CredibilityCard />

        {/* 3. Project Categories Section (4 Desktop Cards + 2 Grid Cards) */}
        <ProjectCategories onSelectCategory={handleCategorySelect} />

        {/* 4. Oversized Featured Project / Video Media Showcase */}
        <FeaturedShowcase
          onExploreProjects={() => scrollToSection('projects')}
          onRequestPrototype={() => handleOpenQuotation()}
        />

        {/* 5. Functional Ready-Made Project Catalog */}
        <ProjectCatalog
          selectedCategoryFilter={categoryFilter}
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestQuotation={(project) => handleOpenQuotation(project)}
        />

        {/* 6. Team Section */}
        <TeamSection />

        {/* 7. Achievements Section (Contrasting Midnight Navy) */}
        <AchievementsSection />

        {/* 8. About Section (Editorial Layout) */}
        <AboutSection onDiscussProject={() => scrollToSection('contact')} />

        {/* 9. Approach Section (4-Step Workflow) */}
        <ApproachSection />

        {/* 10. Contact Section (Navy Background with Consultation Form) */}
        <ContactSection />
      </main>

      {/* 11. Dark Navy Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onExploreProjects={() => scrollToSection('projects')}
      />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestQuotation={(proj) => handleOpenQuotation(proj)}
        />
      )}

      {quotationModalOpen && (
        <QuotationModal
          project={quotationProject}
          onClose={() => {
            setQuotationModalOpen(false);
            setQuotationProject(null);
          }}
        />
      )}

      {searchModalOpen && (
        <QuickSearchModal
          onClose={() => setSearchModalOpen(false)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
    </div>
  );
};

export default App;
