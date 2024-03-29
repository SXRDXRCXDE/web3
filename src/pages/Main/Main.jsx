import React from "react";
import style from "./style.module.css";

import layer from "../../assets/img/layers/entrance.png";
import mobile_layer from "../../assets/img/layers/mobile_entrance_layer.png";
import frame from "../../assets/img/layers/Pink Frame.png";
import frame_mobile from "../../assets/img/layers/PinkFrame_mobile.png";
import button from "../../assets/img/layers/demo_button.png";
import FrameImage from  "../../assets/img/layers/FrameImage.png";
import back_layer from "../../assets/img/layers/Background_layer.png";
import chn from "../../assets/img/layers/chn_.png";
import chn3 from "../../assets/img/layers/roadMap.png";

import {FaDownload, FaInstagram, FaYoutube} from "react-icons/fa";
import {RiTwitterXFill} from "react-icons/ri";

import RoadMapSwiper from "../../components/RoadMapSwiper/RoadMapSwiper";
import Team from "../../components/Team/Team";
import PlayEarn from "../../components/Play&Earn/Play&Earn";
import TokenAllocation from "../../components/TokenAllocation/TokenAllocation";
import About_Martial_Rabbit from "../../components/About_Martial_Rabbit/About_Martial_Rabbit";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import GameSwiper from "../../components/Gameswiper/GameSwiper";
import GameDesignSwiper from "../../components/GameDesignSwiper/GameDesignSwiper";

export default function Main() {


    const Social_links = [
        {
            url : '#',
            icon : <FaYoutube />,
        },
        {
            url : '#',
            icon : <FaInstagram />,
        },
        {
            url : '#',
            icon : <RiTwitterXFill />,
        },
    ]

    return<>
        <div className={'w-full h-auto min-h-screen bg-[#07071C] overflow-clip relative pb-8 '}>


            {/*Entrance place / First section*/}
            <div id={'home'} className={style.entrance_section}>

                {/*There are background Images*/}
                <img src={layer} className={'w-full h-fit contrast-150 object-fill max-[600px]:hidden absolute top-0 left-0'} alt={'web3'}/>
                <img src={mobile_layer} className={'w-full h-fit contrast-150 object-fill min-[600px]:hidden absolute top-0 left-0'} alt={'web3'}/>
                <img src={frame} className={'w-[85%] min-[1500px]:object-fill max-[600px]:hidden  max-[1200px]:object-fill h-fit object-contain absolute top-32 left-0 right-0 m-auto'} alt={'web3'}/>
                <img src={frame_mobile} className={'w-[95%] min-[600px]:hidden h-[70%] object-fill absolute top-24 left-0 right-0 m-auto'} alt={'web3'}/>

                {/*Social Links*/}
                <div className={'absolute bg-white/10 max-[600px]:top-[405px] top-80 max-[600px]:w-[60px] max-[600px]:h-[121px] w-16 h-48 flex flex-col items-center border-y border-r border-[#F80AFB] rounded-r'}>
                    {Social_links.map((value, index)=> <a key={index} href={value.url} className={'w-full h-1/3 flex items-center justify-center duration-300 hover:text-[#F80AFB] max-[600px]:text-3xl text-4xl text-white'}>
                        {value.icon}
                    </a>)}
                </div>

                {/*Demo button*/}

                <div className={'w-auto flex flex-col max-[600px]:flex-col-reverse items-center absolute bottom-5 max-[600px]:bottom-32 max-[600px]:left-7 left-0 right-0 m-auto'}>

                    <span className={'max-[600px]:text-[17px] text-[25px] text-white'}>Soon available!</span>

                    <div style={{backgroundImage: `url(${button})`}} className={style.demo_button}>

                        <FaDownload className={'text-3xl max-[600px]:text-2xl'} />

                        <span className={'max-[600px]:text-[14px] text-[18px]'}>Game Demo</span>

                    </div>

                </div>

                {/*Page title*/}
                <div className={' max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:ml-0 w-auto h-auto z-10 ml-52 min-[1000px]:ml-20 min-[1500px]:ml-28'}>
                    <div className={'max-[1000px]:hidden'}>
                        <p className={'text-[40px] text-white'}>A Pioneering <span className={'text-[#F80AFB]'}>AI-Powered  <br/> Web3 </span> Game Experience</p>
                        <p className={'ml-12 text-[20px] text-start text-white'}>Unique Blend of Combat, Adventures, and <br/> Social Interaction</p>
                    </div>
                    <div className={'min-[1000px]:hidden leading-[30px]'}>
                        <p className={'text-[28px] text-white'}>A Pioneering <span className={'text-[#F80AFB]'}>AI-<br/>Powered Web3 </span> Game Experience</p>
                    </div>
                </div>

            </div>


            {/*Frame place / Second section*/}
            <div className={'w-full h-auto flex flex-col items-center gap-4 max-[600px]:mt-12 min-[1700px]:mt-64 mt-32 text-center'}>

                <p className={'max-[600px]:text-[34px] max-[600px]:leading-tight text-[48px] text-white'}>Martial Rabbits Game <span className={'text-[#F80AFB]'}>Trailer </span> </p>

                <p className={'min-[800px]:hidden px-4 text-[14px] text-white'}>Unique Blend of Combat, Adventures, and Social Interaction  </p>


                <div className={' w-[80%] max-[600px]:w-[95%] max-[450px]:h-[250px] max-[500px]:h-[300px] max-[800px]:h-[400px] max-[1000px]:h-[500px] max-[1200px]:h-[600px] h-[700px] relative mt-10'}>

                    <img className={'w-full h-fit object-fill absolute top-0 left-0 brightness-110 '} src={FrameImage} alt={'Web3'}/>

                </div>

            </div>


            {/*About place / Third section*/}
            <div id={'about'} className={'w-full h-auto min-[600px]:min-h-screen  flex flex-col items-center max-[600px]:mt-20 min-[1600px]:mt-52 min-[1700px]:mt-80 mt-36 '}>

                <div className={'-translate-y-8'}>
                    <p className={'max-[1000px]:text-[35px] text-[48px] tracking-[3px] text-white relative z-10 max-[600px]:mb-8 mb-14'}>About <span className={'text-[#F80AFB]'}>M</span>artial <span className={'relative'}>
                        <span className={'text-[#F80AFB]'}>R</span>abbits
                    <img className={'w-20 h-20 object-contain absolute -right-6 top-0 -z-10'} src={chn} alt={'web3'}/>
                    </span>
                    </p>
                    <p className={'max-[1000px]:text-[14px] text-[25px] max-[600px]:tracking-[2px] tracking-[5px] min-[1600px]:translate-y-4 max-[600px]:translate-y-6 text-white z-10'}>The Best of Both Worlds </p>
                </div>


                <About_Martial_Rabbit/>

            </div>


            {/*Game Designs / Fourth Section*/}
            <div className={'w-full h-auto min-[1000px]:min-h-screen min-[1450px]:mt-32 min-[1580px]:mt-52  min-[1650px]:mt-72 flex flex-col items-center mt-28 max-[1000px]:mt-12  '}>

                <p className={'text-[48px] text-white'}>Game <span className={'text-[#F80AFB]'}>Design</span> </p>

                <div className={'w-full h-[722px] max-[1000px]:h-auto flex flex-col items-center justify-start py-12 max-[1000px]:py-0 max-[1000px]:pb-28 relative max-[1000px]:mt-4 mt-12 '}>

                    <img className={' max-[500px]:w-[80%] w-[60%]  h-fit min-[1000px]:translate-x-10  absolute top-0 left-0 right-0 m-auto '} src={back_layer} alt={'Web3'}/>

                    <div className={'w-full h-[390px] max-[600px]:h-[300px] flex flex-col items-center relative mt-5 '}>

                        <div className={'max-[1000px]:hidden w-full h-full min-[1520px]:translate-y-14'}>
                            <GameSwiper/>
                        </div>
                        <div className={'min-[1000px]:hidden w-full h-full'}>
                            <GameDesignSwiper/>
                        </div>


                    </div>


                </div>

            </div>

            {/*Play & Earn / Fifth section*/}
            <PlayEarn/>


            {/*Token Allocation / sixth section*/}
            <div id={'tokenomics'} className={'w-full h-auto min-h-screen flex flex-col items-center gap-4 max-[600px]:-translate-y-16 mt-0 max-[1000px]:mt-20 '}>

                <p className={'max-[1000px]:hidden text-[48px] text-white'}>Token  <span className={'text-[#F80AFB]'}>Allocation</span> </p>
                <p className={'min-[1000px]:hidden text-[34px] text-white'}>Token  <br/> <span className={'text-[#F80AFB]'}>Allocation</span> </p>

                <TokenAllocation/>

            </div>

            {/*Roadmap / seventh section*/}
            <div id={'roadmap'} className={'w-full h-auto min-[1000px]:min-h-screen flex flex-col items-center justify-center max-[1000px]:justify-start gap-4 mt-0 max-[1000px]:mt-6 '}>

                <p className={'max-[1000px]:text-[34px] text-[48px] tracking-[2px] text-white relative z-10'}>Road<span className={'text-[#00D2FF]'}>map</span> <img className={'w-20 h-20 object-contain absolute -left-8 -top-4 -z-10'} src={chn3} alt={'web3'}/> </p>

                <div className={'w-full  h-[450px]  relative flex flex-col items-center max-[1000px]:mt-20 mt-12'}>

                    <RoadMapSwiper/>

                </div>

            </div>

            {/*Team / eighth  section*/}
            <div id={'team'} className={'w-full h-auto min-h-screen flex flex-col items-center justify-start gap-4 mt-44 max-[450px]:mt-24  '}>

                <p className={'max-[1000px]:text-[34px] text-[48px] tracking-[2px] text-white relative mb-14 z-10'}>Meet The <span className={'text-[#00D2FF]'}>Team!</span></p>

                <Team/>

            </div>

            {/*Footer / ninth section*/}
            <Subscribe/>

            <Footer/>

        </div>
    </>
}