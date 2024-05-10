'use client';
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import * as Yup from 'Yup';


const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  password: Yup.string().required('Password is Required').min(6, 'Password is Too Short')
    .matches(/[A-Z]/, 'Password must contain uppercase letter')
    .matches(/[a-z]/, 'Password must contain lowercase letter')
    .matches(/[0-9]/, 'Password must contain number')
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);

      fetch('http://localhost:5000/user/authenticate', {
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
            toast.success('Signup Successfull');
            response.json()
              .then((data) => {
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
                router.push('/');
              })
          } else {
            toast.error('Invalid Credentials');

          }
        }).catch((err) => {
          console.log(err);
        });

    },
    validationSchema:
      loginValidationSchema
  })


  return (
    <div>

      <div><section className="bg-white h-screen dark:bg-gray-900">
        <div className="container px-6 py-24 mx-auto lg:py-32 h-full">
          <div className="lg:flex h-full">
            <div className="lg:w-1/2">

              <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
                Welcome back
              </h1>
              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                login to your account
              </h1>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form className="w-full lg:max-w-xl" onSubmit={loginForm.handleSubmit}>
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                  />
                  {loginForm.touched.email && (
                    <small className='text-red-300'>{loginForm.errors.email}</small>
                  )}
                </div>
                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                  />
                  {loginForm.touched.password && (
                    <small className='text-red-300'>{loginForm.errors.password}</small>
                  )}
                </div>
                <div className="mt-8 md:flex md:items-center">
                  <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Login 
                  </button>
                  <a
                    href="#"
                    className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400"
                  >
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
          </div>
         
        </div>
      </section>
      </div>
    </div>
  )
}

export default Login;