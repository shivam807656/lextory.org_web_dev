import React, { useState } from 'react';
import type { CampaignEvent } from '../types';
import { X, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

interface EventRsvpModalProps {
  event: CampaignEvent | null;
  onClose: () => void;
}

export const EventRsvpModal: React.FC<EventRsvpModalProps> = ({ event, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendeeType: 'Citizen / Consumer',
    notes: ''
  });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', attendeeType: 'Citizen / Consumer', notes: '' });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleReset} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge-pill badge-active" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>
              {event.type} Registration
            </span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', lineHeight: 1.25 }}>
              {event.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={handleReset} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Event Quick Details */}
          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
            fontSize: '0.88rem',
            color: 'var(--text-body)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} color="var(--accent-gold)" />
              <span>{event.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="var(--accent-gold)" />
              <span>{event.time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={15} color="var(--accent-gold)" />
              <span>{event.format}</span>
            </div>
          </div>

          {submitted ? (
            <div className="alert-success" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <CheckCircle size={44} color="var(--accent-gold-hover)" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Interest Registered Successfully
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                Thank you, <strong>{formData.name}</strong>. Your participation request for <em>{event.title}</em> has been recorded. Joining details and reminder notes will be emailed to <strong>{formData.email}</strong> prior to the session.
              </p>
              <button className="btn btn-secondary btn-sm" onClick={handleReset}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  Your Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">You Are Attending As</label>
                <select
                  className="form-select"
                  value={formData.attendeeType}
                  onChange={(e) => setFormData({ ...formData, attendeeType: e.target.value })}
                >
                  <option value="Citizen / Consumer">General Citizen / Consumer</option>
                  <option value="Law Student / Researcher">Law Student / Legal Researcher</option>
                  <option value="Advocate / Legal Professional">Advocate / Legal Professional</option>
                  <option value="Educator / Teacher">Educator / Academic</option>
                  <option value="Small Business Owner">Small Business / MSME Owner</option>
                  <option value="Community Worker">Community Worker / NGO Representative</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Any Specific Question for the Speaker?</label>
                <textarea
                  className="form-textarea"
                  style={{ minHeight: '80px' }}
                  placeholder="Tell us what you are most eager to learn during this session..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="form-disclaimer-box">
                <strong>Public Participation Notice:</strong> All educational workshops and webinars organized by Lextory Foundation are strictly non-commercial and free of charge. Participation is subject to venue/server capacity.
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Confirm Participation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
