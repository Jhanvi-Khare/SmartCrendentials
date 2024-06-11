'use client';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const IssueBadge = () => {

    const { id } = useParams();
    const [studentDetails, setStudentDetails] = useState(null);
    const [badgeList, setBadgeList] = useState([]);
    const [issuedBadges, setIssuedBadges] = useState([]);
    let [isOpen, setIsOpen] = useState(false)

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

    const fetchBadges = () => {
        fetch(`http://localhost:5000/badge/getall`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBadgeList(data);
            })
            .catch(err => {
                console.log(err);
            })
    }



    useEffect(() => {
        fetchStudentData();
        fetchBadges();
        fetchIssuedBadges();
    }, [])


    const displayStudentDetails = () => {
        if (studentDetails === null) {
            return <div>Loading...</div>
        } else {
            return <div className="md:grid md:grid-cols-6 md:gap-12 xl:gap-16">
                <div className='col-span-2'>
                    <img
                        className="rounded-xl"
                        src={"http://localhost:5000/" + (studentDetails.image ? studentDetails.image : 'student_placeholder.png')}
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
                            <p className="text-gray-500 dark:text-neutral-500">
                                {studentDetails.email}
                            </p>
                        </div>
                    </div>
                </div>
                {/* End Col */}
            </div>
        }
    }

    const displayBadges = () => {
        return badgeList.map((badge, index) => {
            return <div key={index} className="flex items-center justify-between p-4 border-b">
                <div>
                    <h3 className='font-bold'>{badge.name}</h3>
                    <p>{badge.description}</p>
                </div>
                <button className='px-4 py-2 mt-8 bg-purple-600 text-white rounded-md' onClick={
                    () => {
                        issueBadge(badge._id);
                        fetchIssuedBadges();
                    }
                }>Issue</button>
            </div>
        })
    }

    const issueBadge = (badgeId) => {
        fetch(`http://localhost:5000/issue/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student: id,
                badge: badgeId
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const fetchIssuedBadges = () => {
        fetch(`http://localhost:5000/issue/getbystudent/` + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIssuedBadges(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteIssue = (id) => {
        fetch(`http://localhost:5000/issue/delete/` + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetchIssuedBadges();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const displaIssuedBadges = () => {
        return issuedBadges.map((issue, index) => {
            return <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img
                                className="size-[38px] rounded-full"
                                src={`http://localhost:5000/${(issue.badge.image ? issue.badge.image : 'badge_placeholder.webp')}`}
                                alt="Image Description"
                            />
                            <div className="ms-3">
                                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                    {issue.badge.name}
                                </h3>
                            </div>
                        </div>
                        <button onClick={e => deleteIssue(issue._id)} className="ps-3 text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {displayStudentDetails()}
                <h2 className='text-2xl font-medium text-gray-800 dark:text-white mt-10 mb-5'>Issued Badges</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                    {displaIssuedBadges()}
                </div>

                <button onClick={() => setIsOpen(true)} className='p-4 mt-8 bg-blue-600 text-white rounded-md'>Issue Badges</button>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-black">
                        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 bg-slate-700">
                            <DialogTitle className="font-bold">Issue Badge</DialogTitle>
                            <Description>Issue Badge to student</Description>
                            {
                                displayBadges()
                            }
                            <div className="flex gap-4">
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default IssueBadge;