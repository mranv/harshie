import React from 'react';
import { FaShieldAlt, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaShieldAlt className="text-blue-500 text-2xl mr-2" />
                        <span className="text-white font-semibold text-lg">Harsh Gulrajani</span>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <a href="mailto:harsh.gulrajani@techanv.com" className="flex items-center hover:text-blue-500 transition-colors duration-300">
                            <FaEnvelope className="mr-2" />
                            harsh.gulrajani@techanv.com
                        </a>
                        <a href="tel:+917024499444" className="flex items-center hover:text-blue-500 transition-colors duration-300">
                            <FaPhone className="mr-2" />
                            +91 70244 99444
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    © 2024 techanv Consulting. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;