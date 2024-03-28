import React from "react";
import footer_layer from "../../assets/img/layers/footer_layer.png";
import footer_layer_mobile from "../../assets/img/layers/footer_layer_mobile.png";
import rabbit_footer from "../../assets/img/layers/rabbit_footer.png";
import emailbutton from "../../assets/img/layers/button_shape.png";
import emailbutton_mobile from "../../assets/img/layers/email_button_mobile.png";
import button from "../../assets/img/layers/demo_button.png";

export default function Subscribe() {


    return<>
        <div className={'w-full h-auto min-[1000px]:min-h-[65vh] max-[450px]:min-h-[350px] max-[1000px]:min-h-[400px]  flex flex-col items-center justify-start gap-4 mt-10 '}>

            <div className={'max-[1000px]:w-full w-[85%] flex flex-col justify-start max-[1000px]:items-start items-start relative max-[1000px]:mt-6'}>

                <img className={'w-full h-fit  max-[1000px]:w-fit max-[1000px]:hidden absolute top-0 left-0 '} src={footer_layer} alt={'web3'}/>
                <img className={'w-full h-96 max-[450px]:h-fit max-[450px]:translate-x-1 max-[1000px]:translate-x-0 object-fill absolute top-0 left-0 min-[1000px]:hidden '} src={footer_layer_mobile} alt={'web3'}/>
                <img className={'max-[450px]:w-20 max-[450px]:right-40 w-60 max-[1000px]:w-40  absolute -bottom-[166px] min-[1600px]:-bottom-[280px] max-[450px]:-bottom-[137px] max-[1000px]:right-72 max-[1000px]:-bottom-60  max-[1100px]:right-[110px] min-[1600px]:right-[400px] right-[266px] z-20'} src={rabbit_footer} alt={'web3'}/>

                <div className={' flex flex-col items-start max-[1000px]:ml-12 max-[1000px]:mt-4 mt-16 z-10 '}>
                    <span className={'max-[1000px]:text-[15px] max-[1000px]:font-outline-2 text-[20px] text-[#F80AFB]'}>Get early access to our project</span>
                    <div className={'max-[1000px]:leading-[28px]  leading-[48px] flex flex-col  -translate-x-5 '}>
                        <span className={'max-[450px]:translate-x-6 max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2'}>SUBSCRIBE</span>
                        <span className={'max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2 translate-x-20'}>TO OUR NEWS</span>
                    </div>

                </div>
                <div className={'max-[450px]:gap-2 max-[1000px]:gap-12 max-[1000px]:flex-row-reverse flex justify-center items-center z-10 absolute max-[450px]:right-10 max-[450px]:top-40  max-[1000px]:right-10 max-[1000px]:top-64 max-[1100px]:right-52 max-[1100px]:top-60 min-[1600px]:top-[330px] top-56 min-[1600px]:right-[580px] right-[450px]'}>

                    <div style={{backgroundImage: `url(${emailbutton})`}} className={' min-[1200px]:-translate-x-3 max-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center text-[18px] text-white'}>Enter Email Address</div>
                    <div style={{backgroundImage: `url(${emailbutton_mobile})`}} className={'max-[450px]:translate-x-2 max-[450px]:w-[135px] max-[450px]:h-12 min-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white'}>Enter Email Address</div>
                    <div style={{backgroundImage: `url(${button})`}} className={' max-[450px]:w-[135px] max-[450px]:h-12 w-56 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white'}>Subscribe</div>

                </div>

            </div>

        </div>
    </>
}