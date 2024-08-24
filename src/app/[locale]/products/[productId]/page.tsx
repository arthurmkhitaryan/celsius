"use client"

import Image from "next/image";
import React, { useRef, useState } from "react";
import ArrowWind from '@/public/images/product/arrow_wind.png';
import Banner from '@/public/images/product/banner.png';
import '../../../../components/styles/main.scss';
import './page.scss';
import { faqData, generalDetails, generalFeatures, productMockList, slidersMockData, tabs } from './mock';
import MainLayout from "@/components/Layout";
import ProductItem from '@/app/[locale]/products/ProductItem';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ProductParamProps {
    productId: string;
}

export default function Product({ params }: { params: ProductParamProps }) {
const imageRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
  Array(slidersMockData.length).fill(null).map(() => React.createRef<HTMLDivElement>())
);
const [activeThumbnail, setActiveThumbnail] = useState(1)
const [faqOpenState, setFaqOpenState] = useState<{ [key: number]: boolean }>({}); // State to manage FAQ open/close

const [activeTab, setActiveTab] = useState(tabs[0].id)

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
    setActiveThumbnail(index)
    const ref = imageRefs.current[index]?.current;
    if (ref) {
        ref.scrollIntoView({ behavior: 'smooth' });
    }
};
const renderMainBlockImages = () => {
    return slidersMockData.map((item, index) => {
        return (
            <div key={item.id} className="scroller_image" ref={imageRefs.current[index]}>
                <Image
                    src={item.image}
                    height={500}
                    width={500}
                    alt={item.name}
                />
            </div>
        );
    });
};

const renderThumbnails = () => {
    return slidersMockData.map((item, index) => (
        <div
            key={item.id}
            className={`thumbnail_image ${index === activeThumbnail ? 'active_thumbnail' : ''}`}
            onClick={() => scrollToImage(index)}
        >
            <Image
                src={item.image}
                height={80}
                width={80}
                alt={item.name}
            />
        </div>
    ));
};

const [count, setCount] = useState(1);

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
};

const handleDecrement = () => {
    if (count > 1) {
        setCount(prevCount => prevCount - 1);
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
        [id]: !prevState[id]
    }));
};

const renderTabContent = () => {
    switch (activeTab) {
        case tabs[0].id:
            return <div className="tab-content">
                <h3>General Features</h3>
                <div className="general-features">
                    {generalFeatures.map((generalFeature) => {
                        return (
                          <p>{generalFeature.name}</p>
                        );
                    })}
                </div>
                <h3>General Details</h3>
                <div className="general-details">
                    {generalDetails.map((generalFeature, index) => {
                        return (
                          <div className="general-detail" key={index}>
                              <p className="general-detail-key">{generalFeature.key}</p>
                              <p className="general-detail-value">{generalFeature.value}</p>
                          </div>
                        );
                    })}
                </div>
            </div>;
        case tabs[1].id:
            return <div className="portfolio">
                <Image src={Banner} alt="Banner" />
                <Image src={Banner} alt="Banner" />
                <Image src={Banner} alt="Banner" />
                <Image src={Banner} alt="Banner" />
                <Image src={Banner} alt="Banner" />
                <Image src={Banner} alt="Banner" />
            </div>;
        case tabs[2].id:
            return (
              <div className="faq">
                  {faqData.map((faq) => (
                    <div key={faq.id} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                            <span>{faq.question}</span>
                            {faqOpenState[faq.id] ? <ChevronDown /> : <ChevronRight />}
                        </div>
                        {faqOpenState[faq.id] && <p>{faq.answer}</p>}
                    </div>
                  ))}
              </div>
            );
    }
}

    const renderProducts = () => {
        return productMockList.map((product, index) => {
            return (
              <ProductItem product={product} handleRedirect={() => null} />
            );
        });
    };

    return (
      <div>
          <MainLayout>
              <div className="product_inner_page">
                  <div className="inner_container">
                      <div className="prodcut_slider_block">
                          <div className="slider_images">
                              {renderThumbnails()}
                          </div>
                          <div className="main_product_images">
                              {renderMainBlockImages()}
                          </div>
                          <div className="add_to_cart_block">
                              <div className="product_title">BreezeleSS+</div>
                              <div className="product_price">299,000</div>
                              <span className="devider"></span>
                              <div className="product_code">MSFAAU-12HRFN8-QRD6GW</div>
                              <div className="product_fullName">Breezeless technology</div>
                              <div className="product_desc">Harsh wind 'elimination', to enjoy the ultimate comfort, say
                                  goodbye to discomfort experience
                              </div>
                              <div className="product_power">
                                  12000(4500~14900) Btu/h
                                  220-240V,1Ph,50Hz
                                  940x193x325mm
                                  16~23m2
                              </div>
                              <div className="product_activity">
                                  <div className="product_active">
                                      <Image
                                        src={ArrowWind}
                                        alt=""
                                      />
                                      <div className="activity_name">Long Dist</div>
                                  </div>
                                  <div className="product_active">
                                      <Image
                                        src={ArrowWind}
                                        alt=""
                                      />
                                      <div className="activity_name">Long district dist. windblast</div>
                                  </div>
                                  <div className="product_active">
                                      <Image
                                        src={ArrowWind}
                                        alt=""
                                      />
                                      <div className="activity_name">Long Dist</div>
                                  </div>
                              </div>
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
                              <button className="add_to_cart_btn">Add to Cart</button>
                              <button className="buy_it_now_btn">Buy It Now</button>
                          </div>
                      </div>
                      <div className="product_tabs_block">
                          <div className="tabs">
                              {renderTabs()}
                          </div>
                          <div className="tab_content">
                              {renderTabContent()}
                          </div>
                      </div>
                  </div>
              </div>
          </MainLayout>
          <Image src={Banner} alt="Banner" layout="responsive" />
          <div className="products_block">
              <h3>You May Also Like</h3>
              <div className="product_block">
                  {renderProducts()}
              </div>
          </div>

      </div>
    );
}
