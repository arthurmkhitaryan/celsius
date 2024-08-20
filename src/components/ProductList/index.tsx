import Image from 'next/image';
import ImageHeating from '@/public/images/product/product_img.png';
import ImageLayerIcon from '@/public/images/product/layer.png';
import ImageArrow from '@/public/images/product/arrow.png';
import React from 'react';
import './styles.scss';

const ProductList = () => (
  <div className="products_block">
    <div className="product_block">
      <div className="product_img">
        <Image
          src={ImageHeating}
          alt={'heating'}
          width={100}
          height={100}
        />
      </div>
      <div className="product_info">
        <div className="product_icon">
          <Image
            src={ImageLayerIcon}
            alt={'heating'}
            width={100}
            height={100}
          />
        </div>
        <div className="product_title">Heating & Cooling</div>
        <div className="view_more_btn">
          View More
          <Image
            src={ImageArrow}
            alt=''
            title=''
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
    <div className="product_block">
      <div className="product_img">
        <Image
          src={ImageHeating}
          alt={'hvac'}
          width={100}
          height={100}
        />
      </div>
      <div className="product_info">
        <div className="product_icon">
          <Image
            src={ImageLayerIcon}
            alt={'hvac'}
            width={100}
            height={100}
          />
        </div>
        <div className="product_title">HVAC</div>
        <div className="view_more_btn">
          View More
          <Image
            src={ImageArrow}
            alt=''
            title=''
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
    <div className="product_block">
      <div className="product_img">
        <Image
          src={ImageHeating}
          alt={'heating'}
          width={100}
          height={100}
        />
      </div>
      <div className="product_info">
        <div className="product_icon">
          <Image
            src={ImageLayerIcon}
            alt={'heating'}
            width={100}
            height={100}
          />
        </div>
        <div className="product_title">Ventilation</div>
        <div className="view_more_btn">
          View More
          <Image
            src={ImageArrow}
            alt=''
            title=''
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  </div>
)

export default ProductList;
