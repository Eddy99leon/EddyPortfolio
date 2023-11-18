import React from 'react'
import CardProject from './CardProject'
import { Projects } from '../assets/data';

const Fullstack = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-12'>
      {Projects.filter((Project) =>{
        return Project.Category === "fullstack"
      }).map((Project) => {
        return <CardProject Project={Project} key={Project.id} />
      })}
    </div>
  )
}

export default Fullstack