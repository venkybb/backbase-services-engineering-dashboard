# Engineering Manager Framework Report

## Complete Guide to EM Reporting Tools & Dashboards

**Date:** August 4, 2026  
**Organization:** Backbase  
**Version:** 1.0

---

## Executive Summary

The Engineering Manager (EM) Framework is a comprehensive system designed to enable data-driven management of engineering teams, projects, and quality across Backbase's global organization. It provides EMs with integrated dashboards and metrics to monitor team health, quality metrics, AI adoption, and project performance across multiple hubs and regions spanning 731 engineers in 35 EM teams.

---

## 1. Framework Overview

The EM Framework consists of five interconnected pillars:

### Quality Framework
- **Foundational Process:** Backbase Quality Framework v1.3 covering Requirements, Development Practices, QA, Quality Gates, and Tracking & Reporting
- **Key Metric:** Defect Escape Rate (DER) - Primary KPI
- **Target:** <5% DER, >90% Quality Gates Pass Rate

### People & Team Management
- **Engineering People Dashboards** - By hub and region
- **Headcount Tracking** - 731 engineers across 6 hubs
- **Skills Matrix** - Domain expertise and technical proficiencies

### Project Quality Metrics
- **Sprint-Based Tracking** - Project-level quality indicators
- **Security Scoring** - Multi-tool assessment
- **API Performance** - Availability and reliability

### Team Health Assessment
- **Periodic Surveys** - Quarterly team well-being surveys
- **5 Key Dimensions** - Code Confidence, Well Being, Collaboration, Efficiency, Stress Index
- **Proactive Intervention** - Data-driven team support

### AI Tooling & Adoption
- **Tool Tracking** - Cursor and GitHub Copilot adoption
- **Productivity Metrics** - Code generation and acceptance rates
- **By Discipline Analysis** - Usage patterns across engineering roles

---

## 2. Key Reporting Tools & Their Usage

### 2.1 Engineering Dashboard - People Reports

**Purpose:** Comprehensive view of engineering team composition, skills, and distribution

**Update Frequency:** Continuous with monthly snapshots

**Access:** Internal dashboards by Hub (Africa, ANZ, Asia, Europe, LATAM, Middle East, North America)

**Key Metrics Tracked:**
- Total engineer headcount by hub and region
- Internal vs. external employee ratio (Target: 75%+ internal)
- Seniority distribution by discipline (P1-P6 levels)
- Geographic distribution and remote worker breakdown
- Nearshore partner allocation (Mobiquity, Levi9, Xebia, AgreeYa, Aequilibrium, etc.)
- Skills matrix per engineer (Business, Banking, Commercial, Digital Assist, Digital Engage, Investing, Lending, Onboarding, Retail, Wealth)
- Joiners and leavers trend analysis

**EMs Use This For:**
- Resource planning and allocation
- Skills gap analysis
- Career development planning
- Diversity and geographic balance monitoring

---

### 2.2 Project Quality Metrics Dashboard

**Purpose:** Track quality indicators across active projects with security and compliance scoring

**Update Frequency:** Sprint-based (typically 2-week sprints)

**Key Metrics Tracked:**

| Metric | Target | Current (Aug 2026) |
|--------|--------|-------------------|
| Defect Escape Rate (DER) | <5.0% | 4.2% ✓ |
| Quality Gates Pass Rate | >90% | 91.6% ✓ |
| Development Quality Score | N/A | 66 |
| Security Rating | >90% | Varies by project |
| Compliance Score | N/A | Varies by project |
| API Availability | >99.9% | 99.85% |
| Sprint Velocity | 50+ points | 47.25 avg |
| Correction Rates | Low trend | Declining ✓ |

**Projects Tracked:**
- EAB Banking (Retail & Commercial)
- NBCUniversal
- Eastern Bank
- BECU
- Alliant
- TD Bank
- WSECU
- Weatherbys
- And 20+ others

**EMs Use This For:**
- Sprint planning and tracking
- Quality assurance oversight
- Security posture assessment
- Delivery timeline management
- Post-mortem analysis and improvements

---

### 2.3 Quality Gates Performance Tracking

**Purpose:** Monitor the 5 key quality gates to ensure consistent process adherence

**The 5 Quality Gates:**

1. **Requirements Gate** - 94% pass rate
   - Definition of Ready sign-off
   - Customer and Backbase explicit agreement

2. **Design Review Gate** - 89% pass rate
   - Architectural approval
   - Stakeholder review

3. **Dev Complete Gate** - 92% pass rate
   - Code review completion
   - Standards compliance

4. **QA Sign-off Gate** - 87% pass rate
   - Test coverage verification
   - Acceptance criteria met

5. **Deployment Gate** - 96% pass rate
   - Production readiness
   - Release clearance

**Target:** >90% pass rate across all gates

**EMs Use This For:**
- Process bottleneck identification
- Quality gate coaching
- Team capability assessment
- Continuous improvement initiatives

---

### 2.4 Team Health Dashboard

**Purpose:** Assess team well-being, collaboration, and efficiency through periodic surveys

**Update Frequency:** Quarterly surveys

**5 Key Dimensions:**

1. **Code Confidence**
   - Codebase health assessment
   - Release process satisfaction
   - Technical debt concerns

2. **Team Well Being**
   - Project requirement clarity
   - Job satisfaction
   - Stress and overwhelm levels
   - Target: >75/100

3. **Team Collaboration**
   - Internal communication effectiveness
   - Documentation and knowledge sharing quality
   - Team meeting effectiveness

4. **Team Efficiency**
   - Process and workflow efficiency
   - Resource availability and adequacy
   - Meeting/admin time impact on work

5. **Team Stress Index**
   - Overall stress level
   - Burnout risk indicators
   - Work-life balance concerns

**EMs Use This For:**
- Early burnout detection
- Morale and satisfaction monitoring
- Process improvement identification
- One-on-one discussion topics
- Retention risk assessment

---

### 2.5 AI Tooling Dashboard

**Purpose:** Track AI tool adoption (Cursor, GitHub Copilot) and productivity impact

**Update Frequency:** Daily engagement tracking with monthly rollups

**Current Status (August 2026):**

**Cursor Adoption:**
- Active Users: 331
- Average Requests/Day: 8.19
- Most Used Model: claude-opus-4-8-thin
- Most Used Language: Swift

**GitHub Copilot:**
- Active Users: 0
- Average Requests/Day: 8.40
- Acceptance Ratio: 12.72%

**Overall Distribution:**
- Cursor: 54.4%
- No AI Tools: 45.6%

**Engagement Levels:**
- Engaged: 38.64% (Target: 60%+)
- Active: 20.4%
- Inactive: 7.9%
- Pending Cancellation: 1.1%
- No AI: 45.6% (Opportunity)

**By Discipline (Cursor):**
- Backend Engineers: Highest adoption
- Android Engineers: High adoption
- QA Engineers: Moderate adoption
- Frontend Engineers: Growing adoption

**EMs Use This For:**
- AI tool adoption planning
- Training and onboarding
- Productivity impact measurement
- Cost optimization
- Skills development tracking

---

### 2.6 Engineering Maturity Dashboard

**Purpose:** Assess overall hub maturity and capability levels

**Update Frequency:** Quarterly or semi-annually

**Areas Assessed:**
- Development capability maturity
- Quality process maturity
- Security posture maturity
- Team collaboration and communication maturity
- Technical leadership depth

**EMs Use This For:**
- Hub benchmarking
- Capability development planning
- Resource allocation decisions
- Partnership and mentoring needs

---

### 2.7 Skillset Matrix

**Purpose:** Track skills across engineers to support resource planning and development

**Update Frequency:** Maintained manually by People Managers (quarterly reviews)

**Skills Tracked:**

**Domain Skills:**
- Business Banking (Current: 80+ engineers)
- Retail Banking (Current: 109+ engineers)
- Commercial Banking (Current: 26+ engineers)
- Digital Assist (Current: 61+ engineers)
- Digital Engage (Current: 43+ engineers)
- Investing (Current: 4+ engineers)
- Lending (Current: 13+ engineers)
- Onboarding (Current: 66+ engineers)
- Wealth (Current: 5+ engineers)

**Technical Proficiencies:**
- By discipline (BE, FE, QA, iOS, Android, DevOps, Security, etc.)
- By seniority level (P1-P6)
- By experience in years

**EMs Use This For:**
- Project staffing decisions
- Cross-functional team building
- Career path guidance
- Knowledge transfer planning
- Training and development priorities

---

## 3. Backbase Quality Framework Integration

The **Backbase Quality Framework v1.3** forms the foundation of all quality metrics reporting. Key components:

### Requirements Phase
- **Definition of Ready** with explicit sign-off from customer and Backbase
- **In-sprint changes** management and admin procedures
- **Responsibility:** Development Lead (DM/DD)

### Development Practices Phase
- Code quality standards and review processes
- Testing practices and coverage targets
- Documentation requirements
- **Responsibility:** Engineering Manager - Process and Quality ownership

### Quality Assurance Phase
- Test coverage verification
- Acceptance criteria validation
- Test automation requirements
- **Responsibility:** QA teams and QA sign-off

### Quality Gates Phase
The 5 critical gates (Requirements → Design → Dev Complete → QA → Deployment)
- **Target:** >90% pass rate
- **Accountability:** Delivery Lead

### Tracking & Reporting Phase
- Jira-led metrics and tracking
- Defect escape rate calculation
- Trend analysis and reporting
- Responsibility:** Engineering Manager - Reporting

---

## 4. Global Hub Structure

**Total Organization:**
- **731 Engineers** across 6 hubs
- **35 EMs** managing teams
- **97 Principals** providing technical leadership
- **31 Locations** globally
- **49 Active Projects**

### Hub Breakdown:

| Hub | Engineers | EMs | Principals | Locations | Projects |
|-----|-----------|-----|------------|-----------|----------|
| Africa | 220 | 8 | 23 | 7 | 11 |
| ANZ | 27 | 1 | 4 | 5 | 4 |
| Asia | 187 | 3 | 21 | 7 | 6 |
| Europe | 60 | 3 | 4 | 7 | 9 |
| LATAM | 61 | 3 | 5 | 8 | 8 |
| Middle East | 102 | 5 | 17 | 7 | 4 |
| North America | 141 | 6 | 25 | 19 | 22 |
| **Special Hub (Services)** | 9 | 0 | 3 | 4 | 2 |

**Regional Distribution:**
- Asia: 84.1% (largest hub)
- North America: 73.9% + 10.9% for CFI + 9.7% for GS Central
- Europe: 83.3% + 10% GS Central
- LATAM: 93.8% (local) + GS Central support
- Middle East: 79.8% (local) + support functions
- ANZ: 51.9% (local) + 40.7% GS Central
- Africa: 72.5% (local) + multi-regional support

---

## 5. EM Reporting Cadence

### Daily Activities
- Monitor Engineering Dashboard for critical incidents
- Track AI tool engagement trends
- Review project status updates

### Sprint-Based (Every 2 weeks)
- Project Quality Metrics review at sprint reviews
- Quality gates performance assessment
- Defect escape rate tracking
- Velocity and correction rate analysis

### Monthly
- Summarized metrics report to hub leadership
- KPI dashboard presentation
- Trend analysis and forecast

### Quarterly
- Team Health survey administration
- Skillset Matrix updates and reviews
- Engineering Maturity assessment
- Career development discussions
- AI adoption strategy review

### Ad-hoc
- Post-mortem analysis for quality issues
- Process improvement initiatives
- Resource rebalancing
- Risk assessments

---

## 6. Key Performance Indicators & Targets

### Quality Metrics
- **Defect Escape Rate:** <5.0% (Current: 4.2%) ✓
- **Quality Gates Pass Rate:** >90% (Current: 91.6%) ✓
- **Security Rating:** >90% (Varies by project)
- **Compliance Score:** Target varies by project type

### Delivery Metrics
- **Sprint Velocity:** 50+ story points (Current: 47.25 avg)
- **On-time Delivery:** >95% (Project dependent)
- **Correction Rate:** Downward trend (Current: W4 = 9 issues, down from 19 in W1)

### Team Metrics
- **Team Health Scores:** >75/100 across all dimensions
- **AI Tool Adoption:** 60%+ engagement (Current: 38.64% - 21% gap)
- **Internal Employment:** >75% (Current: 79.2%) ✓
- **Team Turnover:** <10% annually

### Performance Metrics
- **API Availability:** >99.9% (Current: 99.85%)
- **Code Confidence:** >75/100
- **Team Well Being:** >75/100
- **Team Collaboration:** >75/100
- **Team Efficiency:** >75/100

---

## 7. EM Key Responsibilities

### Quality Ownership
- Ensure Backbase Quality Framework is applied consistently across all projects
- Monitor defect escape rate and quality gates performance
- Drive quality gate improvements with target >90% pass rate
- Support RCA (Root Cause Analysis) for quality issues

### Team Health Monitoring
- Conduct quarterly team health surveys
- Address well-being concerns proactively
- Implement team collaboration improvements
- Monitor stress and burnout indicators
- One-on-one follow-ups on survey results

### People Development
- Maintain and update skillset matrix quarterly
- Support career growth and progression
- Identify training and upskilling needs
- Plan internal transfers and mentoring
- Manage retention risks

### Project Delivery
- Track quality metrics across assigned projects
- Ensure on-time sprint delivery
- Monitor API availability and performance
- Support sprint planning with realistic velocity targets
- Manage technical debt and correction priorities

### AI Adoption
- Drive adoption of AI tools (Cursor, GitHub Copilot)
- Measure productivity impact
- Provide training and best practices
- Monitor adoption rates by discipline
- Optimize licensing and tool allocation

### Reporting
- Provide timely, accurate metrics to leadership
- Present monthly KPI dashboards
- Communicate quality trends and forecasts
- Flag risks and mitigation plans early
- Support decision-making with data-driven insights

### Process Improvement
- Continuously improve quality based on data
- Implement lessons learned from post-mortems
- Optimize quality gates and workflows
- Support organizational process improvements
- Benchmark against industry standards

---

## 8. Integration Points & Data Flow

### Metrics Update Flow:
1. **Daily:** AI Tooling Dashboard, Engineering Dashboard (team status)
2. **Sprint End:** Project Quality Metrics, Velocity, DER, Corrections
3. **Monthly:** Aggregated hub-level reporting
4. **Quarterly:** Team Health Surveys, Skillset Matrix, Maturity Assessment
5. **Continuous:** Quality Gates, Security Scoring, API Availability

### EM Information Sources:
- **Primary Dashboard:** Engineering Dashboard (People Reports by Hub)
- **Quality Tracking:** Project Quality Metrics Dashboard (Sprint-based)
- **Team Insights:** Team Health Dashboard (Quarterly)
- **Skills:** Skillset Matrix (Quarterly update)
- **Adoption:** AI Tooling Dashboard (Continuous)
- **Leadership Input:** Jira (Project tracking), Slack (Daily communication)

---

## 9. Success Factors

**Achieving EM Framework Success Requires:**

1. **Regular Dashboard Monitoring** - Daily to monthly as appropriate for each tool
2. **Quality Gate Enforcement** - Consistent application of 5-gate process
3. **Team Health Engagement** - Proactive response to survey findings
4. **Data-Driven Decisions** - Using metrics rather than intuition
5. **Clear Communication** - Transparent reporting to teams and stakeholders
6. **Continuous Learning** - Improvement based on data trends
7. **Leadership Alignment** - Shared KPI ownership and accountability

---

## 10. Tools & System Access

**Primary Access Points:**
- **Engineering Dashboard:** Internal portal (by Hub)
- **Project Quality Metrics:** Jira-integrated dashboard
- **Team Health Surveys:** Periodic survey tool (quarterly)
- **AI Tooling Dashboard:** Real-time analytics portal
- **Skillset Matrix:** Shared spreadsheet (updated by PMs)
- **Quality Framework:** Documented in Backbase Way of Working

---

## Conclusion

The EM Framework provides a comprehensive, integrated approach to engineering management through coordinated use of multiple dashboards and metrics. By leveraging the Engineering Dashboard, Project Quality Metrics, Team Health assessments, AI Tooling tracking, and the foundational Backbase Quality Framework, EMs can effectively manage teams, ensure quality delivery, and drive continuous improvement across the global engineering organization.

The framework reflects lessons learned from 200+ Backbase implementations and represents best practices in agile engineering management. Success requires consistent application, data-driven decision-making, and proactive team support.

---

**Document Version:** 1.0  
**Last Updated:** August 4, 2026  
**Next Review:** November 2026

© 2026 Backbase. All Rights Reserved.
