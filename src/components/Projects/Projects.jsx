import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// css
import './Projects.css'

// images
import ChatApp from '../../img/chat-app.png'
import MedicalBlog from '../../img/medical-blog.png'
import CompanyPortfolio from '../../img/company-portfolio.png'
import EduCare from '../../img/edu-care.png'
import RecipeBook from '../../img/recipe-book.png'
import CurrencyConverter from '../../img/currency-converter.png'
import DailyQuotes from '../../img/daily-quotes.png'
import TextToSpeech from '../../img/text-to-speech.png'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

// autoplay
import 'swiper/css/autoplay'

const Projects = ({ darkMode }) => {
  return (
    <>
      <div className="projects" id="projects">
        <h1>My Awesome <span style={{ color: 'var(--green)' }}>Projects</span></h1>       
        {/* <p className={darkMode ? 'text-white' : 'text-black'}></p> */}
      </div>
      {/* swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop= {true}
        autoplay={{
          delay: 1000
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={ChatApp} />
            <div className="p-content">
                <p>ChatApp with MERN Stack including Email Verification</p>
                <div className="p-btn">
                    {/* <a className="first-btn" target="_blank" href="https://thae-gossip-chat.herokuapp.com"><span>Live Demo</span><i></i></a> */}
                    <a className="second-btn" target="_blank" href="https://github.com/ThaeNandarSeint/Gossip-Chat-App.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={MedicalBlog} />
            <div className="p-content">
                <p>Medical Blog Website using Laravel and Bootstrap Framework</p>
                <div className="p-btn">
                    <a className="first-btn" target="_blank" href="https://phonesithulwin.info"><span>Live Demo</span><i></i></a>
                    {/* <a className="second-btn" target="_blank" href="https://github.com/ThaeNandarSeint/Gossip-Chat-App.git">
                        <span>Github</span>
                    </a> */}
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={CompanyPortfolio} />
            <div className="p-content">
                <p>UI Design for Company Portfolio with Bootstrap Framework</p>
                <div className="p-btn">
                    <a className="first-btn" target="_blank" href="https://company-portfolio-thae.herokuapp.com/"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target="_blank" href="https://github.com/ThaeNandarSeint/CompanyPortfolio.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={EduCare} />
            <div className="p-content">
                <p>UI Design for School Website with Bootstrap Framework and Swiperjs Library</p>
                <div className="p-btn">
                    <a className="first-btn" target="_blank" href="https://edu-care-thae.herokuapp.com/"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target="_blank" href="https://github.com/ThaeNandarSeint/LyrionProject2.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={RecipeBook} />
            <div className="p-content">
                <p>Find Recipes with Main Ingredient using Api</p>
                <div className="p-btn">
                    <a className="first-btn" target='_blank' href="https://thaenandarseint.github.io/RecipeBook/"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target='_blank' href="https://github.com/ThaeNandarSeint/RecipeBook.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={CurrencyConverter} />
            <div className="p-content">
                <p>Currency Converter using Exchange-Rate Api</p>
                <div className="p-btn">
                    <a className="first-btn" target='_blank' href="https://thaenandarseint.github.io/Currency-Converter/"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target='_blank' href="https://github.com/ThaeNandarSeint/Currency-Converter.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={DailyQuotes} />
            <div className="p-content">
                <p>Daily Quotes For You</p>
                <div className="p-btn">
                    <a className="first-btn" target='_blank' href="https://thaenandarseint.github.io/Daily-quotes-for-you"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target='_blank' href="https://github.com/ThaeNandarSeint/Daily-quotes-for-you.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-card">
            <img className="p-img" src={TextToSpeech} />
            <div className="p-content">
                <p>Text To Speech using only JavaScript</p>
                <div className="p-btn">
                    <a className="first-btn" target='_blank' href="https://thaenandarseint.github.io/Text-to-Speech/"><span>Live Demo</span><i></i></a>
                    <a className="second-btn" target='_blank' href="https://github.com/ThaeNandarSeint/Text-to-Speech.git">
                        <span>Github</span>
                    </a>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Projects
