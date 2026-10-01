import React, { useState, useMemo } from 'react';
import type { NavTab, ResourceItem } from '../types';
import { RESOURCES_DATA } from '../data/resourcesData';
import { 
  Search, 
  FileText, 
  Clock, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface ResourcesViewProps {
  onSelectResource: (res: ResourceItem) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onSelectResource, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAudience, setSelectedAudience] = useState<string>('All');

  const categories = [
    'All',
    'Legal Explainer',
    'ODR Guide',
    'Citizen Rights',
    'Women & Child Safety',
    'Cyber Awareness',
    'Constitutional Literacy'
  ];

  const audiences = [
    'All',
    'General Citizens',
    'Students & Youth',
    'Small Businesses',
    'Community Workers'
  ];

  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter((item) => {
      // Search matching
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category matching
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      // Audience matching
      const matchesAudience = selectedAudience === 'All' || item.audience === selectedAudience;

      return matchesSearch && matchesCategory && matchesAudience;
    });
  }, [searchQuery, selectedCategory, selectedAudience]);

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Open Knowledge Repository</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>Legal Explainers & Civic Guides</h1>
            <p className="section-subtitle">
              Free, verified, plain-language resources designed to help ordinary citizens, youth, and community workers understand statutory rights, reporting channels, and dispute mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* Search & Filter Bar (Minimalist Linen Strip) */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {/* Search Input */}
              <div className="search-input-wrapper">
                <Search size={18} color="var(--accent-gold)" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by keyword, topic, or statute (e.g. 1930, NALSA, POSH, ODR)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Target Audience Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  Audience:
                </label>
                <select
                  className="form-select"
                  style={{ padding: '0.75rem 1rem' }}
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                >
                  {audiences.map((aud) => (
                    <option key={aud} value={aud}>
                      {aud === 'All' ? 'All Audiences' : aud}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '0.5rem' }}>
                Domain:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`pill-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <span>
              Showing <strong>{filteredResources.length}</strong> educational {filteredResources.length === 1 ? 'guide' : 'guides'}
            </span>
            {(searchQuery || selectedCategory !== 'All' || selectedAudience !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedAudience('All');
                }}
                style={{ color: 'var(--accent-gold-hover)', fontWeight: 600, fontSize: '0.85rem' }}
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Resources List */}
          {filteredResources.length === 0 ? (
            <div style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-sm)',
              padding: '4rem 2rem',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)'
            }}>
              <BookOpen size={44} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                No resources matched your criteria
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Try adjusting your search terms or clearing the selected filters to see all available civic guides.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedAudience('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredResources.map((res) => (
                <div key={res.id} className="resource-card">
                  <div className="resource-meta-row">
                    <span className="resource-category-tag">{res.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {res.readingTime}
                    </span>
                  </div>

                  <h3 className="resource-title">{res.title}</h3>
                  <p className="resource-summary">{res.summary}</p>

                  <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Audience: <strong>{res.audience}</strong>
                  </div>

                  <div className="resource-tags-row">
                    {res.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag-item">#{tag}</span>
                    ))}
                  </div>

                  <button 
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => onSelectResource(res)}
                  >
                    <FileText size={15} />
                    <span>Read Full Explainer</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Downloadable Awareness Materials Notice */}
          <div style={{
            marginTop: '3.5rem',
            borderTop: '1px solid var(--border-medium)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                Need Printed Materials for a School or Community Workshop?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
                We provide open-access PDF handouts and vernacular printable rights sheets for non-commercial distribution.
              </p>
            </div>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => setActiveTab('contact')}
            >
              <span>Request Workshop Kits</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
