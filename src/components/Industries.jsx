import React from "react"
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Footer from "./Footer";

const experiences = [
  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Healthcare",
    subHeading: 'Gapsy Design has a long history of providing top-notch design services to the healthare industry.',
    description: 'We have worked with some of the biggest names in the business, and we have a deep understanding of the unique challenges that come with designing for healthcare. From creating engaging patient education materials to designing cutting-edge medical devices, we have the experience and expertise to help you succeed. Some of the healthcare design services we offer include',
    points : ['Patient education materials','Medical device design','Graphic design for healthcare marketing materials','Branding and identity development for healthcare organizations']
  },

  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Logistics",
    subHeading: 'Logistics is a key industry in the global economy. It involves the coordination of goods and services from suppliers to customers..',
    description: 'Gapsy Studio offers innovative solutions to simplify the process and increase efficiency throughout the logistics chain. With our cutting-edge technology and intuitive designs, Gapsy Studio provides businesses with the tools they need to stay competitive and maximize profits. They strive to reduce complexity while providing solutions that are cost-effective, reliable, and built with scalability in mind. Whether it be supply chain management, warehouse management, or fleet management, Gapsy Studio is the perfect partner to help companies stay ahead of their competition.',

  },


  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Marketplace",
    subHeading: 'Gapsy is dedicated to creating unique and engaging marketplace experiences for our clients.',
    description: 'Gapsy Studio has the experience and expertise necessary to develop a marketplace that will meet all your business needs, from understanding the user journey and designing an intuitive interface to creating effective brand identities. Our team is knowledgeable in various development languages, technologies, frameworks, and platforms such as React Native, Node.js, and MongoDB. We have also developed marketplaces using Amazon Web Services and other cloud-based services.',

  },


  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Media",
    subHeading: 'Gapsy recognizes the challenges that come with developing effective media strategies and provides services tailored to meet each client’s needs.',
    description: 'Our team of experienced professionals has expertise in video production, social media management, marketing analysis and strategy development. By combining creative design with a solid understanding of analytics, we are able to create a media strategy that helps our clients reach any business goals.',

  },

  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Retail",
    subHeading: 'Retail design is an ever -changing industry that requires creative and innovative solutions',
    description: 'Gapsy Studio attempts to create an atmosphere that is unique to the brand, making it stand out from competitors and attract more visitors. They design custom store layouts and displays that are tailored to each client\'s individual needs, giving them the perfect platform to showcase their products and services. By utilizing cutting-edge technology and blending traditional design elements, Gapsy Studio creates engaging spaces that are inviting to customers.',

  },


  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Fintech",
    subHeading: 'Fintech design is quickly becoming a booming industry',
    description: 'At Gapsy Studio, our goal is to provide fintech solutions that are tailored specifically to the needs of clients. Our team has experience in designing applications, websites, and other products that meet the demands of clients while providing excellent usability and user experiences. We specialize in customizing solutions to match specific brand identities, creating unique user experiences.',

  },

  {
    videoUrl: '/videos/travel.mp4',
    heading: "Travel",
    subHeading: 'Gapsy specializes in creating unique, luxury experiences that provide our clients with unforgettable journeys. ',
    description: 'At Gapsy Studio, we understand that planning a trip can be overwhelming and stressful. That’s why we strive to make our clients’ experience as smooth and stress-free as possible. We design travel packages customized to fit your needs and budget, as well as provide exceptional customer service throughout the planning and booking process. Our travel experts are always available to answer any questions you may have and make sure that your vacation is a memorable one.',

  },



  {
    videoUrl: '/videos/media.mp4',
    heading: "Social Media",
    subHeading: 'Gapsy Studio is full-service creative agency that specialized in social media design.',
    description: 'We also provide comprehensive media production services, such as video editing and animation, audio recording, post-production, and more. Whether it’s creating stunning visuals for a short-term campaign or developing a long-term content strategy for your brand, Gapsy Studio is here to help. Our team will work with you every step of the way to produce engaging and impactful content that meets your needs and objectives.',

  },



  {
    videoUrl: '/videos/healthcare.mp4',
    heading: "Education",
    subHeading: 'Gapsy spcialized in the Education Design Industry, providing innovative solutions for educational institutions',
    description: 'With over 10 years of hands-on experience, our team has a deep understanding of what works best in the education sector. We offer services that range from curriculum design to course development and implementation. Our services are tailored to the specific needs of each client, helping them create an environment that fosters engagement and learning.',

  },

  {
    imageUrl: '/images/webflow-services.png',
    heading: "Webflow",
    subHeading: 'Gapsy spcialized in the Education Design Industry, providing innovative solutions for educational institutions',
    description: 'With over 10 years of hands-on experience, our team has a deep understanding of what works best in the education sector. We offer services that range from curriculum design to course development and implementation. Our services are tailored to the specific needs of each client, helping them create an environment that fosters engagement and learning.',

  },

  {
    imageUrl: '/images/webflow-services.png',
    heading: "DeFi",
    subHeading: 'Revolutionizing Financec: Expert DeFi Design and Developement Services',
    description: 'Gapsy Studio excels in providing cutting-edge DeFi design services, blending innovative technology with intuitive user interfaces to deliver seamless and secure decentralized finance solutions. Our expertise in DeFi ensures user-friendly, engaging designs that enhance user trust and interaction in the dynamic world of digital finance.', 
    points : [
      'Branding and Indetity Developement for DeFi Platforms' , 'User Interface Design for DeFi Applications:' , 'Infographic Design for DeFi Concepts:', 'Marketing Materials for DeFi Services:', 'Token Design and Branding:',
    ]
  },

  {
    imageUrl: '/images/webflow-services.png',
    heading: "Web 3 Design",
    subHeading: 'Crafting decentralized digital experiences that are seamless, user-focused, and future-ready.',
    description: 'We have collaborated with some of the leading innovators in the Web3 space and understand the unique challenges that come with designing for decentralized platforms. From building intuitive blockchain-based applications to crafting immersive metaverse experiences, we have the expertise and experience to help you thrive. Some of the Web3 design services we offer include:', 
    points : [
      'DeFi Platform Design' , 'NFT Marketplace Design' , 'Metaverse Experience Design', 'Blockchain App UI/UX', 'DAO Dashboard Design',
    ]
  },


  {
    imageUrl: '/images/webflow-services.png',
    heading: "Crypto Web Design",
    subHeading: 'Gapsy Design has a long history of providing top-notch design services to the cryptocurrency industry.',
    description: 'We have partnered with some of the biggest names in the cryptocurrency space and have a deep understanding of the unique challenges that come with designing for blockchain-based platforms. From building secure crypto wallets to developing intuitive DeFi interfaces, we have the experience and expertise to help you thrive. Some of the cryptocurrency design services we offer include:', 
    points : [
      'DeFi Platform Design' , 'Crypto Wallet Design' , 'NFT Marketplace Design', 'Blockchain App UI/UX', 'Exchange Platform Design',
    ]
  },


]
const Industries = () => {
  return (
    <main>
      <section className="hero-container">
        <div className="">
          <div className="flex flex-wrap justify-between items-center px-10 md:px-0 md:w-1/2 mx-auto">
            <div className="hero-content3">
              <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="styles_label__fRSpJ" src="/breadcrumbs.svg" />
              <h2 className="subheading"> <a href="/" className='hover:underline duration-500'> Gapsy </a> / Industries</h2>
            </div>
            <p className="md:w-1/2 font-rockSalt text-black ">
              Helping Industries Grow, Succeed and Thrive
            </p>
          </div>
          <h1 className="main-heading font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-9xl  md:w-2/3 px-10 sm:px-20  mx-auto">Our Industries Strives To Be The Best In The Niche</h1>
          <div className="divider md:w-2/3 mx-auto"></div> {/* Divider line */}

          <div className=" flex flex-wrap items-center md:w-1/2 mx-auto justify-between gap-6 px-10 md:px-0">
            <button className="hire-btn">Tell Us About Your Project</button>
            <p className="sm:w-1/2 font-neue-montreal">
              Gapsy is a forward-thinking design studio that specializes in creating next-generation designs. We believe in pushing the boundaries of what's possible and strive to create products and experiences that are truly unique. Whether designing a new type of user interface or developing a groundbreaking new product, we're always looking for ways to innovate. If you're looking for a design studio that thinks outside the box, Gapsy is the right choice. We'll help you create something truly special to make a lasting impression. Let's get started!
            </p>
          </div>

        </div>
        <div className=" lg:w-2/3 lg:px-32 mx-auto space-y-10 py-10">

          {experiences.map((experience) => <>
            <Experience heading={experience.heading} videoUrl={experience.videoUrl} subHeading={experience.subHeading} description={experience.description} imageUrl={experience.imageUrl} points={experience.points}/>
            <hr />
          </>)}

        </div>

        <div className="px-5">

        <Swiper
        breakpoints={{
          300 :{
            slidesPerView : 1
          },

          576 : {
            slidesPerView : 1.5
          },

          756 : {
            slidesPerView : 2
          },

          1024 : {
            slidesPerView : 2.5,
          },

          1400 : {
            slidesPerView : 3
          }
        }}
            spaceBetween={35} // Spacing between slides
            pagination={{ clickable: true }} // Enables pagination dots
            
            >
           
              <SwiperSlide>
                  <img src='/images/adseller-1.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/images/rkde.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]"/>
              </SwiperSlide>
               <SwiperSlide>
                  <img src='/images/scoop-solar.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img src='/images/creatorset.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img src='/images/mind-cleanse.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img src='/images/pickle.webp' className="hover:scale-110 duration-500 w-[600px] h-[350px]"/>
              </SwiperSlide>
          </Swiper>
            </div>
      </section>

    </main>
          


  )
}

const Experience = ({ heading, videoUrl, subHeading, description, imageUrl, points }) => {
  return (
    <section className="px-10 md:px-0">
      <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extralight font-pp-formula-condensed py-6">{heading}</h2>
      <div className="flex flex-wrap lg:flex-nowrap flex-col xl:flex-row items-center gap-5">

        {videoUrl && <video className="rounded-xl basis-1/3 md:w-[500px]"   autoPlay loop >
          <source src={videoUrl} type="video/mp4" />
            </video> }


          {imageUrl &&  <img src={imageUrl} className="rounded-xl md:w-1/2 md:h-[500px] object-cover  hover:rotate-6 duration-300" />}



        
        <div className="space-y-7">
          <p className="font-pp-formula-condensed text-3xl font-light text-black"> <a className="lowercase" href={`/industries/${heading}`} > {subHeading} </a></p>
          <p className="font-neue-montreal">{description}</p>

          {points && 
          <ul className="grid grid-cols-2 gap-4 ">
            {points.map((point) => <>  <li className="flex gap-2 items-baseline"> <img src="/icons/list-icon.svg" width={20}/> <p>{point}</p> </li>  </>)}
           </ul>
          }

          <span className="flex flex-nowrap items-center gap-3">

              <button className="animate-btn"> <IoIosArrowForward /> </button>
              <p className="text-black font-neue-montreal">View More</p>
          </span>


        </div>
      </div>
    </section>
  )
}


export default Industries
