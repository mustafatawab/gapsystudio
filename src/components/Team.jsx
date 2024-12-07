import React, { useState, useRef, useEffect } from 'react';
import ContactForm from './ContactForm';
import Testimonials from './Testimonials';
import '../css/Services.css';
import '../css/Team.css';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const services2 = [
  {
    title: 'Web Design',
    description: 'Gapsy Studio produces high-quality websites that look great on all devices...',
    url: '/images/web-design.webp'
  },
  {
    title: 'Mobile App Design',
    description: 'Custom app design services in Gapsy can help your business...',
    url: '/images/mobile-app2.webp'
  },
  {
    title: 'Web Development',
    description: 'Gapsy Studio offers web development services that can help...',
    url: '/images/web-development.webp'
  },
  {
    title: 'Branding Design',
    description: 'If you\'re looking for branding design services, look no further...',
    url: '/images/branding1-min-1.webp'
  },
  {
    title: 'Motion Design',
    description: 'Gapsy studio specializes in creating high-quality, innovative, and engaging motion graphic services for various clients and projects.',
    url: '/images/motion.webp'
  },

  {
    title: 'UX Audit',
    description: 'Gapsy\'s user experience audit services are designed to help get a detailed report highlighting any areas that need improvement and fixing on your website or in the app.',
    url: '/images/ux-audit.webp'
  },


  {
    title: 'UI/UX Design',
    description: 'We are a full-service design studio providing world-class UI/UX designing services to startups and enterprises.',
    url: '/images/ui-ux.webp'
  },


  {
    title: 'Illustration Design',
    description: 'Looking for an illustration design service that can help bring your vision to life? Our designers can create custom illustrations that are perfect for any project.',
    url: '/images/illustration.webp'
  },

  {
    title: '3D Modeling',
    description: '3D modeling design services from Gapsy are the perfect way to add that extra dimension to your project. Gapsy can bring your vision to life in a way that is both creative and realistic.',
    url: '/images/3d.webp'
  },
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


const teamMembers = [
  { image: '/team2.png', name: 'Karina', role: 'UI/UX Designer' },
  { image: '/team2.png', name: 'Darina', role: 'UI/UX, Webflow Designer' },
  { image: '/team2.png', name: 'Elena', role: 'UI/UX, Motion Designer' },
  { image: '/team2.png', name: 'Darina', role: 'UI/UX, Webflow Designer' },
  { image: '/team2.png', name: 'Elena', role: 'UI/UX, Motion Designer' },
  { image: '/team2.png', name: 'Darina', role: 'UI/UX, Webflow Designer' },
  { image: '/team2.png', name: 'Elena', role: 'UI/UX, Motion Designer' },
  // Add more team members as needed
];

function TeamCard({ image, name, role }) {
  return (
    <div className="team-card ">
      <img src={image} alt={`${name}`} className="team-image2 object-cover" />
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
      </div>

    </div>
  );
}

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="team-service-card hover:bg-white group relative">
      <img src={imageUrl} className='hidden group-hover:block absolute -top-10 left-32 rounded-lg animate-pulse ' />
      <div className="team-service-title">
        <h3>{title}</h3>
      </div>
      <div className="team-service-content">
        <p>{description}</p>
        <button className="team-view-more-button ">
          <button className="arrow-icon animate-btn">&gt;</button> View More
        </button>
      </div>
    </div>
  );
}
const About = () => {

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    carouselRef.current.style.scrollBehavior = "auto"; // Disable snapping during dragging
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carouselRef.current.style.scrollBehavior = "smooth"; // Re-enable snapping after dragging
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity (higher = faster scroll)
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };



  return (
    <div className=''>
      <section className="hero-container">
        <div className="">
          <div className="flex flex-wrap justify-between items-center px-10 md:px-0 md:w-2/4 mx-auto">
            <div className="hero-content3">
              <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="styles_label__fRSpJ" src="/breadcrumbs.svg" />
              <h2 className="subheading"> <a href="/" className='hover:underline duration-500'> Gapsy </a> / About</h2>
            </div>
            <p className="sm:w-1/2 font-rockSalt text-black ">
              Any project in mind? Drop us a line.
            </p>
          </div>
          <h1 className="main-heading font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-9xl px-10 md:px-0 md:w-2/3  mx-auto">Bringing People Together - Meet Our Friendly Team</h1>
          <div className="divider w-2/3 mx-auto"></div> {/* Divider line */}

          <div className="hero-content2 flex  flex-wrap items-center px-10 md:px-0 md:w-2/3 mx-auto justify-between gap-5">
            <button className="hire-btn">Our Services</button>
            <p className="sm:w-1/2  font-neue-montreal">
              Gapsy Studio is an innovative web and mobile app design studio based in Dnipro. We are a tribe of a go-getter with outstanding experience and a reputation for building and transforming ideas into a global brand. We aren’t just creative and digital design fanatics; we are caring and passionate about your business success.
            </p>
          </div>
          <div className='py-10 mx-auto'>
            <img src='/images/cover.png' className='mx-auto' />

          </div>
        </div>
      </section>
      <div className="md:w-2/3 mx-auto px-10 md:px-0">
        <p >
          Gapsy web design Studio is a professional web design company that has been in business since 2014.
          We have a team of highly skilled and experienced web designers who are able to create custom websites
          that are both visually appealing and user-friendly. We take pride in our work, and we are confident
          that we can provide our clients with the best possible service. Some of the benefits of working with
          Gapsy web design Studio include:Doing what we love most (using creative designs to solve your customer's problems,
          creating an enjoyable and memorable experience, and quickly growing your business) makes us fulfilled.
          We're constantly innovating and updated with the latest industry trends so that you will always get the best of the best products.
          Interestingly, our talented and versatile designers are the driving force behind several highly-successful brands.
          When you work with us, we can help you become one of them.
        </p>
        <img src={'/team.webp'} alt={"Team"} className="team-image" />
        <h1 className="header font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Gapsy always ready to start to take risks. Here, risk-taking is not only welcomed but encouraged.</h1>
        <div className="hero-content2">
          
          <p className="md:w-1/2 ml-auto ">
            Because we’re independent, we do things our way. United by way of some corporate overlord,
            we can experiment with new processes and techniques to create pure, original, and exciting solutions.
            Those who work here come from different areas of expertise. One of us was a full-time professional burlesque dancer.
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="relative w-full overflow-hidden team-cards">

          <Swiper
           breakpoints={{

            300 : {
                slidesPerView : 1
            },

            768 : {
                slidesPerView : 1.5
            },

            1024 : {
                slidesPerView : 2.5
            },

            

        }}
            spaceBetween={25} // Spacing between slides
            
            pagination={{ clickable: true }} // Enables pagination dots

          >
            {teamMembers.map((member, index) => (
              <SwiperSlide>
                <TeamCard key={index} {...member} />
              </SwiperSlide>
            ))}


          </Swiper>

        </div>
      </section>
      <section className="team-services-section">
        <h1 className=" text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-pp-formula-condensed font-light">Help companies from all over the world with tailor-made solutions. With each project.</h1>
        <div className="divider"></div> {/* Divider line */}

        <div className="flex justify-between flex-wrap items-center gap-5">
          <button className=" hire-btn">Hire us</button>
          <p className="md:w-1/2">
            Keeping in mind the company's experience and desire to be continuously improved, we became experts of innovative projects in
            the design and consulting spheres. Because of applying the best international practices and home grown software that have been
            developed based on an analysis of realized projects.
          </p>
        </div>
        <div className="divider"></div> {/* Divider line */}

        {services2.map((service, index) => (
          <ServiceCard key={index} {...service} imageUrl={service.url} />
        ))}


      </section>

      <div className="container">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">We work with the most progressive companies from all over the world.</h1>
        <div className="divider"></div> {/* Divider line */}
        <div className="hero-content2">
          <p />
          <p className="md:w-1/2 ml-auto">
            Gapsy web design Studio is a professional web design company that has been in business since 2014.
            We have a team of highly skilled and experienced web designers who are able to create custom websites
            that are both visually appealing and user-friendly. We take pride in our work, and we are confident
            that we can provide our clients with the best possible service. Some of the benefits of working with
            Gapsy web design Studio include:
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20  lg:px-32 py-10 mx-auto">
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
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Do you have any questions? We tried to answer most of them!</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div className="py-10">
        <Testimonials />
      </div>
      {/* <ContactForm /> */}
    </div>
  );
};

const BackgroundImage = styled.div`
  backgroundImage : url('/images/cover-2.png');
  width : '200px';

`

export default About;
