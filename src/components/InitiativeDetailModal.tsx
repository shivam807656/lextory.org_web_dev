import React from 'react';
import type { Initiative } from '../types';
import { X, Target, Users, ListCheck, Award, Sparkles } from 'lucide-react';

interface InitiativeDetailModalProps {
  initiative: Initiative | null;
  onClose: () => void;
  onVolunteerClick: () => void;
}

export const InitiativeDetailModal: React.FC<InitiativeDetailModalProps> = ({ 
  initiative, 
  onClose,
  onVolunteerClick
}) => {
  if (!initiative) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className={`badge-pill ${
                initiative.badge === 'Active Outreach' ? 'badge-active' :
                initiative.badge === 'Pilot Initiative' ? 'badge-pilot' : 'badge-community'
              }`}>
                {initiative.badge}
              </span>
              {initiative.flagship && (
                <span className="badge-pill" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold-hover)', border: '1px solid var(--accent-gold-border)' }}>
                  <Sparkles size={12} /> Flagship Area
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', lineHeight: 1.25 }}>
              {initiative.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
            {initiative.summary}
          </p>

          {/* Objectives */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-hover)', fontSize: '1rem', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Target size={18} color="var(--accent-gold)" /> Stated Public Objectives
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              {initiative.objectives.map((obj, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Intended Beneficiaries */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '1rem', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Users size={18} color="var(--accent-gold)" /> Intended Beneficiaries
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {initiative.beneficiaries.map((b, i) => (
                <span key={i} style={{
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.85rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Proposed Activities */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-hover)', fontSize: '1rem', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <ListCheck size={18} color="var(--accent-gold)" /> Proposed Key Activities
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              {initiative.proposedActivities.map((act, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{act}</li>
              ))}
            </ul>
          </div>

          {/* Potential Outcomes */}
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.95rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Award size={18} color="var(--accent-gold)" /> Anticipated Long-Term Social Impact
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.65 }}>
              {initiative.potentialOutcomes.map((out, i) => (
                <li key={i} style={{ marginBottom: '0.35rem' }}>{out}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn btn-primary btn-sm" 
            onClick={() => {
              onClose();
              onVolunteerClick();
            }}
          >
            <span>Volunteer for this Domain</span>
          </button>
        </div>
      </div>
    </div>
  );
};
