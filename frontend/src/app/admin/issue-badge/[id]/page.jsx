'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const IssueBadge = () => {

    const { id } = useParams();
    const [studentDetails, setStudentDetails] = useState(null);

    const fetchStudentData = () => {
        fetch(`http://localhost:5000/student/getbyid/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudentDetails(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchStudentData();
    }, [])


    const displayStudentDetails = () => {
        if (studentDetails === null) {
            return <div>Loading...</div>
        } else {
            return <>
                {/* Features */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Grid */}
                    <div className="md:grid md:grid-cols-6 md:gap-12 xl:gap-16">
                        <div className='col-span-2'>
                            <img
                                className="rounded-xl"
                                src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                                alt="Image Description"
                            />
                        </div>
                        {/* End Col */}
                        <div className="mt-5 col-span-4 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Title */}
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                        {studentDetails.name}
                                    </h2>
                                    <p className="text-gray-500 dark:text-neutral-500">
                                        {studentDetails.enrollmentNumber}
                                    </p>
                                </div>
                                {/* End Title */}
                                {/* List */}
                                <ul className="space-y-2 sm:space-y-4">
                                    <li className="flex space-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                            <svg
                                                className="flex-shrink-0 size-3.5"
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
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                            <span className="font-bold">Easy &amp; fast</span> designing
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                            <svg
                                                className="flex-shrink-0 size-3.5"
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
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                            Powerful <span className="font-bold">features</span>
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                            <svg
                                                className="flex-shrink-0 size-3.5"
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
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                            User Experience Design
                                        </span>
                                    </li>
                                </ul>
                                {/* End List */}
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Features */}
            </>

        }
    }

    return (
        <div>
            {displayStudentDetails()}
        </div>
    )
}

export default IssueBadge;