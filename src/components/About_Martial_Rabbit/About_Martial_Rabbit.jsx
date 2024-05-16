import React from "react";
import martial from "../../assets/img/layers/martial.png";
import martial_mobile from "../../assets/img/layers/about_martial_mobile.png";
import martial_rabbit from "../../assets/img/layers/martial_rabbit.png";
import rabbithead from "../../assets/img/logo/rabbit_logo.png";
import martial_big from "../../assets/img/layers/martial_big.png";

export default function About_Martial_Rabbit() {

    const AboutMartialCards = [
        {
            title: 'Captivating',
            category : 'Storylines'
        },
        {
            title: 'Seasonal',
            category : 'Events'
        },
        {
            title: 'Thrilling',
            category : 'Missions'
        },
        {
            title: 'World',
            category : 'Building'
        },
        {
            title: 'PVP',
            category : 'Battles'
        },
        {
            title: 'Single',
            category : 'Player'
        },
        {
            title: 'Multi',
            category : 'Player'
        },
    ]

    return<>
        <div className={'w-full max-[600px]:h-[410px] max-[1250px]:h-[450px] max-[1400px]:h-[600px] min-[1400px]:h-[705px] flex flex-col items-center justify-between py-12 max-[1000px]:px-0 px-16 relative '}>

            <img className={'w-full h-fit object-fill  absolute -top-44 left-0 max-[1000px]:hidden'} src={martial_big} alt={'Web3'}/>
            <img className={'w-full h-full object-fill  absolute top-0 left-0 min-[1000px]:hidden '} src={martial_mobile} alt={'Web3'}/>
            <img className={'w-fit h-[878px] min-[1450px]:hidden max-[600px]:max-w-[130px] max-[600px]:max-h-[300px] max-[1000px]:h-[550px] min-[1000px]:object-cover max-[1000px]:translate-x-3 absolute min-[1000px]:bottom-[30px] max-[1000px]:right-0 max-[1000px]:left-0 max-[1000px]:m-auto max-[1200px]:-right-9 max-[1000px]:bottom-1 min-[1000px]:hidden right-0 '} src={martial_rabbit} alt={'Web3'}/>

            <div className={'w-full h-full min-[1450px]:mt-14  flex flex-col items-center justify-between z-10'}>

                <div className={'w-96 h-20 max-[600px]:w-48 max-[600px]: max-[1000px]:w-60 rounded bg-[#F80AFB8A] cursor-default max-[1000px]:border-black max-[1000px]:border-2 flex items-center justify-center text-center '}>
                    <span className={'text-[19px]  max-[600px]:text-[15px] max-[600px]:leading-[15px] max-[600px]:tracking-[0.3px] tracking-[5px] text-white min-[600px]:font-outline-2 '}>Free-To-Play and Play & Earn Experiences.</span>
                </div>

                <div className={'w-full h-auto min-[1450px]:-translate-y-10 min-[1550px]:translate-y-5 min-[1650px]:translate-y-32 min-[1800px]:translate-y-64 flex flex-col items-center max-[1000px]:hidden gap-x-28 '}>

                    <div className={'w-auto flex items-center gap-8'}>

                        {AboutMartialCards.slice(0,4).map((value, index)=> <div key={index} className={'duration-300 hover:scale-110 hover:-translate-y-1 cursor-default pb-1 px-3 gap-3 max-[1200px]:gap-1 max-[1000px]:p-0 max-[1000px]:bg-transparent rounded m-3 flex bg-[#F80AFB8A] items-center'}>

                            <img className={'w-11 h-11 object-contain max-[1000px]:hidden'} src={rabbithead} alt={'rabbit logo'}/>

                            <div className={'flex flex-col max-[1200px]:tracking-[0.5px] tracking-[5px] leading-[21px] items-start'}>
                                <span className={'text-[18px] text-white font-outline-2 '}>{value.title}</span>
                                <span className={'text-[25px] text-[#F80AFB] font-outline-2'}>{value.category}</span>
                            </div>


                        </div>)}

                    </div>

                    <div className={'w-auto flex items-center gap-8'}>

                        {AboutMartialCards.slice(4,8).map((value, index)=> <div key={index} className={' duration-300 hover:scale-110 hover:-translate-y-1 cursor-default pb-1 px-3 max-[1200px]:gap-1 gap-3 max-[1000px]:p-0 max-[1000px]:bg-transparent rounded m-3 flex bg-[#F80AFB8A] items-center'}>

                            <img className={'w-11 h-11 object-contain max-[1000px]:hidden'} src={rabbithead} alt={'rabbit logo'}/>

                            <div className={'flex flex-col max-[1200px]:tracking-[0.5px] tracking-[5px] leading-[21px] items-start'}>
                                <span className={'text-[18px] text-white font-outline-2 '}>{value.title}</span>
                                <span className={'text-[25px] text-[#F80AFB] font-outline-2'}>{value.category}</span>
                            </div>


                        </div>)}

                    </div>

                </div>

                <div className={'w-full h-auto flex flex-col items-center min-[1000px]:hidden '}>

                    <div className={'w-full flex justify-between items-start'}>

                        <div className={'flex flex-col items-start gap-3'}>

                            {AboutMartialCards.slice(0,3).map((value, index)=> <div key={index} className={'py-2 px-3 gap-3 max-[1000px]:p-0 max-[1000px]:bg-transparent rounded m-3 flex bg-[#F80AFB8A] items-center'}>

                                <img className={'w-11 h-11 object-contain max-[1000px]:hidden'} src={rabbithead} alt={'rabbit logo'}/>

                                <div className={'flex flex-col leading-[21px] items-start'}>
                                    <span className={'text-[15px] text-white font-outline-2 '}>{value.title}</span>
                                    <span className={'text-[19px] text-[#F80AFB] font-outline-2'}>{value.category}</span>
                                </div>


                            </div>)}

                        </div>

                        <div className={'flex flex-col items-start gap-3'}>

                            {AboutMartialCards.slice(3,6).map((value, index)=> <div key={index} className={'py-2 px-3 gap-3 max-[1000px]:p-0 max-[1000px]:bg-transparent rounded m-3 flex bg-[#F80AFB8A] items-center'}>

                                <img className={'w-11 h-11 object-contain max-[1000px]:hidden'} src={rabbithead} alt={'rabbit logo'}/>

                                <div className={'flex flex-col leading-[21px] items-start'}>
                                    <span className={'text-[15px] text-white font-outline-2 '}>{value.title}</span>
                                    <span className={'text-[19px] text-[#F80AFB] font-outline-2'}>{value.category}</span>
                                </div>


                            </div>)}

                        </div>


                    </div>

                    <div className={'flex flex-col gap-3'}>
                        {AboutMartialCards.slice(6,7).map((value, index)=> <div key={index} className={'py-2 px-3 gap-3 max-[1000px]:p-0 max-[1000px]:bg-transparent rounded m-3 flex bg-[#F80AFB8A] items-center'}>

                            <img className={'w-11 h-11 object-contain max-[1000px]:hidden'} src={rabbithead} alt={'rabbit logo'}/>

                            <div className={'flex flex-col leading-[21px] items-start'}>
                                <span className={'text-[15px] text-white font-outline-2 '}>{value.title}</span>
                                <span className={'text-[19px] text-[#F80AFB] font-outline-2'}>{value.category}</span>
                            </div>


                        </div>)}
                    </div>

                </div>

            </div>

        </div>
    </>
}