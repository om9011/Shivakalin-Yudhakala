import React from "react";

const HistorySection = () => {
    return (
        <section id="history" className="py-16 bg-orange-100 px-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">
                    युद्ध कलांचा <span className="text-secondary">इतिहास</span>
                </h2>
                <p className="text-2xl text-center mb-8">
                    युद्ध कला चा समृद्ध इतिहास पाहा, ज्याने विविध सणांना आयामदारी दिली
                    आहे.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg">
                        <img
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fpawankhind-wallpapers&psig=AOvVaw13xBB7-qJbPToKjZ67YgQ4&ust=1708803169725000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjsh_KZwoQDFQAAAAAdAAAAABAx"
                            className="w-full aspect-video "
                            alt="दंड"

                        />
                        <h3 className="text-3xl font-semibold my-4 text-tertiary">दंड</h3>
                        <p className="text-gray-700 text-justify px-6 pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            posuere nibh lacus, sed aliquet libero convallis cursus. Donec
                            convallis sem dapibus faucibus ultricies. Mauris a fringilla odio.
                            In sodales, turpis vitae imperdiet facilisis, dolor quam laoreet
                            risus, quis tempor ipsum ex laoreet nisi. Mauris nec lorem velit.
                            Phasellus auctor venenatis lorem, non varius augue finibus auctor.
                            Fusce tempor lorem ac lacinia porttitor. Sed ut massa dolor.
                            Nullam tempor, sapien suscipit aliquam efficitur, nibh turpis
                            lacinia ante, eu vehicula lacus turpis eu arcu.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg">
                        <img
                            src="https://i.ytimg.com/vi/MJUxhDj9fjw/maxresdefault.jpg"
                            className="w-full"
                            alt="तलवार"

                        />
                        <h3 className="text-3xl font-semibold my-4 text-tertiary">तलवार</h3>
                        <p className="text-gray-700 text-justify px-6 pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            posuere nibh lacus, sed aliquet libero convallis cursus. Donec
                            convallis sem dapibus faucibus ultricies. Mauris a fringilla odio.
                            In sodales, turpis vitae imperdiet facilisis, dolor quam laoreet
                            risus, quis tempor ipsum ex laoreet nisi. Mauris nec lorem velit.
                            Phasellus auctor venenatis lorem, non varius augue finibus auctor.
                            Fusce tempor lorem ac lacinia porttitor. Sed ut massa dolor.
                            Nullam tempor, sapien suscipit aliquam efficitur, nibh turpis
                            lacinia ante, eu vehicula lacus turpis eu arcu.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg ">
                        <img
                            src="https://images.tv9marathi.com/wp-content/uploads/2023/08/Subhedar.jpg?q=20&width=1280&enlarge=true"
                            className="w-full"
                            alt="दानपट्टा"
                        />
                        <h3 className="text-3xl font-semibold my-4 text-tertiary">
                            दानपट्टा
                        </h3>
                        <p className="text-gray-700 text-justify px-6 pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            posuere nibh lacus, sed aliquet libero convallis cursus. Donec
                            convallis sem dapibus faucibus ultricies. Mauris a fringilla odio.
                            In sodales, turpis vitae imperdiet facilisis, dolor quam laoreet
                            risus, quis tempor ipsum ex laoreet nisi. Mauris nec lorem velit.
                            Phasellus auctor venenatis lorem, non varius augue finibus auctor.
                            Fusce tempor lorem ac lacinia porttitor. Sed ut massa dolor.
                            Nullam tempor, sapien suscipit aliquam efficitur, nibh turpis
                            lacinia ante, eu vehicula lacus turpis eu arcu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;