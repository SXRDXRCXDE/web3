import React from "react";
import logo from "../../assets/img/logo/Logo.png";
import {FaInstagram, FaYoutube} from "react-icons/fa";
import {RiTwitterXFill} from "react-icons/ri";

export default function Footer() {


    const NavLinks = [
        {
            title: "Home",
            to: "#"
        },
        {
            title: "About Us",
            to: "#"
        },
        {
            title: "Tokenomics",
            to: "#"
        },
        {
            title: "Roadmap",
            to: "#"
        },
        {
            title: "Team",
            to: "#"
        }
    ]

    const footerLinks = [
        {
            title: "Litepaper",
            to: "#"
        },
        {
            title: "Legal Disclaimer",
            to: "#"
        },
        {
            title: "Privacy & Policy",
            to: "#"
        },
        {
            title: "Token Holder Agreement",
            to: "#"
        }
    ]

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
        <div className={'w-full h-auto flex flex-col items-center max-[1000px]:mt-10 max-[1300px]:px-3'}>

            <div className={'w-full max-w-[1200px] flex flex-col items-center gap-3 '}>

                <div className={'w-full flex items-center justify-between'}>

                    <div className={' max-[500px]:w-32 max-[500px]:h-8 w-42 h-14 overflow-hidden flex items-center justify-center '}>

                        <img className={'w-full h-full object-contain'} src={logo} alt={'Web3 Logo'}/>

                    </div>

                    <div className={'flex items-center gap-5 text-white max-[1000px]:hidden'}>

                        {NavLinks.map((value, index)=> <a key={index} href={value.to} className={'hover:text-[#F80AFB] duration-300 text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '} >{value.title}</a>)}

                    </div>

                    <div className={' flex items-center gap-3 '}>
                        {Social_links.map((value, index)=> <a key={index} href={value.url} className={'flex items-center justify-center duration-300 hover:text-[#F80AFB] max-[500px]:text-2xl text-4xl text-white'}>
                            {value.icon}
                        </a>)}
                    </div>

                </div>

                <div className={'w-full h-0.5 bg-[#F80AFB]'}></div>

                <div className={'w-full flex max-[1000px]:flex-col-reverse max-[1000px]:items-start items-center justify-between'}>

                    <div className={'text-[#F80AFB] text-[12px] max-[500px]:text-[8px]'}>Ⓒ 2023 Martial Rabbits. All rigths reserved.</div>

                    <div className={'flex items-center max-[500px]:w-full max-[500px]:gap-0 max-[500px]:justify-between gap-5 text-white text-start'}>

                        {footerLinks.map((value, index)=> <a key={index} className={` ${window.innerWidth<1000? index===0? `hidden` :``:`` } hover:text-[#F80AFB] duration-300 max-[500px]:text-[8px] text-[12px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] `} href={value.to}>{value.title}</a>)}

                    </div>

                </div>

            </div>

        </div>
    </>
}