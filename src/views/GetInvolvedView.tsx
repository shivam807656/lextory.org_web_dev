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
      icon: <Scale size={18} color="var(--accent-gold)" />,
      desc: 'Help synthesize landmark rulings, draft plain-language rights explainers, and research procedural access barriers across Indian states.'
    },
    {
      title: 'Advocates & Legal Professionals',
      icon: <ShieldCheck size={18} color="var(--accent-gold)" />,
      desc: 'Provide guidance for our public educational curricula, speak at non-commercial community webinars, and mentor student research groups.'
    },
    {
      title: 'Educators & Academics',
      icon: <GraduationCap size={18} color="var(--accent-gold)" />,
      desc: 'Introduce constitutional literacy and dispute resolution concepts into schools, universities, and adult learning programmes.'
    },
    {
      title: 'Community Volunteers',
      icon: <Heart size={18} color="var(--accent-gold)" />,
      desc: 'Distribute vernacular legal literacy materials in neighborhoods, assist senior citizens, and help organize local awareness camps.'
    },
    {
      title: 'Content Writers & Designers',
      icon: <PenTool size={18} color="var(--accent-gold)" />,
      desc: 'Create visual infographics, simple flowcharts, and multilingual translations that make legal knowledge visually intuitive.'
    },
    {
      title: 'Institutional Collaborators',
      icon: <Building2 size={18} color="var(--accent-gold)" />,
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
            <div className="editorial-tag tag-dark">
              <span>Public Interest Engagement</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>Get Involved with Lextory Foundation</h1>
            <p className="section-subtitle">
              Contribute your skills, time, and empathy towards democratizing legal knowledge and expanding dispute resolution awareness across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Showcase (DE-BOXED Open Grid) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Engagement Avenues</span>
            </div>
            <h2 className="section-title">How You Can Contribute</h2>
            <p className="section-subtitle">
              We welcome individuals from diverse professional and academic backgrounds committed to civic legal empowerment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {volunteerRoles.map((role, idx) => (
              <div 
                key={idx}
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  {role.icon}
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
                    {role.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / Interest Form */}
      <section className="section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)' }} id="volunteer-form">
        <div className="container-narrow">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Expression of Interest</span>
            </div>
            <h2 className="section-title">Volunteer Application Form</h2>
            <p className="section-subtitle">
              Please share your background and areas of civic interest. Our community coordination desk reviews all submissions.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="alert-success" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
                <CheckCircle2 size={52} color="var(--accent-gold-hover)" style={{ margin: '0 auto 1.25rem auto' }} />
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  Application Received Successfully
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: '520px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.fullName}</strong>, for your willingness to support Lextory Foundation as a <strong>{formData.roleInterest}</strong>. Your details have been recorded.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
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
              <form onSubmit={handleSubmit} style={{ background: 'var(--bg-surface)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
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

                {/* Ethical Notice */}
                <div className="form-disclaimer-box">
                  <p style={{ margin: 0, fontWeight: 600 }}>
                    Volunteer Charter & Ethical Notice:
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
