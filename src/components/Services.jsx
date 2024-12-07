import React, { useState, useRef, useEffect } from 'react';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import '../css/Services.css';
import HorizontalScroll from './HorizontalScroll'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const services = [
  {
    title: "Web Design",
    subTitle : "Design Your Vision Online with Our Web Design Services",
    description: "Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, development, e-commerce, SEO, and more.",
    videoUrl: "/videos/media.mp4",
  },
  {
    title: "Mobile App Design",
    subTitle : "Designing mobile apps that make life easier!",
    description: "Custom app design services in Gapsy can help your business get noticed by potential customers. We can create a mobile-friendly app that is both user-friendly and visually appealing.",
    videoUrl: "/videos/media.mp4",
  },


  {
    title: "Web Development",
    subTitle : "Building Tomorrow's Web, Today!",
    description: "Gapsy Studio offers web development services that can help take your business to the next level. We create custom websites that are both user-friendly and highly functional.",
    videoUrl: "/videos/media.mp4",
  },

  {
    title: "Branding Desgn",
    subTitle : "Designing with Purpose - Transform Your Brand to Inspire Results!",
    description: "If you're looking for branding design services, look no further than Gapsy Studio. We can help you create a unique and memorable brand that will stand out from the competition.",
    videoUrl: "/videos/media.mp4",
  },


  {
    title: "UX Audit",
    subTitle : "Let Us Take You on a Journey to Greater User Experiences!",
    description: "Gapsy's user experience audit services are designed to help get a detailed report highlighting any areas that need improvement and fixing on your website or in the app.",
    videoUrl: "/videos/media.mp4",
  },

  {
    title: "UI/UX Design",
    subTitle : "Designing Digital Experiences that Make a Difference",
    description: "We are a full-service design studio providing world-class UI/UX designing services to startups and enterprises.",
    videoUrl: "/videos/media.mp4",
  },

  {
    title: "Illustration Design",
    subTitle : "Bringing your ideas to life with outstanding illustrations!",
    description: "Looking for an illustration design service that can help bring your vision to life? Our designers can create custom illustrations that are perfect for any project.",
    videoUrl: "/videos/media.mp4",
  },

  {
    title: "3D Modeling",
    subTitle : "Bring your ideas to life with 3D Modeling",
    description: "3D modeling design services from Gapsy are the perfect way to add that extra dimension to your project. Gapsy can bring your vision to life in a way that is both creative and realistic.",
    videoUrl: "/videos/media.mp4",
  },
  
  
  
  // Add other services here
];
const faqs = [
  {
    question: "WHAT INSPIRED THE FOUNDING OF GAPSY WEB DESIGN STUDIO?",
    answer: "The idea for Gapsy Web Design Studio came about because we saw a need for high-quality, custom web design that was affordable for small businesses and startups. We wanted to make the web design process easy and stress-free for our clients, so they could focus on running their businesses."
  },
  {
    question: "WHAT SETS GAPSY APART FROM OTHER WEB DESIGN STUDIOS?",
    answer: "Our team of web design experts have years of experience in the industry, and we use the latest technologies and trends to create custom websites that are tailored to each of our clients' unique needs. We also pride ourselves on providing excellent customer service and support, so our clients always have someone to turn to with any questions or concerns."
  },
  {
    question: "WHAT ARE SOME OF THE CHALLENGES YOU FACE AS A WEB DESIGN STUDIO?",
    answer: "Some of the challenges we face include staying up-to-date with the latest design trends and technologies, meeting tight deadlines, and ensuring that we meet the needs of our diverse client base."
  },
  {
    question: "WHAT ARE YOUR GOALS FOR THE FUTURE OF GAPSY?",
    answer: "Our goals include expanding our client base, enhancing our service offerings, and continuing to improve our skills and knowledge to provide the best possible service to our clients."
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? answerRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          height: `${height}px`,
          opacity: isOpen ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.3s ease',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-start justify-center gap-5">
      {/* <div className="icon">{icon}</div> */}
      <img src={icon} className='w-36' />
      <div className='space-y-5'>
        <h3 className=" text-4xl font-light font-pp-formula-condensed">{title}</h3>
        <p className="text font-neue-montreal text-xl">{text}</p>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-content">
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap flex-col md:flex-row">
            <div className="hero-content3">
              <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24s" height="24" decoding="async" data-nimg="1" class="styles_label__fRSpJ" src="/breadcrumbs.svg" />
              <h2 className="subheading">Gapsy / Services</h2>
            </div>
            <p className="description font-rockSalt" >
              Bring your dream project to life with one of our 8 comprehensive services!
            </p>
          </div>
          <h1 className=" font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light" >Design Studio that Brings Creativity to Life!</h1>
          <div className="divider"></div> {/* Divider line */}
          <div className="flex justify-between md:flex-row flex-col items-center gap-4">
            <button className="hire-us-button">Hire us</button>
            <p className="description2 font-neue-montreal">
              Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.
            </p>
          </div>
        </div>
      </section>
        
      <div className="services-container bg-gray-100 px-10">

        <Swiper
           spaceBetween={25} // Spacing between slides
           slidesPerView={1} // Number of slides visible
           // Enables navigation buttons
           pagination={{ clickable: true }} // Enables pagination dots
        >
        {services.map((service, index) => (
          <SwiperSlide>
          <div key={index} className="flex flex-wrap-reverse lg:flex-nowrap flex-col-reverse lg:flex-row  items-center  w-full   justify-center lg:justify-between gap-10">
              
              <div className="basis-1/3 space-y-7">
                <p className='font-rockSalt text-2xl' >"{service.subTitle}"</p>
                <h2 className='text-6xl font-light font-pp-formula-condensed' style={{ fontSize: 'clamp(1.5rem, 1.0602rem + 2.3457vw, 3.875rem)' }}>{service.title}</h2>
                <p className='font-neue-montreal'>{service.description}</p>
                <span className='flex items-center  gap-2'>
                  <button className='animate-btn'><IoIosArrowForward />
                  </button>
                    <p className="text-black">View More</p>
                </span>
              </div>

              <div className="basis-1/2">
              {/* <img src={service.image} alt={`${service.title}`} className="service-image" /> */}
                  <video loop autoPlay  className='md:h-[96vh]'>
                    <source src={service.videoUrl} type='video/mp4'/>
                  </video>
              </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
        
      <div className="container">
        <h1 className="header font-pp-formula-condensed font-extralight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">We work with the most progressive companies from all over the world.</h1>
        <div className="divider"></div> {/* Divider line */}
        <div className="">
          
          <p className="lg:w-1/2 lg:ml-auto">
            Gapsy web design Studio is a professional web design company that has been in business since 2014.
            We have a team of highly skilled and experienced web designers who are able to create custom websites
            that are both visually appealing and user-friendly. We take pride in our work, and we are confident
            that we can provide our clients with the best possible service. Some of the benefits of working with
            Gapsy web design Studio include:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:px-32 py-10 mx-auto">
          <BenefitCard
            icon="/images/timezone-min-1.webp"
            title="Time zones are not a problem"
            text="We are available to work with clients in any time zone. In addition, we have team members in different time zones who can work with you to get your project done on time. This allows us to be more flexible with our clients and to work on their schedule."
          />
          <BenefitCard
            icon="/images/flexible-min-1.webp"
            title="Flexible project work schedule"
            text="We are flexible with our project work schedule and can work around your schedule. We understand that our clients have different schedules and we will work with you to get the project done when it is convenient for you."
          />
          <BenefitCard
            icon="/images/affordable-min-1.webp"
            title="Affordable pricing policy suits all customers"
            text="We have an affordable pricing policy that allows our services to be accessible to a wide range of customers."
          />
          <BenefitCard
            icon="/images/specialists-min-1.webp"
            title="Specialists for solving different problems"
            text="We have specialists for solving different problems, ensuring that our clients receive the most appropriate solutions."
          />
        </div>
      </div>
      <div className="app-container">
        <h1 className="header font-pp-formula-condensed font-extralight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Do you have any questions? We tried to answer most of them!</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div className="">
        <Testimonials />
      </div>

      {/* <ContactForm /> */}
    </div>
  );
};

export default Services;
