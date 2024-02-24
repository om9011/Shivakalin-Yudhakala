import React from 'react';
import Wardhinee from '../Assets/Swa-roopwardhinee_logo.png'

const SwaRopwardhinee = () => {
    return (
        <section className="py-8 bg-gray-100">
            <h2 className="text-5xl font-bold mb-4 text-primary">'स्व'-रूपवर्धिनी</h2>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <div className="md:col-span-1 ">
                    <img src={Wardhinee} alt="NGO Logo" className="w-96 mx-auto" />
                </div>

                <div className="md:col-span-1 px-4">
                    <p className="text-lg mb-4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum arcu nec erat rutrum, ac posuere elit interdum. Fusce lacinia auctor sem. Donec congue orci et eros commodo, vel tempor leo pulvinar. Ut sit amet magna sit amet lectus tincidunt iaculis. Duis eleifend odio at libero sagittis, vel tristique justo rhoncus. Aliquam erat volutpat.
                        <br />Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam eleifend ut lorem id vehicula. Vivamus sit amet felis vel nisi mollis hendrerit. Integer tempor odio nec nisi posuere, non ullamcorper nulla dapibus. Quisque consequat urna id purus feugiat, vel mattis ligula convallis. Sed at nisl hendrerit, vehicula purus ac, vestibulum ex. Cras fermentum sapien nec erat mattis, vel fringilla neque congue.
                        <br />Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam eleifend ut lorem id vehicula. Vivamus sit amet felis vel nisi mollis hendrerit. Integer tempor odio nec nisi posuere, non ullamcorper nulla dapibus. Quisque consequat urna id purus feugiat, vel mattis ligula convallis. Sed at nisl hendrerit, vehicula purus ac, vestibulum ex. Cras fermentum sapien nec erat mattis, vel fringilla neque congue.

                    </p>
                </div>
            </div>
        </section>
    );
}


export default SwaRopwardhinee