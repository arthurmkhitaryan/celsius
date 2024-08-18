"use client";

import React, { useRef, useState } from "react";
import Cond from '@/public/images/product/cond.png';
import Image from 'next/image';
import ArrowWind from '@/public/images/product/arrow_wind.png';
import '../../../components/styles/main.scss';
import './page.scss';

const slidersMockData = [
    {
        image: Cond,
        name: '2-in-1 Humidifier & Diffuser',
        param: 'SLPO-324',
        size: '5L',
        about: ['smart', 'white', '360 deg'],
        price: '256,000',
        id: 1,
    },
    {
        image: Cond,
        name: '2-in-1 Humidifier & Diffuser',
        param: 'SLPO-324',
        size: '5L',
        about: ['smart', 'white', '360 deg'],
        price: '256,000',
        id: 2,
    },
    {
        image: Cond,
        name: '2-in-1 Humidifier & Diffuser',
        param: 'SLPO-324',
        size: '5L',
        about: ['smart', 'white', '360 deg'],
        price: '256,000',
        id: 3,
    },
    {
        image: Cond,
        name: '2-in-1 Humidifier & Diffuser',
        param: 'SLPO-324',
        size: '5L',
        about: ['smart', 'white', '360 deg'],
        price: '256,000',
        id: 4,
    },
    {
        image: Cond,
        name: '2-in-1 Humidifier & Diffuser',
        param: 'SLPO-324',
        size: '5L',
        about: ['smart', 'white', '360 deg'],
        price: '256,000',
        id: 5,
    },
];

const tabs = ['Full specifications','Portfolio', 'FAQ', 'Calculator']

const ProductInner = () => {
    const imageRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
        slidersMockData.map(() => React.createRef<HTMLDivElement>())
    );
    const [activeThumbnail, setActiveThumbnail] = useState(1)
    const [activeTab, setActiveTab] = useState(tabs[0])
    
    const renderTabs = () => {
        return tabs.map((item, index) => {
            return (
                <div onClick={() => setActiveTab(item)} className={`tab ${item === activeTab ? 'active_tab' : ''}`}>
                    {item}
                </div>
            )
        })
    }

    const scrollToImage = (index: number) => {
        setActiveThumbnail(index)
        if (imageRefs.current[index]?.current) {
            imageRefs.current[index].current!.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const renderMainBlockImages = () => {
        return slidersMockData.map((item) => {
            return (
                <div key={item.id} className="scroller_image" ref={imageRefs.current[item.id]}>
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
        return slidersMockData.map((item) => (
            <div
                key={item.id}
                className={`thumbnail_image ${item.id === activeThumbnail ? 'active_thumbnail' : ''}`}
                onClick={() => scrollToImage(item.id)}
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

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setCount(value);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case tabs[0]:
                return <div>This is content A</div>;
            case tabs[1]:
                return <div>This is content B</div>;
            case tabs[2]:
                return <div>This is content C</div>;
            case tabs[3]:
                return <div>This is content D</div>;
        }
    }

    return (
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
                        <div className="product_price">299,000  </div>
                        <span className="devider"></span>
                        <div className="product_code">MSFAAU-12HRFN8-QRD6GW</div>
                        <div className="product_fullName">Breezeless technology</div>
                        <div className="product_desc">Harsh wind 'elimination', to enjoy the ultimate comfort, say goodbye to discomfort experience</div>
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
                    <span className="devider"></span>
                    <div className="tab_content">
                        {renderTabContent()}
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default ProductInner;
