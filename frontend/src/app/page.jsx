import React from 'react'
import Navbar from './(main)/navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <>
        {/* Hero */}
        <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="group inline-block bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="../figma.html"
              >
                <p className="me-2 inline-block text-black text-sm">
                  WELCOME TO OUR WEBSITE
                </p>
                <span className="group-hover:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-black-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Now it's easier than ever to build your carrier
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-black-400">
              In today's dynamic job market, verifiable skills and a commitment to lifelong
              learning are increasingly valued by employers. Traditional academic credentials,
              while valuable, can often lag behind the rapid pace of skill development. This
              website introduces Smart Credentials (Digihub)+, a web-based platform that addresses this gap by
              offering a modern approach to credentialing through digital badges and empowers
              educational institutions and students with verifiable credentials.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white  text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}
      </>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="aspect-w-16 aspect-h-7">
            <img
              className="w-full object-cover rounded-xl"
              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-educational-institution-autumn-admission-poster-background-image_146770.jpg"
            />
          </div>
     
      <div>
        
      <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Objectives of Smart  Crendentials
      </h1>
      <p className="max-w-lg mx-auto mt-4 text-gray-500">
       Smart Crendentials (Digihub) aims to empower students by providing a platform to earn, manage,
       and share digital badges as verifiable recognition of their achievements. The
      project has the following key objectives:

      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.shiksha.com/mediadata/images/1696503175phprDLkI2.jpeg"
          alt=""
        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            To create a user-friendly platform:
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          Develop a web-based platform where students can seamlessly access courses, complete specializations, and
          earn digital badges.
          </p>
          <p className="mt-3 text-sm text-blue-500">10 May 2024</p>
        </div>
      </div>
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://res.cloudinary.com/eventboost/image/upload/f_auto,q_auto:eco/v1592459840/website/wp/event-badges-01.jpg"
          alt=""
        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            To implement a secure badging system:
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          Integrate a secure system for issuing and managing digital badges, ensuring their authenticity and
          verifiability.
          </p>
          <p className="mt-3 text-sm text-blue-500">10 May 2024</p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>

      <div>
      <footer className="px-4 py-12 mx-auto max-w-7xl">
  <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
    <div className="col-span-3">
    
      <p className="my-4 text-xs leading-normal text-gray-600">
      Design features that incentivize students to pursue course specializations and actively track their learning
      progress.
        
        
      </p>
    </div>
    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Product
      </p>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Features
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Pricing
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Feedback
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        FAQs
      </a>
    </nav>
    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Support
      </p>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Chat
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        {" "}
        Email Support{" "}
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        GDPR
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        {" "}
        Help{" "}
      </a>
    </nav>
    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Resources
      </p>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Blog
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        {" "}
        Twitter{" "}
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Alternatives
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Why feature vote?
      </a>
    </nav>
    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
      <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Company
      </p>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        About Us
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Privacy
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Terms
      </a>
      <a
        className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
        href="#"
      >
        Status
      </a>
    </nav>
  </div>
  
    
</footer>

      </div>
      




    </div>
    </div>
  )
}

export default page;