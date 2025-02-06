import React from 'react'
import { workExperience } from '@/data'
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div>
        <h1 className='heading pb-10'>
            A small selection of {' '}
            <span className='text-purple'> Recent Experience </span>
        </h1>
    <div className='flex flex-row px-8 justify-between'>
       
{workExperience.map((experience)=>(
    <div key={experience.id}>
      
        <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        className="bg-white w-full h-full flex flex-wrap dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
         <h1 className='text-2xl'>{experience.title}</h1>
       <div> {experience.desc}</div>
       
        <img src={experience.thumbnail} alt="" />
      </Button>
    </div>
))}
    </div>
    </div>
  )
}

export default Experience