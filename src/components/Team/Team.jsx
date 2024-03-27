import React from "react";
import backlayer2 from "../../assets/img/layers/Background2Frame.png";
import heroCard1 from "../../assets/img/hero_cards/firts_card_hero.png";
import heroCard2 from "../../assets/img/hero_cards/second_card_hero.png";
import heroCard3 from "../../assets/img/hero_cards/third_card_hero.png";
import heroCard4 from "../../assets/img/hero_cards/fourth_card_hero.png";
import prev from "../../assets/img/icons/prev.png";
import style from "../Play&Earn/style.module.css";
import {GrNext, GrPrevious} from "react-icons/gr";
import next from "../../assets/img/icons/next.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

export default function Team() {

    const Members = [
        {
            name : "Sako",
            position : "Founder",
            image : heroCard1,
        },
        {
            name : "Grano",
            position : "Founder",
            image : heroCard2,
        },
        {
            name : "Nuri",
            position : "Head of Game Development",
            image : heroCard3,
        },
        {
            name : "Andre",
            position : "Head of Web3",
            image : heroCard4,
        }
    ]

    return<>
        <div className={'w-full max-[1000px]:h-[800px] max-[450px]:h-[700px] h-[600px] flex flex-col items-center justify-center relative'}>

            <img className={'w-full h-full object-fill absolute top-0 left-0 right-0 m-auto'} src={backlayer2} alt={'web3'}/>

            <div className={'flex gap-4 items-center mt-10 max-[1320px]:gap-0 duration-300 max-[1000px]:hidden'}>

                {Members.map((value, index)=> <div key={index} className={' max-[1200px]:w-60 max-[1200px]:h-80 w-72 h-96 relative flex flex-col items-center justify-end duration-300'}>

                    <img className={'absolute top-0 left-0'} src={value.image} alt={'web3'}/>

                    <div className={'w-full h-1/2 z-10 flex flex-col items-center justify-start max-[1200px]:pt-10 pt-14 '}>
                        <span className={'text-[20px] text-white mt-1'}>{value.name}</span>
                        <span className={'w-32 leading-[20px] text-[18px] text-[#00D2FF] max-[1200px]:mt-2 mt-6'}>{value.position}</span>
                    </div>

                </div>)}

            </div>

            <div className={'w-full flex min-[1000px]:hidden relative'}>

                <div className={'w-full flex items-center justify-between absolute -bottom-20 px-24 max-[1000px]:px-3 max-[1000px]:gap-3 '}>

                    <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                    <div className={'flex items-center gap-5'}>

                        <div style={{backgroundImage: `url(${prev})`}} className={` image-swiper-button-prev ${style.next}`}>

                            <GrPrevious />

                        </div>
                        <div style={{backgroundImage: `url(${next})`}} className={` image-swiper-button-next ${style.next}`}>

                            <GrNext />

                        </div>

                    </div>

                    <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                </div>


                <Swiper
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation , Autoplay]}
                    // loop={true}
                    className={'w-full h-full'}
                    spaceBetween={20}
                    freeMode={true}
                    slidesPerView={1}
                    grabCursor={true}
                    centeredSlides={true}
                >
                    {Members.map((value, index)=>  <SwiperSlide  className={'w-full h-full  '}>
                        <div className={'w-full flex justify-center'}>

                            <div key={index} className={' w-72 h-96 relative flex flex-col items-center justify-end '}>

                                <img className={'absolute object-fill top-0 left-0'} src={value.image} alt={'web3'}/>

                                <div className={'w-full h-1/2 z-10 flex flex-col items-center justify-start pt-14 '}>
                                    <span className={'text-[20px] text-white mt-1'}>{value.name}</span>
                                    <span className={'w-32 leading-[20px] text-[18px] text-[#00D2FF] mt-6'}>{value.position}</span>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>)}

                </Swiper>

            </div>


            <div className={'flex flex-col items-center z-10 max-[450px]:mt-32 max-[1000px]:mt-24 mt-10 max-[450px]:leading-[15px] leading-[30px] gap-3'}>
                <div className={'text-white text-[26px] max-[450px]:text-[19px]  '}>AND MORE THAN</div>
                <div className={'text-[#F6CC72] text-[36px] max-[450px]:text-[25px] font-outline-2'}> 10+ SPECIALISTS</div>
            </div>

        </div>
    </>
}