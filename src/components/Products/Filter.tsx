'use client';

import React, { useEffect, useMemo, useState } from 'react';
import './Products.scss';
import { ChevronDown } from 'lucide-react';
import { useGetAllCategoriesQuery } from '@/features/categories';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAppSelector } from '@/store/hooks';

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
  initialFilters?: string[];
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, initialFilters = [] }) => {
  const t = useTranslations('Shop');
  const reduxFilters = useAppSelector((state: any) => state.filters.filters);

  const mockData = [
    {
      category: t('categories.brand'),
      types: ['Midea', 'Carrier'],
      filterType: 'productType',
    },
    {
      category: t('categories.horses.name'),
      types: [...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => t(`categories.horses.items.${item}`))],
      filterType: 'productType',
    },
    {
      category: t('categories.placement.name'),
      types: [...[1, 2].map((item) => t(`categories.placement.items.${item}`))],
      filterType: 'productType',
    },
    {
      category: t('categories.area_function.name'),
      types: [...[1, 2, 3, 4].map((item) => t(`categories.area_function.items.${item}`))],
      filterType: 'productType',
    },
  ];

  const [openCategories, setOpenCategories] = useState<{ [key: string]: any }>(
    mockData.reduce((acc, { category }) => ({ ...acc, [category]: true }), {})
  );
  const { locale } = useParams();
  const searchParams = useSearchParams();

  const [selectedTypes, setSelectedTypes] = useState<{ type: string; filterType: string }[]>(
    () => {
      if (initialFilters.length === 0) return [];
      
      return initialFilters.map(filter => {
        const [type, value] = filter.split(':');
        return { type: value, filterType: type };
      });
    }
  );

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
    if (initialFilters.length === 0 && reduxFilters.length > 0) {
      const parsedFilters = reduxFilters.map((filter: string) => {
        const [filterType, type] = filter.split(':');
        return { type, filterType };
      });
      setSelectedTypes(parsedFilters);
    }
  }, [initialFilters, reduxFilters]);

  useEffect(() => {
    const categoryId = searchParams.get('category');
    const subCategoryId = searchParams.get('subCategory');

    if (categoryId && subCategoryId && data) {
      const matchedCategory = data.find((category) => category.id === +categoryId);
      const matchedSubCategory = matchedCategory?.subCategories.find(
        (subCategory) => subCategory.id === +subCategoryId
      );

      if (matchedSubCategory) {
        setSelectedTypes((prevState) => {
          const isAlreadySelected = prevState.some(
            (selected) => selected.type === matchedSubCategory.name
          );

          let updated;
          if (isAlreadySelected) {
            updated = prevState.filter(
              (selected) => selected.type !== matchedSubCategory.name
            );
          } else {
            updated = [...prevState, { type: matchedSubCategory.name, filterType: 'sub_category' }];
          }

          onFilterChange(updated.map((item) => `${item.filterType}:${item.type}`));

          return updated;
        });
      }
    }
  }, [searchParams, data]);

  useEffect(() => {
    setOpenCategories((prevState) =>
      filters
        ? filters.reduce((acc, { category }) => ({ ...acc, [category]: true }), {})
        : prevState
    );
  }, [filters]);

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleTypeChange = (type: string, filterType: string) => {
    setSelectedTypes((prev) => {
      const newTypes = [...prev];
      const existingIndex = newTypes.findIndex((t) => t.type === type);
      
      if (existingIndex !== -1) {
        newTypes.splice(existingIndex, 1);
      } else {
        newTypes.push({ type, filterType });
      }
      
      const newFilters = newTypes.map((t) => `${t.filterType}:${t.type}`);
      onFilterChange(newFilters);
      
      return newTypes;
    });
  };

  return (
    <div className="filter-container">
      {filters?.map(({ category, types, filterType }) => (
        <div key={category} className="filter_block">
          <div className="category-header" onClick={() => handleCategoryClick(category)}>
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
                    checked={selectedTypes.some((selected) => selected.type === type)}
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
