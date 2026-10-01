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
                <span className="badge-pill" style={{ background: '#f0fdfa', color: '#0d9488', border: '1px solid #99f6e4' }}>
                  <Sparkles size={12} /> Flagship Area
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '1.45rem', color: '#0f172a', lineHeight: 1.25 }}>
              {initiative.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, marginBottom: '2rem' }}>
            {initiative.summary}
          </p>

          {/* Objectives */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontSize: '1.05rem', margin: '0 0 0.75rem 0' }}>
              <Target size={18} /> Stated Public Objectives
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569' }}>
              {initiative.objectives.map((obj, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Intended Beneficiaries */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e3a68', fontSize: '1.05rem', margin: '0 0 0.75rem 0' }}>
              <Users size={18} /> Intended Beneficiaries
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {initiative.beneficiaries.map((b, i) => (
                <span key={i} style={{
                  background: '#f1f5f9',
                  color: '#1e293b',
                  fontSize: '0.85rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0'
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Proposed Activities */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontSize: '1.05rem', margin: '0 0 0.75rem 0' }}>
              <ListCheck size={18} /> Proposed Key Activities
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569' }}>
              {initiative.proposedActivities.map((act, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{act}</li>
              ))}
            </ul>
          </div>

          {/* Potential Outcomes */}
          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b45309', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>
              <Award size={18} /> Anticipated Long-Term Social Impact
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', fontSize: '0.9rem' }}>
              {initiative.potentialOutcomes.map((out, i) => (
                <li key={i} style={{ marginBottom: '0.3rem' }}>{out}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Back
          </button>
          <button 
            className="btn btn-primary btn-sm" 
            onClick={() => {
              onClose();
              onVolunteerClick();
            }}
          >
            Volunteer for this Initiative
          </button>
        </div>
      </div>
    </div>
  );
};
