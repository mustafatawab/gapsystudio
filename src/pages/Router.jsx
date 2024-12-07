import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ContactPage from '../components/Contact';
import Team from '../components/Team';
import Header from '../components/Header';
import HomePage from './Home';
import Industries from '../components/Industries'
import Blogs from '../components/Blogs';
import BlogPage from '../components/BlogPage';
import IndustryPage from '../components/IndustryPage';
import ContactForm from '../components/ContactForm';
const AppRouter = () => {
    return (
        <Router>
            <div style={styles.container}>
                <Routes>
                    {/* Home Route without Header */}
                    <Route path="/" element={<HomePage />} />

                    {/* Other Routes with Header */}
                    <Route
                        path="/*"
                        element={
                            <>
                                <Header />
                                <Routes>
                                    <Route path="/about" element={<Team />} />
                                    <Route path="/services" element={<Services />} />
                                    <Route path="/contacts" element={<ContactPage />} />
                                    <Route path="/herosections" element={<HeroSection />} />
                                    <Route path="/industries" element={<Industries />} />
                                    <Route path="/industries/:slug" element={<IndustryPage />} />
                                    <Route path="/blog" element={<Blogs />} />
                                    <Route path="/blog/:slug" element={<BlogPage />} />
                                    {/* Add more routes here */}
                                </Routes>
                                <ContactForm />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

const styles = {
    container: {
        width: '100%',
        minWidth: '100%',
        height: '100%',
        minHeight: '100%',
    },
};

export default AppRouter;
