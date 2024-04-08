import React, {useState} from "react";
import style from "./style.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import prev from "../../assets/img/icons/prev.png";
import next from "../../assets/img/icons/next.png";
import {GrNext, GrPrevious} from "react-icons/gr";

import holder from "../../assets/img/cards/card.png";
import holder2 from "../../assets/img/cards/holder2.png";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";
import prevImg from "../../assets/img/icons/prev.png";
import nextImg from "../../assets/img/icons/next.png";
import nextImg_hover from "../../assets/img/icons/next_hover.png";
import prevImg_hover from "../../assets/img/icons/prev_hover.png";
import Carousel from "react-multi-carousel";
import "./custom.css";


export default function RoadMapSwiper() {


    const Cards = [
        {
            title : "Milestone 1",
            number : "Q2 2024",
            image: holder,
            extra_infos : [
                "Website Launch",
                "Game Demo 1.0",
                "Smart Contract & Security Audit",
                "Seed Round",
                "Social Media Launch",
                "Marketing 1.0",
            ]
        },
        {
            title : "Milestone 2",
            number : "Q3 2024",
            image: holder2,
            extra_infos : [
                "Presale",
                "Game Demo 2.0",
                "Development",
                "Expand Team & forge Partners",
                "Marketing 1.0",
            ]
        },
        {
            title : "Milestone 3",
            number : "Q4 2024",
            image: holder2,
            extra_infos : [
                "Public Round",
                "TGE",
                "Game Demo 3.0",
                "P&E Mechanics",
                "Marketing 2.0",
                "NFT  Creation",
            ]
        },
        {
            title : "Milestone 4",
            number : "Q1 2025",
            image: holder2,
            extra_infos : [
                "Game Development",
                "Marketplace Creation",
                "P&E Testing",
                "Multiplayer Creation",
                "Marketing 2.0",
            ]
        },
        {
            title : "Milestone 5",
            number : "Q2 2025",
            image: holder2,
            extra_infos : [
                "NFT Release",
                "Marketplace Launch",
                "Multiplayer Testing",
                "Token Listing CEX",
                "Marketing 2.0",
            ]
        },
        {
            title : "Milestone 6",
            number : "Q3 2025",
            image: holder2,
            extra_infos : [
                "Betaa Release",
                "Bug Bounty Program",
                "Testnet Launch",
                "Marketing 2.0",
            ]
        },
        {
            title : "Milestone 7",
            number : "Q4 2025",
            image: holder2,
            extra_infos : [
                "Full Game Release",
                "Scaling Reward System",
                "Game Update",
                "Tournaments",
                "Continuous Development",
            ]
        },
    ]

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        const [hover,setHover] = useState(-1);
        return (
            <div className="w-full flex items-center justify-between absolute left-0 -bottom-44 max-[1000px]:-bottom-12 max-[450px]:-bottom-3 max-[1000px]:px-3 max-[1000px]:gap-3 px-24 z-10 ">
                {/*<div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >Nihggga</div>*/}
                {/*<div onClick={() => next()} >asdasddas</div>*/}
                {/*<div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div>*/}

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                    <div
                        onMouseEnter={() => setHover(0)}
                        onMouseLeave={() => setHover(-1)}
                        style={{ backgroundImage: `url(${prevImg})` }}
                        onClick={previous}
                        className={style.next}
                    >
                        <GrPrevious />
                        <div
                            style={{ backgroundImage: `url(${prevImg_hover})` }}
                            className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain flex items-center justify-center ${
                                hover === 0 ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'
                            }`}
                        >
                            <GrPrevious />
                        </div>
                    </div>
                    <div
                        onMouseEnter={() => setHover(1)}
                        onMouseLeave={() => setHover(-1)}
                        style={{ backgroundImage: `url(${nextImg})` }}
                        onClick={next}
                        className={style.next}
                    >
                        <GrNext />
                        <div
                            style={{ backgroundImage: `url(${nextImg_hover})` }}
                            className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain flex items-center justify-center ${
                                hover === 1 ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500'
                            }`}
                        >
                            <GrNext />
                        </div>
                    </div>

                </div>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>
            </div>
        );
    };


    return<>
        <div className={'w-full h-full flex items-start gap-3 max-[700px]:pr-14 min-[700px]:pl-24 relative'}>

            <div className={'absolute left-0 -bottom-20 max-[1000px]:-top-24 px-24 max-[1000px]:px-3 w-full flex flex-col items-center '}>

                <div className={'text-white text-[18px] max-[600px]:translate-y-16'}>From our humble origins to the grand unveiling, be a part of the Martial Rabbits Metaverse journey!</div>

            </div>


            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="w-full h-full relative "
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                customTransition={'transform 500ms ease-in-out, opacity 500ms ease-in-out'}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                customButtonGroup={<ButtonGroup/>}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 1580,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 3000,
                            min: 1580// Добавляем новую точку останова для экранов меньше 1300px
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 600,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 0
                    },

                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {Cards.map((value, B_index)=>
                        <div className={' max-[450px]:translate-x-10 max-[450px]:w-[300px] max-[450px]:h-[300px] w-[400px] h-[400px] flex flex-col items-center max-[450px]:px-7 max-[450px]:py-4 px-14 py-6  relative'}>

                            <img className={'w-full h-fit max-[450px]:w-[300px] max-[450px]:h-[310px] object-contain max-[450px]:object-fill absolute top-0 left-0 -z-10'} src={value.image} alt={'web3'}/>
                            <div className={'w-full h-full z-10'}>

                                <div className={'w-full h-auto flex items-center justify-between max-[1000px]:mt-0 max-[1280px]:mt-8 '}>
                                    <div className={' max-[450px]:px-2 max-[450px]:py-1 max-[1000px]:text-[20px] max-[1000px]:px-4 max-[1000px]:py-3 max-[1280px]:px-2 max-[1280px]:py-1 max-[1280px]:text-[16px] px-4 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#D015FF] text-[20px] text-white font-outline-2'}>{value.title}</div>
                                    <div className={'text-[20px] text-[#F6CC72] font-outline-2 '}>{value.number}</div>
                                </div>
                                <div className={'w-full h-auto flex flex-col items-start text-start max-[450px]:mt-3 max-[450px]:gap-2 max-[1000px]:gap-6 max-[1280px]:gap-3 gap-6 mt-6 '}>

                                    {value?.extra_infos.map((data, index)=> <div key={index} className={'flex items-center  gap-2 '}>

                                        {index>1? <IoRadioButtonOffSharp className={'text-[#7767FF]'} /> : B_index===0? <IoRadioButtonOn className={'text-[#7767FF]'} /> : <IoRadioButtonOffSharp className={'text-[#7767FF]'} />}

                                        <div className={'text-white text-[16px]'}>{data}</div>

                                    </div>)}

                                </div>

                            </div>

                </div>)}

            </Carousel>

        </div>
    </>
}