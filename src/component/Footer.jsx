import React from 'react'
import Nav_item from './Nav_item'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul>

                        <li>
                            <Link
                                to="/"
                                className="text-white hover:text-blue-300 no-underline hover:no-underline"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className="text-white hover:text-blue-300 no-underline hover:no-underline"
                            >
                                Courses
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p>info@email.com</p>
                    <p>122-455-7390</p>
                </div>
                <div>
                    <SocialLinks />
                </div>
                <div className="text-3xl font-bold text-white">Learn4All</div>
            </div>
        </footer>
    )
}

export default Footer
