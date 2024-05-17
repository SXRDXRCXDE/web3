import React, {useState} from "react";
import Carousel from "react-multi-carousel";
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
import "react-multi-carousel/lib/styles.css";
import prevImg from "../../assets/img/icons/prev.png";
import style from "../Play&Earn/style.module.css";
import {GrNext, GrPrevious} from "react-icons/gr";
import nextImg from "../../assets/img/icons/next.png";
import prevImg_hover from "../../assets/img/icons/prev_hover.png";
import nextImg_hover from "../../assets/img/icons/next_hover.png";
import "./style.css";
import {useDispatch} from "react-redux";
import {setModalOpen} from "../../store/actions/isModalOpenActions";
import {setCurrentIndex} from "../../store/actions/currentImageIndexaction";
import prev from "../../assets/img/icons/prev.png";
import next from "../../assets/img/icons/next.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";


export default function GameSwiper() {

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



    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;

        const [hover,setHover] = useState(-1)

        return (
            <div className="w-full flex items-center justify-between absolute -bottom-40 max-[600px]:-bottom-20 max-[1000px]:-bottom-12 min-[1550px]:-bottom-56 max-[1000px]:px-3 max-[1000px]:gap-3 px-24 ">

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                    <div onMouseEnter={()=>setHover(0)} onMouseLeave={()=>setHover(-1)} style={{backgroundImage: `url(${prevImg})`}} onClick={() => previous()} className={style.next}>

                        <GrPrevious />

                        <div style={{backgroundImage: `url(${prevImg_hover})`}} className={`${hover===0 ? `opacity-100` : `opacity-0` } bg-no-repeat bg-center bg-contain duration-500 flex items-center justify-center absolute top-0 left-0 w-full h-full`}><GrPrevious /></div>

                    </div>
                    <div onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(-1)} style={{backgroundImage: `url(${nextImg})`}} onClick={() => next()} className={style.next}>

                        <GrNext />

                        <div style={{backgroundImage: `url(${nextImg_hover})`}} className={`${hover===1 ? `opacity-100` : `opacity-0` } bg-no-repeat bg-center bg-contain duration-500 flex items-center justify-center absolute top-0 left-0 w-full h-full`}><GrNext /></div>

                    </div>

                </div>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>
            </div>
        );
    };

    return<>
        <div className={'w-full max-[600px]:h-[150px] h-[500px] flex relative overflow-visible min-[1000px]:-translate-y-10 '}>

            <div className={'w-full flex items-center justify-between absolute -bottom-56 max-[1000px]:bottom-10 max-[1000px]:px-3 max-[1000px]:gap-4 px-24 z-10 '}>

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
                        slidesPerView: 2.1,
                        spaceBetween: 10
                    },
                    1: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                    }
                }}
            >
                {SLIDES.map((value, index)=> <SwiperSlide  className={'w-full h-fit '}>
                    <img
                        key={index}
                        onClick={() => {
                            dispatch(setCurrentIndex(index))
                            dispatch(setModalOpen(true));
                        }}
                        className={'min-[600px]:w-full h-full max-[600px]:w-full max-[600px]:scale-y-110 object-contain'}
                        src={value}
                        alt={"web3"}
                    />
                </SwiperSlide>)}
            </Swiper>
            {/*{ButtonGroup}*/}
        </div>

    </>
}