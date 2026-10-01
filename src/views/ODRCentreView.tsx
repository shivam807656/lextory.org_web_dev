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
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>
              Online Dispute Resolution (ODR) Awareness Centre
            </h1>
            <p className="section-subtitle">
              A neutral, public-interest guide to technology-assisted dispute resolution in India. Learn what ODR means, how mediation, conciliation, and arbitration function, and whether digital resolution fits your dispute.
            </p>
          </div>
        </div>
      </section>

      {/* 1. What is ODR? Core Educational Overview (DE-BOXED Open Columns) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4.5rem', alignItems: 'start' }}>
            <div>
              <div className="editorial-tag">
                <span>Demystifying ODR</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--text-main)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Resolving Disagreements Collaboratively & Digitally
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                <strong>Online Dispute Resolution (ODR)</strong> is the structured use of digital communication technologies (including secure video calls, collaborative document exchange, and asynchronous messaging) to facilitate dispute resolution outside the traditional courtroom.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1.75rem' }}>
                Rather than treating dispute resolution as a combative trial where one side wins and the other loses, ODR prioritizes collaborative problem-solving, convenience, and proportionality, ensuring that the cost and time spent resolving a grievance does not exceed the value of the issue itself.
              </p>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-active">Voluntary Consent</span>
                <span className="badge-pill badge-active">Confidential Proceedings</span>
                <span className="badge-pill badge-active">Neutral Facilitation</span>
                <span className="badge-pill badge-active">Enforceable Agreements</span>
              </div>
            </div>

            {/* Legal Recognition in India (Open Column, No Box) */}
            <div style={{
              borderLeft: '1px solid var(--border-subtle)',
              paddingLeft: '3rem'
            }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="var(--accent-gold)" />
                <span>Legal Recognition in India</span>
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                ODR is grounded in established Indian statutory jurisprudence:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>The Mediation Act, 2023:</strong> Expressly recognizes online mediation and accords mediated settlement agreements enforceability equivalent to civil court decrees.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Arbitration & Conciliation Act, 1996:</strong> Empowers binding arbitration and conciliated agreements under Section 74.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Code of Civil Procedure, 1908 (Sec 89):</strong> Mandates judicial referral of suitable pending matters to alternate dispute resolution.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 3 Pillars: Mediation vs Arbitration vs Conciliation (DE-BOXED Open Columns) */}
      <section className="section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Core Mechanisms</span>
            </div>
            <h2 className="section-title">Mediation, Conciliation & Arbitration</h2>
            <p className="section-subtitle">
              Understanding the critical differences between the three primary forms of Alternative Dispute Resolution when conducted online.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem' }}>
            {ADR_METHODS.map((method, idx) => (
              <div 
                key={idx}
                style={{
                  borderTop: idx === 0 ? '2px solid var(--accent-gold)' : '2px solid var(--border-strong)',
                  paddingTop: '1.75rem'
                }}
              >
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-hover)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}>
                  Mechanism 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                  {method.name}
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>Role of the Neutral:</div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{method.role}</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>Binding Nature:</div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontWeight: 600 }}>{method.bindingNature}</p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>Best Suited For:</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.55 }}>{method.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Comparative Matrix: ODR vs Traditional Court Litigation */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Comparative Analysis</span>
            </div>
            <h2 className="section-title">ODR versus Traditional Litigation</h2>
            <p className="section-subtitle">
              A balanced, side-by-side comparison to help citizens and businesses understand when and why digital resolution offers tangible advantages.
            </p>
          </div>

          <div style={{ overflowX: 'auto', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border-medium)' }}>
                  <th style={{ padding: '1rem 1.25rem', width: '22%', color: 'var(--text-main)', fontWeight: 700 }}>Parameter</th>
                  <th style={{ padding: '1rem 1.25rem', width: '39%', color: 'var(--text-muted)', fontWeight: 600 }}>Traditional Court Litigation</th>
                  <th style={{ padding: '1rem 1.25rem', width: '39%', color: 'var(--accent-gold-hover)', fontWeight: 700 }}>Online Dispute Resolution (ODR)</th>
                </tr>
              </thead>
              <tbody>
                {ODR_VS_LITIGATION.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.dimension}</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.courtLitigation}</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-body)', lineHeight: 1.6, background: 'var(--accent-gold-light)' }}>{item.onlineDisputeResolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. How ODR Works: The 5-Step Journey (DE-BOXED Open Flow) */}
      <section className="section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Procedural Flow</span>
            </div>
            <h2 className="section-title">
              How an Online Dispute Is Resolved Step-by-Step
            </h2>
            <p className="section-subtitle">
              Demystifying the typical digital journey from initial complaint intake to a legally recognized settlement.
            </p>
          </div>

          <div className="editorial-flow-list" style={{ maxWidth: '840px', margin: '0 auto' }}>
            {ODR_STEPS.map((step) => (
              <div key={step.step} className="editorial-flow-item">
                <span className="editorial-flow-number">0{step.step}</span>
                <div>
                  <h3 className="editorial-flow-title">{step.title}</h3>
                  <p className="editorial-flow-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits & Realistic Limitations (DE-BOXED Open 2 Columns) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Objective Reality Check</span>
            </div>
            <h2 className="section-title">Benefits and Realistic Limitations</h2>
            <p className="section-subtitle">
              We present an honest, balanced perspective. ODR is a transformative tool, but it is not a panacea for every situation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4.5rem' }}>
            {/* Practical Benefits */}
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--accent-gold)" />
                <span>Practical Benefits of ODR</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {ODR_BENEFITS.map((ben, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {ben.title}
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
                      {ben.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Realistic Limitations */}
            <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '3rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid var(--border-strong)', paddingBottom: '0.75rem' }}>
                <AlertTriangle size={20} color="var(--accent-gold-hover)" />
                <span>Realistic Limitations & Cautions</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {ODR_LIMITATIONS.map((lim, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {lim.title}
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
                      {lim.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Dispute Suitability Self-Checker (Minimalist & Clean) */}
      <section className="section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Interactive Orientation</span>
            </div>
            <h2 className="section-title">Is Your Dispute Suitable for ODR?</h2>
            <p className="section-subtitle">
              Select a dispute scenario below to assess whether technology-enabled mediation is an appropriate route or if formal judicial intervention is required.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {disputeScenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => setSelectedDisputeType(scen.id)}
                style={{
                  background: selectedDisputeType === scen.id ? 'var(--bg-surface)' : 'transparent',
                  border: selectedDisputeType === scen.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all var(--trans-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontWeight: selectedDisputeType === scen.id ? 700 : 500, color: 'var(--text-main)', fontSize: '0.96rem' }}>
                  {scen.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: selectedDisputeType === scen.id ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                  {selectedDisputeType === scen.id ? 'Selected' : 'Select'}
                </span>
              </button>
            ))}
          </div>

          {selectedDisputeType && (() => {
            const match = disputeScenarios.find((s) => s.id === selectedDisputeType);
            if (!match) return null;
            return (
              <div style={{
                background: 'var(--bg-surface)',
                borderLeft: match.suitable ? '4px solid var(--accent-gold)' : '4px solid var(--structural-dark)',
                padding: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {match.suitable ? <CheckCircle2 size={18} color="var(--accent-gold)" /> : <AlertTriangle size={18} color="var(--accent-gold-hover)" />}
                  <span>{match.suitable ? 'Generally Suitable for ODR' : 'Requires Formal Court Jurisdiction'}</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
                  {match.reason}
                </p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Answers to Common Questions</span>
            </div>
            <h2 className="section-title">ODR Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Straightforward answers addressing legal enforceability, costs, and voluntary participation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ODR_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', fontWeight: 600 }}>
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp size={18} color="var(--accent-gold)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: '1.5rem', color: 'var(--text-body)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                      <p style={{ margin: '0 0 0.75rem 0' }}>{faq.answer}</p>
                      {faq.legalContext && (
                        <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontStyle: 'italic', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '0.75rem' }}>
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
      <section className="section-dark" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ color: 'var(--text-light)', fontSize: '1.65rem', marginBottom: '0.5rem' }}>
                Organize an ODR Awareness Session at Your College or Group
              </h3>
              <p style={{ color: '#C8C3B8', fontSize: '0.98rem', margin: 0, maxWidth: '650px', lineHeight: 1.65 }}>
                We provide free non-commercial speaker sessions, slide decks, and digital toolkits for law universities, consumer clubs, and community groups.
              </p>
            </div>
            <button 
              className="btn btn-accent btn-md"
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
