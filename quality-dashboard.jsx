import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle, Target, Zap, Users } from 'lucide-react';

export default function QualityDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('3m');

  // Sample data - replace with real Google Sheets/Looker Studio data
  const defectEscapeData = [
    { month: 'Apr', rate: 8.5 },
    { month: 'May', rate: 7.2 },
    { month: 'Jun', rate: 6.8 },
    { month: 'Jul', rate: 5.9 },
    { month: 'Aug', rate: 4.2 },
  ];

  const qualityGatesData = [
    { name: 'Requirements', passed: 94, failed: 6 },
    { name: 'Design Review', passed: 89, failed: 11 },
    { name: 'Dev Complete', passed: 92, failed: 8 },
    { name: 'QA Sign-off', passed: 87, failed: 13 },
    { name: 'Deployment', passed: 96, failed: 4 },
  ];

  const velocityData = [
    { sprint: 'S1', planned: 45, completed: 42, corrected: 3 },
    { sprint: 'S2', planned: 50, completed: 48, corrected: 2 },
    { sprint: 'S3', planned: 48, completed: 46, corrected: 2 },
    { sprint: 'S4', planned: 52, completed: 51, corrected: 1 },
  ];

  const adoptionData = [
    { category: 'Product Adoption', value: 78, color: '#00A8A8' },
    { category: 'AI Adoption', value: 52, color: '#00D9FF' },
    { category: 'API Adoption', value: 91, color: '#0F3E5C' },
  ];

  const apiAvailabilityData = [
    { date: 'W1', uptime: 99.8 },
    { date: 'W2', uptime: 99.9 },
    { date: 'W3', uptime: 99.7 },
    { date: 'W4', uptime: 99.95 },
  ];

  const correctionRatesData = [
    { week: 'W1', critical: 2, major: 5, minor: 12 },
    { week: 'W2', critical: 1, major: 3, minor: 8 },
    { week: 'W3', critical: 0, major: 4, minor: 10 },
    { week: 'W4', critical: 1, major: 2, minor: 6 },
  ];

  const MetricCard = ({ label, value, unit, trend, color, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold mt-2" style={{ color: color }}>{value}{unit}</p>
          {trend && (
            <p className="text-xs mt-2 text-green-600 flex items-center gap-1">
              <TrendingUp size={14} /> {trend}
            </p>
          )}
        </div>
        {Icon && (
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${color}15` }}>
            <Icon size={24} style={{ color }} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Quality Framework Dashboard</h1>
        <p className="text-gray-600 mt-2">Backbase Quality Metrics & Performance Tracking</p>

        {/* Period selector */}
        <div className="flex gap-2 mt-4">
          {['1m', '3m', '6m', 'YTD'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          label="Defect Escape Rate"
          value="4.2"
          unit="%"
          trend="↓ 53% from Apr"
          color="#E74C3C"
          icon={AlertCircle}
        />
        <MetricCard
          label="Quality Gates Pass Rate"
          value="91.6"
          unit="%"
          trend="↑ 2.1% from last month"
          color="#27AE60"
          icon={CheckCircle}
        />
        <MetricCard
          label="API Tracker Availability"
          value="99.85"
          unit="%"
          trend="Avg uptime this month"
          color="#0F3E5C"
          icon={Target}
        />
        <MetricCard
          label="Avg Sprint Velocity"
          value="47.25"
          unit=" pts"
          trend="↑ 4.7% improvement"
          color="#F39C12"
          icon={Zap}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Defect Escape Rate Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Defect Escape Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={defectEscapeData}>
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E74C3C" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#E74C3C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#E74C3C"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRate)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">Downward trend indicates improving quality across releases</p>
        </div>

        {/* Quality Gates Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quality Gates Pass Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={qualityGatesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis label={{ value: 'Pass Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="passed" stackId="a" fill="#27AE60" name="Passed" />
              <Bar dataKey="failed" stackId="a" fill="#E74C3C" name="Failed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Velocity & Correction Rates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sprint Velocity & Corrections</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="sprint" />
              <YAxis label={{ value: 'Story Points', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="planned" fill="#0F3E5C" name="Planned" />
              <Bar dataKey="completed" fill="#27AE60" name="Completed" />
              <Bar dataKey="corrected" fill="#F39C12" name="Needed Correction" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Adoption Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Adoption Rates</h3>
          <div className="space-y-4">
            {adoptionData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-lg font-bold" style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">Based on active users and implementation metrics</p>
        </div>
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Availability */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">API Tracker Availability</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={apiAvailabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="date" />
              <YAxis domain={[99.5, 100]} label={{ value: 'Uptime (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Line
                type="monotone"
                dataKey="uptime"
                stroke="#0F3E5C"
                strokeWidth={3}
                dot={{ fill: '#0F3E5C', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">Target: >99.9% uptime maintained</p>
        </div>

        {/* Correction Rates by Severity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Correction Rates by Severity</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={correctionRatesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="week" />
              <YAxis label={{ value: 'Issues Found', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="critical" fill="#E74C3C" name="Critical" />
              <Bar dataKey="major" fill="#F39C12" name="Major" />
              <Bar dataKey="minor" fill="#F1C40F" name="Minor" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 p-6 bg-white rounded-lg shadow-md text-center text-sm text-gray-600">
        <p>Data last updated: Today at 3:45 PM • <a href="#" className="text-blue-600 hover:underline">Configure Data Sources</a></p>
      </div>
    </div>
  );
}