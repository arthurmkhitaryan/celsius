'use client';

import React, { useRef, useState, useEffect } from 'react';
import '../../../../components/styles/main.scss';
import './page.scss';
import { tabs } from './mock';
import MainLayout from '@/components/Layout';
import ProductItem from '@/app/[locale]/products/ProductItem';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useGetProductQuery } from '@/features/product';
import { dotingPrice } from '@/utils/doting-price';
import { useGetProductsQuery } from '@/features';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useParams, useRouter } from 'next/navigation';
import { addToCart } from '@/features/cart/cart.slice';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';

interface ProductParamProps {
  productId: string;
}

export default function Product({ params }: { params: ProductParamProps }) {
  const { locale } = useParams();
  const router = useRouter();
  const [activeThumbnail, setActiveThumbnail] = useState(1);
  const dispatch = useAppDispatch();
  const isMobile = useClientMediaQuery('(max-width: 768px)');
  const [faqOpenState, setFaqOpenState] = useState<{ [key: number]: boolean }>(
    {},
  ); // State to manage FAQ open/close

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const [count, setCount] = useState(1);

  const imageRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

  const user = useAppSelector((state) => state.auth.user) as any;

  const { data } = useGetProductQuery({
    id: params.productId,
    role: user?.role,
    locale: locale as string,
  });
  const { data: products } = useGetProductsQuery({
    limit: 3,
    excludeId: params.productId,
    locale: locale as string,
  });

  useEffect(() => {
    if (data) {
      imageRefs.current = Array(data.images.length)
        .fill(null)
        .map(() => React.createRef<HTMLDivElement>());
    }
  }, [data]);

  if (!data) return null;

  const renderTabs = () => {
    return tabs.map((tab) => {
      return (
        <button
          key={tab.id}
          onClick={() => !tab.disabled && setActiveTab(tab.id)}
          className={`tab ${tab.disabled ? 'disabled_button' : ''} ${tab.id === activeTab ? 'active_tab' : ''}`}
          disabled={tab.disabled}
        >
          {tab.title}
        </button>
      );
    });
  };

  const scrollToImage = (index: number) => {
    setActiveThumbnail(index);
    const ref = imageRefs.current[index]?.current;
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const renderMainBlockImages = () => {
    return data.images.map((item, index) => {
      return (
        <div
          key={index}
          className="scroller_image"
          ref={imageRefs.current[index]}
        >
          <img src={item} height={500} width={500} alt={item} />
        </div>
      );
    });
  };

  const renderThumbnails = () => {
    return data.images.map((item, index) => (
      <div
        key={index}
        className={`thumbnail_image ${index === activeThumbnail ? 'active_thumbnail' : ''}`}
        onClick={() => scrollToImage(index)}
      >
        <img src={item} height={80} width={80} alt={item} />
      </div>
    ));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCount(value);
    }
  };

  const toggleFaq = (id: number) => {
    setFaqOpenState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const redirectToCheckout = () => {
    if (!user) {
      router.push('/sign-up');
      return;
    }
    localStorage.setItem('paymentProduct', params.productId);
    router.push(`/${locale}/checkout`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case tabs[0].id:
        return (
          <div className="tab-content">
            <h3>General Features</h3>
            <div className="general-features">
              {data.fullSpecification.general.map((generalFeature) => {
                return <p>{generalFeature.title}</p>;
              })}
            </div>
            <h3>General Details</h3>
            <div className="general-details">
              {data.fullSpecification.details.map((generalFeature, index) => {
                return (
                  <div className="general-detail" key={index}>
                    <p className="general-detail-key">{generalFeature.key}</p>
                    <p className="general-detail-value">
                      {generalFeature.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case tabs[1].id:
        return (
          <div className="portfolio">
            {data.portfolio.map((img) => (
              <img src={img} alt="Banner" />
            ))}
          </div>
        );
      case tabs[2].id:
        return (
          <div className="faq">
            {data.faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                  <span>{faq.key}</span>
                  {faqOpenState[faq.id] ? <ChevronDown /> : <ChevronRight />}
                </div>
                {faqOpenState[faq.id] && <p>{faq.value}</p>}
              </div>
            ))}
          </div>
        );
    }
  };
  const renderProducts = () => {
    if (!products?.length) return;
    return products.map((product) => {
      return <ProductItem product={product} />;
    });
  };

  const handleAddToCard = (productId: string | number) => {
    dispatch(
      addToCart({
        id: productId,
        name: data.name,
        price: data.price,
        quantity: count,
        image: data.images[0],
      }),
    );
  };

  return (
    <div>
      <MainLayout>
        <div className="product_inner_page">
          <div className="inner_container">
            <div className="prodcut_slider_block">
              <div className="slider_images">{renderThumbnails()}</div>
              {isMobile && (
                <>
                  <button
                    className="add_to_cart_btn"
                    onClick={() => handleAddToCard(data.id)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="buy_it_now_btn"
                    onClick={redirectToCheckout}
                  >
                    Buy It Now
                  </button>
                  <div className="product_counter">
                    <button onClick={handleDecrement}>-</button>
                    <input
                      type="number"
                      value={count}
                      onChange={handleChange}
                      min="0"
                    />
                    <button onClick={handleIncrement}>+</button>
                  </div>
                </>
              )}
              <div className="main_product_images">
                {renderMainBlockImages()}
              </div>
              <div className="add_to_cart_block">
                <div className="product_title">{data.name}</div>
                <div className="product_price">
                  {dotingPrice(data.price)}
                  <span>֏</span>
                </div>
                <span className="devider"></span>
                <div className="product_info">
                  <div className="product_code">{data.code}</div>
                  <div className="product_fullName">{data.mainProductName}</div>
                  <div className="product_desc">{data.description}</div>
                  <div className="product_power">{data.params}</div>
                </div>
                <div className="product_activity">
                  {(data.generalParams || []).map((param) => {
                    return (
                      <div className="product_active">
                        <img
                          src={param.image}
                          alt="param image"
                          width={50}
                          height={50}
                        />
                        <div className="activity_name">{param.title}</div>
                      </div>
                    );
                  })}
                </div>
                {!isMobile && (
                  <>
                    <div className="product_counter">
                      <button onClick={handleDecrement}>-</button>
                      <input
                        type="number"
                        value={count}
                        onChange={handleChange}
                        min="0"
                      />
                      <button onClick={handleIncrement}>+</button>
                    </div>
                    <button
                      className="add_to_cart_btn"
                      onClick={() => handleAddToCard(data.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="buy_it_now_btn"
                      onClick={redirectToCheckout}
                    >
                      Buy It Now
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="product_tabs_block">
              <div className="tabs">{renderTabs()}</div>
              <div className="tab_content">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </MainLayout>
      <img className="banner-image" src={data.banner} alt="Banner" />
      <div className="productssss_block">
        <h3>You May Also Like</h3>
        <div className="product_block">{renderProducts()}</div>
      </div>
    </div>
  );
}
