import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-10 mt-10">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">&copy; 2024 Swami Dayananda Saraswati Shakha</p>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <a href="#home" className="text-sm hover:text-gray-400">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
                    </li>

                </ul>

            </div>
            <div>
                <ul className='flex '>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">
                            <i className="fab fa-facebook-f">Facebook</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">
                            <i className="fab fa-twitter">Twitter</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">
                            <i className="fab fa-youtube">Youtube</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400">
                            <i className="fab fa-instagram">Instagram</i>
                        </a>
                    </li></ul>
            </div>
        </footer>
    );
};

export default Footer;
