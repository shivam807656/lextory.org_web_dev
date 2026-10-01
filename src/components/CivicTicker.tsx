import React from 'react';
import { Phone, ShieldAlert, HeartHandshake } from 'lucide-react';

export const CivicTicker: React.FC = () => {
  return (
    <div className="civic-ticker-bar" role="region" aria-label="National Public Assistance Helplines">
      <div className="ticker-inner">
        <div className="ticker-badge">
          <ShieldAlert size={14} />
          <span>Statutory Citizen Helplines</span>
        </div>
        <div className="ticker-helplines">
          <div className="helpline-item" title="National Legal Services Authority (Free Legal Aid)">
            <HeartHandshake size={13} />
            <span>NALSA Legal Aid: <strong>15100</strong></span>
          </div>
          <div className="helpline-item" title="National Cyber Crime Reporting Helpline">
            <Phone size={13} />
            <span>Cyber Fraud: <strong>1930</strong></span>
          </div>
          <div className="helpline-item" title="National Commission for Women Helpline">
            <Phone size={13} />
            <span>Women Helpline: <strong>1091</strong></span>
          </div>
          <div className="helpline-item" title="Child Protection Helpline">
            <Phone size={13} />
            <span>Childline: <strong>1098</strong></span>
          </div>
          <div className="helpline-item" title="National Emergency Response">
            <Phone size={13} />
            <span>Emergency: <strong>112</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
