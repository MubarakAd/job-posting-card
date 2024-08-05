import React from 'react'
import { JobPosting } from '../Interfacedeclaration/Interface.d'
import Image from 'next/image';
import Button from '../button/button';

interface JobCardProps {
    job: JobPosting;
  }

  const Cards: React.FC<JobCardProps> = ({ job }) => {
    

  return (
    <div className=' flex justify-center  mb-3 mt-5 mx-20'>
      <div className='bg-gray-100 w-5/6  ml-10 flex justify-center border border-gray-300 py-3 rounded-2xl '>
      <div className=' mr-7 pt-3'>
            <Image src={job.image} alt="" width={50} height={50} />
        </div>
        <div className='w-3/4 pt-3'>
            <h2 className='font-san font-bold text-lg my-1.5'>{job.title}</h2>
            <p className='text-gray-500 my-1.5'>{job.about.location}</p>
            <p className='font-serif text-md'>{job.description}</p>
            <Button/>
        </div>
        </div>
        
    </div>
  )
}

export default Cards