import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const governmentExams = [
    { id: 1, icon: '🏛️', name: 'UPSC Civil Services Exam' },
    { id: 2, icon: '📋', name: 'SSC CGL' },
    { id: 3, icon: '📋', name: 'SSC CHSL' },
    { id: 4, icon: '📋', name: 'SSC MTS' },
    { id: 5, icon: '🏦', name: 'IBPS PO' },
    { id: 6, icon: '🏦', name: 'IBPS Clerk' },
    { id: 7, icon: '🏦', name: 'SBI PO' },
    { id: 8, icon: '🏦', name: 'SBI Clerk' },
    { id: 9, icon: '💰', name: 'RBI Grade B' },
    { id: 10, icon: '💰', name: 'RBI Assistant' },
    { id: 11, icon: '🚂', name: 'RRB NTPC' },
    { id: 12, icon: '🚂', name: 'RRB JE' },
    { id: 13, icon: '🚂', name: 'RRB ALP' },
    { id: 14, icon: '🛡️', name: 'LIC AAO' },
    { id: 15, icon: '🛡️', name: 'LIC ADO' },
    { id: 16, icon: '🛡️', name: 'NIACL AO' },
    { id: 17, icon: '🛡️', name: 'UIIC AO' },
    { id: 18, icon: '🛡️', name: 'OICL AO' },
    { id: 19, icon: '🏥', name: 'ESIC UDC' },
    { id: 20, icon: '🏥', name: 'ESIC Stenographer' },
    { id: 21, icon: '🌾', name: 'FCI Manager' },
    { id: 22, icon: '🌾', name: 'FCI Watchman' },
    { id: 23, icon: '🔬', name: 'DRDO Scientist' },
    { id: 24, icon: '🚀', name: 'ISRO Scientist' },
    { id: 25, icon: '⚛️', name: 'BARC Scientific Officer' },
    { id: 26, icon: '🎖️', name: 'NDA' },
    { id: 27, icon: '🎖️', name: 'CDS' },
    { id: 28, icon: '✈️', name: 'AFCAT' },
    { id: 29, icon: '⛵', name: 'Indian Navy Sailor' },
    { id: 30, icon: '🎖️', name: 'Indian Army Soldier' },
    { id: 31, icon: '✈️', name: 'Indian Air Force Group X' },
    { id: 32, icon: '✈️', name: 'Indian Air Force Group Y' },
    { id: 33, icon: '⛵', name: 'Coast Guard Navik' },
    { id: 34, icon: '🛡️', name: 'BSF Constable' },
    { id: 35, icon: '🛡️', name: 'CRPF Constable' },
    { id: 36, icon: '🛡️', name: 'ITBP Constable' },
    { id: 37, icon: '🛡️', name: 'CISF Constable' },
    { id: 38, icon: '🛡️', name: 'SSB Constable' },
    { id: 39, icon: '🚔', name: 'Delhi Police Constable' },
    { id: 40, icon: '🚔', name: 'UP Police Constable' }
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to OJAS Jee Classes</h1>
        <p>From School to GATE, CAT, UPSC & Government Jobs</p>
      </div>

      <h2 className="section-title">📚 All Government Exams</h2>

      <div className="exams-grid">
        {governmentExams.map(exam => (
          <Link key={exam.id} to={`/exam/${exam.id}`} className="exam-card">
            <span className="exam-icon">{exam.icon}</span>
            <span className="exam-name">{exam.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;