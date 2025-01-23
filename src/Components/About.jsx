import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import AnimatedTitle from './AnimatedTitle';
import { Container } from 'postcss';
export default function About() {

    useGSAP(()=>
    {
        const clipAnimation=gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        });
        clipAnimation.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            borderRadius:0,

        })
    })

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className='font-general text-sm uppercase md:text-[27px]'>
                welcome to zentry
            </h2>
            <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />
            
            <div className='about-subtext'>
                <p>The game of Games Begins-your life, now an epic MMORPG</p>
                <p>Zentry Unites Every Player from Countless Games and Platforms </p>
            </div>
        </div>
        <div className='h-dvh w-screen ' id='clip'>
            <div className='mask-clip-path  about-image'>
                <img  className='absolute left-0 top-0 size-full object-cover' src="img/about.webp" alt="" />
            </div>

        </div>
      
    </div>
  )
}
