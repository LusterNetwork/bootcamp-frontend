import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
import { SolutionContent, TeamInfo } from '../components/page components';
import {BsLinkedin, BsPlusLg} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/effect-creative";
import { faqs, reviews } from '../constants';

const Home = () => {
    const [content, setContent] = useState('Educator');
    const [source, setSource] = useState('/assets/backbone/educator.jpg');
    const [name, setName] = useState('Kajal Singh');
    const [Linkedin ,setLinkedin] = useState('https://www.linkedin.com/in/kajal-singh-3527a742');

    const educatorHandler = () => {
        setContent('Educator')
        setSource('/assets/backbone/educator.jpg')
        setName('Kajal Singh')
        setLinkedin('https://www.linkedin.com/in/kajal-singh-3527a742')
    }
    const mentorHandler = () => {
        setContent('Mentor')
        setSource('/assets/backbone/mentor.jpg')
        setName('Akshay Kurhekar')
        setLinkedin('https://www.linkedin.com/in/akshay-kurhekar-64438a168')
    }

    const programmanagerHandler = () => {
        setContent('Programmanager')
        setSource('/assets/backbone/manager.jpeg')
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }
    const placementcellHandler = () => {
        setContent('Placementcell')
        setSource('/assets/backbone/manager.jpeg')
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }

    const clickButton = " border p-3 md:text-2xl font-semibold my-2 rounded-xl bg-gradient-to-r from-[#58AFEF] to-[#9374DC] mx-2 md:mx-8"
    const unclickedButton = "border p-3 rounded-xl font-semibold md:text-2xl my-2 hover:bg-gray-800 mx-2 md:mx-8"


    //solution buttons and renders
    const [contentSol, setContentSol] = useState('Placement');

    const placementHandler = () => {
        setContentSol('Placement')
    }
    const mentorshipHandler = () => {
        setContentSol('Mentorship')
    }
    const experienceHandler = () => {
        setContentSol('Experience')
    }
    const learningHandler = () => {
        setContentSol('Learning')
    }
    const ecosystemHandler = () => {
        setContentSol('Ecosystem')
    }

    const clickButtonSol = " border py-3 px-4 md:text-2xl font-semibold my-2 rounded-xl bg-gradient-to-r from-[#58AFEF] to-[#9374DC] mx-8"
    const unclickedButtonSol = "border py-3 px-4 rounded-xl font-semibold md:text-2xl my-2 hover:bg-gray-800 mx-8"

    return (
    <main className=''>
       {/* hero section */}
       <div className='grid grid-cols-1 md:grid-cols-2  mx-auto items-center md:py-32 py-6 my-9 gap-5 min-h-[100vh] w-[75%]  md:p-4'>
      
      <div className="col-span-1 mt-12 place-self-center md:w-[80%]">
        <p className="text-5xl md:text-7xl font-semibold">Learn Web3,</p>
        <p className="text-5xl md:text-7xl font-semibold">Get Certified,</p>
        <p className="text-5xl md:text-7xl font-semibold">Land a job</p>
        <p className="text-2xl my-8">We are on the mission to upskill 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
        <div className="flex flex-wrap">
        <Link 
          to='/register' 
          className='h-[4rem] text-3xl transform transition duration-500 hover:scale-105 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'
        >
          Register now!
        </Link>
            {/* <Link 
            href='/eligibility' 
            className='h-[4rem] md:ml-3 md:px-3 text-xl my-2 flex font-semibold border-transparent rounded-lg items-center justify-center'
            >
            <BsSearch className="mr-2"/>
            Check your eligibility
            </Link> */}
            </div>

        </div>

        <div className="col-span-1 place-self-center">
            <img src="/assets/landing.png" alt="web_landing" width={800} height={800}  className="h-[90%] w-[90%] mx-auto" />
        </div>
        
        </div>


        {/* bootcamp section */}
        <section id='bootcamp' className='md:p-24 '>
            <div className='box-content bg-gradient-to-r text-center flex flex-col justify-center from-[#9374DC] to-[#58AFEF] rounded-md'>

                <p className='text-5xl mt-24 md:text-7xl font-semibold'>Bootcamps</p>

                <div className='grid grid-cols-1 md:grid-cols-1 gap-6 py-16 mb-24'>

               
                <div className='bg-black flex flex-col items-center col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer  md:w-[20%] animate-pulse hover:animate-none hover:scale-125 transition-all'>
                    <Link to='/bootcamps/ethereum'>
                    <img src='/assets/ethereum.png' alt="ethereum" width={200} height={200} className='w-[80%] mx-auto' />
                    <p className='text-4xl font-semibold'>Ethereum</p>
                    <p className='text-2xl font-semibold'>(click to explore)</p>
                    </Link>
                </div>

                </div>

            </div>
        </section>


        {/* perks section */}
        <div className='grid grid-cols-1 md:grid-cols-2 py-2 md:pt-20 my-[7rem] gap-5 md:w-[85%] w-[90%] mx-auto'>
      
            <div className='col-span-1'>
                <p class="text-4xl md:text-7xl font-semibold mb-3">Perks of learning web3</p>
                <ul class="list-disc">
                <li class="flex items-center text-xl md:text-3xl py-2">
                    <p>No 4 year degree</p>
                </li>
                <li class="flex items-center text-xl md:text-3xl py-2">
                    <p>Mostly remote</p>
                </li>
                <li class="flex items-center text-xl md:text-3xl py-2">
                    <p>Job market is global</p>
                </li>
                <li class="flex items-center text-xl md:text-3xl py-2">
                    <p>Demand is extremely high!</p>
                </li>
                <li class="flex items-center text-xl md:text-3xl py-2">
                    <p>You can choose to be anonymous</p>
                </li>
                </ul>
            </div>

            <div className="col-span-1 hidden md:block place-self-center">
                <img src='/assets/web.png'  width={700} height={700} alt="web_landing" className="md:h-[80%] md:w-[80%]" />
            </div>
            
        </div>


        {/* teams section */}
        <section className="flex flex-col text-center min-h-[90vh] mb-16">
        <span className=' m-auto w-full text-3xl md:text-5xl'>Meet Your Backbone</span>

        <div className="flex flex-col w-full justify-center">
            <div className="w-[100%] mt-6 mb-16">
                <button className={`${content==='Educator'? `${clickButton}` : `${unclickedButton}`}`} onClick={educatorHandler}> Educator </button>
                <button className={`${content==='Mentor'? `${clickButton}` : `${unclickedButton}`}`} onClick={mentorHandler}> Mentor </button>
  
                <button className={`${content==='Placementcell'? `${clickButton}` : `${unclickedButton}`}`} onClick={placementcellHandler}> Placement Cell </button>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:gap-4'>

                <div className="flex flex-col col-span-1 mb-12 md:mb-0 md:mr-16 place-self-center items-center">
                    <img src={source} alt={content} className="h-[13rem] md:h-[20rem] w-[13rem] md:w-[20rem] shadow-sm shadow-white rounded-full object-cover" />
                    <div className='mt-4 flex items-center text-center text-3xl'>
                        <h1 className='font-bold'>{name}</h1>
                        <a href={Linkedin} target="_blank" className="ml-3 text-2xl"><BsLinkedin /></a>
                    </div>
                </div>

                <div className="col-span-1 px-4 md:px-0 text-left place-self-center">
                    <TeamInfo content={content} />
                </div>
            </div>

        </div>
        </section>

        {/* reviews section */}
        <section className='px-8 md:px-16'>
            <p className=' pt-12 text-5xl font-semibold text-white items-center text-center my-6'>Reviews</p>
            <div className='block md:hidden w-[95%] mx-auto'>
            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={true}
                >
                    {reviews.map((person,i) => (
                        <SwiperSlide key={i}>
                            <div className='flex flex-col p-8 items-center bg-gradient-to-r from-indigo-900 to-blue-900 justify-center rounded-md mb-10'>
                                <picture className='flex items-center justify-center'>
                                <img
                                    src={person.image}
                                    alt="Landscape picture"
                                    className="w-[15rem] rounded-full object-cover h-[15rem]"
                                    lazy={true}
                                />
                                </picture>
                                <p className='text-2xl my-4'>{person.name}</p>
                                <p className='text-left'>{person.review}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            <div className='hidden md:block'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={true}
                    navigation={true}
                >
                    {reviews.map((person,i) => (
                        <SwiperSlide key={person.name}>
                            <div className='flex h-[30rem] flex-col p-8 items-center w-[28rem] bg-gradient-to-r from-indigo-900 to-blue-900 shadow-md rounded-3xl justify-center m-20 mx-auto'>
                                <picture>
                                <img
                                    src={person.image}
                                    alt="Landscape picture"
                                    className="w-[15rem] rounded-full object-cover h-[15rem]"
                                />
                                </picture>
                                <p className='text-2xl my-4'>{person.name}</p>
                                <p className='text-left'>{person.review}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            
        </section>


        {/* partners section */}
        <section className='flex flex-col items-center justify-center my-5 mt-[8rem]'>
            <p className='text-center text-xl md:text-5xl font-semibold mb-[2.5rem]'>Our Partners</p>
            <section className='flex flex-wrap justify-center gap-6 w-[75%] mx-auto'>
            <article>
                <img src='/assets/sphereon.png' height={300} width={300}/>
            </article>
            <article>
                <img src='/assets/trikon.png' height={300} width={300}/>
            </article>
            <article className='flex gap-4 items-center'>
                <img src='/assets/coders-world.png' height={90} width={90}/>
                <h1 className='font-semibold text-3xl text-yellow-500'>Coders world</h1>
            </article>
            <article className='flex gap-4 items-center'>
                <img src='/assets/ethereum.png' height={90} width={90}/>
                <h1 className='font-semibold text-3xl text-blue-400'>Ethereum</h1>
            </article>
            </section>
        </section>

        {/* solutions section */}
        <section className='mx-8 hidden md:block md:mx-24 border-white md:mt-[12rem] mb-24 pb-12'>
        <p className='text-6xl font-semibold text-center my-12'>Why us?</p>

        <div className=' flex flex-row md:flex-col items-center justify-center '>

            <div className="flex flex-col md:flex-row justify-center items-center">
                <button className={`tab ${content==='Placement'? `${clickButtonSol}` : `${unclickedButtonSol}`}`} onClick={placementHandler}> Placement </button>
                <button className={`tab ${content==='Mentorship'? `${clickButtonSol}` : `${unclickedButtonSol}`}`} onClick={mentorshipHandler}> Mentorship </button>
                <button className={`tab ${content==='Experience'? `${clickButtonSol}` : `${unclickedButtonSol}`}`} onClick={experienceHandler}> Experience </button>
                <button className={`tab ${content==='Learning'? `${clickButtonSol}` : `${unclickedButtonSol}`}`} onClick={learningHandler}> Learning </button>
                <button className={`tab ${content==='Ecosystem'? `${clickButtonSol}` : `${unclickedButtonSol}`}`} onClick={ecosystemHandler}> Ecosystem </button>
            </div>
            
                <div
                    className='mt-12'
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <SolutionContent content={contentSol} />
                </div>
        
        </div>
        </section>

        {/* FAQs section */}
        <section className='px-8 md:px-24'>

        <p className='text-center text-7xl mt-24 mb-[2.5rem]'>FAQs</p>

            {faqs.map((item, i) => {
                return (
                <>
                <div key={item.ques} className={`overflow-hidden md:mx-24 `}>
                    <label>
                    <input className='absolute opacity-0 peer' type="checkbox"></input>
                    <div className='flex items-center cursor-pointer border rounded-xl border-white justify-between'>
                        <div className='p-5'>
                            <p className=' m-0 md:text-xl font-semibold'>{item.ques}</p>
                        </div>
                        <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
                    </div>

                    <div className='peer-checked:border rounded-lg border-white mt-2 mb-6 bg-blue-900 max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{item.ans}</p></div>

                    </label>
                </div>
                </>)})}
        </section>
    </main>
  )
}

export default Home