import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

import img1 from '../../assets/Images/men1.jpg';
import img2 from '../../assets/Images/men2.jpg';
import img3 from '../../assets/Images/women.jpg';
import dik from '../../assets/Images/dik.jpg';
import ana from '../../assets/Images/ana.jpg';
import me from '../../assets/Images/mee.jpg';
import venki from '../../assets/Images/venki.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div className="bg-gray-900 text-gray-200 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-white">About WolfWalk</h2>
                </div>
                
                <div className="space-y-16">
                    {/* Our Story Section */}
                    <div className="flex flex-col md:flex-row md:space-x-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-yellow-300">Our Story</h3>
                            <p className="leading-relaxed font-Caveat">
                                WolfWalk was founded with a mission to redefine the shoe industry. Our journey began in 2010 with a small team of passionate individuals who believed in the power of innovation and quality craftsmanship. Over the years, we have grown into a renowned brand, known for our exceptional designs and commitment to sustainability.
                            </p>
                            <p className="leading-relaxed font-Caveat">
                                Inspired by the untamed spirit of the wolf, our shoes are designed to provide strength, agility, and comfort. We believe that every step you take should be a statement of confidence and style. At WolfWalk, we merge traditional techniques with modern technology to create shoes that not only look good but also perform exceptionally well.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={img1} alt="Craftsmanship at WolfWalk" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                        </div>
                    </div>

                    {/* Sustainability Section */}
                    <div className="flex flex-col md:flex-row md:space-x-12" data-aos="fade-up" data-aos-delay="200">
                        <div className="md:w-1/2">
                            <img src={img3} alt="Sustainable Practices" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-yellow-300">Sustainability</h3>
                            <p className="leading-relaxed font-Caveat">
                                Sustainability is at the core of everything we do at WolfWalk. We are committed to using eco-friendly materials and processes to minimize our environmental impact. From sourcing responsibly harvested leather to employing energy-efficient manufacturing techniques, we strive to reduce our carbon footprint and promote a greener future.
                            </p>
                            <p className="leading-relaxed font-Caveat">
                                Our dedication to sustainability extends to our packaging as well. We use recyclable materials and avoid plastic wherever possible. By choosing WolfWalk, you are supporting a brand that values the planet and takes tangible steps to protect it.
                            </p>
                        </div>
                    </div>

                    {/* Innovation and Design Section */}
                    <div className="flex flex-col md:flex-row md:space-x-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-yellow-300">Innovation and Design</h3>
                            <p className="leading-relaxed font-Caveat">
                                At WolfWalk, innovation is in our DNA. Our design team continuously pushes the boundaries of creativity and functionality. Each pair of shoes is meticulously crafted to ensure a perfect blend of aesthetics and performance. We incorporate cutting-edge technologies such as advanced cushioning systems and breathable materials to enhance comfort and support.
                            </p>
                            <p className="leading-relaxed font-Caveat">
                                We take pride in our ability to anticipate and respond to the evolving needs of our customers. Whether you're hitting the trails, navigating city streets, or attending a formal event, WolfWalk has the perfect pair of shoes for you. Our diverse collection caters to various styles and preferences, ensuring that you always find something that resonates with your unique personality.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={img2} alt="Design and Innovation" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                        </div>
                    </div>

                    {/* Meet Our Team Section */}
                    <div className="text-center space-y-12" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-3xl font-bold text-yellow-300">Meet Our Team</h3>
                        <p className="leading-relaxed text-center max-w-3xl mx-auto font-Caveat">
                            Behind every great brand is a team of dedicated individuals. At WolfWalk, our team is our greatest asset. From skilled artisans to innovative designers, each member plays a crucial role in bringing our vision to life. We are united by a shared passion for excellence and a commitment to delivering the best to our customers.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10">
                            <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                                <img src={venki} alt="Venkitt - CEO" className="w-40 h-40 rounded-full shadow-lg transform hover:scale-105 transition duration-300 mx-auto" />
                                <p className="font-bold mt-4">Venkitt</p>
                                <p className="text-gray-400">CEO</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                                <img src={dik} alt="Dinkan - Head of Design" className="w-40 h-40 rounded-full shadow-lg transform hover:scale-105 transition duration-300 mx-auto" />
                                <p className="font-bold mt-4">Dinkan</p>
                                <p className="text-gray-400">Head of Design</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="700">
                                <img src={ana} alt="Anagha - Chief Marketing Officer" className="w-40 h-40 rounded-full shadow-lg transform hover:scale-105 transition duration-300 mx-auto" />
                                <p className="font-bold mt-4">Anagha</p>
                                <p className="text-gray-400">Chief Marketing Officer</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="800">
                                <img src={me} alt="Karthi - Production Manager" className="w-40 h-40 rounded-full shadow-lg transform hover:scale-105 transition duration-300 mx-auto" />
                                <p className="font-bold mt-4">Karthi</p>
                                <p className="text-gray-400">Production Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
