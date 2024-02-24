import React from 'react';

const HistorySection = () => {
  return (
    <section id="history" className="py-16 bg-orange-100 px-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">युद्ध कलांचा <span className='text-sen'>इतिहास</span></h2>
        <p className="text-lg text-center mb-8">
          युद्ध कला चा समृद्ध इतिहास पाहा, ज्याने विविध सणांना आयामदारी दिली आहे.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insert historical war skill cards or content here */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">तलवाराची कला</h3>
            <p className="text-gray-700">
              तलवाराची कला हजारो वर्षांपासून अभ्यासली जात आहे, प्राचीन युद्ध तंत्रज्ञानांपासून ते ठरावित मार्शल आर्ट्स अध्ययनात आली आहे.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">धनुर्धरण</h3>
            <p className="text-gray-700">
              धनुर्धरण, प्रागैतिहासिक काळापासून असलेले, विविध संस्कृतिंच्या जागतिक स्तरावर हावभावाचा आणि खेळाचा उपयोग केला जातो.
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
