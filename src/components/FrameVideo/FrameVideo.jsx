import React from "react";
import FrameImage from "../../assets/img/layers/FrameImage.png";
import frameForvideo from "../../assets/img/layers/FrameForVideo.png";
import "./style.css"

export default function FrameVideo() {


    return<>
        <div
            className={' w-[80%] max-[600px]:w-[95%] max-[450px]:h-[250px] max-[500px]:h-[300px] max-[800px]:h-[400px] max-[1000px]:h-[500px] max-[1200px]:h-[600px] h-[700px] flex justify-center relative mt-10'}>

            <div
                className={'w-full h-full relative bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center '}>
                {/* Переместите <iframe> вперед, чтобы он был над <img> */}
                <iframe
                    className={'w-full max-[380px]:w-[95%] max-[380px]:h-[85%] max-[400px]:w-[95%] max-[400px]:h-[85%] max-[500px]:w-[98%] max-[500px]:h-[95%] max-w-[1100px] h-[99%] video pointer-events-auto z-0'}
                    src='https://www.youtube.com/embed/rxKtB16JDHw?si=gVbEVCVn1RP7oUIA'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                ></iframe>

                {/* Затем разместите <img> поверх <iframe> */}
                <img src={frameForvideo}
                     className={'w-full h-full object-contain absolute top-0 left-0 z-10 pointer-events-none'}/>
            </div>
        </div>

    </>
}