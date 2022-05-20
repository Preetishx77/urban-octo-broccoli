import React from 'react'
import landing_img from '../../images/landing_img.svg'
import Image from 'next/image'
export default function Feedback() {
  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [message,setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email);
    setMessage('Check the console for the response');
  }
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      
     
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 mt-36">
        <div>
    
        </div>
        <div className="mt-2 flex flex-col items-center">
       
          <h1 className="text-l xl:text-xl font-extrabold">
            Your feedback is valuable to us
          </h1>
          <div className="w-full flex-1 m-auto">
        

            <div className="my-8 border-b text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Please enter your name and email
              </div>
            </div>
           <form onSubmit={handleSubmit}>

           
            <div className="mx-auto max-w-xs">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
               
              />
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                type="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              
              />
 
              <button
               type='submit'
                className="mt-3 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-3 rounded-lg hover:bg-pink-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                 Join us
                </span>
              </button>

              <p>{message}</p>
              
            </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat landing_container"
         
        >
          <Image src={landing_img} alt=""/>
        </div>
      </div>
    </div>
 
  </section>
  )
}
