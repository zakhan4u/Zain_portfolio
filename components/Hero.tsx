'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='-top-30 -left-20' fill='white'/>
            <Spotlight className='top-60 -left-30' fill='blue'/>
            <Spotlight className='top-70 left-40' fill='purple'/>
            <Spotlight className='top-90 left-50' fill='white'/>
        </div>
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
     
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
     
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> Dynamic web magic with Next.js</h2>
        <TextGenerateEffect
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        words='Give shapes to your ideas in a more professional way'/>
<p> Hi, I am Zain ul Abadin, I am Next.js Developer.</p>
<a href='#about'>
  <MagicButton
title='Show my work'
icon={<FaLocationArrow/>}
position='right'
/>
</a>
      </div>

    </div>
    </div>
  )
}

export default Hero
