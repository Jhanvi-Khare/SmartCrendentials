'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const AddStudent = () => {

  const studentForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      enrollmentNumber: '',
      image: '',
      subject: '',
      admissionDate: '',
      completionDate: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      fetch('http://localhost:5000/student/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            resetForm();
            toast.success('Student Added Successfully');
          } else {
            toast.error('something went wrong');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    },
  })

  return (

    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 text-sm py-3 sm:py-0">
        
      </header><>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
            <form onSubmit={studentForm.handleSubmit}>
              {/* Section */}
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                <div className="sm:col-span-12">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    Student Form
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
                      id="name"
                      onChange={studentForm.handleChange}
                      value={studentForm.values.name}
                      type="text"
                      className="border-1 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                    id="email"
                    onChange={studentForm.handleChange}
                    value={studentForm.values.email}
                    type="text"
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
                      Enrollment No
                    </label>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="enrollmentNumber"
                    onChange={studentForm.handleChange}
                    value={studentForm.values.enrollmentNumber}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                  <p className="mt-3">

                  </p>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-current-company"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                    >
                      Image
                    </label>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="af-submit-application-current-company"
                    type="file"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-phone"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                    >
                      Subject
                    </label>
                    
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="subject"
                    onChange={studentForm.handleChange}
                    value={studentForm.values.subject}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                  <p className="mt-3">

                  </p>
                </div>
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-phone"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                    >
                      Admission Date
                    </label>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="admissionDate"
                    onChange={studentForm.handleChange}
                    value={studentForm.values.admissionDate}
                    type="date"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                  <p className="mt-3">

                  </p>
                </div>
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-phone"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                    >
                      Completion Date
                    </label>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="completionDate"
                    onChange={studentForm.handleChange}
                    value={studentForm.values.completionDate}
                    type="date"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                  <p className="mt-3">

                  </p>
                </div>
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  )
}

export default AddStudent;