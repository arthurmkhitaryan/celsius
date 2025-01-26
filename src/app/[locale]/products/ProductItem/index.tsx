import React from 'react';
import './styles.scss';
import { ChevronRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface IProductItemProps {
  product: any;
}

const renderProductDesc = (desc: any[]) => {
  return desc.map((item, index) => {
    return (
      <div key={index} className="card_desc_item">
        <ChevronRight size={12} color="#1F94D2" />
        <p>{item.title}</p>
      </div>
    );
  });
};

const ProductItem = ({ product }: IProductItemProps) => {
  const router = useRouter();
  const { locale } = useParams();

  const handleRedirect = (id: number): void => {
    router.push(`/${locale}/products/${id}`);
  };

  return (
    <div key={product.id} className="product_card">
      <div className="card_image">
        {' '}
        <img
          src={product.images[0]}
          alt={product.name}
          width={100}
          height={100}
        />
      </div>
      <div className="product_card_info">
        <div className="card_title">{product.name}</div>
        <div className="card_param">{product.description}</div>
        <div className="card_size">{product.liter}L</div>
        <div className="card_desc">
          {renderProductDesc(product.fullSpecification.general)}
        </div>
      </div>
      <div className="card_price">
        {product.price} <span>֏</span>
      </div>
      <div
        className="add_to_cart_btn"
        onClick={() => handleRedirect(product.slug)}
      >
        BUY IT NOW
      </div>
    </div>
  );
};

export default ProductItem;
