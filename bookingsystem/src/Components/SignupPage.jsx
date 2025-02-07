import React from 'react'
import Signup from '../assets/Images/Signup.jpg'

const SignupPage = () => {
  return (
    // <div>
    //     <div className="flex h-screen">
    //   {/* Left Section */}
    //   <div className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center p-12" style={{ backgroundImage:`url(${Signup})` }}>
    //     <h1 className="text-3xl font-semibold text-gray-900">We explore the new life much better</h1>
    //     <p className="text-lg text-gray-700 mt-2">Come to Malang with us!</p>
    //   </div>

    //   {/* Right Section */}
    //   <div className="w-1/2 flex flex-col justify-center items-center px-16">
    //     <h2 className="text-2xl font-semibold mb-4">Sign Up to Paradise in Malang</h2>

    //     <form className="w-full max-w-md">
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
    //         <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400" />
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
    //         <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400" />
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
    //         <input type="password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400" />
    //       </div>

    //       <div className="mb-4 flex items-center">
    //         <input type="checkbox" className="mr-2" />
    //         <p className="text-sm text-gray-600">
    //           Creating an account means you agree with our <a href="#" className="text-orange-500">Terms of Service</a>, <a href="#" className="text-orange-500">Privacy Policy</a>, and default <a href="#" className="text-orange-500">Notification Settings</a>.
    //         </p>
    //       </div>

    //       <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-orange-600">
    //         Sign Up
    //       </button>
    //     </form>

    //     <p className="mt-4 text-gray-700 text-sm">
    //       Already a member? <a href="#" className="text-orange-500">Sign In</a>
    //     </p>

    //     <p className="mt-8 text-gray-500 text-xs">
    //       2020 Copyright ParadiseInMalang | All Rights Reserved Made In Malang
    //     </p>
    //   </div>
    // </div>
    // </div>



    <div className="flex h-screen">
      {/* Left Section with Background Image & Overlay */}
      <div className="w-1/2 relative flex justify-center items-center text-center p-12 bg-cover bg-center" style={{ backgroundImage:`url(${Signup})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold">We explore the new life much better</h1>
          <p className="text-lg mt-2 opacity-90">Travel with us!</p>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-16">
        <h2 className="text-3xl font-semibold mb-6">Sign Up   </h2>

        <form className="w-full max-w-md">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-4 flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <p className="text-sm text-gray-600">
              Creating an account means you agree with our <a href="#" className="text-blue-600 font-medium">Terms of Service</a>, <a href="#" className="text-blue-600 font-medium">Privacy Policy</a>, and <a href="#" className="text-blue-600 font-medium">Notification Settings</a>.
            </p>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-gray-700 text-sm">
          Already a member? <a href="#" className="text-blue-600 font-medium">Sign In</a>
        </p>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-xs">
          2020 Copyright ParadiseInMalang | All Rights Reserved Made In Malang
        </p>
      </div>
    </div>
  )
}

export default SignupPage