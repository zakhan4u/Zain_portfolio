import React from 'react'
import { projects } from '@/data'
import { PinContainer } from "./ui/3d-pin"

const Recentprojects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'> Recent Projects </span>
        </h1>
        <div className='flex flex-wrap flex-row items-center justify-center p-4 mt-10 gap-2'>
            {projects.map((project)=>(
                <div className="h-[35rem] flex items-center justify-center "
                key={project.id}>
                <PinContainer
                  title={project.title}
                  href={project.link}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {project.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {project.des}
                      </span>
                    </div>
                    <div className="flex flex-1" />
                    <img src={project.img} alt="" />
                  </div>
                  <div className='flex flex-row'>
                  {project.iconLists.map((icon,index)=>(
                    <img src={icon} alt={icon} 
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}/>
                  ))}
                  </div>
                </PinContainer>
              </div>

            ))}
             </div>
    </div>
  )
}

export default Recentprojects