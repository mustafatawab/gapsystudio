import React from 'react';
import '../css/Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const testimonials = [
    {
        text: "Gapspy has helped me immensely with perfecting my online presence...",
        author: "Blake Bell",
        title: "Founder",
        company: "Mind Cleanse",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    }
];

function TestimonialCard({ text, author, title, company, image }) {
    return (
        <div className="testimonial-card">
            <div>
                <p className="testimonial-text2">"</p>
                <p className="testimonial-text font-neue-montreal">{text}</p>
            </div>
            <div className="testimonial-author">
                <div className="author-details">
                    <img src={image} alt={author} className="author-image" />
                    <div className="author-info">
                        <h4>{author}</h4>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="company-info">
                    <p>{company}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="-section py-20 px-10">
            <h1 className="header app-container font-pp-formula-condensed font-extralight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Want to know what our clients think about working with us?</h1>
            <div className="">
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
                    // slidesPerView={1}
                    spaceBetween={30} // Spacing between slides
                    
                    // Enables navigation buttons
                    pagination={{ clickable: true }} // Enables pagination dots

                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide>
                            <TestimonialCard key={index} {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
