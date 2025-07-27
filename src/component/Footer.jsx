import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <p>info@etcrwall.com</p>
                        <p>+1 195-852-4850</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Social</h4>
                        <p>[Social Links]</p>
                    </div>
                    <div className="text-3xl font-bold text-white">4</div>
                </div>
            </footer>
  )
}

export default Footer
