import React from 'react';
import { useTranslation } from 'react-i18next';
import { DivideIcon as LucideIcon } from 'lucide-react';

const colorClasses = {
  blue: {
    bg: 'bg-primary',
    text: 'text-primary',
    lightBg: 'bg-primary/20',
  },
  green: {
    bg: 'bg-secondary',
    text: 'text-secondary',
    lightBg: 'bg-secondary/20',
  },
  yellow: {
    bg: 'bg-accent',
    text: 'text-accent',
    lightBg: 'bg-accent/20',
  },
  red: {
    bg: 'bg-danger',
    text: 'text-danger',
    lightBg: 'bg-danger/20',
  },
};

export default function StatsCard({ title, value, change, changeType, icon: Icon, color }) {
  const { t } = useTranslation();
  const classes = colorClasses[color];

  return (
    <div className="bg-card rounded-xl shadow-light border border-border p-6 hover:shadow-medium hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-lightText mb-1">{t(title)}</p>
          <p className="text-3xl font-bold text-text mb-2">{value}</p>
          <div className="flex items-center">
            <span
              className={`text-sm font-bold px-2 py-1 rounded-full ${
                changeType === 'increase'
                  ? 'text-secondary bg-secondary/20'
                  : changeType === 'decrease'
                  ? 'text-danger bg-danger/20'
                  : 'text-lightText bg-gray-100'
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-lightText ml-2 font-medium">{t('fromLastMonth')}</span>
          </div>
        </div>
        <div className={`p-4 rounded-xl ${classes.lightBg} shadow-light group-hover:shadow-medium group-hover:scale-110 transition-all duration-300`}>
          <Icon className={`w-7 h-7 ${classes.text} drop-shadow-sm`} />
        </div>
      </div>
    </div>
  );
}
