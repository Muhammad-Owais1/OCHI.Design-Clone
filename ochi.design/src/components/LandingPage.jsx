import React from 'react'
import textImg from '../assets/images/hero_text_img.jpg'
import { GoArrowUpRight } from "react-icons/go";

export default function LandingPage() {
    return (
        <div className='relative w-full h-screen bg-zinc-100 pt-1'>
            <div className='textstructure mt-[150px] px-20'>

                {
                    ['We Create', 'Eye-Opening', 'Presentations'].map((item, index) => (
                        <div key={index} className="masker flex items-center gap-[0.5vw]">
                            { index === 1 && (<div className='mt-[0.7vw] w-[fit-content] h-[fit-content] rounded-[0.5vw] overflow-hidden'><img className='h-[6.1vw]' src={ textImg } alt="" /></div>) }
                            <h1 className='uppercase tracking-tighter text-[7.5vw] leading-none font-["Oswald"] font-bold'>
                                {item}
                            </h1>
                        </div>
                    ))
                }

            </div>
            <div className='absolute w-full bottom-0 border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center px-20'>
                {
                    ['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                        <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                    ))
                }
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 my-3 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full'>start the project</div>
                    <div className='my-3 w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
