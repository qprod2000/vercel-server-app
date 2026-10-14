/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServerStatusWidget } from './components/ServerStatusWidget.tsx';
import { FacilitiesCatalog } from './components/FacilitiesCatalog.tsx';
import { UserTiersSection } from './components/UserTiersSection.tsx';
import { UserRegistrationSection } from './components/UserRegistrationSection.tsx';
import { AccessGuideSection } from './components/AccessGuideSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ServiceLaunchpadModal } from './components/ServiceLaunchpadModal.tsx';
import { LoginModal } from './components/LoginModal.tsx';
import { HomelabExportModal } from './components/HomelabExportModal.tsx';
import { ServerFacility, SERVER_STATS } from './data/serverFacilities.ts';

export default function App() {
  const [selectedFacility, setSelectedFacility] = useState<ServerFacility | null>(null);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isHomelabModalOpen, setIsHomelabModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState('developer');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLaunchpad = (facility: ServerFacility) => {
    setSelectedFacility(facility);
    setIsLaunchpadOpen(true);
  };

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    scrollTo('pendaftaran');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Bar */}
      <Navbar
        onOpenRegister={() => scrollTo('pendaftaran')}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenHomelabGuide={() => setIsHomelabModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRegisterClick={() => scrollTo('pendaftaran')}
          onExploreFacilities={() => scrollTo('fasilitas')}
        />

        {/* Real-time Telemetry & Health */}
        <ServerStatusWidget />

        {/* Catalog of all Server Facilities */}
        <FacilitiesCatalog
          onOpenLaunchpad={handleOpenLaunchpad}
          onRegisterClick={() => scrollTo('pendaftaran')}
        />

        {/* User Quota Tiers */}
        <UserTiersSection onSelectTier={handleSelectTier} />

        {/* User Registration Form & Live Provisioning Preview */}
        <UserRegistrationSection
          selectedTierId={selectedTierId}
          onOpenLoginModal={() => setIsLoginModalOpen(true)}
        />

        {/* Access Guides & Documentation */}
        <AccessGuideSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenRegister={() => scrollTo('pendaftaran')}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Facility Connection Modal */}
      <ServiceLaunchpadModal
        isOpen={isLaunchpadOpen}
        facility={selectedFacility}
        onClose={() => setIsLaunchpadOpen(false)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onRegisterRedirect={() => scrollTo('pendaftaran')}
      />

      {/* Homelab Migration & Deployment Guide Modal */}
      <HomelabExportModal
        isOpen={isHomelabModalOpen}
        onClose={() => setIsHomelabModalOpen(false)}
        currentHostname={SERVER_STATS.hostname}
      />
    </div>
  );
}
