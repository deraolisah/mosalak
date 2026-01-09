import React from 'react';

const BadgeFilter = ({ selectedBadges, onBadgeChange }) => {
  const badges = [
    { id: 'all', label: 'All', color: 'bg-gray-100 text-gray-800' },
    { id: 'diamond', label: 'Diamond', color: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' },
    { id: 'platinum', label: 'PLATINUM', color: 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' },
    { id: 'gold', label: 'Gold', color: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' },
    { id: 'silver', label: 'Silver', color: 'bg-gradient-to-r from-gray-300 to-gray-400 text-white' },
    { id: 'basic', label: 'Basic', color: 'bg-gradient-to-r from-green-400 to-green-600 text-white' }
  ];

  const handleBadgeClick = (badgeId) => {
    if (badgeId === 'all') {
      onBadgeChange(['all']);
    } else {
      const currentBadges = selectedBadges.includes('all') 
        ? [badgeId] 
        : selectedBadges.includes(badgeId)
          ? selectedBadges.filter(id => id !== badgeId)
          : [...selectedBadges, badgeId];
      
      // Remove 'all' if other badges are selected
      const newBadges = currentBadges.filter(id => id !== 'all');
      onBadgeChange(newBadges.length > 0 ? newBadges : ['all']);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">BADGES</h3>
      <div className="flex flex-wrap gap-2">
        {badges.map(badge => (
          <button
            key={badge.id}
            onClick={() => handleBadgeClick(badge.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              selectedBadges.includes(badge.id)
                ? badge.color + ' ring-2 ring-offset-1 ring-primary/50'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {badge.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BadgeFilter;