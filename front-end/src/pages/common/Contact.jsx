import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Stores</h2>
            <p className="text-gray-600 mb-8">
                On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov djeivis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt text-red-600 mr-2"></i>
                        <span className="text-gray-800">United States</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">United States</h3>
                    <p className="text-gray-600">205 Middle Road, 2nd Floor, New York</p>
                    <p className="text-gray-600 mt-2">+02 1234 567 88</p>
                    <p className="text-gray-600">info@example.com</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt text-red-600 mr-2"></i>
                        <span className="text-gray-800">Netherlands</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Amsterdam</h3>
                    <p className="text-gray-600">205 Middle Road, 2nd Floor, New York</p>
                    <p className="text-gray-600 mt-2">+02 1234 567 88</p>
                    <p className="text-gray-600">info@example.com</p>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-gray-600 mb-4">Follow us:</p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 text-2xl"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-500 text-2xl"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-500 text-2xl"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-500 text-2xl"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">Your name *</label>
                            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-red-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">Your email *</label>
                            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-red-500" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium">Subject *</label>
                        <input type="text" id="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-red-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">Your message</label>
                        <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-red-500"></textarea>
                    </div>
                    <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-red-700">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
