import React from "react";
import style from "./style.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import prev from "../../assets/img/icons/prev.png";
import next from "../../assets/img/icons/next.png";
import {GrNext, GrPrevious} from "react-icons/gr";

import a from "../../assets/img/game_imgs/first.png";
import b from "../../assets/img/game_imgs/second.png";
import c from "../../assets/img/game_imgs/third.png";
import d from "../../assets/img/game_imgs/fourth.jpg";
import e from "../../assets/img/game_imgs/fifth.png";
import f from "../../assets/img/game_imgs/sixth.jpg";
import g from "../../assets/img/game_imgs/seventh.png";
import h from "../../assets/img/game_imgs/eighth.jpg";
import i from "../../assets/img/game_imgs/nineth.png";
import j from "../../assets/img/game_imgs/ten.jpg";
import k from "../../assets/img/game_imgs/elevent.jpg";
import l from "../../assets/img/game_imgs/twelwe.jpg";
import m from "../../assets/img/game_imgs/thirteen.png";
import n from "../../assets/img/game_imgs/fourteen.png";
import o from "../../assets/img/game_imgs/fifteen.png";
import q from "../../assets/img/game_imgs/seventeen.png";
import r from "../../assets/img/game_imgs/eighteen.png";
import s from "../../assets/img/game_imgs/nineteen.png";
import t from "../../assets/img/game_imgs/twenty.png";
import u from "../../assets/img/game_imgs/twentyone.jpg";
import v from "../../assets/img/game_imgs/twentytwo.png";
import w from "../../assets/img/game_imgs/twentythree.png";
import x from "../../assets/img/game_imgs/twentyfour.png";
import {setCurrentIndex} from "../../store/actions/currentImageIndexaction";
import {setModalOpen} from "../../store/actions/isModalOpenActions";
import {useDispatch} from "react-redux";

export default function GameDesignSwiper() {
    const dispatch = useDispatch()

    const SLIDES = [
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
    ]

    return<>
        <div className={'w-full h-full flex items-start gap-3 relative'}>

            <div className={'w-full flex items-center justify-between absolute -bottom-44 max-[1000px]:bottom-10 max-[1000px]:px-3 max-[1000px]:gap-4 px-24 z-10 '}>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                    <div style={{backgroundImage: `url(${prev})`}} className={` image-swiper-button-prev_ ${style.next}`}>

                        <GrPrevious />

                    </div>
                    <div style={{backgroundImage: `url(${next})`}} className={` image-swiper-button-next_ ${style.next}`}>

                        <GrNext />

                    </div>

                </div>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

            </div>


            <Swiper
                navigation={{
                    nextEl: ".image-swiper-button-next_",
                    prevEl: ".image-swiper-button-prev_",
                    disabledClass: "swiper-button-disabled"
                }}
                modules={[Navigation , Autoplay]}
                loop={true}
                className={'w-full h-full'}
                spaceBetween={20}
                freeMode={true}
                slidesPerView={3}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    }
                }}
            >
                {SLIDES.map((value, index)=> <SwiperSlide  className={'w-full h-fit '}>
                    <img onClick={() => {
                        dispatch(setCurrentIndex(index))
                        dispatch(setModalOpen(true));
                    }} key={index} className={'w-full h-fit max-w-[286px] max-h-[160px] object-contain'} src={value}/>
                </SwiperSlide>)}
            </Swiper>

        </div>
    </>
}