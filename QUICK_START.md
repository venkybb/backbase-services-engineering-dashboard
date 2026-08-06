# Quality Dashboard - Quick Start Guide

Get your Backbase Quality Framework dashboard live in 10 minutes.

---

## Step 1: Set Up Your Data (2 min)

### Option A: Use Sample Data (Fastest)
1. Open the included `sample-data-import.json` file
2. Copy the data structure
3. Go to Google Sheets (sheets.google.com)
4. Create a new spreadsheet called "Backbase Quality Metrics"
5. Create tabs for each sheet name (copy from JSON: Defect_Escape_Rate, Quality_Gates, etc.)
6. Paste the sample data into each tab

### Option B: Connect Existing Data
1. If you already have data in Looker Studio or Google Sheets, export it
2. Format it to match the structure in INTEGRATION_GUIDE.md
3. Import into your new Google Sheets workbook

---

## Step 2: Deploy the Dashboard (3 min)

### Option A: Use in React Project
1. Copy `quality-dashboard.jsx` into your React project's components folder
2. Install dependencies (if not already installed):
   ```bash
   npm install recharts lucide-react
   ```
3. Import and use the component:
   ```jsx
   import QualityDashboard from './components/quality-dashboard';
   
   export default function App() {
     return <QualityDashboard />;
   }
   ```
4. Run your app: `npm start`

### Option B: Deploy as Standalone App
1. Create a new React app:
   ```bash
   npx create-react-app quality-dashboard
   cd quality-dashboard
   npm install recharts lucide-react
   ```
2. Replace `src/App.jsx` with the dashboard component
3. Deploy to Vercel:
   ```bash
   npm install -g vercel
   vercel
   ```
   (Follow the prompts, takes 1 minute)

### Option C: Use in Next.js
1. Copy the component into `app/components/quality-dashboard.jsx`
2. Create `app/page.jsx`:
   ```jsx
   'use client';
   import QualityDashboard from './components/quality-dashboard';
   
   export default function Home() {
     return <QualityDashboard />;
   }
   ```

---

## Step 3: Connect Live Data (5 min)

### Quick Connection with Google Sheets API

1. **Get your Sheet ID:**
   - Open your Google Sheet
   - Copy the ID from the URL: `docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

2. **Get an API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable "Google Sheets API"
   - Go to Credentials → Create API Key
   - Copy the key

3. **Update the Dashboard:**
   Add this to your component (after imports):
   ```jsx
   const SHEET_ID = 'YOUR_SHEET_ID_HERE';
   const API_KEY = 'YOUR_API_KEY_HERE';

   async function fetchMetrics() {
     const response = await fetch(
       `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Defect_Escape_Rate!A:E?key=${API_KEY}`
     );
     const data = await response.json();
     return data.values.slice(1).map(row => ({
       month: row[1],
       rate: parseFloat(row[2])
     }));
   }

   useEffect(() => {
     fetchMetrics().then(data => setDefectEscapeData(data));
   }, []);
   ```

4. **Test it:**
   - Refresh your dashboard
   - You should see your live data from Google Sheets

---

## Step 4: Customize (Optional)

### Change Colors
In the component, update these hex values:
```jsx
color="#E74C3C"  // Red - change to your brand color
color="#27AE60"  // Green
color="#0F3E5C"  // Blue
```

### Add More Metrics
1. Create a new sheet in Google Sheets
2. Add a new section in the dashboard:
   ```jsx
   <MetricCard
     label="Your Metric Name"
     value="123"
     unit="%"
     color="#YOUR_COLOR"
     icon={YourIcon}
   />
   ```

### Change Chart Appearance
Edit the chart properties:
```jsx
<LineChart data={yourData}>
  <Tooltip formatter={(value) => `${value}%`} />
  <Line stroke="#YOUR_COLOR" strokeWidth={3} />
</LineChart>
```

---

## Step 5: Share & Monitor (Continuous)

### Share the Dashboard
- **If deployed to Vercel:** Share the public URL
- **If in React app:** Share the app URL or build it for production

### Keep Data Fresh
- **Automatic:** Set up a daily refresh in Google Sheets automation
- **Manual:** Update your Google Sheets when new data is available

### Monitor Dashboard Health
- Check data updates daily
- Add more data points as your projects progress
- Refine metrics based on team feedback

---

## Troubleshooting

### "No data showing in charts"
- [ ] Verify Google Sheet ID is correct
- [ ] Check API key is valid
- [ ] Make sure your sheet tab names match exactly
- [ ] Check browser console for errors (F12)

### "Charts look wrong"
- [ ] Verify data format matches the template
- [ ] Check that numeric columns have numbers (not text)
- [ ] Ensure date format is YYYY-MM-DD

### "API Key error"
- [ ] Go to Google Cloud Console
- [ ] Verify "Google Sheets API" is enabled
- [ ] Create a new API key if needed
- [ ] Check key has no typos

### "Component not rendering"
- [ ] Install all dependencies: `npm install recharts lucide-react`
- [ ] Check React version is 16.8+ (need hooks)
- [ ] Verify no JavaScript errors in console

---

## What's Included

✅ **Dashboard Component** (`quality-dashboard.jsx`)
   - 7 key metrics with trend indicators
   - 6 interactive charts (area, bar, line)
   - Responsive design (mobile & desktop)
   - Professional color scheme

✅ **Integration Guide** (`INTEGRATION_GUIDE.md`)
   - Complete data structure documentation
   - API integration examples
   - Setup instructions

✅ **Sample Data** (`sample-data-import.json`)
   - Pre-formatted data for all 6 sheets
   - Ready to copy-paste into Google Sheets

✅ **Quick Start** (this file)
   - 10-minute setup walkthrough
   - Troubleshooting tips

---

## Next Steps

1. ✅ Complete Steps 1-3 above
2. 📊 Open your dashboard and verify data displays
3. 🎨 Customize colors/branding if needed
4. 📤 Share with your team
5. 📈 Start collecting and monitoring metrics

---

## Support Resources

- **React Docs:** https://react.dev
- **Recharts Documentation:** https://recharts.org
- **Google Sheets API:** https://developers.google.com/sheets/api
- **Tailwind CSS:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev

---

## Example Sheet Structure

Here's what your Google Sheets should look like:

```
Backbase Quality Metrics (Google Sheet)
├── Defect_Escape_Rate (Tab 1)
│   ├── Date | Month | Rate (%) | Target (%) | Status
│   └── [data rows]
├── Quality_Gates (Tab 2)
│   ├── Gate_Name | Passed | Failed | Total | Pass_Rate (%) | Date
│   └── [data rows]
├── Sprint_Velocity (Tab 3)
├── Adoption_Rates (Tab 4)
├── API_Availability (Tab 5)
└── Correction_Rates (Tab 6)
```

---

## Dashboard Preview

Once connected, your dashboard displays:

- **Top Row:** 4 key metric cards with trends
- **Row 2:** Defect escape rate trend + quality gates performance
- **Row 3:** Sprint velocity + adoption rates
- **Row 4:** API availability + correction rates by severity

All charts are interactive (hover for details) and update with your data.

---

**Ready?** Start with Step 1 above and you'll have a live dashboard in 10 minutes!

Questions? Check INTEGRATION_GUIDE.md for detailed explanations or the Troubleshooting section above.
