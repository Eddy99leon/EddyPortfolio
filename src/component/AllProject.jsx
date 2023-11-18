import React, { useContext } from 'react'
import CardProject from './CardProject';
import { Projects } from '../assets/data';

const AllProject = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-12'>
      {Projects.map((Project) => {
        return <CardProject Project={Project} key={Project.id} />
      })}
    </div>
  )
}

export default AllProject