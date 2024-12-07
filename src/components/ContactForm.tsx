"use client"

import React, { useState } from "react"
import { Paperclip } from 'lucide-react'
import styled from 'styled-components';


export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [question, setQuestion] = useState("")
  const [selectedService, setSelectedService] = useState("UI/UX Design")

  const services = [
    "UI/UX Design",
    "Motion Design",
    "Brand Identity",
    "Web development",
    "Illustrations"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, selectedService, question })
  }

  return (
    <div className="wd-100 bg-black text-white font-sans flex flex-col sticky ">
      <div className="bg-black text-white p-8 font-sans flex flex-col justify-center">
        <h1 className=" font-light mb-12 text-center text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-pp-formula-condensed">Let's talk business</h1>
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto grid grid-col-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}

                  className={`hire-btn px-4 py-2 border-2 border-white bg-lightgray45 text-white rounded-lg cursor-pointer text-base font-medium transition-colors duration-300 hover:bg-gray-800 hover:text-white
                    ${selectedService === service
                      ? "bg-white text-black"
                      : "bg-gray-800 hover:bg-gray-700"
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="question" className="block mb-2 text-sm">Question</label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-white transition-colors h-32 resize-none"
                required
              ></textarea>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-5">
              <label htmlFor="file-upload" className="upload-btn flex items-center px-4 py-2  text-white rounded-full text-sm cursor-pointer">
                <Paperclip className="w-4 h-4 mr-2" />
                Attach file
                <input id="file-upload" type="file" className="hidden" />
              </label>
              <button type="submit"
                className="px-5 py-2 border border-gray-800 bg-white text-gray-800 rounded-lg cursor-pointer text-base font-medium transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
      </div>

      <footer className="text-sm px-7 ">
        <div className="flex justify-between flex-wrap gap-5">
          <div className="space-y-1">
            <a href="#" className="transition-colors"
              style={{
                color: "inherit",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fe6f61")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              +1 909 817 2580
            </a>
          </div>
          <div className="space-y-1 lg:ml-64 lg:mr-auto">
            <a href="#" className="transition-colors"
              style={{
                color: "inherit",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fe6f61")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              info@gapsystudio.com
            </a>
          </div>
          <div className="flex space-x-6 flex-wrap">
            {["Gapsy", "Services", "About us", "Cases", "Industries", "Blog", "Contacts"].map((item) => (
              <a key={item} href="#" className="hover:text-custompink-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" style={{ backgroundColor: 'gray' }}></div> {/* Divider line */}

        <div className="mt-4 mb-4 flex flex-wrap justify-between text-center gap-5">
          <div className="space-y-1">
            <p style={{
              color: "inherit",
            }}>© Gapsy studio, 2017-2024. All rights reserved.</p>
          </div>
          <div className=" ml-9 mr-auto">
            <a href="#" className="transition-colors"
              style={{
                color: "inherit",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fe6f61")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >Privacy Policy</a>
          </div>
          <div className="al flex flex-wrap space-x-6">
            {["Facebook", "Behance", "Dribbble", "Instagram"].map((item) => (
              <a key={item} href="#" className="transition-colors"
                style={{
                  color: "inherit",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fe6f61")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
};


// Footer Styled Components
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1px;
  padding: 20px 50px;
  background-color: #000000;
  color: #fff;
  gap: 20px;
  `
  ;


const FooterText = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto; /* Aligns the links to the right */
`;

const FooterLinksContainer = styled.div`
  color: #333;
  text-align: right;
`;

const FooterLink1 = styled.a`
  color: #797979;
  margin-left: 3rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.4s ease; /* Smooth color transition */

  &:after {
        transform: scaleY(1); // Initial scale for the hover effect
        transition: transform 0.4s ease; // Transition for the effect
        transformOrigin: bottom; // Origin point for the transform
    }

  &:hover {
    color: #fe6f61;
  }
 &:hover:after {
    transform: scaleY(0); // Scale to full width on hover
    transformOrigin: bottom;
`


const FooterLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.4s ease; /* Smooth color transition */

  &:after {
        transform: scaleY(1); // Initial scale for the hover effect
        transition: transform 0.4s ease; // Transition for the effect
        transformOrigin: bottom; // Origin point for the transform
    }

  &:hover {
    color: #fe6f61;
  }
 &:hover:after {
    transform: scaleY(0); // Scale to full width on hover
    transformOrigin: bottom;
`;

