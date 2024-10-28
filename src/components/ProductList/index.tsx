import Image from 'next/image';
import ImageHeating from '@/public/images/product/product_img.png';
import ImageHvac from '@/public/images/product/product_img_2.png';
import ImageVentilation from '@/public/images/product/product_img_3.png';
import CoolingIcon from '@/public/images/home/services/icons/cooling.svg';
import HvacIcon from '@/public/images/home/services/icons/hvac.svg';
import VentilationIcon from '@/public/images/home/services/icons/ventilation.svg';
import ImageArrow from '@/public/images/product/arrow.png';
import React from 'react';
import './styles.scss';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    title: 'Heating & Cooling',
    imgAlt: 'heating',
    iconAlt: 'heating',
    mainImage: ImageHeating,
    img: CoolingIcon,
    link: '/category/1'
  },
  {
    id: 2,
    title: 'HVAC',
    imgAlt: 'hvac',
    iconAlt: 'hvac',
    mainImage: ImageHvac,
    img: HvacIcon,
    link: '/category/2'
  },
  {
    id: 3,
    title: 'Ventilation',
    imgAlt: 'ventilation',
    iconAlt: 'ventilation',
    mainImage: ImageVentilation,
    img: VentilationIcon,
    link: '/category/3'
  },
];

const ProductList = () => {
  const router = useRouter()
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  
  const handleClickViewMore = (link: string) => {
    router.push(link)
  }

  return (
    <div className="products_block">
      {products.map((product) => (
        <div className="product_block" key={product.id}>
          {isTablet && <div className="product_info">
            <div className="product_icon">
              <Image
                src={product.img}
                alt={product.iconAlt}
                width={100}
                height={100}
              />
            </div>
            <div className="product_title">{product.title}</div>
          </div>}
          <div className="product_img">
            <Image
              src={product.mainImage}
              alt={product.imgAlt}
              width={100}
              height={100}
            />
          </div>
          <div className="product_info">
            {!isTablet && 
            <>
            <div className="product_icon">
              <Image
                src={product.img}
                alt={product.iconAlt}
                width={100}
                height={100}
              />
            </div>
            <div className="product_title">{product.title}</div>
            </>}
            <button className="view_more_btn" onClick={() => handleClickViewMore(product.link)}>
              View More
              <Image
                src={ImageArrow}
                alt=""
                title=""
                width={10}
                height={10}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
