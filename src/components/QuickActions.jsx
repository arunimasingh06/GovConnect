import React from 'react';
import { Plus, Upload, Download, Send, Calendar, Users } from 'lucide-react';

const actions = [
  { name: 'Add Employee', icon: Plus, color: 'bg-primary hover:bg-primary/90' },
  { name: 'Upload Document', icon: Upload, color: 'bg-secondary hover:bg-secondary/90' },
  { name: 'Generate Report', icon: Download, color: 'bg-warning hover:bg-warning/90' },
  { name: 'Send Notice', icon: Send, color: 'bg-accent hover:bg-accent/90' },
  { name: 'Schedule Meeting', icon: Calendar, color: 'bg-info hover:bg-info/90' },
  { name: 'Manage Teams', icon: Users, color: 'bg-success hover:bg-success/90' },
];

export default function QuickActions() {
  return (
    <div className="bg-card rounded-xl shadow-light border border-border p-6 hover:shadow-medium transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-2 h-6 bg-gradient-to-b from-primary to-primary/80 rounded-full"></div>
        <h3 className="text-lg font-bold text-text">Quick Actions</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            className={`group flex items-center space-x-3 p-4 rounded-xl text-white transition-all duration-200 transform hover:scale-105 shadow-medium hover:shadow-lg ${action.color}`}
          >
            <action.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-semibold tracking-wide">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}