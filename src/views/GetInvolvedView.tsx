import React, { useState } from 'react';
import type { NavTab, VolunteerFormData } from '../types';
import { 
  Scale, 
  GraduationCap, 
  Heart, 
  PenTool, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface GetInvolvedViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const GetInvolvedView: React.FC<GetInvolvedViewProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    roleInterest: 'Law Student / Legal Researcher',
    weeklyHours: '2–4 hours / week',
    relevantExperience: '',
    statementOfMotivation: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const volunteerRoles = [
    {
      title: 'Law Students & Researchers',
      icon: <Scale size={20} />,
      desc: 'Help synthesize landmark rulings, draft plain-language rights explainers, and research procedural access barriers across Indian states.'
    },
    {
      title: 'Advocates & Legal Professionals',
      icon: <ShieldCheck size={20} />,
      desc: 'Provide guidance for our public educational curricula, speak at non-commercial community webinars, and mentor student research groups.'
    },
    {
      title: 'Educators & Academics',
      icon: <GraduationCap size={20} />,
      desc: 'Introduce constitutional literacy and dispute resolution concepts into schools, universities, and adult learning programmes.'
    },
    {
      title: 'Community Volunteers',
      icon: <Heart size={20} />,
      desc: 'Distribute vernacular legal literacy materials in neighborhoods, assist senior citizens, and help organize local awareness camps.'
    },
    {
      title: 'Content Writers & Designers',
      icon: <PenTool size={20} />,
      desc: 'Create visual infographics, simple flowcharts, and multilingual translations that make legal knowledge visually intuitive.'
    },
    {
      title: 'Institutional Collaborators',
      icon: <Building2 size={20} />,
      desc: 'Partner with universities, resident welfare associations, and civil society groups to co-host free civic awareness campaigns.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      cityState: '',
      roleInterest: 'Law Student / Legal Researcher',
      weeklyHours: '2–4 hours / week',
      relevantExperience: '',
      statementOfMotivation: ''
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <span className="section-badge section-badge-dark">Public Interest Engagement</span>
            <h1 className="section-title" style={{ color: '#ffffff' }}>Get Involved with Lextory Foundation</h1>
            <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
              Contribute your skills, time, and empathy towards democratizing legal knowledge and expanding dispute resolution awareness across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Showcase */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Engagement Avenues</span>
            <h2 className="section-title">How You Can Contribute</h2>
            <p className="section-subtitle">
              We welcome individuals from diverse professional and academic backgrounds committed to civic legal empowerment.
            </p>
          </div>

          <div className="cards-grid-3">
            {volunteerRoles.map((role, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease'
                }}
              >
                <div className="card-icon-wrapper" style={{ marginBottom: '1rem' }}>
                  {role.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / Interest Form */}
      <section className="section section-subtle" id="volunteer-form">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-badge">Expression of Interest</span>
            <h2 className="section-title">Volunteer Application Form</h2>
            <p className="section-subtitle">
              Please share your background and areas of civic interest. Our community coordination desk reviews all submissions.
            </p>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="alert-success" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <CheckCircle2 size={52} color="#059669" style={{ margin: '0 auto 1.25rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '0.75rem' }}>
                  Application Received Successfully
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#047857', maxWidth: '520px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.fullName}</strong>, for your willingness to support Lextory Foundation as a <strong>{formData.roleInterest}</strong>. Your details have been recorded.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#065f46', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                  A confirmation summary has been logged for <strong>{formData.email}</strong>. Our outreach team connects with volunteers prior to upcoming camp or research cycles.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button className="btn btn-secondary btn-sm" onClick={handleReset}>
                    Submit Another Response
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={() => setActiveTab('resources')}>
                    Explore Knowledge Centre
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Vikramaditya Sen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="vikram@example.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
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

                  <div className="form-group">
                    <label className="form-label">City & State</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">
                      Role of Primary Interest <span className="req">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                    >
                      <option value="Law Student / Legal Researcher">Law Student / Legal Researcher</option>
                      <option value="Advocate / Legal Professional">Advocate / Legal Professional</option>
                      <option value="Educator / Academic Trainer">Educator / Academic Trainer</option>
                      <option value="Community Outreach Volunteer">Community Outreach Volunteer</option>
                      <option value="Content Writer & Vernacular Translator">Content Writer & Vernacular Translator</option>
                      <option value="Visual Designer & Infographics Creator">Visual Designer & Infographics Creator</option>
                      <option value="Institutional / University Collaboration">Institutional / University Collaboration</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Monthly Availability</label>
                    <select
                      className="form-select"
                      value={formData.weeklyHours}
                      onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                    >
                      <option value="1–2 hours / week">1–2 hours / week (Occasional support)</option>
                      <option value="2–4 hours / week">2–4 hours / week (Standard volunteer)</option>
                      <option value="5+ hours / week">5+ hours / week (Intensive campaign lead)</option>
                      <option value="Project-based / Milestone">Project-based / Specific milestone</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Relevant Academic or Professional Background
                  </label>
                  <textarea
                    className="form-textarea"
                    placeholder="Briefly describe your degree, area of study, professional practice, or previous community work..."
                    value={formData.relevantExperience}
                    onChange={(e) => setFormData({ ...formData, relevantExperience: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Why do you wish to support civic legal literacy?
                  </label>
                  <textarea
                    className="form-textarea"
                    placeholder="Share what motivates you to contribute towards public access to justice..."
                    value={formData.statementOfMotivation}
                    onChange={(e) => setFormData({ ...formData, statementOfMotivation: e.target.value })}
                  />
                </div>

                {/* Statutory Disclaimers */}
                <div className="form-disclaimer-box">
                  <p>
                    <strong>Volunteer Charter & Ethical Notice:</strong>
                  </p>
                  <ul style={{ margin: '0.4rem 0 0 1.2rem', padding: 0 }}>
                    <li>All roles within Lextory Foundation are strictly voluntary, civic, and non-remunerated.</li>
                    <li>Submission of this interest form does not guarantee onboarding, formal partnership, employment, or contractual engagement.</li>
                    <li>Volunteers must not offer unauthorized legal advice or solicit clients in the name of the foundation.</li>
                  </ul>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                >
                  <span>Submit Expression of Interest</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
