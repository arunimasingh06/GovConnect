import React from 'react';

const departments = [
  { name: 'Human Resources', progress: 85, color: 'bg-primary' },
  { name: 'Information Technology', progress: 92, color: 'bg-secondary' },
  { name: 'Finance', progress: 78, color: 'bg-accent' },
  { name: 'Operations', progress: 95, color: 'bg-info' },
  { name: 'Marketing', progress: 70, color: 'bg-warning' },
];

export default function ProgressChart() {
  return (
    <div className="bg-card rounded-xl shadow-light border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text">Department Performance</h3>
        <select className="text-sm border border-border rounded-md px-3 py-1 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-text shadow-light">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Quarter</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {departments.map((dept) => (
          <div key={dept.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-lightText">{dept.name}</span>
              <span className="text-sm font-semibold text-text">{dept.progress}%</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${dept.color}`}
                style={{ width: `${dept.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}