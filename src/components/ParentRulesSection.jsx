import React from 'react';
import { Building2, FileText, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ParentRulesSection() {
  return (
    <div className="rules-page-root results-page-watermark-wrapper">
      {/* LOW OPACITY BIG LOGO WATERMARK BACKGROUND */}
      <div className="rules-bg-watermark" />

      {/* TOP HEADER NAV BAR */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">GUIDELINES &amp; COOPERATION</span>
          <h1 className="editorial-page-title">RULES FOR PARENTS</h1>
        </div>
      </div>

      <div className="rules-main-container results-page-content-z">
        <div className="rules-content-shell">
          
          {/* NAVIGATION TAB BAR BETWEEN RULE 1 AND RULE 2 */}
          <div className="rules-tab-bar">
            <a href="/rule1" className="rules-tab-btn">
              <Building2 size={18} />
              <span>School Rules (Students)</span>
            </a>
            <a href="/rule2" className="rules-tab-btn active">
              <FileText size={18} />
              <span>Rules For Parents</span>
            </a>
          </div>

          {/* PAGE TITLE (MATCHING SCREENSHOT 2) */}
          <div className="rules-head-title-block">
            <div className="rules-icon-title">
              <Building2 className="rules-building-icon" size={32} />
              <h2>Rules For Parents</h2>
            </div>
            <div className="rules-title-line"></div>
          </div>

          {/* RULES NUMBERED LIST */}
          <div className="rules-list-container">
            <ol className="rules-ol-list">
              <li>Please check your ward's haircut, uniform, and punctuality in the morning.</li>
              <li>It is advisable to write to the school about any problems your ward may have or to seek guidance. Your letters will be answered after discussion with more than one teacher, and a meeting will be arranged with the concerned teachers.</li>
              <li>Please check your ward's school diary, sign any remarks, and take the necessary action.</li>
              <li>Ensure that your ward maintains a balanced interest in studies, co-curricular activities, and sports.</li>
              <li>Please restrict daily pocket money; excessive spending should be discouraged.</li>
              <li>Children must not bring crackers, colors, pen drives, smartwatches, mobile phones, or cameras to school. Bursting crackers and playing with colors may result in expulsion.</li>
              <li>Instruct your ward to take care of personal belongings. There should be a name tag on blazers and sweaters. Expensive items such as pen drives, smartwatches, and calculators should not be brought to school. Students are also not allowed to wear jewelry. If this rule is violated, the item will be confiscated. The school bears no responsibility for lost articles.</li>
              <li>If your ward is absent from school, he or she must make up all missed work.</li>
              <li>If your ward needs to leave the school campus during school hours, you must obtain a gate pass from the Principal, which must be presented upon leaving.</li>
              <li>For security reasons, please ensure that your ward arrives on campus on time and leaves on time. Parents are requested to drop off their wards in the morning and pick them up immediately after school. The school takes no responsibility for students who do not reach home after school hours.</li>
              <li>You are welcome to meet the principal and staff. To avoid long waiting periods, please follow the time schedule and send a letter to the class teacher to fix a prior appointment with the teachers.</li>
              <li>As the medium of instruction in the school is English, students are advised to communicate in English only during school hours.</li>
              <li>Parents are requested to read the school rules carefully and ensure that they are followed.</li>
              <li>Pupils should realize that they are responsible to the school authorities not only for their conduct at school but also for their general behavior outside of school. Any reported or observed objectionable conduct may lead to disciplinary action.</li>
              <li>Parents or guardians should understand that they cannot dictate to the school management, which has the right to admit or retain any student at its sole discretion.</li>
              <li>Any pupil who is persistently insubordinate, repeatedly mischievous, guilty of malpractices in connection with examinations, or who, in the opinion of the Head of the School, has a negative influence on fellow students may be expelled or suspended for a specified period by the Head of the School.</li>
              <li>No amount of private tuition can substitute for active listening, concentration, and attention in class. Moreover, private tuitions can reduce self-confidence and initiative, encouraging laziness. Therefore, taking or giving private tuitions is not allowed.</li>
              <li>If there are any complaints, parents are requested to bring them directly to the Principal's attention. Complaints will not be entertained by phone or any other means.</li>
              <li>The school alone cannot mold children into good citizens. A child is the product of both home and school. Therefore, parents are requested to cooperate with school authorities in educating their children and to instill in them the values of neatness, politeness, punctuality, courtesy, discipline, social and moral values, and good manners both at school and at home.</li>
              <li>The school management reserves the right to waive any of the rules contained in this document or to add new rules and regulations, which will also be binding on parents and students without providing a reason for such actions.</li>
              <li>The interpretation of any rules in this Pupil's Diary, as well as amendments to it, rests solely with the Governing Body of the school. These interpretations shall be final and binding on parents.</li>
              <li>
                <strong>Parents are requested to ensure that the school bus or vehicle used for transporting their wards strictly adheres to the following guidelines set by the Honourable Supreme Court of India:</strong>
                <ul className="rules-sub-alpha-list">
                  <li><strong>a.</strong> The school bus or vehicle must have "School Bus" or "On School Duty" clearly written on the front and back.</li>
                  <li><strong>b.</strong> A First-Aid Box must be available in the vehicle.</li>
                  <li><strong>c.</strong> The windows must be fitted with horizontal grills.</li>
                  <li><strong>d.</strong> There must be a fire extinguisher in the vehicle.</li>
                  <li><strong>e.</strong> The school name and telephone number must be displayed on the vehicle.</li>
                  <li><strong>f.</strong> The doors of the vehicle should be fitted with reliable locks.</li>
                  <li><strong>g.</strong> There should be adequate space under the seats for safely storing school bags.</li>
                  <li><strong>h.</strong> An attendant must be present in the vehicle at all times.</li>
                  <li><strong>i.</strong> Any parent or guardian may also travel to ensure these safety norms are followed.</li>
                </ul>
              </li>
            </ol>

            {/* BOTTOM NAV PREV LINK */}
            <div className="rules-bottom-nav">
              <a href="/rule1" className="rules-next-btn">
                <ArrowLeft size={16} />
                <span>View School Rules (Students)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
