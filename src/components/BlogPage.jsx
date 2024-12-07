import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../utility/blogsData';

// Helper function to transform slug
const formatSlug = (slug) => {
  return slug
    .split('-') // Split by dashes
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join with spaces
};


const getBreadcrumbSlug = (slug) => {
  return slug
    .split('-') // Split by dashes
    .slice(0, 3) // Get the first three words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join with spaces
};



const BlogPage = () => {
  const { slug } = useParams();
  const formattedTitle = formatSlug(slug);
  const breadcrumbTitle = getBreadcrumbSlug(slug);

  const filterhashTags = blogs.filter((blog) => blog.title.toLowerCase() == formattedTitle.toLowerCase())
  console.log(filterhashTags);
  

  return (
    <main>
      <section className="my-10 py-10">
        <div className="px-5 md:px-0">
          <div className=" md:w-2/3 ">
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
          <h1 className="main-heading font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl md:w-2/3 px-20 mx-auto">
            {formattedTitle}
          </h1>
          {filterhashTags.map((hashtag) => <> 
              <button className='animate-btn'>{hashtag}</button>
           </>)}
          <div className="divider lg:w-2/3 mx-auto"></div> {/* Divider line */}
        </div>
      </section>


      <img className='lg:w-2/3 mx-auto' src='/images/blogs/article-elit-web-user-experience-design-services-cover.jpg' />
      <section className='flex md:w-2/3 mx-auto px-5 md:px-0'>
        <div className='md:basis-3/4 pr-10 my-10 md:border-r-2 md:border-gray-400 space-y-10'>

          <p>Ever stumbled upon a website that somehow trapped you into buying something you didn’t want, or worse, signing up for a subscription you didn’t even notice? Welcome to the shadowy world of dark patterns UX—strategies deliberately designed to trick users into doing things they might not want to do. </p>
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


        </div>


        <div className='hidden md:flex md:basis-1/3 my-10 px-10  md:flex-col gap-2 '>
          <a href="#how-do-dark-patterns-work" className='hover:underline'>How do Dark Patterns Work?</a>
          <a href="#types-of-dark-patterns" className='hover:underline'>Types of Dark Patterns</a>

          <a href="#" className='hover:underline'>Negative Consequences of Dark Patterns</a>
          <a href="#" className='hover:underline'>Ethics and Responsibility</a>
          <a href="#" className='hover:underline'>Conclusion</a>
          <img src="/images/blogs/banner1-mobile.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
