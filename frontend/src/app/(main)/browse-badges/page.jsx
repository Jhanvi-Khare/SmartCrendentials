'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BrowseBadges = () => {

    const [badgeList, setBadgeList] = useState([]);

    const fetchBadges = () => {
        fetch('http://localhost:5000/badge/getall')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setBadgeList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const stringSlicer = (str, maxLen) => {
        if (str.length > maxLen) {
            return str.slice(0, maxLen) + '...'
        } else {
            return str;
        }
    }

    useEffect(() => {
        fetchBadges();
    }, [])

    const displayBadges = () => {
        if (badgeList.length === 0) {
            return <h2>No Badges Found</h2>
        } else {
            return badgeList.map(badge => (
                <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div
                        className="w-1/3 bg-cover"
                        style={{
                            backgroundImage:
                                `url("http://localhost:5000/${badge.image}")`
                        }}
                    />
                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                            {badge.name}
                        </h1>
                        <p className="mt-2 text-xs text-gray-400 dark:text-gray-400">
                            {badge.subject}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {stringSlicer(badge.description, 50)}
                        </p>
                        <div className="flex mt-2 item-center">
                            <svg
                                className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex justify-between mt-3 item-center">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                                
                            </h1>
                            <Link href={'/view-badge/' + badge._id} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <>
                {/* Subscribe */}
                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                                Explore Badges
                            </h2>
                        </div>
                        <form>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        id="hero-input"
                                        name="hero-input"
                                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <button
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Subscribe */}
            </>

            <div className='grid grid-cols-2 gap-5'>
                {displayBadges()}
            </div>

        </div>
    )
}

export default BrowseBadges;