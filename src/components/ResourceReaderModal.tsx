import React from 'react';
import type { ResourceItem } from '../types';
import { X, Clock, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

interface ResourceReaderModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceReaderModal: React.FC<ResourceReaderModalProps> = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="resource-category-tag">{resource.category}</span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>For: {resource.audience}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', lineHeight: 1.25 }}>
              {resource.title}
            </h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.82rem', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} /> {resource.readingTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={14} /> {resource.date}
              </span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Key Takeaways Box */}
          <div style={{
            backgroundColor: '#f0fdfa',
            border: '1px solid #ccfbf1',
            borderRadius: '10px',
            padding: '1.25rem',
            marginBottom: '1.75rem'
          }}>
            <h4 style={{ fontSize: '0.95rem', color: '#0f766e', margin: '0 0 0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} /> Key Takeaways for Citizens
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#134e4a' }}>
              {resource.keyPoints.map((point, index) => (
                <li key={index} style={{ marginBottom: '0.35rem' }}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Official Helpline / Portal Notice */}
          {resource.officialHelplineOrPortal && (
            <div style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fef3c7',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ExternalLink size={16} />
              <span><strong>Official Channel:</strong> {resource.officialHelplineOrPortal}</span>
            </div>
          )}

          {/* Full Markdown Parsed Content */}
          <div style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', color: '#334155' }}>
            {resource.fullMarkdown}
          </div>

          {/* Tags */}
          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Related Keywords:</div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {resource.tags.map((tag) => (
                <span key={tag} className="tag-item">#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginRight: 'auto' }}>
            Educational public explainer • Not formal legal advice.
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Explainer
          </button>
        </div>
      </div>
    </div>
  );
};
