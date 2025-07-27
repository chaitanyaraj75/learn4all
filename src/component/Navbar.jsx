import React from 'react'
import Nav_item from './Nav_item';

//Add heading prop to Navbar component as heading="Courses""
function Navbar(props) {
  const { heading } = props;
  return (
    <nav className="flex justify-between items-center px-8 py-4 ">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Learn4All</div>
      <ul className="flex space-x-6 text-lg">
        <Nav_item heading={heading} title="Home"/>
        <Nav_item heading={heading} title="Courses"/>
        <Nav_item heading={heading} title="About"/>
        <Nav_item heading={heading} title="Contact"/>
      </ul>

      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
        Login / Signup
      </button>
    </nav>
  )
}

export default Navbar
