import React, {useEffect, useState} from "react";
import footer_layer from "../../assets/img/layers/footer_layer.png";
import footer_layer_mobile from "../../assets/img/layers/footer_layer_mobile.png";
import rabbit_footer from "../../assets/img/layers/rabbit_footer.png";
import emailbutton from "../../assets/img/layers/button_shape.png";
import emailbutton_mobile from "../../assets/img/layers/email_button_mobile.png";
import button from "../../assets/img/layers/demo_button.png";
import {  message } from 'antd';


export default function Subscribe() {

    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setEmailSent(!!email);
    }, [email]);

    const loadCircle = [
        <div className={'absolute -bottom-8'}>
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                 role="status">
        <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
            </div>
        </div>
    ]

    const EmailHandler = () => {
         setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            message.success('Successfully subscribed');
        },[1000])
    }

    return<>
        <div className={'w-full h-auto min-[1000px]:min-h-[65vh] max-[450px]:min-h-[350px] max-[1000px]:min-h-[400px]  flex flex-col items-center justify-start gap-4 max-[1000px]:mt-24 mt-10 '}>

            <div className={'max-[1000px]:w-full w-[85%] flex flex-col justify-start max-[1000px]:items-start items-start relative max-[1000px]:mt-6'}>

                <img className={'w-full h-fit  max-[1000px]:w-fit max-[1000px]:hidden absolute top-0 left-0 '} src={footer_layer} alt={'web3'}/>
                <img className={'w-full h-96 max-[450px]:h-fit max-[450px]:translate-x-1 max-[1000px]:translate-x-0 object-fill absolute top-0 left-0 min-[1000px]:hidden '} src={footer_layer_mobile} alt={'web3'}/>
                <img className={'max-[450px]:w-20 max-[450px]:right-40 w-60 max-[1000px]:w-40  absolute -bottom-[166px] min-[1600px]:-bottom-[280px] min-[1800px]:-bottom-[256px] max-[450px]:-bottom-[137px] max-[1000px]:right-72 max-[1000px]:-bottom-60  max-[1100px]:right-[110px] min-[1600px]:right-[400px] right-[266px] z-20'} src={rabbit_footer} alt={'web3'}/>

                <div className={' flex flex-col items-start max-[1000px]:ml-12 max-[1000px]:mt-4 mt-16 z-10  '}>
                    <span className={'max-[1000px]:text-[15px] max-[1000px]:font-outline-2 text-[20px] min-[1800px]:mt-6 text-[#F80AFB] duration-300 hover:scale-110 hover:-translate-x-8 cursor-pointer'}>Get early access to our project</span>
                    <div className={'max-[1000px]:leading-[28px]  leading-[48px] flex flex-col  -translate-x-5 '}>
                        <span className={'max-[450px]:translate-x-6 max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2 duration-300 hover:scale-110 hover:-translate-x-8 cursor-pointer'}>SUBSCRIBE</span>
                        <span className={'max-[1000px]:text-[30px] text-[60px] text-white max-[1000px]:font-outline-2 duration-300 hover:scale-110 hover:translate-x-8 hover:translate-y-1 translate-x-20 cursor-pointer'}>TO OUR NEWS</span>
                    </div>

                </div>
                <div className={'max-[450px]:gap-2 max-[1000px]:gap-12 max-[1000px]:flex-row-reverse flex justify-center items-center z-10 absolute max-[450px]:right-10 max-[450px]:top-40  max-[1000px]:right-10 max-[1000px]:top-64 max-[1100px]:right-52 max-[1100px]:top-60 min-[1600px]:top-[330px] top-56 min-[1600px]:right-[580px] right-[450px]'}>

                    <div style={{backgroundImage: `url(${emailbutton})`}} className={' min-[1200px]:-translate-x-3 max-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center text-[18px] text-white'}><input onChange={(e)=>setEmail(e.target.value)} type={"email"} placeholder={"Enter Email Address"} className={'w-full h-full outline-0 bg-transparent px-5 '}/></div>
                    <div style={{backgroundImage: `url(${emailbutton_mobile})`}} className={'max-[450px]:translate-x-2 max-[450px]:w-[135px] max-[450px]:h-12 min-[1000px]:hidden w-72 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white'}><input onChange={(e)=>setEmail(e.target.value)} type={"email"} placeholder={"Enter Email Address"} className={'w-full h-full outline-0 bg-transparent px-5 '}/></div>
                    <div onClick={()=>{
                        emailSent? EmailHandler() : message.error('Enter your email')
                    }} style={{backgroundImage: `url(${button})`}} className={' max-[450px]:w-[135px] max-[450px]:h-12 w-56 h-16 bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center max-[450px]:text-[12px] text-[18px] text-white cursor-pointer relative'}>
                        Subscribe
                        {loading? loadCircle: ``}
                    </div>

                </div>

            </div>

        </div>
    </>
}