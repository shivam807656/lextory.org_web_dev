import { useState, useEffect } from 'react';
import type { NavTab, Initiative, ResourceItem, CampaignEvent } from './types';
import { CivicTicker } from './components/CivicTicker';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResourceReaderModal } from './components/ResourceReaderModal';
import { InitiativeDetailModal } from './components/InitiativeDetailModal';
import { EventRsvpModal } from './components/EventRsvpModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { InitiativesView } from './views/InitiativesView';
import { ODRCentreView } from './views/ODRCentreView';
import { ResourcesView } from './views/ResourcesView';
import { EventsView } from './views/EventsView';
import { GetInvolvedView } from './views/GetInvolvedView';
import { ContactView } from './views/ContactView';
import { LegalDisclaimerView } from './views/LegalDisclaimerView';

export function App() {
  const [activeTab, setActiveTabState] = useState<NavTab>('home');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CampaignEvent | null>(null);

  // Sync tab with URL hash for clean deep linking and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      const validTabs: NavTab[] = [
        'home', 
        'about', 
        'initiatives', 
        'odr-centre', 
        'resources', 
        'campaigns', 
        'get-involved', 
        'contact', 
        'disclaimer'
      ];
      if (validTabs.includes(hash)) {
        setActiveTabState(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setActiveTab = (tab: NavTab) => {
    setActiveTabState(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectInitiative={(init) => setSelectedInitiative(init)}
            onSelectResource={(res) => setSelectedResource(res)}
          />
        );
      case 'about':
        return <AboutView setActiveTab={setActiveTab} />;
      case 'initiatives':
        return (
          <InitiativesView
            setActiveTab={setActiveTab}
            onSelectInitiative={(init) => setSelectedInitiative(init)}
          />
        );
      case 'odr-centre':
        return <ODRCentreView setActiveTab={setActiveTab} />;
      case 'resources':
        return (
          <ResourcesView
            setActiveTab={setActiveTab}
            onSelectResource={(res) => setSelectedResource(res)}
          />
        );
      case 'campaigns':
        return (
          <EventsView
            setActiveTab={setActiveTab}
            onSelectEvent={(evt) => setSelectedEvent(evt)}
          />
        );
      case 'get-involved':
        return <GetInvolvedView setActiveTab={setActiveTab} />;
      case 'contact':
        return <ContactView setActiveTab={setActiveTab} />;
      case 'disclaimer':
        return <LegalDisclaimerView setActiveTab={setActiveTab} />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectInitiative={(init) => setSelectedInitiative(init)}
            onSelectResource={(res) => setSelectedResource(res)}
          />
        );
    }
  };

  return (
    <div className="app-root">
      {/* Top Civic Emergency Helplines Bar */}
      <CivicTicker />

      {/* Main Responsive Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Active Page View */}
      <main id="main-content" role="main">
        {renderActiveView()}
      </main>

      {/* Institutional Public Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Accessible Modals */}
      <ResourceReaderModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <InitiativeDetailModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onVolunteerClick={() => {
          setSelectedInitiative(null);
          setActiveTab('get-involved');
        }}
      />

      <EventRsvpModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

export default App;
