import React from "react";
import footer_layer from "../../assets/img/layers/footer_layer.png";
import footer_layer_mobile from "../../assets/img/layers/footer_layer_mobile.png";
import rabbit_footer from "../../assets/img/layers/rabbit_footer.png";
import emailbutton from "../../assets/img/layers/button_shape.png";
import emailbutton_mobile from "../../assets/img/layers/email_button_mobile.png";
import button from "../../assets/img/layers/demo_button.png";

export default function Subscribe() {


    return<>
        <div className={'w-full h-auto min-[1000px]:min-h-[70vh] max-[450px]:min-h-[350px] max-[1000px]:min-h-[400px]  flex flex-col items-center justify-start gap-4 mt-10 '}>

            <div className={'max-[1000px]:w-full w-3/4 flex flex-col justify-start max-[1000px]:items-center items-start relative max-[1000px]:mt-6'}>

                <img className={'w-full h-96 object-fill max-[1000px]:w-fit max-[1000px]:hidden absolute top-0 left-0 '} src={footer_layer} alt={'web3'}/>
                <img className={'w-full h-96 max-[450px]:h-72 max-[450px]:translate-x-5 max-[1000px]:translate-x-20 object-fill absolute top-0 left-0 min-[1000px]:hidden '} src={footer_layer_mobile} alt={'web3'}/>
                <img className={'max-[450px]:w-20 max-[450px]:right-32 w-52 max-[1000px]:w-40  absolute -bottom-[185px] max-[450px]:-bottom-[140px] max-[1000px]:right-72 max-[1000px]:-bottom-60  max-[1100px]:right-[110px] right-[230px] z-20'} src={rabbit_footer} alt={'web3'}/>

                <div className={' flex flex-col items-start mt-16 z-10 '}>
                    <span className={'max-[1000px]:text-[15px] max-[1000px]:font-outline-2 text-[20px] text-[#F80AFB]'}>Get early access to our project</span>
                    <div className={'max-[1000px]:leading-[28px] leading-[48px] flex flex-col -translate-x-5 '}>
                        <span className={'max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2'}>SUBSCRIBE</span>
                        <span className={'max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2 translate-x-20'}>TO OUR NEWS</span>
                    </div>

                </div>
                <div className={'max-[450px]:gap-2 max-[1000px]:gap-12 max-[1000px]:flex-row-reverse flex justify-center items-center z-10 absolute max-[450px]:right-2 max-[450px]:top-52  max-[1000px]:right-10 max-[1000px]:top-64 max-[1100px]:right-52 max-[1100px]:top-60 top-60 right-[370px]'}>

                    <div style={{backgroundImage: `url(${emailbutton})`}} className={' max-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center text-[18px] text-white'}>Enter Email Address</div>
                    <div style={{backgroundImage: `url(${emailbutton_mobile})`}} className={'max-[450px]:translate-x-2 max-[450px]:w-[135px] max-[450px]:h-12 min-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white'}>Enter Email Address</div>
                    <div style={{backgroundImage: `url(${button})`}} className={' max-[450px]:w-[135px] max-[450px]:h-12 w-56 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white'}>Subscribe</div>

                </div>

            </div>

        </div>
    </>
}