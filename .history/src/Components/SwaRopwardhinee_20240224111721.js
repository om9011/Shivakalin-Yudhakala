import React from 'react';
import Wardhinee from '../Assets/Swa-roopwardhinee_logo.png'

const SwaRopwardhinee = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="md:col-span-1">
                    <img src={Wardhinee} alt="NGO Logo" className="w-80 mx-auto" />
                </div>

                <div className="md:col-span-1">
                    <h2 className="text-5xl font-bold mb-4 text-primary">'स्व'-रूपवर्धिनी</h2>
                    <p className="text-lg mb-4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum arcu nec erat rutrum, ac posuere elit interdum. Fusce lacinia auctor sem. Donec congue orci et eros commodo, vel tempor leo pulvinar. Ut sit amet magna sit amet lectus tincidunt iaculis. Duis eleifend odio at libero sagittis, vel tristique justo rhoncus. Aliquam erat volutpat.
                    </p>
                    <p className="text-lg mb-4">
                    </p>
                    
                </div>
            </div>
        </section>
    );
}


export default SwaRopwardhinee