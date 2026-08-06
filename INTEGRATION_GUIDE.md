# Quality Framework Dashboard - Integration Guide

## Overview
This dashboard visualizes Backbase Quality Framework metrics from Google Sheets and Looker Studio data sources. Below is the data structure and integration instructions.

---

## 1. Google Sheets Data Structure

Create the following sheets in your Google Sheets workbook:

### Sheet 1: "Defect_Escape_Rate"
Track monthly defect escape rate trends.

| Date | Month | Rate (%) | Target (%) | Status |
|------|-------|----------|-----------|--------|
| 2024-04-30 | Apr | 8.5 | 5.0 | Red |
| 2024-05-31 | May | 7.2 | 5.0 | Yellow |
| 2024-06-30 | Jun | 6.8 | 5.0 | Yellow |
| 2024-07-31 | Jul | 5.9 | 5.0 | Yellow |
| 2024-08-31 | Aug | 4.2 | 5.0 | Green |

**Columns needed:**
- Date (YYYY-MM-DD)
- Month (text)
- Rate (%) (numeric)
- Target (%) (numeric)
- Status (Red/Yellow/Green)

---

### Sheet 2: "Quality_Gates"
Track pass/fail rates for each quality gate stage.

| Gate_Name | Passed | Failed | Total | Pass_Rate (%) | Date |
|-----------|--------|--------|-------|--------------|------|
| Requirements | 94 | 6 | 100 | 94 | 2024-08-31 |
| Design Review | 89 | 11 | 100 | 89 | 2024-08-31 |
| Dev Complete | 92 | 8 | 100 | 92 | 2024-08-31 |
| QA Sign-off | 87 | 13 | 100 | 87 | 2024-08-31 |
| Deployment | 96 | 4 | 100 | 96 | 2024-08-31 |

**Columns needed:**
- Gate_Name (text)
- Passed (numeric)
- Failed (numeric)
- Total (numeric)
- Pass_Rate (%) (formula: =Passed/Total*100)
- Date (YYYY-MM-DD)

---

### Sheet 3: "Sprint_Velocity"
Track velocity across sprints with planned vs. completed work.

| Sprint | Planned (pts) | Completed (pts) | Corrected (pts) | Velocity (%) | Date |
|--------|--------------|-----------------|-----------------|--------------|------|
| S1 | 45 | 42 | 3 | 93.3 | 2024-08-16 |
| S2 | 50 | 48 | 2 | 96.0 | 2024-08-30 |
| S3 | 48 | 46 | 2 | 95.8 | 2024-09-13 |
| S4 | 52 | 51 | 1 | 98.1 | 2024-09-27 |

**Columns needed:**
- Sprint (text: S1, S2, etc.)
- Planned (numeric)
- Completed (numeric)
- Corrected (numeric)
- Velocity (%) (formula: =Completed/Planned*100)
- Date (YYYY-MM-DD)

---

### Sheet 4: "Adoption_Rates"
Track product, AI, and API adoption percentages.

| Metric | Value (%) | Date | Target (%) | Trend |
|--------|-----------|------|-----------|-------|
| Product Adoption | 78 | 2024-08-31 | 80 | ↑ |
| AI Adoption | 52 | 2024-08-31 | 60 | ↑ |
| API Adoption | 91 | 2024-08-31 | 85 | ↑ |

**Columns needed:**
- Metric (text)
- Value (%) (numeric)
- Date (YYYY-MM-DD)
- Target (%) (numeric)
- Trend (↑/↓/→)

---

### Sheet 5: "API_Availability"
Track weekly API uptime.

| Week | Uptime (%) | Date | Incidents | Target (%) |
|------|-----------|------|-----------|-----------|
| W1 | 99.80 | 2024-08-31 | 0 | 99.9 |
| W2 | 99.90 | 2024-09-07 | 0 | 99.9 |
| W3 | 99.70 | 2024-09-14 | 1 | 99.9 |
| W4 | 99.95 | 2024-09-21 | 0 | 99.9 |

**Columns needed:**
- Week (text: W1, W2, etc.)
- Uptime (%) (numeric)
- Date (YYYY-MM-DD)
- Incidents (numeric)
- Target (%) (numeric)

---

### Sheet 6: "Correction_Rates"
Track issues found by severity level.

| Week | Critical | Major | Minor | Total | Date |
|------|----------|-------|-------|-------|------|
| W1 | 2 | 5 | 12 | 19 | 2024-08-31 |
| W2 | 1 | 3 | 8 | 12 | 2024-09-07 |
| W3 | 0 | 4 | 10 | 14 | 2024-09-14 |
| W4 | 1 | 2 | 6 | 9 | 2024-09-21 |

**Columns needed:**
- Week (text)
- Critical (numeric)
- Major (numeric)
- Minor (numeric)
- Total (numeric) (formula: =Critical+Major+Minor)
- Date (YYYY-MM-DD)

---

## 2. Integration Methods

### Option A: Google Sheets API (Recommended)
For live data updates from Google Sheets:

1. **Set up the sheet:**
   - Create a Google Sheet with the structure above
   - Share it (get the spreadsheet ID from the URL)
   - Enable Google Sheets API in Google Cloud Console

2. **Modify the React component:**
   ```javascript
   const fetchSheetData = async (sheetId, rangeName) => {
     const response = await fetch(
       `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rangeName}?key=YOUR_API_KEY`
     );
     return response.json();
   };
   ```

3. **Replace sample data:**
   Update the component to call `fetchSheetData()` on mount

### Option B: Looker Studio Connector
For Looker Studio data:

1. **Create a Looker Studio dashboard** connecting to your Google Sheets
2. **Export metrics** using Looker Studio API or scheduled exports
3. **Feed data to the React dashboard** via your backend

### Option C: CSV Export + Manual Upload
For quick setup without APIs:

1. **Export each sheet as CSV** from Google Sheets
2. **Load CSVs into the React component** using Papa Parse
3. **Refresh manually** when needed

---

## 3. Quick Setup Steps

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet: "Backbase Quality Metrics"
3. Create tabs with the sheet names above

### Step 2: Add Sample Data
Copy-paste the data structure from Section 1 into each sheet.

### Step 3: Configure Dashboard
- Update sheet IDs and API keys in the component
- Test data fetching with a simple function call
- Deploy to your hosting platform

### Step 4: Connect Looker Studio (Optional)
1. Go to [Looker Studio](https://lookerstudio.google.com)
2. Create a new report
3. Add Google Sheets as data source
4. Point to your Quality Metrics sheet
5. Use the dashboard to visualize additional breakdowns

---

## 4. API Integration Example

```javascript
const GoogleSheetsAPI = {
  spreadsheetId: 'YOUR_SHEET_ID_HERE',
  apiKey: 'YOUR_API_KEY_HERE',

  async fetchData(sheetName, range = 'A:Z') {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}!${range}?key=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return this.parseData(data.values);
  },

  parseData(rows) {
    const headers = rows[0];
    return rows.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i];
      });
      return obj;
    });
  }
};

// Usage in component
useEffect(() => {
  GoogleSheetsAPI.fetchData('Defect_Escape_Rate').then(data => {
    setDefectEscapeData(data);
  });
}, []);
```

---

## 5. Environment Variables

Store sensitive data in `.env`:

```
REACT_APP_SHEETS_API_KEY=your_api_key_here
REACT_APP_SPREADSHEET_ID=your_sheet_id_here
REACT_APP_LOOKER_STUDIO_URL=your_dashboard_url_here
```

Reference in code:
```javascript
const apiKey = process.env.REACT_APP_SHEETS_API_KEY;
const sheetId = process.env.REACT_APP_SPREADSHEET_ID;
```

---

## 6. Dashboard Features

✅ **Real-time metrics** from multiple data sources
✅ **Period selector** (1m, 3m, 6m, YTD)
✅ **Color-coded status** (Green/Yellow/Red)
✅ **7 key metrics** visualized with charts
✅ **Responsive design** (mobile, tablet, desktop)
✅ **Professional styling** with Tailwind CSS
✅ **Trend indicators** showing improvement/decline

---

## 7. Customization Options

### Change color scheme:
Update the color values in the component:
- Primary: `#0F3E5C` (deep blue)
- Secondary: `#00A8A8` (teal)
- Success: `#27AE60` (green)
- Warning: `#F39C12` (orange)
- Danger: `#E74C3C` (red)

### Add more metrics:
1. Create a new sheet in Google Sheets
2. Add a new `MetricCard` or chart section
3. Fetch and bind data to the component

### Enable filtering:
Add filters by project, team, or time period by expanding the period selector logic.

---

## 8. Support & Resources

- **Google Sheets API Docs:** https://developers.google.com/sheets/api
- **Looker Studio Docs:** https://support.google.com/looker-studio
- **Recharts Documentation:** https://recharts.org/
- **Tailwind CSS:** https://tailwindcss.com/

---

**Dashboard created:** 2024-08-31
**Last updated:** 2024-08-31
**Version:** 1.0
