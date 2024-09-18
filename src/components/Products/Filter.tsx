"use client";

import React, { useState } from 'react';
import './Products.scss'
import { ChevronDown } from 'lucide-react';

const mockData = [
  {
    category: 'BRAND',
    types: ['Midea', 'Carrier']
  },
  {
    category: 'HORSEPOWER',
    types: [
      '12K (1.5HP)',
      '18K (2.25HP)',
      '24K (3HP)',
      '30K (4HP)',
      '36K (4.5HP)',
      '3 ~ 30 Ton',
      '8 to 45 Kw',
      '800 ~ 2000 cfm',
      '8 to 50'
    ]
  },
  {
    category: 'PLACEMENT',
    types: ['Indoor', 'Outdoor']
  },
  {
    category: 'CATEGORY',
    types: ['Residential', 'Commercial', 'Industrial']
  },
];

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: any }>(
      mockData.reduce((acc, { category }) => ({ ...acc, [category]: true }), {})
    );

  const [_, setSelectedTypes] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prevState) => {
      const updated = prevState.includes(type)
        ? prevState.filter((selectedType) => selectedType !== type)
        : [...prevState, type];

      onFilterChange(updated);
      return updated;
    });
  };

  return (
    <div className="filter-container">
      {mockData.map(({ category, types }) => (
        <div key={category} className="filter_block">
          <div
            className="category-header"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
            <span className={`arrow ${openCategories[category] ? 'open' : ''}`}>
                <ChevronDown />
            </span>
          </div>
          {openCategories[category] && (
            <div className="types">
              {types.map(type => (
                <div key={type} className="type">
                  <input
                    type="checkbox"
                    id={`${category}-${type}`}
                    onChange={() => handleTypeChange(type)}
                  />
                  <label htmlFor={`${category}-${type}`}>{type}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
