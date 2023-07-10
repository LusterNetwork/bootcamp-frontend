import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import {IoMdDownload} from "react-icons/io"

const AiCurriculum = () => {

    const content = [
        {
          title: "Introduction to AI",
          week: "Week 1",
          desc: [
            "Introduction to Artificial Intelligence, Machine Learning, Deep Learning and Generative AI",
            "Use cases of AI, its examples",
            "Learn generative language models such as Chat GPT, Bard, etc.",
            "Learn generative image models such as Midjourney, Jasper ai, etc",
          ],
          last_point: null,
        },
        {
          title: "Master Prompt Engineering",
          week: "Week 2",
          desc: [
            "Introduction to Prompt Engineering",
            "Use cases, jobs, market, etc.",
            "Understanding basics of Prompt engineering, templates of commonly used prompts, etc.",
          ],
          last_point: null,
        },
        {
          title: "Learn Machine Learning",
          week: "Week 3",
          desc: [
            "Programming in Python",
            "Understanding Machine Learning",
            "Understanding unsupervised machine learning & supervised machine learning",
            "Understanding Computer Vision",
            "Understanding and Creating Image classification model"
          ],
          last_point: null,
        },
        {
          title: "Build AI/ML projects",
          week: "Week 4",
          desc: [
            "Create your ai chatbot (NLP)",
            "Sentiment analysis of a given text (NLP)",
            "Build a model that recognizes facial emotions (CV)",
            "Build a model which detects multiple objects within an image (CV)",
          ],
          last_point: null,
        },
      ];
      

  return (
    <div className='pt-16 mb-12'>

        <h1 className='text-4xl md:text-6xl mb-12 font-bold font-bruno'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='md:w-[80%] text-lg md:text-2xl font-orbitron'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 16 hours of learning, 4 AI projects, doubt solving...</p>
            <a href='/AI_Curriculum.pdf' download="AI_Curriculum.pdf" ><button className='font-orbitron h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:justify-around 
        bg-gradient-to-r from-indigo-900 to-slate-900 md:w-[75%] w-[90%] mx-auto rounded-lg 
        shadow-lg border-2 p-6 md:px-8">
  <div className="flex flex-col items-center justify-center text-center md:mr-8 mb-4 md:mb-0">
    <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-3">
      <p className="text-4xl text-indigo-900 font-semibold">16</p>
    </div>
    <p className="text-lg font-medium text-white">Hours of learning</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center md:mr-8 mb-4 md:mb-0">
    <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-3">
      <p className="text-4xl text-indigo-900 font-semibold">1</p>
    </div>
    <p className="text-lg font-medium text-white">Month</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center md:mr-8 mb-4 md:mb-0">
    <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center mb-3">
      <p className="text-4xl text-indigo-900 font-semibold">4</p>
    </div>
    <p className="text-lg font-medium text-white">AI Projects</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <div className="bg-white w-16 h-16 flex items-center justify-center p-3 rounded-full mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-900" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.293 16.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 13.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z" clipRule="evenodd" />
      </svg>
    </div>
    <p className="text-lg font-medium text-white">Certification</p>
  </div>
</div>




        {/* Carousel div */}
        <div className='shadow-md mx-auto mt-20  w-full md:w-2/3'>           
            {content.map((item, i) => {
                return (
                <>
                    <div className='overflow-hidden my-2 rounded-lg border'>
                        <label>
                        <input className='absolute opacity-0 peer' type="checkbox"></input>
                        <div className='flex items-center cursor-pointer justify-between'>
                            <div className='p-5'>
                                <p className=' m-0 text-lg font-semibold font-orbitron'>{item.title}</p>
                                <div className='flex items-center mt-2 text-xs '><BsClock className='m-0 mr-1'/><p className='text-xs m-0'>{item.week}</p></div>
                            </div>
                            { i!=6 && <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>}
                        </div>
                        {(i!=6 && i!=11) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-900 text-lg peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto font-orbitron'>{desc}</p></div>
                            );
                        })}
                        
                        </label>
                    </div>
                </>)})}

        </div>
    </div>
  )
}

export default AiCurriculum