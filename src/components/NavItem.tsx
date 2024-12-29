import React from 'react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 p-3 w-full rounded-lg transition-colors ${
      isActive ? 'bg-gray-700' : 'hover:bg-gray-700/50'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);