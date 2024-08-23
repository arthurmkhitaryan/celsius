import Image from 'next/image';
import React from 'react';
import './styles.scss';
import { ChevronRight } from 'lucide-react';

interface IProductItemProps {
  product: any;
  handleRedirect: (id: string) => void;
}

const renderProductDesc = (desc: string[]) => {
  return desc.map((item, index) => {
    return (
      <div key={index} className="card_desc_item">
        <ChevronRight size={12} color='#1F94D2'/><p>{item}</p>
      </div>
    );
  });
};

const ProductItem = ({ product, handleRedirect }: IProductItemProps) => (
  <div key={product.id} className="product_card">
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
      <div className="card_title" onClick={() => handleRedirect(product.id)}>{product.name}</div>
      <div className="card_param">{product.param}</div>
      <div className="card_size">{product.size}</div>
      <div className="card_desc">{renderProductDesc(product.about)}</div>
      <div className="card_price">{product.price}</div>
    </div>
    <div className="add_to_cart_btn">BUY IT NOW</div>
  </div>
)

export default ProductItem;
