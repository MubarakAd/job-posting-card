import React from 'react'
import { JobPosting } from '../component/Interfacedeclaration/Interface.d'
import data  from '../data/jobs.json'
import { CiCircleCheck } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import Page2button from '../component/button/page2button';
import Image from 'next/image';



//   interface PageProps {
//     job: JobPosting ;
//   }
  
  export default function Page({ params: {title} }: { params: {title:string }}) {
    const list = data.job_postings
    const Title = title.replace(/%20/g, ' ')
    const job = list.find(ele => ele.title === Title)
    return(
        <div className='flex justify-center  mt-3 ml-7 mr-2'>
         <div className='w-3/4 mr-4 p-4'>
           <div className='my-5'>
         <h2 className=' mt-10 mb-2 font-san font-bold text-lg my-1.5'>Description</h2>
         <p className='text-black  w-5/6 font-serif text-sm'>{job?.description}</p>
         </div>
        
         <div className=''>
         <h2 className='mt-10 mb-5 font-san font-bold text-lg my-1.5'>Responsibilities</h2>
         
            {job?.responsibilities.map((ele,ind)=>
            <div className='flex my-1.5'><  CiCircleCheck className='text-green-600 pt-0.5 text-xl' /><p className='ml-3 text-sm'>{ele}</p>
            </div>
            )}
         </div>
         <div>
         <h2 className=' mt-10 mb-3 font-san font-bold text-lg my-1.5'>Ideal Candidate We Want</h2>
        <ul className=" list list-disc ml-5">
            <li className='my-1.5'><p className='text-sm'>Young (18-25 Years old) Female Social Media Manager</p></li>
            {job?.ideal_candidate.traits.map((trait)=>
             <li className='my-1.5' ><p className='w-4/5 text-sm'>{trait}</p></li> )}
        </ul>
         </div>
         <div>
         <h2 className='mt-10 mb-5 font-san font-bold text-lg my-1.5'>When & Where</h2>
         <div className='flex mb-10'>
        
         <div className='mr-3  '>
                <img src="/asset/location.png" width={32} height={32}  alt="" />
                </div>
         <p className='text-sm'>{job?.when_where}</p>

         </div>
         


         </div>
         
         </div>
         <div className='w-1/4'>
         <h2 className='font-san font-bold text-xl my-1.5'>About</h2>
         <div className='flex'>
            <div>
                <div className='flex mb-4 mt-3'>
                    <div className="mr-3">
               <img src="/asset/circleplus.png" alt=""  width={32} height={32}/>
                    </div>
                
                    <div>
                    <p className='text-gray-300 text-sm'>Posted On</p>
                    <p className='text-sm'>{job?.about.posted_on}</p>
                    </div>
                
           
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/deadlin.png" width={32} height={32} alt="" /> 
                </div>
           
                <div>
                <p className='text-gray-300 text-sm'>Deadline</p>
                <p className='text-sm'>{job?.about.deadline}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3 '>
                <div className='mr-3  '>
                <img src="/asset/location.png" width={32} height={32}  alt="" />
                </div>
          
                <div>
                <p className='text-gray-300 text-sm'>Location</p>
                <p className='text-sm'>{job?.about.location}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/startday.png" width={32} height={32} alt="" />
                </div>
            
                <div>
                <p className='text-gray-300 text-sm'>Start Date</p>
                <p className='text-sm'>{job?.about.start_date}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/endDay.png" width={32} height={32} alt="" />
                </div>
            
                <div>
                <p className='text-gray-300 text-sm'>End Date</p>
                <p className='text-sm'>{job?.about.end_date}</p>
                </div>
            
            
            </div>
            </div>
         
         </div>
         <div className='mt-3 mr-2 space-x-4 border-t-2 border-b-2 border-gray-400 py-2'>
         <h2 className='font-san font-bold text-lg my-1.5'>Catagories</h2>
         <Page2button/>
         </div>
         <div className='mt-5'>
         <h2 className='font-san font-bold text-lg my-1.5'>Required Skills</h2>

         <div className='grid grid-cols-2 gap-4'>
            {job?.about.required_skills.map((item)=>
            <><div className='flex'>
                    <p className=' bg-gray-50 border rounded text-sm text-blue-300 p-1.5'>{item}</p>
                   
                </div>
                </> )}
         </div>

         </div>
        
         </div>
         </div>
      
    
    )
  }