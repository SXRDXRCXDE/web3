import React from "react";
import style from "./style.module.css";
import chn2 from "../../assets/img/icons/chn_2.png";
import firstCard from "../../assets/img/cards/first_card.png";
import secondCard from "../../assets/img/cards/secondCard.png";
import thirdCard from "../../assets/img/cards/thirdCard.png";
import prev from "../../assets/img/icons/prev.png";
import {GrNext, GrPrevious} from "react-icons/gr";
import next from "../../assets/img/icons/next.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

export default function PlayEarn() {

    const Cards = [
        {
            img : firstCard,
            title : "Earn & Trade",
            description: "Earn $MR tokens, NFTs, and more by playing various game modes. Trade assets directly in the MR Marketplace or peer-to-peer."
        },
        {
            img : secondCard,
            title : "Play & Conquer",
            description: "Play solo or team up in multiplayer. Tackle quests and dive into PVP battles: Battle Royales, Deathmatches, and more."
        },
        {
            img : thirdCard,
            title : "Connect & Create",
            description: "Utilize in-game communication to form alliances, tackle modes together, and craft your own world as a team."
        },
    ]

    return<>
        <div className={'w-full h-auto max-[1200px]:min-h-[600px] duration-300 min-h-screen flex flex-col items-center gap-4 mt-4 max-[1000px]:pb-24 '}>

            <p className={'max-[1000px]:text-[35px] text-[40px] text-white relative z-10'}>PLAY, EARN, <span className={'text-[#F80AFB] relative'}> CONNECT <img className={'w-20 h-20 object-contain absolute -right-4 -top-2 -z-10'} src={chn2} alt={'web3'}/> </span>  </p>
            <p className={'max-[1200px]:px-8 duration-300 max-[1000px]:px-3 max-[1000px]:text-[14px] text-[18px] text-white'}>Martial Rabbits seamlessly integrates multiple in-game avenues for a diverse and engaging experience, <br/> all available from the get-go at no cost.</p>

            <div className={'w-auto flex  items-center max-[1000px]:hidden '}>

                {Cards.map((value, index)=> <div key={index} className={'max-[1200px]:w-60 max-[1200px]:h-[350px] w-96  h-[585px] flex flex-col items-center justify-end relative mr-1 duration-300'}>
                    <img className={'w-full h-full object-contain absolute bottom-0 -z-0'} src={value.img} alt={'web3'}/>

                    <div className={` ${index===1? `ml-0.5 ${style.shapedrectangle} w-[95%] self-start` :`w-[99%]`}  duration-300 max-[1200px]:w-[97%] max-[1200px]:h-20 max-[1200px]:mb-0 max-[1200px]:leading-[13px] h-28 bg-white/5 backdrop-blur z-0 mb-3 flex flex-col items-center leading-[20px]`}>

                        <div className={'max-[1200px]:text-[16px] text-[20px] text-[#F80AFB] font-outline-2 mt-2 duration-300'}>{value.title}</div>
                        <p className={'max-[1200px]:text-[12px] text-[16px] text-white font-outline-2 duration-300'}>{value.description}</p>

                    </div>
                </div>)}

            </div>

            <div className={'w-full flex min-[1000px]:hidden relative'}>

                <div className={'w-full flex items-center justify-between absolute -bottom-20 max-[1000px]:px-3 max-[1000px]:gap-3 px-24 '}>

                    <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                    <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                        <div style={{backgroundImage: `url(${prev})`}} className={` image-swiper-button-prev___ ${style.next}`}>

                            <GrPrevious />

                        </div>
                        <div style={{backgroundImage: `url(${next})`}} className={` image-swiper-button-next___ ${style.next}`}>

                            <GrNext />

                        </div>

                    </div>

                    <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                </div>


                <Swiper
                    navigation={{
                        nextEl: ".image-swiper-button-next___",
                        prevEl: ".image-swiper-button-prev___",
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
                    {Cards.map((value, index)=>  <SwiperSlide  className={'w-full h-full  '}>
                        <div className={'w-full flex justify-center'}>

                            <div key={index} className={' max-[450px]:w-[305px] max-[1000px]:h-[500px] w-96  h-[585px] flex flex-col items-center justify-end relative mr-1 duration-300'}>
                                <img className={'w-full h-full object-contain absolute bottom-0 -z-0'} src={value.img} alt={'web3'}/>

                                <div className={` ${index===1? `ml-0.5 ${style.shapedrectangle} w-[95%] max-[450px]:w-[95%] max-[1000px]:mr-3.5 max-[1000px]:mr-6 max-[1000px]:w-[80%] max-[1000px]:self-center self-start` :`w-[99%] max-[450px]:w-[99.7%]`} duration-300 h-28 bg-white/5 backdrop-blur z-0 max-[450px]:mb-6 max-[1000px]:mb-0 max-[1000px]:w-[87%] mb-3 flex flex-col items-center leading-[20px]`}>

                                    <div className={' max-[1000px]:text-[18px] text-[20px] text-[#F80AFB] font-outline-2 mt-2 duration-300'}>{value.title}</div>
                                    <p className={'max-[1000px]:text-[14px] text-[16px] text-white font-outline-2 duration-300'}>{value.description}</p>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>)}

                </Swiper>

            </div>

        </div>
    </>
}