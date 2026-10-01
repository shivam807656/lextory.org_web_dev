import React, { useState } from 'react';
import type { NavTab, Initiative } from '../types';
import { INITIATIVES_DATA } from '../data/initiativesData';
import { 
  Scale, 
  Target, 
  Users, 
  ListCheck, 
  Award, 
  ArrowRight,
  Filter,
  Sparkles,
  Archive,
  Compass
} from 'lucide-react';

interface InitiativesViewProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectInitiative: (init: Initiative) => void;
}

export const InitiativesView: React.FC<InitiativesViewProps> = ({ 
  setActiveTab, 
  onSelectInitiative 
}) => {
  const [viewMode, setViewMode] = useState<'current' | 'past'>('current');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Initiatives (8)' },
    { id: 'literacy', label: 'Everyday Literacy' },
    { id: 'dispute', label: 'ODR & Dispute Resolution' },
    { id: 'justice', label: 'Legal Aid & NALSA' },
    { id: 'youth', label: 'Youth & Education' },
    { id: 'community', label: 'Community Camps' },
    { id: 'rights', label: 'Women & Child Rights' },
    { id: 'digital', label: 'Cyber & Digital Rights' },
    { id: 'policy', label: 'Research & Policy' }
  ];

  const filteredInitiatives = filterCategory === 'all' 
    ? INITIATIVES_DATA 
    : INITIATIVES_DATA.filter((item) => item.category === filterCategory);

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Civic Action & Community Circles</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>
              Our Initiatives & Action Roadmap
            </h1>
            <p className="section-subtitle" style={{ color: '#d6cee3' }}>
              Structured civic programs designed to bring legal clarity, promote non-adversarial Online Dispute Resolution, 
              and stand beside underserved citizens across India.
            </p>

            {/* Top View Mode Switcher: Active vs Past Initiatives */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setViewMode('current')}
                className={`btn ${viewMode === 'current' ? 'btn-accent' : 'btn-outline-white'} btn-sm`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Compass size={15} />
                <span>8 Foundational Initiatives</span>
              </button>

              <button
                onClick={() => setViewMode('past')}
                className={`btn ${viewMode === 'past' ? 'btn-accent' : 'btn-outline-white'} btn-sm`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Archive size={15} />
                <span>Past Initiatives & Archive</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="section" style={{ background: 'var(--cream-50)' }}>
        <div className="container">
          {/* =========================================================================
              VIEW MODE: PAST INITIATIVES ARCHIVE (Requested by user)
              ========================================================================= */}
          {viewMode === 'past' ? (
            <div className="past-initiatives-card">
              <div className="past-initiatives-header">
                <div className="past-initiatives-icon-badge">
                  <Archive size={32} />
                </div>
                <div className="past-initiatives-title-group">
                  <div className="past-status-pill">
                    <span>Community Fieldwork in Preparation</span>
                  </div>
                  <h2 className="past-initiatives-title">Past Initiatives & Field Archive</h2>
                  <p className="past-initiatives-intro">
                    We maintain complete transparency in our public-interest work. Currently, our inaugural 
                    grassroots legal literacy clinics, youth workshops, and mediation camps are in active preparation.
                    As each chapter completes its journey, its documented story, attendee feedback, field photographs, 
                    and community impact will be preserved here.
                  </p>
                </div>
              </div>

              {/* Designated Slots for Past Initiatives */}
              <div className="initiative-slots-grid">
                <div className="initiative-slot-box">
                  <div className="slot-tag">Upcoming Chapter • Rural Legal Aid</div>
                  <h3 className="slot-title">Rural Legal Literacy Clinic</h3>
                  <p className="slot-desc">
                    Reserved for photographic field documentation, village attendee logs, and NALSA legal aid referrals upon completion.
                  </p>
                </div>

                <div className="initiative-slot-box">
                  <div className="slot-tag">Upcoming Chapter • Youth Dispute Resolution</div>
                  <h3 className="slot-title">Campus Dispute Resolution Circle</h3>
                  <p className="slot-desc">
                    Reserved for student mediation case studies, feedback summaries, and youth constitutional awareness outcomes.
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--cream-100)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--plum-900)' }}>
                    Would you like to host or suggest an initiative in your area?
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    We partner with student bodies, community organizers, and civic groups.
                  </p>
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveTab('contact')}
                >
                  <span>Connect with Our Outreach Team</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            /* =========================================================================
               VIEW MODE: CURRENT 8 INITIATIVES
               ========================================================================= */
            <div>
              {/* Category Filter Pills */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
                  <Filter size={15} />
                  <span>Filter by Focus Domain:</span>
                </div>
                <div className="category-pills">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilterCategory(cat.id)}
                      className={`pill-filter-btn ${filterCategory === cat.id ? 'active' : ''}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Initiatives Cards Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {filteredInitiatives.map((init) => (
                  <div 
                    key={init.id}
                    style={{
                      background: 'var(--white)',
                      border: init.flagship ? '1px solid var(--terracotta-500)' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '2.5rem',
                      boxShadow: 'var(--shadow-xs)',
                      position: 'relative'
                    }}
                  >
                    {/* Header row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="card-icon-wrapper" style={{
                          backgroundColor: init.flagship ? 'var(--terracotta-50)' : 'var(--plum-50)',
                          color: init.flagship ? 'var(--terracotta-600)' : 'var(--plum-800)',
                          width: '48px',
                          height: '48px'
                        }}>
                          <Scale size={22} />
                        </div>
                        <div>
                          <h2 style={{ fontSize: '1.45rem', color: 'var(--plum-900)', margin: 0, lineHeight: 1.25 }}>
                            {init.title}
                          </h2>
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem', alignItems: 'center' }}>
                            <span className={`badge-pill ${
                              init.badge === 'Active Outreach' ? 'badge-active' :
                              init.badge === 'Pilot Initiative' ? 'badge-pilot' : 'badge-community'
                            }`}>
                              {init.badge}
                            </span>
                            {init.flagship && (
                              <span className="badge-pill" style={{ background: 'var(--peach-50)', color: 'var(--terracotta-600)', border: '1px solid var(--peach-200)' }}>
                                <Sparkles size={12} /> Flagship Focus
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {init.id === 'odr-awareness' && (
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => setActiveTab('odr-centre')}
                          >
                            <span>ODR Centre</span>
                            <ArrowRight size={14} />
                          </button>
                        )}
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => onSelectInitiative(init)}
                        >
                          <span>Examine Full Plan</span>
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '2rem' }}>
                      {init.summary}
                    </p>

                    {/* 4 Quadrants: Objectives, Beneficiaries, Activities, Outcomes */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-light)'
                    }}>
                      {/* Objectives */}
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--terracotta-600)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                          <Target size={15} /> Core Objectives
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                          {init.objectives.map((obj, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{obj}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Beneficiaries */}
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--plum-700)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                          <Users size={15} /> Intended Beneficiaries
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                          {init.beneficiaries.map((b, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{b}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Proposed Activities */}
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--terracotta-600)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                          <ListCheck size={15} /> Proposed Activities
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                          {init.proposedActivities.map((act, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{act}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential Outcomes */}
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--amber-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                          <Award size={15} /> Anticipated Outcomes
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                          {init.potentialOutcomes.map((out, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{out}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => setActiveTab('get-involved')}
                      >
                        <span>Volunteer for this Focus Area</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Transparency Notice */}
              <div style={{
                marginTop: '3.5rem',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.5rem',
                fontSize: '0.86rem',
                color: 'var(--text-muted)'
              }}>
                <strong style={{ color: 'var(--plum-900)' }}>Civic Transparency Note:</strong> We distinguish between active educational outreach and pilot initiatives currently undergoing community volunteer training. We believe in honest impact without exaggeration.
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
