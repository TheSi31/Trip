'use client';
import { Rate, Card } from "antd";
import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Reviews.css';

type ReviewsProps = {
    id: number;
    name: string;
    text: string;
    stars: number;
    date: string;
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-prev`} 
            style={{ 
                ...style, 
                display: "block", 
                zIndex: 1, 
            }}
            onClick={onClick}
        >
            <LeftOutlined style={{ fontSize: '24px', color: '#000' }} />
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-next`} 
            style={{ 
                ...style, 
                display: "block", 
                zIndex: 1, 
            }}
            onClick={onClick}
        >
            <RightOutlined style={{ fontSize: '24px', color: '#000' }} />
        </div>
    );
};

const Reviews = ({ reviewsValue }: { reviewsValue: ReviewsProps[]}) => {

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        afterChange: (current: number) => setActiveSlide(current),
        appendDots: (dots: React.ReactNode) => (
            <div style={{ padding: "10px" }}>
                <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}>{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
                style={{
                    marginTop: "15px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: i === activeSlide ? "#5200d9" : "transparent",
                    border: "2px solid #5200d9",
                    transition: "all 0.3s ease-in-out",
                    transform: i === activeSlide ? "scale(1.2)" : "scale(1)",
                }}
            ></div>
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mt-24 gap-4">
            <h1 className="text-3xl font-semibold">Отзывы</h1>
            <div className="w-4/6 mx-auto">
                <Slider {...settings}>
                    {reviewsValue.map((review) => (
                    <div key={review.id} >
                        <div className="grid items-center max-sm:items-stretch gap-1 rounded-lg p-2 h-[150px] bg-[#5200d91a]">
                            <div className="flex justify-between max-[700px]:items-center">
                                <Rate disabled allowHalf defaultValue={review.stars} className="max-[700px]:text-base"/>
                                <h1 className="text-sm font-light max-[700px]:text-xs">{review.date}</h1>
                            </div>
                            <p className="text-sm font-light h-[70px] overflow-hidden overflow-ellipsis whitespace-normal break-words">{review.text}</p>
                            <h1 className="text-sm font-light">{review.name}</h1>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
