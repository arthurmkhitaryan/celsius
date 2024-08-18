import React from 'react';
import Image from 'next/image';
import Cond from '@/public/images/product/cond.png';
import ImageHeating from '@/public/images/product/product_img.png';
import ImageLayerIcon from '@/public/images/product/layer.png';
import ImageArrow from '@/public/images/product/arrow.png';
import '../../../components/styles/main.scss';
import './page.scss';
import Filter from '../../../components/Products/Filter';
import Newsroom from '@/components/Newsroom';
import { ChevronRight } from 'lucide-react';
import Achievements from '@/components/Achievements';

const productMockList = [
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000',
    id: '1',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000',
    id: '2',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000',
    id: '3',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000',
    id: '4',
  },
];

const Products = () => {
  const renderProductDesc = (desc: []) => {
    return desc.map((item, index) => {
      return (
        <div key={index} className="card_desc_item">
          <ChevronRight size={12} color='#0044CC'/>{item}
        </div>
      );
    });
  };

  const handleRedirect = (id: string) => {
    console.log(id)
  }

  const renderProducts = () => {
    return productMockList.map((product, index) => {
      return (
        <div key={index} className="product_card">
          <div className="card_image">
            {' '}
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
          </div>
          <div className="product_card_info">
            <div className="card_title" onClick={handleRedirect(product.id)}>{product.name}</div>
            <div className="card_param">{product.param}</div>
            <div className="card_size">{product.size}</div>
            <div className="card_desc">{renderProductDesc(product.about)}</div>
            <div className="card_price">{product.price}</div>
          </div>
          <div className="add_to_cart_btn">BUY IT NOW</div>
        </div>
      );
    });
  };

  return (
    <div className="product_page">
        <div className="inner_container">
            <div className="producs_block">
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
            </div>
            <div className="product_sell_container">
                <div className="filters_block">
                    <Filter />
                </div>
                <div className="product_block">{renderProducts()}</div>
            </div>
            <Achievements />
            <Newsroom />
      </div>
    </div>
  );
};

export default Products;
