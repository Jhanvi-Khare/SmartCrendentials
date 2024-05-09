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
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-black text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800"
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
      <>
        {/* Icon Blocks */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
            {/* Icon Block */}
            <div>
              <svg
                className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
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
                <rect width={10} height={14} x={3} y={8} rx={2} />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Responsive
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Responsive, and mobile-first project on the web
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div>
              <svg
                className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
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
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx={17} cy={17} r={3} />
                <circle cx={7} cy={7} r={3} />
              </svg>
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Customizable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Components are easily customized and extendable
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div>
              <svg
                className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div>
              <svg
                className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
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
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  24/7 Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
      <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        From the blog
      </h1>
      <p className="max-w-lg mx-auto mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis
        sint autem nesciunt, laudantium quia tempore delect
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            All the features you want to know
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
          <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
        </div>
      </div>
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            How to use sticky note for problem solving
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
          <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
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
      <a href="#" title="Hellonext Home Page" className="flex items-center">
        <svg
          className="w-auto h-6"
          width={86}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 335 93"
        >
          <path
            d="M134.71 45.7599c1.32-1.44 2.67-2.94 4.05-4.5 1.44-1.56 2.82-3.09 4.14-4.59 1.32-1.56 2.55-3.03 3.69-4.41 1.2-1.38 2.22-2.58 3.06-3.6h15.93c-3.18 3.66-6.3 7.17-9.36 10.53-3 3.3-6.3 6.72-9.9 10.26 1.8 1.62 3.66 3.57 5.58 5.85 1.92 2.22 3.78 4.53 5.58 6.93 1.8 2.4 3.45 4.8 4.95 7.2 1.5 2.4 2.76 4.59 3.78 6.57h-15.39c-.96-1.56-2.07-3.27-3.33-5.13-1.2-1.92-2.49-3.81-3.87-5.67-1.38-1.92-2.85-3.75-4.41-5.49-1.5-1.74-3-3.21-4.5-4.41v20.7H121.3V8.31991l13.41-2.16V45.7599zM209.35 74.3799c-2.28.66-5.22 1.26-8.82 1.8-3.6.6-7.38.9-11.34.9-4.02 0-7.38-.54-10.08-1.62-2.64-1.08-4.74-2.58-6.3-4.5-1.56-1.98-2.67-4.32-3.33-7.02-.66-2.7-.99-5.67-.99-8.91v-26.37h13.41v24.75c0 4.32.57 7.44 1.71 9.36 1.14 1.92 3.27 2.88 6.39 2.88.96 0 1.98-.03 3.06-.09 1.08-.12 2.04-.24 2.88-.36v-36.54h13.41v45.72zM217.888 16.8699l13.41-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.89 10.44c-1.62.66-3.42 1.23-5.4 1.71-1.98.48-4.41.72-7.29.72-3.66 0-6.69-.48-9.09-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.46-3.96-3.06-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM254.279 16.8699l13.409-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.891 10.44c-1.62.66-3.421 1.23-5.401 1.71s-4.409.72-7.289.72c-3.66 0-6.691-.48-9.091-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.459-3.96-3.059-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM334.028 28.6599c-2.7 9.12-5.52 17.67-8.46 25.65-2.94 7.98-6.15 15.72-9.63 23.22-1.26 2.7-2.52 4.98-3.78 6.84-1.26 1.92-2.64 3.48-4.14 4.68-1.5 1.26-3.21 2.16-5.13 2.7-1.86.6-4.05.9-6.57.9-2.1 0-4.05-.21-5.85-.63-1.74-.36-3.18-.78-4.32-1.26l2.34-10.71c1.38.48 2.61.81 3.69.99 1.08.18 2.22.27 3.42.27 2.4 0 4.23-.66 5.49-1.98 1.32-1.26 2.43-3.03 3.33-5.31-3.06-6-6.12-12.72-9.18-20.16-3.06-7.5-5.94-15.9-8.64-25.2h14.22c.6 2.34 1.29 4.89 2.07 7.65.84 2.7 1.71 5.46 2.61 8.28.9 2.76 1.8 5.46 2.7 8.1.96 2.64 1.86 5.04 2.7 7.2.78-2.16 1.59-4.56 2.43-7.2.84-2.64 1.65-5.34 2.43-8.1.84-2.82 1.62-5.58 2.34-8.28.78-2.76 1.47-5.31 2.07-7.65h13.86z"
            fill="#1A202C"
          />
          <path
            d="M5.61825.4114C24.3953-2.95442 43.4551 21.1695 51.21 34.8757v29.6906c-4.8347 14.2497-12.952 19.1401-20.8473 19.362-12.7347.358-22.758-14.27-17.6881-25.9574 2.926-6.7451 8.905-10.1655 13.0016-11.2189C5.61473 45.9161.32294 23.2628.01461 7.98884-.05756 4.41366 2.09844 1.04233 5.61825.4114z"
            fill="#9E58E9"
          />
          <path
            d="M96.8018.4114C78.0247-2.95442 58.9649 21.1695 51.21 34.8757v29.6906c4.8347 14.2497 12.952 19.1401 20.8474 19.362 12.7346.358 22.7579-14.27 17.688-25.9574-2.9259-6.7451-8.905-10.1655-13.0015-11.2189 20.0614-.8359 25.3531-23.4892 25.6611-38.76316.073-3.57518-2.083-6.94651-5.6032-7.57744z"
            fill="#7629C8"
          />
        </svg>
        <span className="sr-only">Kutty Home Page</span>
      </a>
      <p className="my-4 text-xs leading-normal text-gray-600">
        Hosted in the EU 🇪🇺, with <strong>no user tracking</strong> scripts.
        Made all over the world by{" "}
        <a href="#" className="underline" target="_blank">
          17 amazing people
        </a>
        .
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
      <header className="bg-white dark:bg-gray-900">
  <nav className="border-t-4 border-blue-500">
    <div className="container flex items-center justify-between px-6 py-3 mx-auto">
  
      <a
        className="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </nav>
  <div className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Subscribe To The <span className="text-blue-500">Newsletter</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            be the first to knows when our{" "}
            <span className="font-medium text-blue-500">Brand</span> is live
          </p>
          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
            />
            <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        <img
          className="w-full h-full max-w-md"
          src="https://merakiui.com/images/components/Email-campaign-bro.svg"
          alt="email illustration vector art"
        />
      </div>
    </div>
  </div>
</header>

<section className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800">
  <div className="max-w-5xl px-4 py-8 mx-auto md:flex md:items-center md:gap-x-6">
    <div className="flex items-start md:items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-gray-500 shrink-0 dark:text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <p className="text-gray-700 dark:text-gray-200">
        We use cookies to enhance your user experience. By continuing to visit
        this site you agree to{" "}
        <a
          href="/our use of cookies"
          className="underline transition-colors duration-200 hover:text-blue-500 "
        >
          our use of cookies
        </a>
        .
      </p>
    </div>
    <button className="items-center justify-center hidden text-gray-700 transition-colors duration-300 rounded-full md:flex dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</section>




    </div>
  )
}

export default page;