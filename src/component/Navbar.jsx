import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 ">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Learn4All</div>
                <ul className="flex space-x-6 text-lg">
                    <li className="hover:text-blue-800  hover:underline underline-offset-8 transition duration-200 cursor-pointer">Home</li>
                    <li className="hover:text-blue-800  hover:underline underline-offset-8 transition duration-200 cursor-pointer">Courses</li>
                    <li className="hover:text-blue-800  hover:underline underline-offset-8 transition duration-200 cursor-pointer">About</li>
                    <li className="hover:text-blue-800  hover:underline underline-offset-8 transition duration-200 cursor-pointer">Contact</li>
                </ul>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                    Login / Signup
                </button>

            </nav>
  )
}

export default Navbar
