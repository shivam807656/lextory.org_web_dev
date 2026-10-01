import React, { useState } from 'react';
import type { NavTab } from '../types';
import { 
  ODR_VS_LITIGATION, 
  ADR_METHODS, 
  ODR_STEPS, 
  ODR_BENEFITS, 
  ODR_LIMITATIONS, 
  ODR_FAQS 
} from '../data/odrData';
import { 
  Laptop, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface ODRCentreViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ODRCentreView: React.FC<ODRCentreViewProps> = ({ setActiveTab }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(ODR_FAQS[0].id);
  const [selectedDisputeType, setSelectedDisputeType] = useState<string | null>(null);

  const disputeScenarios = [
    {
      id: 'ecommerce',
      label: 'E-Commerce / Consumer Goods Defect',
      suitable: true,
      reason: 'Excellent fit for Online Mediation. Disputes involving delayed deliveries, wrong items, or refund refusals usually turn on documentary receipts and can be resolved swiftly without procedural court hearings.'
    },
    {
      id: 'freelance',
      label: 'Unpaid Freelance or Vendor Invoice',
      suitable: true,
      reason: 'Highly suitable for Online Conciliation or Mediation. Clear written invoices and email trails make communication straightforward, saving high court appearance fees.'
    },
    {
      id: 'criminal',
      label: 'Serious Criminal Offence / Non-Compoundable Allegation',
      suitable: false,
      reason: 'Not suitable for private ODR. Crimes affecting public order or bodily harm must strictly be reported to law enforcement agencies and heard before competent criminal courts.'
    },
    {
      id: 'tenancy',
      label: 'Rental Security Deposit Refund Disagreement',
      suitable: true,
      reason: 'Suitable for Online Mediation. Facilitated conversation between tenant and property owner helps inspect lease conditions and settle amounts amicably.'
    },
    {
      id: 'constitutional',
      label: 'Challenging Validity of a Statute or Government Action',
      suitable: false,
      reason: 'Not suitable for ODR. Judicial review of legislation or constitutional rights enforcement falls exclusively under the writ jurisdiction of the High Courts (Article 226) and Supreme Court (Article 32).'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <span className="section-badge section-badge-dark">
              <Laptop size={14} /> Flagship Educational Hub
            </span>
            <h1 className="section-title" style={{ color: '#ffffff' }}>
              Online Dispute Resolution (ODR) Awareness Centre
            </h1>
            <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
              A neutral, public-interest guide to technology-assisted dispute resolution in India. Learn what ODR means, how mediation, conciliation, and arbitration function, and whether digital resolution fits your dispute.
            </p>
          </div>
        </div>
      </section>

      {/* 1. What is ODR? Core Educational Overview */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="cards-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-badge">Demystifying ODR</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Resolving Disagreements Collaboratively & Digitally
              </h2>
              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1rem' }}>
                <strong>Online Dispute Resolution (ODR)</strong> is the structured use of digital communication technologies (including secure video calls, collaborative document exchange, and asynchronous messaging) to facilitate dispute resolution outside the traditional courtroom.
              </p>
              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Rather than treating dispute resolution as a combative trial where one side wins and the other loses, ODR prioritizes collaborative problem-solving, convenience, and proportionality, ensuring that the cost and time spent resolving a grievance does not exceed the value of the issue itself.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-active">Voluntary Consent</span>
                <span className="badge-pill badge-active">Confidential Proceedings</span>
                <span className="badge-pill badge-active">Neutral Facilitation</span>
                <span className="badge-pill badge-active">Enforceable Agreements</span>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 100%)',
              border: '1px solid #ccfbf1',
              borderRadius: '20px',
              padding: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0f766e', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} />
                <span>Legal Recognition in India</span>
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '1rem' }}>
                ODR is grounded in established Indian statutory jurisprudence:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#134e4a' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>The Mediation Act, 2023:</strong> Expressly recognizes online mediation and accords mediated settlement agreements enforceability equivalent to civil court decrees.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Arbitration & Conciliation Act, 1996:</strong> Empowers binding arbitration and conciliated agreements under Section 74.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Code of Civil Procedure, 1908 (Sec 89):</strong> Mandates judicial referral of suitable pending matters to alternate dispute resolution.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 3 Pillars: Mediation vs Arbitration vs Conciliation */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Mechanisms</span>
            <h2 className="section-title">Mediation, Conciliation & Arbitration</h2>
            <p className="section-subtitle">
              Understanding the critical differences between the three primary forms of Alternative Dispute Resolution when conducted online.
            </p>
          </div>

          <div className="cards-grid-3">
            {ADR_METHODS.map((method, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#0d9488',
                  letterSpacing: '0.06em',
                  marginBottom: '0.5rem'
                }}>
                  Mechanism 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '1rem' }}>
                  {method.name}
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginBottom: '0.2rem' }}>Role of the Neutral:</div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>{method.role}</p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginBottom: '0.2rem' }}>Binding Nature:</div>
                  <p style={{ fontSize: '0.88rem', color: '#0f766e', fontWeight: 600 }}>{method.bindingNature}</p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginBottom: '0.2rem' }}>Best Suited For:</div>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{method.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Comparative Matrix: ODR vs Traditional Court Litigation */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Comparative Analysis</span>
            <h2 className="section-title">ODR versus Traditional Litigation</h2>
            <p className="section-subtitle">
              A balanced, side-by-side comparison to help citizens and businesses understand when and why digital resolution offers tangible advantages.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Parameter</th>
                  <th style={{ width: '39%' }}>Traditional Court Litigation</th>
                  <th style={{ width: '39%' }}>Online Dispute Resolution (ODR)</th>
                </tr>
              </thead>
              <tbody>
                {ODR_VS_LITIGATION.map((item, index) => (
                  <tr key={index}>
                    <td className="table-dim">{item.dimension}</td>
                    <td className="table-litigation">{item.courtLitigation}</td>
                    <td className="table-odr">{item.onlineDisputeResolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. How ODR Works: The 5-Step Journey */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-dark">Procedural Flow</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              How an Online Dispute Is Resolved Step-by-Step
            </h2>
            <p className="section-subtitle">
              Demystifying the typical digital journey from initial complaint intake to a legally recognized settlement.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {ODR_STEPS.map((step) => (
              <div 
                key={step.step}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.75rem 1.25rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#2dd4bf',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}>
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits & Realistic Limitations (Objective & Neutral) */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Objective Reality Check</span>
            <h2 className="section-title">Benefits and Realistic Limitations</h2>
            <p className="section-subtitle">
              We present an honest, balanced perspective. ODR is a transformative tool, but it is not a panacea for every situation.
            </p>
          </div>

          <div className="cards-grid-2">
            {/* Benefits */}
            <div style={{
              background: '#f0fdfa',
              border: '1px solid #99f6e4',
              borderRadius: '20px',
              padding: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', color: '#0f766e', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={22} />
                <span>Practical Benefits of ODR</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {ODR_BENEFITS.map((ben, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '1rem', color: '#0f766e', marginBottom: '0.25rem' }}>
                      {ben.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#134e4a', margin: 0, lineHeight: 1.5 }}>
                      {ben.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations */}
            <div style={{
              background: '#fff1f2',
              border: '1px solid #fecdd3',
              borderRadius: '20px',
              padding: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', color: '#9f1239', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={22} />
                <span>Realistic Limitations & Cautions</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {ODR_LIMITATIONS.map((lim, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '1rem', color: '#9f1239', marginBottom: '0.25rem' }}>
                      {lim.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#881337', margin: 0, lineHeight: 1.5 }}>
                      {lim.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Dispute Suitability Self-Checker */}
      <section className="section section-subtle">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-badge">Interactive Tool</span>
            <h2 className="section-title">Is Your Dispute Suitable for ODR?</h2>
            <p className="section-subtitle">
              Select a dispute scenario below to assess whether technology-enabled mediation is an appropriate route or if formal judicial intervention is required.
            </p>
          </div>

          <div className="quiz-container">
            <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Choose a Dispute Category:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {disputeScenarios.map((scen) => (
                <button
                  key={scen.id}
                  className={`quiz-option-btn ${selectedDisputeType === scen.id ? 'selected' : ''}`}
                  onClick={() => setSelectedDisputeType(scen.id)}
                >
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                    {scen.label}
                  </div>
                </button>
              ))}
            </div>

            {selectedDisputeType && (
              <div style={{ marginTop: '1.5rem' }}>
                {(() => {
                  const match = disputeScenarios.find((s) => s.id === selectedDisputeType);
                  if (!match) return null;
                  return (
                    <div className={`quiz-result-box ${match.suitable ? 'quiz-result-positive' : 'quiz-result-negative'}`}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                        {match.suitable ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                        <span>{match.suitable ? 'Generally Suitable for ODR' : 'Requires Formal Court Jurisdiction'}</span>
                      </div>
                      <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                        {match.reason}
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-badge">Answers to Common Questions</span>
            <h2 className="section-title">ODR Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Straightforward answers addressing legal enforceability, costs, and voluntary participation.
            </p>
          </div>

          <div className="faq-list">
            {ODR_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} color="#0d9488" /> : <ChevronDown size={20} color="#64748b" />}
                  </button>
                  {isOpen && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                      {faq.legalContext && (
                        <div className="faq-context-note">
                          <strong>Statutory Grounding:</strong> {faq.legalContext}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Toolkit Callout */}
      <section className="section-dark" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Organize an ODR Awareness Session at Your College or Group
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: 0, maxWidth: '650px' }}>
                We provide free non-commercial speaker sessions, slide decks, and digital toolkits for law universities, consumer clubs, and MSME clusters.
              </p>
            </div>
            <button 
              className="btn btn-primary btn-md"
              onClick={() => setActiveTab('contact')}
            >
              <span>Request Educational Workshop</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
