import React from 'react'

const badge = () => {
  return (
    
    <div><>
    {/* Card Section */}
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Card */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
        <form>
          {/* Section */}
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Badge Form
              </h2>
            </div>
            {/* End Col */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-full-name"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Name
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-submit-application-full-name"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                <input
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            {/* End Col */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-email"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Email
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-email"
                type="email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            {/* End Col */}
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-phone"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Description
                </label>
              </div>
            </div>
            {/* End Col */}
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
              <p className="mt-3">
                <a
                  className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                  href="../docs/index.html"
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
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  Add phone
                </a>
              </p>
            </div>
            {/* End Col */}
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-current-company"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Subject
                </label>
                
              </div>
              
            </div>
            
            {/* End Col */}
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-current-company"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Section */}
          {/* Section */}
          <label
                  htmlFor="af-submit-application-current-company"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Image
                </label>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
            
            </div>
            </div>
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit application
          </button>
        </form>
      </div>
      {/* End Card */}
    </div>
    {/* End Card Section */}
  </>
  </div>
  )
}

export default badge;