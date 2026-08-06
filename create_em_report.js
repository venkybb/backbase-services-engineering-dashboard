const { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, HeadingLevel, WidthType, BorderStyle, AlignmentType, PageBreak, UnorderedList, ListItem } = require('docx');
const fs = require('fs');

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      // Title
      new Paragraph({
        text: "Engineering Manager Framework Report",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        thematicBreak: false,
        spacing: { after: 100 }
      }),
      
      new Paragraph({
        text: "Comprehensive Guide to EM Reporting Tools & Dashboards",
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        style: "Subtitle"
      }),

      new Paragraph({
        text: "August 4, 2026",
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        style: "Subtitle"
      }),

      // Executive Summary
      new Paragraph({
        text: "Executive Summary",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "The Engineering Manager (EM) Framework is a comprehensive system designed to enable data-driven management of engineering teams, projects, and quality. It provides EMs with integrated dashboards and metrics to monitor team health, quality metrics, AI adoption, and project performance across multiple hubs and regions.",
        spacing: { after: 200 }
      }),

      // Framework Overview
      new Paragraph({
        text: "1. Framework Overview",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "The EM Framework consists of:",
        spacing: { after: 100 }
      }),

      new Paragraph({
        text: "Quality Framework: The foundational process for ensuring consistent quality across all development phases using the Backbase Quality Framework, which includes requirements, development practices, quality assurance, quality gates, and tracking & reporting.",
        spacing: { after: 80 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "People & Team Management: Engineering People dashboards providing visibility into team composition, skills, locations, and team health metrics.",
        spacing: { after: 80 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Project Quality Metrics: Real-time tracking of project-level quality indicators including defect escape rates, velocity, API availability, and security metrics.",
        spacing: { after: 80 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "AI Tooling & Adoption: Monitoring of AI tool usage (Cursor, GitHub Copilot) across the engineering organization.",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // Key Reporting Tools
      new Paragraph({
        text: "2. Key Reporting Tools & Dashboards",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "Engineering Dashboard - People Reports",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Comprehensive view of engineering team composition, skills, and distribution across hubs and regions.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Continuously, with monthly snapshots",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Key Metrics Tracked:",
        spacing: { after: 40 }
      }),

      new Paragraph({
        text: "Total engineer headcount by hub (Africa, ANZ, Asia, Europe, LATAM, Middle East, North America)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Internal vs. external employee ratio",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Seniority distribution by discipline (BE, QA, FE, iOS, Android, DevOps, etc.)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Geographic distribution and remote workers",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Nearshore partner allocation (Mobiquity, Levi9, Xebia, AgreeYa, etc.)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Skills matrix per engineer (Business, Banking, Commercial, etc.)",
        spacing: { after: 100 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Project Quality Metrics Dashboard",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Track quality indicators across active projects with security and compliance scoring.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Sprint-based (typically 2-week sprints)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Key Metrics Tracked:",
        spacing: { after: 40 }
      }),

      new Paragraph({
        text: "Defect Escape Rate (DER) - Primary KPI for quality",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Development Quality Score",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Compliance Score",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Security Rating (using multiple tools: SAST, SCA, Trivy, IAST, etc.)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Sprint velocity and correction rates",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "API availability and tracker metrics",
        spacing: { after: 100 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Quality Metrics by Project/Sprint",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Detailed sprint-level quality tracking for project teams.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: End of each sprint",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Example Projects Tracked: EAB Banking (Retail & Commercial), NBCUniversal, Eastern Bank, BECU, and others.",
        spacing: { after: 100 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Team Health Dashboard",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Assess team well-being, collaboration, and efficiency through survey data.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Periodic surveys (typically quarterly)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Key Dimensions:",
        spacing: { after: 40 }
      }),

      new Paragraph({
        text: "Code Confidence - Codebase health and release process satisfaction",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Team Well Being - Project clarity, satisfaction, and stress levels",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Team Collaboration - Communication, documentation, meeting effectiveness",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Team Efficiency - Process efficiency, resource availability, context switching",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Team Stress Index - Overall team stress and burnout indicators",
        spacing: { after: 100 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "AI Tooling Dashboard",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Track AI tool adoption (Cursor, GitHub Copilot) and productivity impact across engineering teams.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Daily engagement tracking with monthly rollups",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Key Metrics Tracked:",
        spacing: { after: 40 }
      }),

      new Paragraph({
        text: "Engagement metrics (Engaged, Active, Inactive, Pending Cancellation, No AI)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Tool distribution (Cursor: 54.4%, No AI: 45.6%)",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Usage by discipline and region",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Code generation activity and acceptance rates",
        spacing: { after: 40 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Most used models and languages",
        spacing: { after: 100 },
        bullet: { level: 1 }
      }),

      new Paragraph({
        text: "Engineering Maturity Dashboard",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Assess overall hub maturity and capability levels.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Quarterly or semi-annually",
        spacing: { after: 100 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Skillset Matrix",
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 100, after: 80 }
      }),

      new Paragraph({
        text: "Purpose: Track skills across engineers to support resource planning and development.",
        spacing: { after: 60 }
      }),

      new Paragraph({
        text: "Updates: Maintained manually by People Managers (quarterly reviews)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Skills Tracked: Business domain expertise (Banking, Lending, Onboarding, Retail, Wealth, etc.), technical proficiencies, and tools.",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // Reporting Structure
      new Paragraph({
        text: "3. EM Reporting Structure",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "Engineering Managers use the above tools in a coordinated reporting structure:",
        spacing: { after: 100 }
      }),

      new Paragraph({
        text: "Daily: Monitor Engineering Dashboard for critical incidents, AI tool usage trends",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Sprint-based: Report on Project Quality Metrics at sprint reviews",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Monthly: Present summarized metrics to leadership",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Quarterly: Conduct Team Health surveys and maturity assessments",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Quarterly: Review and update Skillset Matrix with team development",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // Quality Framework Integration
      new Paragraph({
        text: "4. Quality Framework Integration",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "The Backbase Quality Framework (v1.3) forms the foundation of quality metrics reporting. Key components:",
        spacing: { after: 100 }
      }),

      new Paragraph({
        text: "Requirements: Input sign-off through Definition of Ready",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Development Practices: Code quality, testing standards, and peer review",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Quality Assurance: Test coverage, acceptance criteria, and quality gates",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Quality Gates: 5 key gates (Requirements, Design, Dev Complete, QA Sign-off, Deployment) with target >90% pass rate",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Tracking & Reporting: Jira-led reporting, defect tracking, and trend analysis",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // Regional Hubs
      new Paragraph({
        text: "5. Regional Hub Structure",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "EMs manage teams across 6 primary geographic hubs:",
        spacing: { after: 100 }
      }),

      // Create hub table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            height: { value: 500, rule: "auto" },
            children: [
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({ text: "Hub", bold: true })],
                shading: { fill: "D3D3D3", type: "clear" }
              }),
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({ text: "Engineers", bold: true })],
                shading: { fill: "D3D3D3", type: "clear" }
              }),
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({ text: "EMs", bold: true })],
                shading: { fill: "D3D3D3", type: "clear" }
              }),
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({ text: "Principals", bold: true })],
                shading: { fill: "D3D3D3", type: "clear" }
              }),
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({ text: "Locations", bold: true })],
                shading: { fill: "D3D3D3", type: "clear" }
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("Africa")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("220")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("8")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("23")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("7")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("ANZ")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("27")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("1")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("4")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("5")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("Asia")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("187")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("3")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("21")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("7")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("Europe")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("60")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("3")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("4")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("7")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("LATAM")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("61")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("3")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("5")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("8")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("Middle East")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("102")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("5")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("17")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("7")] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("North America")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("141")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("6")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("25")] }),
              new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph("19")] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: "",
        spacing: { after: 200 }
      }),

      // Key Metrics & Targets
      new Paragraph({
        text: "6. Key Performance Indicators & Targets",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "Defect Escape Rate (DER): Target <5.0% (Current: 4.2% as of Aug 2026)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Quality Gates Pass Rate: Target >90% (Current: 91.6%)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "API Availability: Target >99.9% (Current: 99.85%)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Sprint Velocity: Target 50+ story points (Current: 47.25 avg)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "AI Tool Adoption: Target 60%+ engagement (Current: 38.64% engaged)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Team Health: Target scores >75/100 across all dimensions",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Security Rating: Target 90%+ (varies by project)",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // EM Responsibilities
      new Paragraph({
        text: "7. EM Key Responsibilities",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "Quality Ownership: Ensure Backbase Quality Framework is applied consistently",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Team Health Monitoring: Conduct regular surveys and address issues proactively",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "People Development: Maintain skillset matrix and support career growth",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Project Delivery: Track quality metrics and ensure on-time delivery",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "AI Adoption: Drive adoption of AI tools and measure productivity impact",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Reporting: Provide timely, accurate metrics to leadership",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Process Improvement: Continuously improve quality and efficiency based on data",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      // Conclusion
      new Paragraph({
        text: "8. Conclusion",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }),

      new Paragraph({
        text: "The EM Framework provides a comprehensive, integrated approach to engineering management through coordinated use of multiple dashboards and metrics. By leveraging the Engineering Dashboard, Project Quality Metrics, Team Health assessments, AI Tooling tracking, and the foundational Backbase Quality Framework, EMs can effectively manage teams, ensure quality delivery, and drive continuous improvement across the global engineering organization.",
        spacing: { after: 100 }
      }),

      new Paragraph({
        text: "Success with this framework requires:",
        spacing: { after: 80 }
      }),

      new Paragraph({
        text: "Regular monitoring of all dashboards (daily to monthly as appropriate)",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Active engagement with quality gates and process compliance",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Prompt response to team health and well-being concerns",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Data-driven decision making based on metrics",
        spacing: { after: 60 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "Continuous communication of results to teams and stakeholders",
        spacing: { after: 200 },
        bullet: { level: 0 }
      }),

      new Paragraph({
        text: "© 2026 Backbase. All Rights Reserved.",
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 }
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/sessions/zealous-admiring-hawking/mnt/outputs/EM_Framework_Report.docx", buffer);
  console.log("Report created successfully!");
});
