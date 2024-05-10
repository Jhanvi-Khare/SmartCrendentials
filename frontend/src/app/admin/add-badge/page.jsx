'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const AddBadge = () => {

  const badgeForm = useFormik({
    initialValues: {
      name: '',
      subject: '',
      image: '',
      description: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      fetch('http://localhost:5000/badge/add', {
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
            toast.success('Badge Added Successfully');
          } else {
            toast.error('something went wrong');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    },
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        badgeForm.setFieldValue("image", file.name);
      }
    });
  };

  return (

    <div>
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
            <form onSubmit={badgeForm.handleSubmit}>
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
                      id="name"
                      onChange={badgeForm.handleChange}
                      value={badgeForm.values.name}
                      type="text"
                      className="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-submit-application-email"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                  >
                    Subject
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <input
                    id="subject"
                    onChange={badgeForm.handleChange}
                    value={badgeForm.values.subject}
                    type="text"
                    className="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                    id="description"
                    onChange={badgeForm.handleChange}
                    value={badgeForm.values.description}
                    type="text"
                    className="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                    onChange={uploadFile}
                    className="border-2 py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
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
    </div>
  )
}

export default AddBadge;