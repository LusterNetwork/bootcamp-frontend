import React from 'react'
import {IoMdDownload} from "react-icons/io"

const NewBootCampCurriculum = () => {

  return (
    <div className='pt-8 mb-12'>

        <h1 className='text-4xl md:text-6xl mb-16 font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='md:w-[80%] text-lg md:text-2xl'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 100+ hours of learning, 10+ Web3 projects, doubt solving...</p>
            <a href='/NewBootCamp_Curriculum.pdf' download="NewBootCamp_Curriculum.pdf" ><button className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-evenly bg-gradient-to-r from-indigo-900 to-slate-900 md:w-[75%] w-[90%] mx-auto rounded-lg shadow-md border-2'>
            <div className='items-center text-xl my-3 text-center md:mr-12'>
                <p className='text-neutral-100 font-semibold mb-2'>8</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>3</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center text-xl my-3 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>NFT certificate</p>
                <p className='font-semibold flex items-center'>On completion</p>
            </div>
        </div>
    </div>
  )
}

export default NewBootCampCurriculum