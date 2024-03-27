import React from "react";
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
import p from "../../assets/img/game_imgs/sixteen.png";
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



export default function GameSwiper() {

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
        p,
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
        return (
            <div className="w-full flex items-center justify-between absolute -bottom-40 max-[600px]:-bottom-20 max-[1000px]:-bottom-12 max-[1000px]:px-3 max-[1000px]:gap-3 px-24 ">

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>

                <div className={'flex items-center max-[1000px]:gap-3 gap-5'}>

                    <div style={{backgroundImage: `url(${prevImg})`}} onClick={() => previous()} className={style.next}>

                        <GrPrevious />

                    </div>
                    <div style={{backgroundImage: `url(${nextImg})`}} onClick={() => next()} className={style.next}>

                        <GrNext />

                    </div>

                </div>

                <div className={'w-[40%] h-1 bg-[#F80AFB]'}></div>
            </div>
        );
    };

    return<>
        <div className={'w-full max-[600px]:h-[200px] h-[500px] flex relative overflow-visible '}>
            <Carousel
                additionalTransfrom={1}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode
                className="w-full h-full relative"
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                customButtonGroup={<ButtonGroup/>}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 40
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

                {SLIDES.map((value, index)=> <div className={` w-full h-full flex justify-center`}>

                    <div  className={'w-full max-[600px]:h-[200px] h-[400px] max-[600px]:px-2 max-[600px]:py-5  px-8'}>
                        <img key={index} className={'w-full h-full max-[600px]:w-[180px] max-[600px]:object-fill  object-contain'} src={value} alt={'web3'}/>
                    </div>

                </div>)}
            </Carousel>

            {ButtonGroup}
        </div>

    </>
}