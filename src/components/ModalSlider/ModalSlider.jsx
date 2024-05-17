import React, {useEffect, useRef, useState} from 'react';
import './ModalSlider.css';
import { useDispatch, useSelector } from "react-redux";
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
import {setModalOpen} from "../../store/actions/isModalOpenActions";
import {setCurrentIndex} from "../../store/actions/currentImageIndexaction";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useSwiper } from 'swiper/react';


const ModalSlider = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state)=>state.isModalOpen.isModalOpen)
    const currentImageIndex = useSelector((state)=>state.currentImageIndex.currentIndex)
    const [currentIndex,setCurrentImageIndex] = useState(0)
    const [active,setActive] = useState(true)

    const closeModal = () => {
        dispatch(setModalOpen(false));
    };

    const swiperRef = useRef(null); // Создаем ref для Swiper

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

    useEffect(()=>{
        if (active){
            setCurrentImageIndex(currentImageIndex)
            setActive(false)
        }

        const handleKeyPress = (event) => {
            // Если нажата клавиша влево (keyCode 37) и модальное окно открыто
            if (event.keyCode === 37 && isModalOpen) {
                prevSlide();
            }
            // Если нажата клавиша вправо (keyCode 39) и модальное окно открыто
            else if (event.keyCode === 39 && isModalOpen) {
                nextSlide();
            }
        };

        // Добавляем слушатель событий для нажатия клавиш
        window.addEventListener('keydown', handleKeyPress);

        // Убираем слушатель событий при размонтировании компонента
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };

    },[SLIDES])
    console.log(currentImageIndex)

    const swiper = useSwiper();

    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Используем slideNext
        }
    };

    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Используем slidePrev
        }
    };

    return (
        <div className="modalSlider">
            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="modalContent">
                    <div className="prev" onClick={prevSlide}>&#10094;</div>
                    <div className="next" onClick={nextSlide}>&#10095;</div>
                    <Swiper
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        initialSlide={currentImageIndex}
                        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
                        onSwiper={(swiper) => {
                            // Установим объект Swiper в ref при его инициализации
                            if (swiper) {
                                swiperRef.current = swiper;
                            }
                        }}
                    >
                        {SLIDES.map((value, index)=> <SwiperSlide>
                            <img key={index} src={value} alt={`Image `} />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ModalSlider;
