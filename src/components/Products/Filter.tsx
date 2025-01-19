'use client';

import React, { useEffect, useMemo, useState } from 'react';
import './Products.scss';
import { ChevronDown } from 'lucide-react';
import { useGetAllCategoriesQuery } from '@/features/categories';
import { useParams } from 'next/navigation';

const mockData = [
  {
    category: 'BRAND',
    types: ['Midea', 'Carrier'],
    filterType: 'productType',
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
      '8 to 50',
    ],
    filterType: 'productType',
  },
  {
    category: 'PLACEMENT',
    types: ['Indoor', 'Outdoor'],
    filterType: 'productType',
  },
  {
    category: 'AREA FUNCTION',
    types: ['Residential', 'Commercial', 'Industrial'],
    filterType: 'productType',
  },
];

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: any }>(
    mockData.reduce((acc, { category }) => ({ ...acc, [category]: true }), {}),
  );
  const { locale } = useParams();

  const [_, setSelectedTypes] = useState<
    { type: string; filterType: string }[]
  >([]);

  const { data } = useGetAllCategoriesQuery({ locale: locale.toString() });

  const filters = useMemo(() => {
    if (data) {
      const filterData = data.map((item) => {
        return {
          category: item.name,
          types: item.subCategories.map((subCategory) => subCategory.name),
          filterType: 'sub_category',
        };
      });
      const first = mockData.splice(0, 1);
      const last = mockData.splice(0, mockData.length);

      return [...first, ...filterData, ...last];
    }
  }, [data]);

  useEffect(() => {
    setOpenCategories((prevState) =>
      filters
        ? filters.reduce(
            (acc, { category }) => ({ ...acc, [category]: true }),
            {},
          )
        : prevState,
    );
  }, [filters]);

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleTypeChange = (type: string, filterType: string) => {
    setSelectedTypes((prevState) => {
      const isAlreadySelected = prevState.some(
        (selected) => selected.type === type,
      );

      let updated;
      if (isAlreadySelected) {
        updated = prevState.filter((selected) => selected.type !== type);
      } else {
        updated = [...prevState, { type, filterType }];
      }

      console.log({ updated });

      onFilterChange(updated.map((item) => `${item.filterType}:${item.type}`));
      return updated;
    });
  };

  return (
    <div className="filter-container">
      {filters?.map(({ category, types, filterType }) => (
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
              {types.map((type) => (
                <div key={type} className="type">
                  <input
                    type="checkbox"
                    id={`${category}-${type}`}
                    onChange={() => handleTypeChange(type, filterType)}
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
