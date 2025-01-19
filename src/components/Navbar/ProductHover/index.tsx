'use client';

import Image from 'next/image';
import * as S from './ProductHover.styled';
import { useGetAllCategoriesQuery } from '@/features/categories';
import { useParams } from 'next/navigation';

const ProductHover = () => {
  const { locale } = useParams();
  const { data } = useGetAllCategoriesQuery({ locale: locale.toString() });
  console.log({ data });
  return (
    <S.HoverComponent>
      <S.HoverContent>
        {data?.map((category) => (
          <S.HoverContainer>
            <S.ContentHeader href={`/category/${category.slug}`}>
              <Image
                src={category.icon}
                width={34}
                height={30}
                alt="Arrow wind"
              />
              <h4>{category.name}</h4>
            </S.ContentHeader>
            <S.ContentBody>
              {category.subCategories.map((subCategory) => (
                <S.ContentInfo
                  href={`/products/?subCategory=${subCategory.id}`}
                >
                  {subCategory.name}
                </S.ContentInfo>
              ))}
            </S.ContentBody>
          </S.HoverContainer>
        ))}
      </S.HoverContent>
    </S.HoverComponent>
  );
};

export default ProductHover;
