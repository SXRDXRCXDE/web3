import React, {useState} from "react";
import style from "./style.module.css";

import logo from "../../assets/img/logo/Logo.png";
import {CgMenuRightAlt} from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";
import header_layer from "../../assets/img/layers/header_layer.png";

export default function Header() {

    const [isOpen,setOpen] = useState(false);

    const NavLinks = [
        {
            title: "Home",
            to: "home"
        },
        {
            title: "About Us",
            to: "about"
        },
        {
            title: "Tokenomics",
            to: "tokenomics"
        },
        {
            title: "Roadmap",
            to: "roadmap"
        },
        {
            title: "Team",
            to: "team"
        },
        {
            title: "Litepaper",
            to: "litepaper"
        },
    ]

    return<>
        <div className={style.container}>

            <div className={'w-full h-full relative flex flex-col items-center justify-center'}>

                <img className={'min-[1000px]:hidden absolute top-0 left-0 w-full h-fit  object-contain'} src={header_layer} alt={'web3'}/>

                <div className={'flex flex-row items-end gap-20 relative '}>

                    <a href={'/'} className={'w-64 h-20 max-[1000px]:w-[160px] max-[1000px]:h-[50px] overflow-hidden flex items-center justify-center '}>

                        <img className={'w-full h-full object-contain'} src={logo} alt={'Web3 Logo'}/>

                    </a>

                    <div className={'flex items-center gap-10 text-white max-[1000px]:hidden'}>

                        {NavLinks.map((value, index)=> <a key={index} className={'hover:text-[#F80AFB] duration-300 text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '} href={`#${value.to}`}>{value.title}</a>)}

                    </div>

                </div>

                <div onClick={()=>setOpen(!isOpen)} className={'absolute top-11 right-4 text-4xl text-white min-[1000px]:hidden'}>
                    <CgMenuRightAlt />
                </div>

                <div className={` ${isOpen? `right-0`:`-right-[100vw]`} top-0 duration-300 fixed w-full h-[330px] bg-[#0B0822] flex flex-col items-end min-[1000px]:hidden `}>
                    <div className={'w-full h-full relative flex flex-col items-end relative px-10 pt-20'}>

                        <div onClick={()=>setOpen(!isOpen)} className={'absolute top-4 right-4 text-4xl text-white '}>
                            <AiOutlineClose />
                        </div>

                        <div className={'flex flex-col items-end gap-1.5 text-white'}>

                            {NavLinks.map((value, index)=> <a key={index}  className={'hover:text-[#F80AFB] duration-300 text-[20px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '} href={`#${value.to}`}>{value.title}</a>)}

                        </div>

                    </div>

                </div>


            </div>

        </div>
    </>
}