import React, { useState } from 'react';
import { blogs } from '../utility/blogsData';

const buttons = [
    { title: "All" },
    { title: "Fintech" },
    { title: "SaaS" },
    { title: "Web Design" },
    { title: "App Design" },
    { title: "UX design" },
    { title: "UI Design" },
    { title: "Product Design" },
    { title: "Estimation" },
    { title: "Hiring" },
    { title: "Web Development" },
    { title: "Trends" },
    { title: "Branding" },
    { title: "E-commerce" },
    { title: "Healthcare" },
    { title: "Outsourcing" },
    { title: "Fitness" },
    { title: "App Development" },
    { title: "Education" },
    { title: "Animation" },
    { title: "Illustration" },
    { title: "Real estate" },
    { title: "Typography" },
    { title: "Betting" },
    { title: "Video" },
    { title: "Crypto" },
    { title: "Webflow" },
    { title: "Agile" },
];
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
};


const Blogs = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Pagination logic
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <main className="mb-20">
                <div className="py-10">
                    <div className="hero-content2 w-2/3 mx-auto">
                        <div className="hero-content3">
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
                                </a>
                                /
                                <a href="/blog" className="text-black">

                                    Blogs
                                </a>
                            </h2>
                        </div>
                        <p className="description font-rockSalt text-black ">
                            Any project in mind? <br /> Drop us a line.
                        </p>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-pp-formula-condensed font-light  w-2/3 mx-auto">
                        Web Design Blog
                    </h1>

                    <div className="w-2/3 mx-auto flex flex-wrap gap-3 py-10">
                        {buttons.map((btn) => (
                            <button key={btn.title} className="animate-btn">
                                {btn.title}
                            </button>
                        ))}
                    </div>
                    <hr />
                </div>

                {/* Blogs */}
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {currentBlogs.map((item) => {
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

                {/* Pagination */}
                <div className="md:w-2/3 mx-auto flex flex-wrap justify-center px-3 gap-3 py-10">
                    <button
                        className={`px-4 py-2 border rounded ${currentPage === 1
                            ? "cursor-not-allowed bg-gray-200"
                            : "animate-btn"
                            }`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 border rounded-lg ${currentPage === index + 1
                                ? "bg-black text-white"
                                : "animate-btn"
                                }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={`px-4 py-2 border rounded ${currentPage === totalPages
                            ? "cursor-not-allowed bg-gray-200"
                            : "animate-btn"
                            }`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </main>
        </>
    );
};

export default Blogs;
