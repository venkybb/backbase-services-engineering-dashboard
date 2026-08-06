# Project Quality Metrics - Data Extraction Summary

**Report Date:** August 4, 2026
**Data Period:** July 23, 2026
**Source Files:**
- Global Project Quality Metrics Dashboard.xlsx
- Hub Engineering Maturity Dashboard.xlsx
- EAB Business Banking - Quality Metrics (Sprint 28-30)
- EAB Retail Banking - Quality Metrics (Sprint 41-43)

---

## Hub Summary

### Europe
- **Hub Status:** Green
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 66%
  - Defect Escape Rate: 28%
  - API Tracker Installation: 90%
- **Active Projects:** 5 (Danske, Arbuthnot Latham, Weatherbys, GHIB, Jet Bank Albania)
- **Key Issues:** Several projects on hold (Danske in consultancy mode, Arbuthnot Latham awaiting 2026.09 LTS)

### Africa
- **Hub Status:** Green
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 84%
  - Defect Escape Rate: 6%
  - API Tracker Installation: 50%
- **Active Projects:** 2 (CIH - Origination, SBN)
- **Highlights:** Strong development quality with low DER (6%)

### North America
- **Hub Status:** Green
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 86%
  - Defect Escape Rate: 11%
  - API Tracker Installation: 100%
- **Active Projects:** 6 major projects (EverBank, NBC, Alliant, Eastern Business/Retail)
- **Highlights:** Highest development quality (86%), 100% API tracker coverage

### Middle East
- **Hub Status:** Green
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 86%
  - Defect Escape Rate: 3%
  - API Tracker Installation: 100%
- **Active Projects:** 3 (Banque Saudi Fransi, Masraf Al Rayan, Bank Muscat)
- **Highlights:** Excellent DER (3%), all projects with API tracking

### LATAM
- **Hub Status:** Amber
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 73%
  - Defect Escape Rate: 15%
  - API Tracker Installation: 100%
- **Active Projects:** 3 (Bineo, Banco Caja Social, BNCR)
- **Concerns:** BNCR project has RED status (0.33 quality score, -1 defect escape rate)

### Asia
- **Hub Status:** Amber
- **Quality Metrics:**
  - Quality Framework Scope: 50%
  - Development Quality: 83%
  - Defect Escape Rate: 9%
  - API Tracker Installation: 100%
- **Active Projects:** 6 (HDFC, BDO, East West Bank, China Bank Philippines)
- **Notes:** Lower QF Scope coverage (50%) but good development quality

### ANZ
- **Hub Status:** Green
- **Quality Metrics:**
  - Quality Framework Scope: 100%
  - Development Quality: 74%
  - Defect Escape Rate: 9%
  - API Tracker Installation: 0%
- **Active Projects:** 2 (MyState)
- **Concerns:** No API Tracker installation despite overall green status

---

## EAB (Eastern Bank) Projects

### EAB Business Banking (SME Banking MVP1)
**Status:** Sprint 28-30 (July 2026)
- **Go-Live:** Aug 2026
- **Security Score:** 100%
- **Customer Pulse:** Good
- **Team Health:** Good

**Sprint Metrics:**
| Sprint | Velocity | Volatility | Defects (Fixed/Raised) | Status |
|--------|----------|-----------|----------------------|--------|
| 28 | 87.5 | 40% | 14/23 | In Progress |
| 29 | 74.5 | 68% | 21/32 | In Progress |
| 30 | 93 | 9% | 7/14 | Ready for UAT |

**Key Quality Metrics:**
- Defect Escape Rate: 0.9% (Excellent)
- Web Automation Rate: 85% (3% improvement)
- Mobile Automation Rate: 82% (6% improvement)
- AI Adoption: 100%

**Remediation Actions:**
- QRE Strategy and Shift Left implementation (In-progress)
- AI-assisted quality improvements
- Delivery OS Pilot for velocity

---

### EAB Retail Banking
**Status:** Sprint 41-43 (July 2026)
- **Live Release:** 14.10.0 (iOS 14.3.1, Android 14.3.1)
- **Next Go-Live:** Nov 2026 (2025.09-LTS upgrade)
- **Security Score:** 100%
- **Customer Pulse:** Good
- **Team Health:** Good

**Sprint Metrics:**
| Sprint | Velocity | Volatility | Defects (Fixed/Raised) | Status |
|--------|----------|-----------|----------------------|--------|
| 41 | 92.5 | 16% | 34/37 | In Progress |
| 42 | 52 | 4% | 19/22 | Stable |
| 43 | 75.5 | 3% | 29/36 | High Quality |

**Key Quality Metrics:**
- Defect Escape Rate: 10.37%
- Web Automation: 92% (87% pass rate)
- iOS Automation: 82% (75% pass rate, 30% improvement)
- Android Automation: 89% (81% pass rate)
- AI Adoption: 100%

**Remediation Actions:**
- Increase BA capacity for ticket reviews
- Focus on automation stability for upgrade
- QA/QRE capacity planning for 3-month surge

---

## Key Findings

### Strengths
1. **Security:** All projects maintain 100% security score
2. **API Tracking:** 6/7 hubs have strong API tracker adoption (50-100%)
3. **AI Adoption:** Both EAB projects show 100% AI tool adoption (Cursor, GitHub Copilot, Gems)
4. **Development Quality:** Most hubs achieving 74-86% development quality scores
5. **Automation:** EAB projects achieving 82-92% test automation coverage

### Areas of Concern
1. **BNCR (LATAM):** RED status project with declining metrics (DER: -1)
2. **API Tracker Gap:** ANZ hub shows 0% API tracker installation
3. **High DER:** Europe hub showing 28% DER (target: <15%)
4. **QF Scope:** Asia hub only 50% QF scope coverage vs. 100% target
5. **Volatility:** EAB Business Banking showing high volatility (68% in Sprint 29)

### Recommendations
1. Investigate and support BNCR project stabilization (Red status)
2. Implement API Tracker in ANZ region
3. Launch DER reduction initiative in Europe
4. Scale QF scope implementation in Asia
5. Continue AI-driven optimization initiatives in all projects

---

## Metric Definitions

**Defect Escape Rate (DER):** Percentage of defects found by customers vs. total defects identified (Target: <15%)

**Quality Metrics Score:** Composite score of multiple quality indicators (0.0-1.0 scale)

**API Availability:** Uptime and performance of required APIs across test, staging, and dev environments

**Sprint Velocity:** Story points or tasks completed during a sprint

**Automation Rate:** Percentage of test cases that are automated (Target: >80%)

**Volatility:** Scope changes as percentage of total requirements

**AI Adoption Rate:** Percentage of team members actively using AI tools

---

## Data Structure

The extracted data is provided in JSON format with the following hierarchy:

```
{
  "report_date": "2026-08-04",
  "report_period": "July 23, 2026",
  "hubs": {
    "[HUB_NAME]": {
      "hub_name": "...",
      "region": "...",
      "summary_metrics": {...},
      "projects": [
        {
          "project_id": "...",
          "project_name": "...",
          "quality_metrics_score": ...,
          "der_score": ...,
          "api_availability": ...,
          "overall_status": "Green|Amber|Red",
          ...
        }
      ]
    }
  }
}
```

This structure allows for easy integration into dashboard systems, reporting tools, and analytics platforms.
