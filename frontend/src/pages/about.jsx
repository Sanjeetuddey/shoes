import React from 'react'

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-10">
      {/* Main Content Container */}
      <div className="max-w-6xl w-full bg-white p-12 rounded-2xl shadow-xl">
        {/* About Us Section */}
        <h2 className="text-5xl font-extrabold text-gray-900 text-center">
          About <span className="text-amber-500">ShoeHub</span>
        </h2>
        <p className="text-gray-600 text-center mt-4 text-lg max-w-3xl mx-auto">
          At <span className="font-semibold text-amber-500">ShoeHub</span>, we believe shoes are more than just fashion—they’re a lifestyle. 
          Our goal is to bring you the latest styles with unbeatable comfort and durability.
        </p>

        {/* Our Mission */}
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
            We are committed to providing stylish and high-quality footwear that enhances your confidence. 
            Whether for sports, casual wear, or formal occasions, our shoes are designed with precision and passion.
          </p>
        </div>

        {/* Why Choose Us? */}
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">✅ Premium Quality</h4>
              <p className="text-gray-600 mt-2">Only the finest materials and craftsmanship.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">✅ Affordable Prices</h4>
              <p className="text-gray-600 mt-2">Top fashion at budget-friendly rates.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">✅ Trendy Designs</h4>
              <p className="text-gray-600 mt-2">Always stay ahead of the fashion curve.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">✅ Fast Delivery</h4>
              <p className="text-gray-600 mt-2">Quick and reliable shipping for your convenience.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* Team Member */}
            <div className="group bg-gray-200 p-6 rounded-lg shadow-md w-64 text-center hover:bg-amber-500 transition duration-300">
              <img
                src="https://via.placeholder.com/100"
                alt="CEO"
                className="rounded-full mx-auto mb-3 border-4 border-white group-hover:border-gray-800 transition duration-300"
              />
              <h4 className="text-lg font-semibold group-hover:text-white">John Doe</h4>
              <p className="text-gray-600 group-hover:text-gray-200">Founder & CEO</p>
            </div>
            <div className="group bg-gray-200 p-6 rounded-lg shadow-md w-64 text-center hover:bg-amber-500 transition duration-300">
              <img
                src="https://via.placeholder.com/100"
                alt="Designer"
                className="rounded-full mx-auto mb-3 border-4 border-white group-hover:border-gray-800 transition duration-300"
              />
              <h4 className="text-lg font-semibold group-hover:text-white">Jane Smith</h4>
              <p className="text-gray-600 group-hover:text-gray-200">Lead Designer</p>
            </div>
            <div className="group bg-gray-200 p-6 rounded-lg shadow-md w-64 text-center hover:bg-amber-500 transition duration-300">
              <img
                src="https://via.placeholder.com/100"
                alt="Marketing"
                className="rounded-full mx-auto mb-3 border-4 border-white group-hover:border-gray-800 transition duration-300"
              />
              <h4 className="text-lg font-semibold group-hover:text-white">David Brown</h4>
              <p className="text-gray-600 group-hover:text-gray-200">Marketing Head</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition duration-300 shadow-md">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default About;