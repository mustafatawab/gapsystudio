import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../utility/blogsData';
import FAQItem from './FAQItem';

const formatSlug = (slug) => {
  return slug
    .split('-') // Split by dashes
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join with spaces
};


const getBreadcrumbSlug = (slug) => {
  return slug
    .split('-') 
    .slice(0, 3) 
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' '); 
};

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
};

const faqs = [
  {
    question: "WHAT ARE DARK PATTERNS IN UX?",
    answer: "Dark UX patterns are deceptive design strategies that trick or manipulate users into making decisions that benefit a company, often at the user's expense"
  },
  {
    question: "How do dark patterns work?",
    answer: "Dark patterns exploit psychological biases and create confusing interfaces to pressure users into actions like subscribing, making a purchase, or sharing personal information."
  },
  {
    question: "How can UX designers avoid using dark patterns?",
    answer: "UX designers should prioritize transparency, user autonomy, and ethical practices, ensuring designs empower users rather than deceive or manipulate them."
  },

];


const BlogPage = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };


  const { slug } = useParams();
  const formattedTitle = formatSlug(slug);
  const breadcrumbTitle = getBreadcrumbSlug(slug);

  const filterhashTags = blogs.filter((blog) => blog.title.toLowerCase() == formattedTitle.toLowerCase())
  console.log(filterhashTags);


  return (
    <main>
      <section className="my-10 py-10">
        <div className="px-5 md:px-0">
          <div className=" lg:w-2/3 ">
            <div className="hero-content3 py-3">
              <img
                alt="Breadcrumbs"
                aria-hidden="true"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="styles_label__fRSpJ"
                src="/breadcrumbs.svg"
              />
              <h2 className="subheading">
                <a href="/" className="hover:underline duration-500">
                  Gapsy
                </a>{" "}
                / <a href="/blog">Blog </a>
                / <span className='text-black'>{breadcrumbTitle}</span>
              </h2>
            </div>
          </div>
          <h1 className=" font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl md:w-2/3 mx-auto font-light">
            {formattedTitle}
          </h1>
          {/* {filterhashTags.map((hashtag) => <>
            <button className='animate-btn'>{hashtag}</button>
          </>)} */}
          <div className="divider lg:w-2/3 mx-auto"></div> {/* Divider line */}
        </div>
      </section>


      <img className='lg:w-2/3 mx-auto' src='/images/blogs/article-elit-web-user-experience-design-services-cover.jpg' />
      <section className='flex md:w-2/3 mx-auto px-5 md:px-0'>
        <section className='md:basis-3/4 pr-10 my-10 md:border-r-2 md:border-gray-400 space-y-10 overflow-hidden'>

          <p className=''>Ever stumbled upon a website that somehow trapped you into buying something you didn't want, or worse, signing up for a subscription you didn’t even notice? Welcome to the shadowy world of dark patterns UX—strategies deliberately designed to trick users into doing things they might not want to do. </p>
          <p>While UX design usually focuses on improving user experiences, dark UX practices have a more sinister intent. So, what is a dark pattern? Gapsy pulls back the curtain and reveals the tricks some platforms use, how they work, and what you should watch for.</p>

          <div id='how-do-dark-patterns-work' className='space-y-10'>
            <h3 className='text-black text-4xl font-pp-formula-condensed '>How do Dark Patterns Work?</h3>
            <p> Before we dive into the different types of dark patterns, let's start with a key question: Whats a dark pattern, and how do these sneaky tricks actually work? Dark patterns take advantage of human psychology—our habits, impulses, and assumptions. By using familiar visual cues, misleading wording, or deceptive layouts, dark patterns can manipulate users into making decisions that benefit the company but not necessarily the individual. These practices often hide in plain sight, camouflaged as seemingly harmless design features.</p>
            <img src='/images/blogs/article-insights-into-dark-ux-practices-what-to-watch-for-01.jpg' />
            <p>Ever clicked a big, shiny button, only to realize it wasn't what you thought? Or did you find an option to opt out of something buried in the fine print? These small, seemingly insignificant tweaks work because our brains take shortcuts to avoid cognitive overload. While you might feel a twinge of unease after realizing you’ve been tricked, dark patterns are designed to make it just easy enough for you to comply.</p>

          </div>

          <div id="types-of-dark-patterns" className='space-y-10 '>
            <h3 className='text-black text-5xl font-pp-formula-condensed font-light'>Types of Dark Patterns</h3>
            <p>Dark UX comes in various forms, each sneakier than the last. Let's break down some of the most notorious offenders so that you can identify them before falling victim to their traps. Here are some dark patterns examples:</p>
            <h3 className='text-black text-4xl font-pp-formula-condensed font-extralight'>Deceptive Interfaces</h3>


            <p>Imagine browsing an online store for new sneakers.
              You see a “limited-time offer” banner, complete with a countdown timer
              ticking away the minutes until this once-in-a-lifetime sale expires.
              Your heart races—should you buy now before it's too late? You panic, click “buy now,”
              and proceed to checkout without a second thought. But was the timer real? Probably not.
            </p>

            <p>
              Deceptive interfaces, or bait-and-switch patterns,
              rely on false urgency or misleading visuals to push users toward quick,
              often ill-informed decisions. These dark patterns in UX prey on your fear of missing out,
              making you believe that if you don't act immediately, you'll lose out on a great deal. Here is bait
              and switch dark pattern example:
            </p>

          </div>

          <hr />

          <div className='space-y-10'>
            <div className='bg-black rounded-lg p-10 relative overflow-hidden'>
              <h4 className='text-white text-lg font-neue-montreal '>Rate this article</h4>
              <div>

                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index <= rating ? 'active' : ''}`}
                      onClick={() => handleClick(index)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <img src='/images/blogs/cup.png' className='absolute w-[500px] top-0 right-28 hidden lg:block' />
              </div>
            </div>

            <h4 className='text-4xl font-pp-formula-condensed font-light leading-10'>If you like what we write, we recommend subscribing to our mailing list to always be aware of new publications.</h4>
            <div className='flex gap-5 lg:flex-nowrap flex-wrap'>
              <input type="text" placeholder='Enter your email' className='bg-transparent p-5 rounded-lg border w-full md:basis-3/4' />
              <button className='hire-btn md:basis-1/5'>Subscribe</button>
            </div>
          </div>

        </section>



        {/* Right side */}
        <section className='hidden md:flex md:basis-1/3 my-10 px-10  md:flex-col gap-2 '>
          <a href="#how-do-dark-patterns-work" className='hover:underline'>How do Dark Patterns Work?</a>
          <a href="#types-of-dark-patterns" className='hover:underline'>Types of Dark Patterns</a>

          <a href="#" className='hover:underline'>Negative Consequences of Dark Patterns</a>
          <a href="#" className='hover:underline'>Ethics and Responsibility</a>
          <a href="#" className='hover:underline'>Conclusion</a>
          <img src="/images/blogs/banner1-mobile.png" alt="" />
        </section>
      </section>


      {/* FAQS */}

      <div className="lg:w-2/3 px-5 py-10  mx-auto">
        <hr />
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl py-10">Do you have any questions? We tried to answer most of them!</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <>
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            </>
          ))}
        </div>
      </div>


          {/* Related Articles */}
      <div>
        <h4 className='lg:w-2/3 text-4xl md:text-6xl mx-auto font-neue-montreal px-5'>Related Articles</h4>
        <div className="lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-5">
          {blogs.filter((blog, i) => i < 2).map((item) => {
            const slug = generateSlug(item.title);
            return (
              <a href={`/blog/${slug}`} key={item.title}>
                <div className="space-y-1">
                  <img
                    src={item.image}
                    className="object-contain hover:scale-105 duration-500 hover:rotate-1 rounded-xl"
                    alt={item.title}
                  />
                  <p className="text-sm">{item.date}</p>
                  <h5 className="font-pp-formula-condensed font-light text-black text-2xl">
                    {item.title}
                  </h5>
                  <div className="text-black flex gap-2">
                    {item.hashtags.map((tag, index) => (
                      <p key={index} className="text-black text-md">
                        #{tag}
                      </p>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </main>
  );
};







export default BlogPage;