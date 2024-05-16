import React, {useState} from "react";
import backLayer from "../../assets/img/layers/back_layer.png";
import graphic from "../../assets/img/layers/Grafik.png";
import rabbit_huge from "../../assets/img/logo/Logo_rabbit_2xl.png";
import runnin_rabbit from "../../assets/gif/1fiRun(1Sec).gif";
import CircleAnimation from "../CircleAnimation/CircleAnimation";


export default function TokenAllocation() {

    const [percentFill,setPercentFill] = useState(10)

    return<>
        <div className={'w-full h-[937px] max-[500px]:h-[660px] relative flex max-[1000px]:flex-col max-[1000px]:justify-start items-center justify-center max-[1000px]:gap-4 max-[1150px]:gap-12 gap-24 overflow-hidden'}>

            <img className={'absolute top-0 h-full w-full left-0 object-fill'} src={backLayer} alt={'web3'}/>

            <div className={'w-auto max-[1350px]:h-[400px] h-[500px] z-10 flex flex-col items-start justify-between relative duration-300 max-[1000px]:hidden'}>

                <p onMouseEnter={()=>setPercentFill(6)} className={'cursor-default duration-300 hover:scale-110 hover:translate-x-4 text-[20px] text-white translate-x-[83px]'}>Advisors <span className={'text-[25px] text-[#F80AFB]'}>6%</span> </p>
                <p onMouseEnter={()=>setPercentFill(6)} className={'cursor-default duration-300 hover:scale-110 hover:translate-x-0 text-[20px] text-white translate-x-[41px]'}>Growth Fund <span className={'text-[25px] text-[#F80AFB]'}>6%</span> </p>
                <p onMouseEnter={()=>setPercentFill(7)} className={'cursor-default duration-300 hover:scale-110 hover:-translate-x-5 text-[20px] text-white'}>Development <span className={'text-[25px] text-[#F80AFB]'}>7%</span> </p>
                <p onMouseEnter={()=>setPercentFill(9)} className={'cursor-default duration-300 hover:scale-110 hover:translate-x-1 text-[20px] text-white translate-x-[41px]'}>Marketing <span className={'text-[25px] text-[#F80AFB]'}>9%</span> </p>
                <p onMouseEnter={()=>setPercentFill(13)} className={'cursor-default duration-300 hover:scale-110 hover:translate-x-5 text-[20px] text-white translate-x-[83px]'}>Team <span className={'text-[25px] text-[#F80AFB]'}>13%</span> </p>

            </div>

            <div className={'z-10 mt-16'}>
                <p className={'text-[25px] max-[600px]:text-[19px] text-white min-[1000px]:hidden'}><span className={'text-[25px] max-[600px]:text-[19px] text-[#F80AFB]'}>Total Supply</span> <br/>
                    1 000 000 000
                    <span className={'text-[25px] max-[600px]:text-[19px] text-[#F80AFB]'}>     $MR Tokens</span>
                </p>
            </div>


            <div className={'max-[500px]:w-[250px] max-[500px]:h-[250px] min-[1000px]:-translate-x-8  max-[1000px]:mt-12 max-[1000px]:w-[400px] max-[1000px]:h-[400px] max-[1350px]:w-[500px] max-[1350px]:h-[500px] w-[600px] h-[600px] flex flex-col items-center pt-32 z-10 max-[1350px]:translate-y-0 translate-y-20 relative duration-300'}>

                <img className={'absolute top-0 left-0 z-0 m-auto'} src={graphic} alt={'web3'} />
                <img className={'absolute max-[500px]:w-14 max-[500px]:h-14 max-[500px]:top-[38px] max-[500px]:-left-4 max-[1000px]:top-[70px] max-[1000px]:-left-5 -top-40 -z-10 max-[1000px]:w-20 max-[1000px]:h-20  m-auto duration-300'} src={rabbit_huge} alt={'web3'} />
                <img className={'absolute -bottom-8 max-[1350px]:-bottom-0 max-[500px]:bottom-2 object-contain max-[500px]:h-52 max-[500px]:w-44 max-[1350px]:h-80 max-[1350px]:w-52 w-80 h-[512px] duration-300 z-10 '} src={runnin_rabbit} alt={'web3'} />
                <div className={'absolute translate-x-2 w-full h-[93%] top-0 left-0 z-0 m-auto z-0'}>
                    <CircleAnimation fillPercentage={percentFill} />
                </div>



                <p className={'text-[25px] text-white max-[1000px]:hidden'}><span className={'text-[25px] text-[#F80AFB]'}>Total Supply</span> <br/>
                    1 000 000 000 <br/>
                    <span className={'text-[25px] text-[#F80AFB]'}>$MR Tokens</span>
                </p>



            </div>



            <div className={'w-auto max-[1350px]:h-[400px] h-[500px] flex flex-col items-end justify-between z-10 duration-300 max-[1000px]:hidden'}>

                <p onMouseEnter={()=>setPercentFill(20)} className={'cursor-default duration-300 hover:scale-110 hover:-translate-x-5 text-[20px] text-white -translate-x-[83px]'}> <span className={'text-[25px] text-[#F80AFB]'}>20%</span> Rewards </p>
                <p onMouseEnter={()=>setPercentFill(23)} className={'cursor-default duration-300 hover:scale-110 hover:-translate-x-4 text-[20px] text-white -translate-x-[41px]'}> <span className={'text-[25px] text-[#F80AFB]'}>23%</span> Presale </p>
                <p onMouseEnter={()=>setPercentFill(3)} className={'cursor-default duration-300 hover:scale-110 hover:translate-x-8 text-[20px] text-white'}> <span className={'text-[25px] text-[#F80AFB]'}>3%</span> Public Sale </p>
                <p onMouseEnter={()=>setPercentFill(7)} className={'cursor-default duration-300 hover:scale-110 hover:-translate-x-0 text-[20px] text-white -translate-x-[41px]'}> <span className={'text-[25px] text-[#F80AFB]'}>7%</span> Liquidity </p>
                <p onMouseEnter={()=>setPercentFill(6)} className={'cursor-default duration-300 hover:scale-110 hover:-translate-x-12 text-[20px] text-white -translate-x-[95px]'}> <span className={'text-[25px] text-[#F80AFB]'}>6%</span> Seed </p>

            </div>

            {/*For mobile version*/}
            <div className={'min-[1000px]:hidden flex justify-between items-start px-5 z-10 w-full '}>

                <div className={'flex flex-col items-start leading-[20px] text-start'}>

                    <p onClick={()=>setPercentFill(3)} className={'text-[15px] text-white'}> Public Sale <br/> <span className={'text-[20px] text-[#F80AFB]'}>3% </span> </p>
                    <p onClick={()=>setPercentFill(6)} className={'text-[15px] text-white '}> Advisors <br/> <span className={'text-[20px] text-[#F80AFB]'}>6% </span></p>
                    <p onClick={()=>setPercentFill(20)} className={'text-[15px] text-white '}> Rewards <br/> <span className={'text-[20px] text-[#F80AFB]'}>20% </span> </p>

                </div>

                <div className={'flex flex-col items-start leading-[20px] text-start'}>

                    <p onClick={()=>setPercentFill(9)} className={'text-[15px] text-white'}> Marketing <br/> <span className={'text-[20px] text-[#F80AFB]'}>9% </span> </p>
                    <p onClick={()=>setPercentFill(13)} className={'text-[15px] text-white '}> Team <br/> <span className={'text-[20px] text-[#F80AFB]'}>13% </span></p>
                    <p onClick={()=>setPercentFill(6)} className={'text-[15px] text-white '}> Growth Fund  <br/> <span className={'text-[20px] text-[#F80AFB]'}>6%</span> </p>
                    <p onClick={()=>setPercentFill(7)} className={'text-[15px] text-white '}> Development  <br/> <span className={'text-[20px] text-[#F80AFB]'}>7% </span> </p>

                </div>
                <div className={'flex flex-col items-start leading-[20px] text-start'}>

                    <p onClick={()=>setPercentFill(7)} className={'text-[15px] text-white'}> Liquidity  <br/> <span className={'text-[20px] text-[#F80AFB]'}>7% </span> </p>
                    <p onClick={()=>setPercentFill(23)} className={'text-[15px] text-white '}> Presale <br/> <span className={'text-[20px] text-[#F80AFB]'}> 23% </span></p>
                    <p onClick={()=>setPercentFill(6)} className={'text-[15px] text-white '}> Seed <br/> <span className={'text-[20px] text-[#F80AFB]'}>6%</span> </p>

                </div>

            </div>


        </div>
    </>
}