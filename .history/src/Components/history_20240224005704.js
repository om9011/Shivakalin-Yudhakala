import React from 'react';

const HistorySection = () => {
    return (
        <section id="history" className="py-16 bg-orange-100 px-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">युद्ध कलांचा <span className='text-secondary'>इतिहास</span></h2>
                <p className="text-2xl text-center mb-8">
                    युद्ध कला चा समृद्ध इतिहास पाहा, ज्याने विविध सणांना आयामदारी दिली आहे.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">तलवाराची कला</h3>
                        <p className="text-gray-700 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere nibh lacus, sed aliquet libero convallis cursus. Donec convallis sem dapibus faucibus ultricies. Mauris a fringilla odio. In sodales, turpis vitae imperdiet facilisis, dolor quam laoreet risus, quis tempor ipsum ex laoreet nisi. Mauris nec lorem velit. Phasellus auctor venenatis lorem, non varius augue finibus auctor. Fusce tempor lorem ac lacinia porttitor. Sed ut massa dolor. Nullam tempor, sapien suscipit aliquam efficitur, nibh turpis lacinia ante, eu vehicula lacus turpis eu arcu. Cras sed porttitor nisl. Phasellus placerat, ipsum molestie placerat varius, ipsum ligula porta neque, at imperdiet odio neque eu orci. Praesent pretium sodales congue. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">धनुर्धरण</h3>
                        <p className="text-gray-700 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere nibh lacus, sed aliquet libero convallis cursus. Donec convallis sem dapibus faucibus ultricies. Mauris a fringilla odio. In sodales, turpis vitae imperdiet facilisis, dolor quam laoreet risus, quis tempor ipsum ex laoreet nisi. Mauris nec lorem velit. Phasellus auctor venenatis lorem, non varius augue finibus auctor. Fusce tempor lorem ac lacinia porttitor. Sed ut massa dolor. Nullam tempor, sapien suscipit aliquam efficitur, nibh turpis lacinia ante, eu vehicula lacus turpis eu arcu. Cras sed porttitor nisl. Phasellus placerat, ipsum molestie placerat varius, ipsum ligula porta neque, at imperdiet odio neque eu orci. Praesent pretium sodales congue. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">हातात हात लढणे</h3>
                        <p className="text-gray-700">
                            हातात हात लढण्याच्या तंत्रज्ञानांचे योग्यताने युद्धकर्त्यांनी आणि वीरांनी इतिहासात वापरले आहे, क्लोज-क्वार्टर्स युद्धासाठी.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HistorySection;
