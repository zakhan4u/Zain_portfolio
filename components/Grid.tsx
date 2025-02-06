'use client'
import React from 'react'

import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import {gridItems} from '../data/index'

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map
        ((item, i)=>(
            <BentoGridItem
            id = {item.id}
            key = {item.id}
            title = {item.title}
            description = {item.description}
            img = {item.img}
            className={item.className}
            imgClassName={"item.imgClassName"}
            />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
