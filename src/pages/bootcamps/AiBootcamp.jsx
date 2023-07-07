import React, { useState } from "react";
import { AiCurriculum } from "../../components/bootcamp components";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsLinkedin, BsPlusLg, BsTwitter, BsNewspaper } from "react-icons/bs";
import { TeamInfo } from "../../components/page components";
import { reviews } from "../../constants";
import { faqs } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/effect-creative";

const AiBootcamp = () => {
  const [content, setContent] = useState("Educator");
  const [source, setSource] = useState("/assets/backbone/educator.jpg");
  const [name, setName] = useState("Kajal Singh");
  const [Linkedin, setLinkedin] = useState(
    "https://www.linkedin.com/in/kajal-singh-3527a742"
  );

  const educatorHandler = () => {
    setContent("Educator");
    setSource("/assets/backbone/educator.jpg");
    setName("Kajal Singh");
    setLinkedin("https://www.linkedin.com/in/kajal-singh-3527a742");
  };
  const mentorHandler = () => {
    setContent("Mentor");
    setSource("/assets/backbone/mentor.jpeg");
    setName("Mohit Rakhade");
    setLinkedin("https://www.linkedin.com/in/mohit-rakhade/");
  };
  const programmanagerHandler = () => {
    setContent("Programmanager");
    setSource("/assets/backbone/manager.jpeg");
    setName("Pradnyashil Gajbhiye");
    setLinkedin("https://www.linkedin.com/in/pradnyashil-gajbhiye");
  };
  const placementcellHandler = () => {
    setContent("Placementcell");
    setSource("/assets/backbone/manager.jpeg");
    setName("Pradnyashil Gajbhiye");
    setLinkedin("https://www.linkedin.com/in/pradnyashil-gajbhiye");
  };

  const clickButton =
    " border p-3 md:text-2xl font-semibold my-2 rounded-xl bg-gradient-to-r from-[#58AFEF] to-[#9374DC] mx-2 md:mx-8";
  const unclickedButton =
    "border p-3 rounded-xl font-semibold md:text-2xl my-2 hover:bg-gray-800 mx-2 md:mx-8";

  return (
    <main className="md:w-[90%] mx-auto">
      {/*Landing section*/}
      <section className="px-8">
      <div className="pt-36 min-h-[95vh] flex flex-col items-center justify-center">
  <div className="flex flex-col mb-4 md:mb-0 md:flex-row">
    <p className="text-[#006DF6] m-0 text-[55px] text-center font-bold">
      <span className="text-7xl text-neutral-100 m-0 font-vt323 tracking-wide">Artificial Intelligence</span>
    </p>
  </div>
  <div>
    <p className="text-7xl m-0 md:mb-6 font-bold font-vt323 tracking-wider">Bootcamp </p>
  </div>
  <div className="container">
    <div className="mt-10 bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white py-12 px-8 rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-8 font-bruno tracking-wider">
        Become an Entry-Level AI/ML Developer within 1 Month
      </h1>
      <div className="flex flex-col space-y-4">
        <p className="text-lg md:text-xl text-center font-orbitron">
          Learn ChatGPT, Chatbot Development, NLP, Computer Vision, and more
        </p>
        <p className="text-lg md:text-xl text-center font-orbitron">
          from an expert with personalized career guidance.
        </p>
      </div>
      <div className="flex flex-col space-y-4 mt-8">
        <p className="text-lg md:text-xl text-center font-orbitron">Be ready for the</p>
        <p className="text-2xl md:text-3xl font-bold text-center font-orbitron">
          $15.7 Trillion Artificial Intelligence Global Market
        </p>
        <p className="text-2xl md:text-3xl font-bold text-center font-orbitron">
          and 97 Million Jobs by 2030
        </p>
      </div>
    </div>
  </div>
  <div className="button md:mt-8 mt-4">
    <a
      href={"/register"}
      className="font-orbitron h-[4rem] text-3xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center"
    >
      <button>Register now!</button>
    </a>
  </div>
</div>


        <div id="Curriculum" className="">
          <AiCurriculum />
        </div>

        <div className="flex flex-col border-3 items-center text-center justify-center md:my-16 py-12">
          <p className="font-bold text-5xl font-bruno">Connect for free consultation</p>
          <p className="text-2xl my-8 font-orbitron">Schedule online meet now!</p>
          <a
            href="https://calendly.com/lusternetwork/pradnyashil"
            target="_blank"
            className="font-orbitron h-[4rem] text-3xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center "
          >
            Schedule now !
          </a>
        </div>
      </section>

      {/* graph section */}
      <section className="flex flex-col items-center md:flex-row md:justify-between md:flex-wrap px-8 py-8">
        <div className="text-left md:w-[65%]">
          <div className="text-4xl md:text-6xl text-white font-semibold md:w-[75%] font-bruno">
            <p>
              <span className="">Become a</span>
              <span className=""> AI Developer</span>
              <span className=""> in 16 hours</span>
              {/* <span className='text-[#006DF6]'> 6 LPA</span> */}
            </p>
          </div>

          <div className="flex flex-wrap my-12 font-orbitron">
            <div
              className={`border rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              Batch of 30 students
            </div>
            <div
              className={`border  rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              Weekend oriented classes
            </div>
            <div
              className={`border rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              Quick doubt resolution
            </div>
            <div
              className={`border  rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              Live Classes
            </div>
            <div
              className={`border rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              AI certification after learning
            </div>
            <div
              className={`border rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              Job placement
            </div>
            <div
              className={`border rounded-md my-1 px-3 py-1 text-[16px] mx-3`}
            >
              {" "}
              4 Projects
            </div>
          </div>

          <div className="button mt-4">
            <a
              href="/register"
              className="font-orbitron h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center"
            >
              <button>Register now !</button>
            </a>
          </div>
        </div>

        <div className="graph-image mt-8 md: mr-8 md:mt-0">
          <img
            src="/assets/AI_software.webp"
            alt="graph"
            className="h-[22rem] w-[23rem]"
          />
        </div>
      </section>

      <section className="px-8 pt-24 md:px-24 text-center">
        <div className="font-orbitron bg-gradient-to-r from-purple-500 to-blue-500 p-5 md:w-[75%] w-[90%] mx-auto rounded-lg shadow-md">
          <p className="px-2 md:px-24 md:text-center text-left my-7 text-3xl leading-8">
            You can be in top 0.1% AI Developers!
          </p>
          <p className="px-2 md:px-24 md:text-center text-left my-7 text-3xl leading-8">
            Whether you are a working professional or a student
          </p>
        </div>
      </section>

      {/* champions section */}
      <section className="px-8 md:px-8 text-center">
        <div>
          <p className="text-5xl md:text-5xl mt-24 mb-12 font-semibold">
            Our Champions
          </p>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={true}
            navigation={true}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center">
                <img
                  src="/assets/bristin.jpg"
                  width={200}
                  height={200}
                  alt="bristin"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Bristin Borah
                  <Link
                    href="https://www.linkedin.com/in/bristin-borah-739b63179"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Engineer)</p>
                <p className="text-xl">Company: Melisoft</p>
                <p className="text-xl font-bold">CTC: 30LPA</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center">
                <img
                  src="/assets/akash.jpeg"
                  width={200}
                  height={200}
                  alt="akash"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Akash Singh
                  <Link
                    href="https://www.linkedin.com/in/akash-singh-071850193/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Dev)</p>
                <p className="text-xl">Company: Impactional Games</p>
                <p className="text-xl font-bold">Stipend: 12K</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center">
                <img
                  src="/assets/tathagat.jpeg"
                  width={200}
                  height={200}
                  alt="tathagat"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Tathagat
                  <Link
                    href="https://www.linkedin.com/in/tathagat-926779191/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Engineer Intern)</p>
                <p className="text-xl">Company: Impactional Games</p>
                <p className="text-xl font-bold">Stipend: 12K</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center">
                <img
                  src="https://res.cloudinary.com/dtblj84n0/image/upload/v1687760763/luster%20mainsite/VigneshRajaImage_ycmbt6.png"
                  width={200}
                  height={200}
                  alt="tathagat"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Vignesh Raja
                  <Link href="" target="_blank">
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Dev)</p>
                <p className="text-xl">Company: Puffles</p>
                <p className="text-xl font-bold">CTC:12 LPA</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center">
                <img
                  src="https://drive.google.com/uc?id=124InUJ6mYyVgKcD4mTqWUOP4PtzB116P"
                  width={200}
                  height={200}
                  alt="Shubham Garg"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Shubham Garg
                  <Link
                    href="https://www.linkedin.com/in/shubham-garg-6232181b8/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Dev)</p>
                <p className="text-xl">Company: V3</p>
                <p className="text-xl font-bold">Stipend: 20K</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center place-self-center mb-12">
                <img
                  src="https://res.cloudinary.com/dtblj84n0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687764283/AbhijeetRanjanImage_zk0qa7.jpg?_s=public-apps"
                  width={200}
                  height={200}
                  alt="Abijeet Ranjan"
                  className="rounded-full w-[60%] mb-6"
                />
                <p className="text-3xl flex items-center justify-center">
                  Abhijeet Ranjan
                  <Link
                    href="https://www.linkedin.com/in/bytecodevelocity/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="mt-1 hover:cursor-pointer ml-2" />
                  </Link>
                </p>
                <p className="text-xl mb-3">(Blockchain Dev)</p>
                <p className="text-xl">Company: Rooba FInance</p>
                <p className="text-xl font-bold">CTC: 6 LPA</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* additional info section */}
      <section>
        <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 min-h-[94vh]">
          <div className="col-span-1 place-self-center">
            <img
              src="/assets/menwomentwo.png"
              alt="menwomen"
              className="h-[22rem] md:h-[30rem] mb-8 md:mb-0 w-[18rem] md:w-[27rem]"
            />
          </div>

          <div className="col-span-1 place-self-center">
            <span className="text-3xl md:text-5xl font-semibold font-bruno">
              Thinking about switching career?
            </span>
            <p className="text-2xl md:text-2xl mt-4 font-orbitron">Pick AI development!</p>
            <p className="text-xl md:text-3xl my-8 md:my-12 font-orbitron">
              What is holding you back?
            </p>
            <Link
              to="/register"
              className="font-orbitron h-[4rem] text-3xl transform transition duration-500 hover:scale-105 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center"
            >
              Register now!
            </Link>
          </div>
        </div>

        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
          <img
            src="/assets/blubo.png"
            alt="blubo"
            className="hidden md:block absolute left-4 h-[10rem] w-[10rem]"
          />
          <div className="text-center flex flex-col items-center justify-center md:px-16 z-10">
            <p className="text-2xl mb-6 md:5b-0 md:text-5xl font-bruno">
              <span className="hr2">Batch for</span>{" "}
              <span className="hr3">AI</span>{" "}
              <span className="hr2">Enthusiasts</span>
            </p>
            <p className="text-2xl md:text-2xl md:w-[70%] text-center font-orbitron">
              A project orientated program for working professionals and
              students on weekends{" "}
            </p>
          </div>
          <img
            src="/assets/blubn.png"
            alt="blubn"
            className="hidden md:block absolute right-4 h-[10rem] w-[10rem]"
          />
        </div>
      </section>

      {/* mentor section */}
      <section className="flex flex-col text-center min-h-[90vh] mb-16">
        <span className=" m-auto w-full text-3xl md:text-5xl font-bruno">
          Meet Your Backbone
        </span>

        <div className="flex flex-col w-full justify-center">
          <div className="w-[100%] mt-6 mb-16 font-orbitron">
            <button
              className={`${
                content === "Educator" ? `${clickButton}` : `${unclickedButton}`
              }`}
              onClick={educatorHandler}
            >
              {" "}
              Educator{" "}
            </button>
            <button
              className={`${
                content === "Mentor" ? `${clickButton}` : `${unclickedButton}`
              }`}
              onClick={mentorHandler}
            >
              {" "}
              Mentor{" "}
            </button>

            <button
              className={`${
                content === "Placementcell"
                  ? `${clickButton}`
                  : `${unclickedButton}`
              }`}
              onClick={placementcellHandler}
            >
              {" "}
              Placement Cell{" "}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 font-orbitron">
            <div className="flex flex-col col-span-1 mb-12 md:mb-0 md:mr-16 place-self-center items-center">
              <img
                src={source}
                alt={content}
                className="h-[13rem] md:h-[20rem] w-[13rem] md:w-[20rem] shadow-sm shadow-white rounded-full object-cover"
              />
              <div className="mt-4 flex items-center text-center text-3xl">
                <h1 className="font-bold">{name}</h1>
                <a href={Linkedin} target="_blank" className="ml-3 text-2xl">
                  <BsLinkedin />
                </a>
              </div>
            </div>

            <div className="col-span-1 px-4 md:px-0 text-left place-self-center">
              <TeamInfo content={content} />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="px-8 md:px-16">
        <p className=" pt-12 text-5xl font-semibold text-white items-center text-center my-6 font-bruno">
          Reviews
        </p>
        <div className="block md:hidden w-[95%] mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={true}
          >
            {reviews.map((person, i) => (
              <SwiperSlide key={i}>
                <div className="font-orbitron flex flex-col p-8 items-center bg-black justify-center rounded-md mb-10">
                  <picture className="flex items-center justify-center">
                    <img
                      src={person.image}
                      alt="Landscape picture"
                      className="w-[15rem] rounded-full object-cover h-[15rem]"
                      lazy={true}
                    />
                  </picture>
                  <p className="text-2xl my-4">{person.name}</p>
                  <p className="text-left">{person.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:block font-orbitron">
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
            {reviews.map((person, i) => (
              <SwiperSlide key={person.name}>
                <div className="flex h-[30rem] flex-col p-8 items-center w-[28rem] bg-black shadow-md rounded-3xl justify-center m-20 mx-auto">
                  <picture>
                    <img
                      src={person.image}
                      alt="Landscape picture"
                      className="w-[15rem] rounded-full object-cover h-[15rem]"
                    />
                  </picture>
                  <p className="text-2xl my-4">{person.name}</p>
                  <p className="text-left">{person.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* fees section */}
      <section className="flex flex-col py-12 md:mt-12 text-center min-h-[94vh] justify-center items-center">
        <p className="text-7xl font-bruno">Fees Structure</p>

        <div className="flex flex-wrap justify-between mt-16 items-center px-[10%]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-12 my-15 items-center justify-center">
              <div className="items-center shadow-md  bg-gradient-to-r from-[#58AFEF] to-[#9374DC] rounded-[15px] py-8 pt-8 px-8">
                <div className="text-3xl md:text-7xl font-bold mb-1 font-orbitron">
                  ₹9,999 Only
                </div>
                <p className="text-[16px] md:text-[24px] mb-2 mt-8 font-orbitron">
                  <b></b>For Bootcamp
                </p>
                {/* <p className='mt-8 text-4xl font-semibold'>EMIs option available!</p> */}
                {/* <p className='text-[16px] md:text-[24px] my-2'><b>Upfront fee:</b> ₹40,000</p> */}
              </div>

              <Link
                to="/register"
                className="font-orbitron h-[4rem] text-3xl transform duration-500 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center animate-bounce hover:animate-none hover:scale-125 transition-all"
              >
                Register now!
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 md:mt-0 md:ml-20">
                <img src={manfee} className="h-[15rem] ml-20 md:ml-0" alt='fees' />
            </div> */}
      </section>

      {/* Why to learn now? */}
      <section class="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 mx-2 md:mx-24 lg:mx-24 xl:mx-24">
        <h2 class="text-4xl font-bold mb-8 text-black font-bruno">Why learn AI/ML now?</h2>
        <div class="flex items-center text-lg font-medium font-orbitron space-x-2 text-gray-900 mb-6">
          <BsTwitter/>
          <p>Elon Musk's Tweet about AI</p>
        </div>
        <div class="flex items-center text-lg font-medium font-orbitron space-x-2 text-gray-900 mb-6">
          <BsNewspaper  />
          <p>Multiple Newspaper/Tweets attached</p>
        </div>
        <p class="text-gray-900 mb-6 text-lg font-medium font-orbitron">
          If you think that this is not the right time, you will lose your
          competitive edge in the fast-growing AI/ML world
        </p>
        <p class="text-gray-900 text-lg font-medium font-orbitron">
          By 2030, VCs will be investing $154 billion in AI startups globally to
          generate 97 million jobs
        </p>
        <Link to="/register"
  class="h-12 px-8 mt-8 text-xl flex items-center justify-center font-medium rounded-md bg-gradient-to-r from-[#58AFEF] to-[#9374DC] text-white transition-colors hover:bg-[#9374DC] hover:from-[#58AFEF] hover:to-[#9374DC]">
  Register Now</Link>
      </section>

      {/* Outcome */}
      <section class="mt-12 flex flex-col items-center justify-center 
      bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-lg p-8 mx-2 md:mx-24 lg:mx-24 xl:mx-24">
  <h2 class="text-4xl font-bold text-white mb-8 font-bruno">Outcomes</h2>

  <div class="flex items-center space-x-4 text-white mb-6 font-orbitron">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H3zm1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm16-6a1 1 0 000-2H5a1 1 0 000 2h14z"></path>
    </svg>
    <p class="text-lg font-medium">Get Certificate on Completion</p>
  </div>

  <div class="flex items-center space-x-4 text-white mb-6 font-orbitron">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M9 3a1 1 0 00-.707.293L6 5.586 7.414 7l1.293-1.293A1 1 0 009 5V3zm7 2h-1.172l-2.5 5H16a1 1 0 001-1V5zm-2.55 12.95a1 1 0 01-1.045-.45l-2-3a1 1 0 01.195-1.39A1 1 0 0110 13h4.58l1.464 2.197a1 1 0 01-.195 1.39l-2 1a1 1 0 01-.514.14zm-3.452-4.798l-2 5a1 1 0 01-1.85-.832l2-5a1 1 0 111.85.832zm-1.383 3.457l1.5-3.75 1.5 3.75h-3zm-6.615 3.32a1 1 0 11-.33-1.936l4-1a1 1 0 11.66 1.872l-4 1z" clip-rule="evenodd"></path>
    </svg>
    <p class="text-lg font-medium">Job/Internship opportunities</p>
  </div>

  <div class="flex items-center space-x-4 text-white mb-6 font-orbitron">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm1 4a1 1 0 011-1h10a1 1 0 010 2H5a1 1 0 01-1-1zm12-6a1 1 0 011-1h1v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6h1a1 1 0 110 2H1v9a4 4 0 004 4h12a4 4 0 004-4V9h-1a1 1 0 110-2h1zm-2-2H3a1 1 0 110-2h12a1 1 0 110 2z" clip-rule="evenodd"></path>
    </svg>
    <p class="text-lg font-medium">Career Guidance in the AI World</p>
  </div>

  <div class="flex items-center space-x-4 text-white mb-6 font-orbitron">
    <svg class="w-8 h-8  text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M4 8a1 1 0 01-1-1V4a1 1 0 112 0v3a1 1 0 01-1 1zm12-1a1 1 0 00-1-1V4a1 1 0 00-2 0v3a1 1 0 01-1 1H9a1 1 0 01-1-1V4a1 1 0 00-2 0v3a3 3 0 003 3h4a3 3 0 003-3V4a1 1 0 00-2 0v3zm-1 3H9a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
    </svg>
    <p class="text-lg font-medium">4 Real-World AI Projects</p>
  </div>

  <Link to="/register" class="bg-white text-blue-500 hover:text-blue-600 text-lg font-semibold py-4 px-10 rounded-full transition-colors duration-300">
    Register Now
  </Link>
</section>

      {/* partners section */}
      <section className="flex flex-col items-center justify-center my-5 mt-[8rem]">
        <p className="text-center text-xl md:text-5xl font-semibold mb-[2.5rem]">
          Our Partners
        </p>
        <section className="flex flex-wrap justify-center gap-6 w-[75%] mx-auto">
          <article>
            <img src="/assets/sphereon.png" height={300} width={300} />
          </article>
          <article>
            <img src="/assets/trikon.png" height={300} width={300} />
          </article>
          <article className="flex gap-4 items-center">
            <img src="/assets/coders-world.png" height={90} width={90} />
            <h1 className="font-semibold text-3xl text-yellow-500">
              Coders world
            </h1>
          </article>
          <article className="flex gap-4 items-center">
            <img src="/assets/ethereum.png" height={90} width={90} />
            <h1 className="font-semibold text-3xl text-blue-400">Ethereum</h1>
          </article>
          {/* new partners */}
          <article className="flex gap-4 items-center">
            <img src="/assets/code8.jpeg" height={90} width={90} />
            <h1 className="font-semibold text-3xl text-blue-400">Code8</h1>
          </article>
          <article className="flex gap-4 items-center">
            <img src="/assets/Mentorle.jpeg" height={90} width={90} />
            <h1 className="font-semibold text-3xl text-white">Mentorle</h1>
          </article>
          <article className="flex gap-4 items-center">
            <img src="/assets/bananasdk.jpeg" height={90} width={90} />
            <h1 className="font-semibold text-3xl text-yellow-300">
              Banana SDK
            </h1>
          </article>
        </section>
      </section>

      {/* FAQs section */}
      <section className="px-8 md:px-24">
        <p className="text-center text-7xl mt-24 mb-[2.5rem]">FAQs</p>

        {faqs.map((item, i) => {
          return (
            <>
              <div
                key={item.ques}
                className={`overflow-hidden md:mx-24 ${
                  i == 2 || i == 6 || i == 7 ? "hidden" : "block"
                }`}
              >
                <label>
                  <input
                    className="absolute opacity-0 peer"
                    type="checkbox"
                  ></input>
                  <div className="flex items-center cursor-pointer border rounded-xl border-white justify-between">
                    <div className="p-5">
                      <p className=" m-0 md:text-xl font-semibold">
                        {item.ques}
                      </p>
                    </div>
                    <BsPlusLg className=" h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4" />
                  </div>

                  <div className="peer-checked:border rounded-lg border-white mt-2 mb-6 bg-blue-900 max-h-0 peer-checked:max-h-20">
                    <p className="p-5 my-auto">{item.ans}</p>
                  </div>
                </label>
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default AiBootcamp;
