'use client';

import Image from 'next/image';
import * as S from './ProductHover.styled';
import { useGetAllCategoriesQuery } from '@/features/categories';
import { useParams } from 'next/navigation';

const ProductHover = () => {
  const { locale } = useParams();
  const { data } = useGetAllCategoriesQuery({ locale: locale.toString() });
  return (
    <S.HoverComponent>
      <S.HoverContent>
        {data?.map((category) => (
          <S.HoverContainer>
            <S.ContentHeader>
              <Image
                src={category.icon}
                width={34}
                height={30}
                alt="Arrow wind"
              />
              <h4>{category.name}</h4>
            </S.ContentHeader>
            {category.products.map((product) => (
              <S.ContentInfo href={`/products/${product.slug}`}>
                {product.name}
              </S.ContentInfo>
            ))}
          </S.HoverContainer>
        ))}
      </S.HoverContent>
    </S.HoverComponent>
  );
};

export default ProductHover;
