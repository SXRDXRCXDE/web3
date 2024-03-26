import React, {useState} from "react";
import style from "./style.module.css";

import logo from "../../assets/img/logo/Logo.png";
import {Link} from "react-router-dom";
import {CgMenuRightAlt} from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";

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

                <div className={'flex flex-row items-center gap-5 relative '}>

                    <div className={'w-42 h-14 overflow-hidden flex items-center justify-center '}>

                        <img className={'w-full h-full object-contain'} src={logo} alt={'Web3 Logo'}/>

                    </div>

                    <div className={'flex items-center gap-5 text-white max-[1000px]:hidden'}>

                        {NavLinks.map((value, index)=> <a key={index} className={'hover:text-[#F80AFB] duration-300 text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '} href={`#${value.to}`}>{value.title}</a>)}

                    </div>

                </div>

                <div onClick={()=>setOpen(!isOpen)} className={'absolute top-4 right-4 text-4xl text-white min-[1000px]:hidden'}>
                    <CgMenuRightAlt />
                </div>

                <div className={` ${isOpen? `right-0`:`-right-[100vw]`} top-0 duration-300 absolute w-full h-[330px] bg-[#0B0822] flex flex-col items-end min-[1000px]:hidden `}>
                    <div className={'w-full h-full relative flex flex-col items-end relative px-10 pt-20'}>

                        <div onClick={()=>setOpen(!isOpen)} className={'absolute top-4 right-4 text-4xl text-white '}>
                            <AiOutlineClose />
                        </div>

                        <div className={'flex flex-col items-end gap-1.5 text-white'}>

                            {NavLinks.map((value, index)=> <Link key={index}  className={'hover:text-[#F80AFB] duration-300 text-[20px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '} to={value.to}>{value.title}</Link>)}

                        </div>

                    </div>

                </div>


            </div>

        </div>
    </>
}