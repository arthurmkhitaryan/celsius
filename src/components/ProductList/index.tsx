import Image from 'next/image';
import ImageHvac from '@/public/images/home/services/icons/01.png';
import ImageHvac2 from '@/public/images/home/services/icons/02.png';
import ImageVentilation from '@/public/images/home/services/icons/03.png';
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import ImageArrow from '@/public/images/product/arrow.png';
import React from 'react';
import './styles.scss';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const products = [
  {
    id: 1,
    imgAlt: 'heating',
    iconAlt: 'heating',
    mainImage: ImageHvac,
    img: CoolingIcon,
    link: '/category/1',
  },
  {
    id: 2,
    imgAlt: 'hvac',
    iconAlt: 'hvac',
    mainImage: ImageHvac2,
    img: HvacIcon,
    link: '/category/2',
  },
  {
    id: 3,
    imgAlt: 'ventilation',
    iconAlt: 'ventilation',
    mainImage: ImageVentilation,
    img: VentilationIcon,
    link: '/category/3',
  },
];

const ProductList = () => {
  const { locale } = useParams();
  const t = useTranslations('Newsroom');
  const router = useRouter();
  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const handleClickViewMore = (link: string) => {
    router.push(link);
  };

  return (
    <div className="products_block">
      {products.map((product) => (
        <div className="product_blockss" key={product.id}>
          {isTablet && (
            <div className="product_info">
              <div className="product_icon">
                <Image
                  src={product.img}
                  alt={product.iconAlt}
                  width={100}
                  height={100}
                />
              </div>
              <div className="product_title">{t(`${product.id}`)}</div>
            </div>
          )}
          <div className="product_img">
            <Image
              src={product.mainImage}
              alt={product.imgAlt}
              width={100}
              height={100}
            />
          </div>
          <div className="product_info" style={locale === 'ru' ? {  marginLeft: "-35px" } : {}}>
            {!isTablet && (
              <>
                <div className="product_icon">
                  <Image
                    src={product.img}
                    alt={product.iconAlt}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product_title">{t(`${product.id}`)}</div>
              </>
            )}
            <button
              className="view_more_btn"
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => handleClickViewMore(product.link)}
            >
              {t('view_more')}
              <Image src={ImageArrow} alt="" title="" width={10} height={10} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
