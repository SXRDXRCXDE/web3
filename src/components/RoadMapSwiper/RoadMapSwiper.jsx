import React from "react";
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
    ]

    return<>
        <div className={'w-full h-full flex items-start gap-3 relative'}>

            <div className={'absolute -bottom-20 max-[1000px]:-top-24 px-24 max-[1000px]:px-3 w-full flex flex-col items-center '}>

                <div className={'text-white text-[18px]'}>From our humble origins to the grand unveiling, be a part of the Martial Rabbits Metaverse journey!</div>

            </div>

            <div className={'w-full flex items-center justify-between absolute -bottom-44 max-[450px]:bottom-12 max-[1000px]:-bottom-16 px-24 max-[1000px]:px-3 max-[1000px]:gap-3 z-10 '}>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                    <div style={{backgroundImage: `url(${prev})`}} className={` image-swiper-button-prev__ ${style.next}`}>

                        <GrPrevious />

                    </div>
                    <div style={{backgroundImage: `url(${next})`}} className={` image-swiper-button-next__ ${style.next}`}>

                        <GrNext />

                    </div>

                </div>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

            </div>


            <Swiper
                navigation={{
                    nextEl: ".image-swiper-button-next__",
                    prevEl: ".image-swiper-button-prev__",
                    disabledClass: "swiper-button-disabled"
                }}
                modules={[Navigation , Autoplay]}
                // loop={true}
                className={'w-full h-full'}
                spaceBetween={20}
                freeMode={true}
                slidesPerView={3}
                grabCursor={true}
                // centeredSlides={true}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }}
            >
                {Cards.map((value, index)=>  <SwiperSlide  className={'w-full h-full  '}>
                    <div key={index} className={'w-full  flex  justify-center'}>

                        <div className={'max-[450px]:w-[300px] max-[450px]:h-[300px] w-[400px] h-[400px] flex flex-col items-center max-[450px]:px-7 max-[450px]:py-4 px-14 py-6  relative'}>

                            <img className={'w-full h-full object-contain max-[450px]:object-fill absolute top-0 left-0 -z-10'} src={value.image} alt={'web3'}/>
                            <div className={'w-full h-full z-10'}>

                                <div className={'w-full h-auto flex items-center justify-between max-[1000px]:mt-0 max-[1280px]:mt-8 '}>
                                    <div className={' max-[450px]:px-2 max-[450px]:py-1 max-[1000px]:text-[20px] max-[1000px]:px-4 max-[1000px]:py-3 max-[1280px]:px-2 max-[1280px]:py-1 max-[1280px]:text-[16px] px-4 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#D015FF] text-[20px] text-white font-outline-2'}>{value.title}</div>
                                    <div className={'text-[20px] text-[#F6CC72] font-outline-2 '}>{value.number}</div>
                                </div>
                                <div className={'w-full h-auto flex flex-col items-start text-start max-[450px]:mt-3 max-[450px]:gap-2 max-[1000px]:gap-6 max-[1280px]:gap-3 gap-6 mt-6 '}>

                                    {value?.extra_infos.map((value, index)=> <div key={index} className={'flex items-center  gap-2 '}>

                                        {index>1? <IoRadioButtonOffSharp className={'text-[#7767FF]'} /> : <IoRadioButtonOn className={'text-[#7767FF]'} />}

                                        <div className={'text-white text-[16px]'}>{value}</div>

                                    </div>)}

                                </div>

                            </div>

                        </div>

                    </div>


                </SwiperSlide>)}

            </Swiper>

        </div>
    </>
}