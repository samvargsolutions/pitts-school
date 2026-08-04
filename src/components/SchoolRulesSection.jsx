import React from 'react';
import { Building2, ShieldAlert, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function SchoolRulesSection() {
  return (
    <div className="rules-page-root results-page-watermark-wrapper">
      {/* LOW OPACITY BIG LOGO WATERMARK BACKGROUND */}
      <div className="rules-bg-watermark" />

      {/* TOP HEADER NAV BAR */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">DISCIPLINE &amp; CODE OF CONDUCT</span>
          <h1 className="editorial-page-title">SCHOOL RULES</h1>
        </div>
      </div>

      <div className="rules-main-container results-page-content-z">
        <div className="rules-content-shell">
          
          {/* NAVIGATION TAB BAR BETWEEN RULE 1 AND RULE 2 */}
          <div className="rules-tab-bar">
            <a href="/rule1" className="rules-tab-btn active">
              <Building2 size={18} />
              <span>School Rules (Students)</span>
            </a>
            <a href="/rule2" className="rules-tab-btn">
              <FileText size={18} />
              <span>Rules For Parents</span>
            </a>
          </div>

          {/* PAGE TITLE (MATCHING SCREENSHOT 2) */}
          <div className="rules-head-title-block">
            <div className="rules-icon-title">
              <Building2 className="rules-building-icon" size={32} />
              <h2>School Rules</h2>
            </div>
            <div className="rules-title-line"></div>
          </div>

          {/* RULES NUMBERED LIST */}
          <div className="rules-list-container">
            <ol className="rules-ol-list">
              <li>A student must carry his diary to school every day. It must have his/her photograph and complete information signed by the parents.</li>
              <li>Students who come to school in their own transport should arrive at school before the bell rings. No student is allowed to come to school in self-driven scooter, motorcycle or car.</li>
              <li>Students should be neatly dressed. The school uniform is to be worn on all working day, school functions and school excursions.</li>
              <li>House colour uniform to be worn on Friday.</li>
              <li>Non-Sikh Boys should get their hair cut at regular intervals.</li>
              <li>Girls should plait their hair in two if it is below the shoulders. Short hair should be neatly cut and pinned. Kajal &amp; nail paint should not be used.</li>
              <li>Students are expected to respect the property of others. This includes respect for school property. No student should damage any school furniture, write or draw on walls, furniture or in any way damage things belonging to others. Damage done even by accident should be reported at once to the class teacher or to the principal. Any damage done will be made good by the one who caused it.</li>
              <li>The school is not responsible for goods lost. It is advisable not to bring valuable articles (like expensive watches or pens) to school. Students themselves are responsible for the safe custody of their books and belongings. The school cannot be held responsible for books, money, clothes, vehicles and other articles that are lost by the student.</li>
              <li>Cell phones, smart watch, cameras and pen drive or any other digital/electronics devices are not allowed in school.</li>
              <li>Students should not wear any jewellery in school (No chain, rings, bangles, bracelets). Girls may wear only one pair of small ear rings.</li>
              <li>Students who come to school and go home in the care of attendants should not leave before the attendant arrives. In case of delay, they should report to the school office.</li>
              <li>Students should be polite wherever they go. They should always remember that the school is judged by their conduct. They must greet their teachers and visitors when they meet them.</li>
              <li>Towards the end of the session there will be a group photograph of each class. Students are required to come in proper school uniform on that day.</li>
              <li>Changing of class rooms between periods should be done in silence and in an orderly manner. They must walk in silence and in a single file. They should always keep to their left.</li>
              <li>The school reserves the right to suspend or take strict disciplinary action against a student whose progress in studies is constantly unsatisfactory or whose conduct is harmful to other students. Immorality, grave insubordination, contempt of authority or cancellation of complete examination, malpractices in connection with test or examination or unwholesome influence on fellow matter is always a sufficient reason for immediate dismissal.</li>
              <li>As far as possible, once a child has come to school, he/she should not be asked to take half day leave.</li>
              <li>Students must get their Report Cards signed by their parents/ guardians within two days of the receipt of the Report Card and return them to the Class Teachers. If lost, a fine will be imposed.</li>
              <li>All the students are required to communicate in English language only during school hours.</li>
              <li>Students must not miss any teaching/games/library/ activity period.</li>
              <li>
                <strong>Students must not indulge in any of the following practices:</strong>
                <ul className="rules-sub-unordered-list">
                  <li>Spitting in or near the school building.</li>
                  <li>Disfiguring or otherwise damaging any school property.</li>
                  <li>Smoking.</li>
                  <li>Any form of gambling.</li>
                  <li>Rowdiness, rude behaviour and bullying.</li>
                  <li>Use of violence in any form.</li>
                  <li>Casteism, communalism or practice of untouchability.</li>
                  <li>Use of foul language.</li>
                  <li>Shouting and whistling in the school building.</li>
                </ul>
              </li>
              <li>After tiffin break a warning bell is sounded for students to silently make their way to their respective classes. At the second bell the class will commence.</li>
              <li>No gifts or any demonstration to the teacher are allowed without the prior consent of the school authorities.</li>
              <li>The School proposes to hold counseling classes for both boys and girls separately from time to time.</li>
              <li>For Class X medical proforma is to be duly filled.</li>
              <li>Admit Card will be issued after the clearance of all kind of fees before half yearly tests/Annual examination.</li>
            </ol>

            {/* ADDITIONAL GENERAL PROVISIONS */}
            <div className="rules-extra-provisions">
              <div className="provision-item">
                <CheckCircle2 size={18} className="provision-icon" />
                <p>School proposes to hold parent teacher meet after every examination. It is mandatory for the parents to attend.</p>
              </div>

              <div className="provision-item">
                <CheckCircle2 size={18} className="provision-icon" />
                <p>Events like exhibition, fete, excursion, school annual day &amp; annual sports day will be held in every academic year.</p>
              </div>

              <div className="provision-item highlight-warning-box">
                <ShieldAlert size={22} className="warning-icon" />
                <p>
                  <strong>Strict Compliance Requirement:</strong> The observance of rules of discipline of the school and good behaviour is an essential condition to a student's continuance in the school. In case a student violates the school rules or indulges in any form of indiscipline, strict action like expulsion/suspension/rustication shall be taken against the student.
                </p>
              </div>
            </div>

            {/* BOTTOM NAV NEXT LINK */}
            <div className="rules-bottom-nav">
              <a href="/rule2" className="rules-next-btn">
                <span>View Rules For Parents</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
