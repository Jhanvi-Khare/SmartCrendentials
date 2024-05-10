'use client';
import React, { useEffect, useRef, useState } from 'react'

const VerifyStudent = () => {

    const [studentDetails, setStudentDetails] = useState(null);
    const [issuedBadges, setIssuedBadges] = useState([]);

    const inputRef = useRef();

    const fetchStudentDetails = () => {
        fetch(`http://localhost:5000/student/getbyenrollment/`, {
            method: 'POST',
            body: JSON.stringify({ enrollmentNumber: inputRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setStudentDetails(data);
                fetchIssuedBadges(data._id);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const displayStudentDetails = () => {
        if (studentDetails === null) {
            return <h2>No Student Found</h2>
        } else {
            return (
                <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Student Details
                            </h2>
                            <div className="mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-1/3">
                                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                            Name
                                        </h3>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-sm text-gray-800 dark:text-white">
                                            {studentDetails.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1/3">
                                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                            Enrollment No.
                                        </h3>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-sm text-gray-800 dark:text-white">
                                            {studentDetails.enrollmentNumber}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1/3">
                                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                            Email
                                        </h3>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-sm text-gray-800 dark:text-white">
                                            {studentDetails.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Issued Badges
                            </h2>
                            <div className="mt-5">
                                {
                                    issuedBadges.map((issue) => (
                                        <div className="flex items-center gap-3">
                                            <div className="w-1/3">
                                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                                    Badge Name
                                                </h3>
                                            </div>
                                            <div className="w-2/3">
                                                <p className="text-sm text-gray-800 dark:text-white">
                                                    {issue.badge.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const fetchIssuedBadges = (studentId) => {
        fetch(`http://localhost:5000/issue/getbystudent/${studentId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setIssuedBadges(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                <div className="max-w-xl text-center mx-auto">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                            Verify Student Details
                        </h2>
                    </div>
                    <form>
                        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <div className="w-full">
                                <label htmlFor="hero-input" className="sr-only">
                                    Enter Student Enrollment No.
                                </label>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    id="hero-input"
                                    name="hero-input"
                                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="Enter Student Enrollment No."
                                />
                            </div>
                            <button
                                type='button'
                                onClick={() => fetchStudentDetails(inputRef.current.value)}
                                className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className='mt-10'>
                    {displayStudentDetails()}
                </div>
            </div>
        </div>
    )
}

export default VerifyStudent;