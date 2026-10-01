import React, { useState } from 'react';
import type { NavTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Purpose' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'odr-centre', label: 'ODR Centre' },
    { id: 'resources', label: 'Knowledge' },
    { id: 'campaigns', label: 'Workshops' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar-inner">
          {/* Official Lextory Foundation Logo */}
          <button 
            className="site-logo" 
            onClick={() => handleNavClick('home')}
            aria-label="Lextory Foundation Home"
          >
            <img 
              src="/images/logo-horizontal.png" 
              alt="Lextory Foundation" 
              className="site-logo-img"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="header-cta-btn">
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => handleNavClick('get-involved')}
            >
              <span>Join Us</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              <ArrowRight size={16} />
            </button>
          ))}
          <button
            onClick={() => handleNavClick('get-involved')}
            className={`mobile-nav-link ${activeTab === 'get-involved' ? 'active' : ''}`}
          >
            <span>Get Involved / Volunteer</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => handleNavClick('disclaimer')}
            className={`mobile-nav-link ${activeTab === 'disclaimer' ? 'active' : ''}`}
          >
            <span>Legal Disclaimer & Privacy</span>
            <ArrowRight size={16} />
          </button>
        </nav>
        <button 
          className="btn btn-primary btn-lg" 
          style={{ width: '100%' }}
          onClick={() => handleNavClick('get-involved')}
        >
          Join as a Community Volunteer
        </button>
      </div>
    </header>
  );
};
