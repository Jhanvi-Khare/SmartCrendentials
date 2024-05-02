import React from 'react'
import Navbar from './(main)/navbar'

const page = () => {
  return (
    <div>
      <div><>
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 text-sm py-3 sm:py-0">
    <nav
      className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <a
          className="flex-none text-xl font-semibold text-white"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
              <line x1={3} x2={21} y1={6} y2={6} />
              <line x1={3} x2={21} y1={12} y2={12} />
              <line x1={3} x2={21} y1={18} y2={18} />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          <a
            className="font-medium text-white sm:py-6"
            href="#"
            aria-current="page"
          >
            Home
          </a>
          <a
            className="font-medium text-white/80 hover:text-white sm:py-6"
            href="#"
          >
            Signup
          </a>
          <a
            className="font-medium text-white/80 hover:text-white sm:py-6"
            href="#"
          >
            Login
          </a>
          <a
            className="font-medium text-white/80 hover:text-white sm:py-6"
            href="#"
          >
            Account
          </a>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
            <button
              type="button"
              className="flex items-center w-full text-white/80 hover:text-white font-medium"
            >
              Dropdown
              <svg
                className="flex-shrink-0 ms-2 size-4"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                About
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] relative">
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                >
                  Sub Menu
                  <svg
                    className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 !mx-[10px] top-0 end-full">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Downloads
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
          <a
            className="flex items-center gap-x-2 font-medium text-white/80 hover:text-white sm:border-s sm:border-white/30 sm:my-6 sm:ps-6"
            href="#"
          >
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            Log in
          </a>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
  {/* ========== MAIN CONTENT ========== */}
  <main id="content">
    <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* your content goes here ... */}
    </div>
  </main>
  {/* ========== END MAIN CONTENT ========== */}
</>
</div>
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
            WELCOME
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
          Preline is a large open-source project, crafted with Tailwind CSS
          framework by Hmlstream.
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

  

  </div>
  )
}

export default page