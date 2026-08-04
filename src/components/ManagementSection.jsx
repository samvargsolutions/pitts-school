import React from 'react';
import { Building2, Award, HeartHandshake } from 'lucide-react';

const managingCommittee = [
  {
    id: 1,
    name: 'The Rt. Revd. B.B. Baskey',
    designation: 'Chairman',
    address: "Bishop of Chhotanagpur, Bishop's Lodge, Post Box. 1 Ranchi - 834001",
    isLeader: true
  },
  {
    id: 2,
    name: 'Mr. Arindam Dasgupta',
    designation: 'Vice-Chairman',
    address: 'IEL GOMIA',
    isLeader: false
  },
  {
    id: 3,
    name: 'Mr. Brij Mohan Lal Das',
    designation: 'PRINCIPAL & SECRETARY',
    address: 'B-28 IEL GOMIA',
    isLeader: false
  },
  {
    id: 4,
    name: 'Mr. Roshan Sinha',
    designation: 'Treasurer',
    address: 'A-2, IEL GOMIA',
    isLeader: false
  },
  {
    id: 5,
    name: 'Mr. Ashish Singh',
    designation: 'Member',
    address: 'A-10,IEL GOMIA',
    isLeader: false
  },
  {
    id: 6,
    name: 'Mr. Prabhash Kr. Jha',
    designation: 'Member',
    address: 'A-6, IEL GOMIA',
    isLeader: false
  },
  {
    id: 7,
    name: 'Mr. Raghib Belal Sabri',
    designation: 'Member',
    address: 'B-Type, IEL GOMIA',
    isLeader: false
  }
];

export default function ManagementSection() {
  return (
    <div className="management-page-root">
      {/* TOP HERO HEADER */}
      <div className="page-nav-top-bar">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">GOVERNANCE &amp; LEADERSHIP · PITTS MODERN SCHOOL</span>
          <h1 className="editorial-page-title">OUR MANAGEMENT</h1>
        </div>
      </div>

      <div className="management-main-container">
        <div className="management-content-shell">
          {/* PAGE TITLE BLOCK (MATCHING SCREENSHOT) */}
          <div className="management-head-title-block">
            <div className="management-icon-title">
              <Building2 className="management-building-icon" size={32} />
              <h2>Our Management</h2>
            </div>
            <div className="management-title-line"></div>
          </div>

          {/* RED SUBHEADING BANNER */}
          <div className="management-red-banner">
            <h3>List of members of school Managing Committee with their Address and post held</h3>
          </div>

          {/* MANAGING COMMITTEE TABLE (MATCHING SCREENSHOT) */}
          <div className="management-table-wrapper">
            <table className="management-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Name</th>
                  <th style={{ width: '28%' }}>Designation</th>
                  <th style={{ width: '42%' }}>Address</th>
                </tr>
              </thead>
              <tbody>
                {managingCommittee.map((member) => (
                  <tr key={member.id} className={member.isLeader ? 'leader-row' : ''}>
                    <td className="member-name">{member.name}</td>
                    <td className="member-designation">{member.designation}</td>
                    <td className="member-address">{member.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SPECIAL THANKS FOOTNOTE */}
          <div className="management-thanks-card">
            <HeartHandshake size={20} className="thanks-icon" />
            <p>
              <strong>Special Thanks to</strong> Mr. Abhishek Bishwas, Site Manager, Orica for his Inspiration, support and guidance for the development of the school.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
