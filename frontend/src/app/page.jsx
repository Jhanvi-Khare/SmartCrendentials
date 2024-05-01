import React from 'react'

function Home() {
  return (
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Designed for you to get more <span class="text-blue-600">simple</span></h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take it anywhere.</p>
        </div>

        <div class="mt-10 relative max-w-5xl mx-auto">
          <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div class="absolute inset-0 size-full">
            <div class="flex flex-col justify-center items-center size-full">
              <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Play the overview
              </a>
            </div>
          </div>

          <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
            <div class="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
          </div>

          <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div class="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;