import React from 'react'
import { Link } from 'react-router-dom'


function ContactUs() {
  return (
    <div className=' h-screen '>
    <nav class=" p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="bg-gradient-to-r from-yellow-200  to-yellow-500 rounded-xl p-1 text-3xl  font-semibold">MediaMingle</a>
        <div class="flex space-x-4">
            <a  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
            <Link to="/">Home</Link></a>
</div>
    </div>
</nav>
       <div className='flex justify-center mt-12'>
       <form className='w-1/3 '>
        <div className="mb-4 ">
          <label className="block mr-[29rem] text-xl text-gray-700  font-bold mb-2" >
            Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mr-[29rem] text-xl text-gray-700 font-bold mb-2" >
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4 ">
          <label className="block mr-[21rem] text-xl text-gray-700  font-bold mb-2" >
            Contact Number
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="mb-4 ">
          <label className=" block mr-[29rem] text-xl text-gray-700  font-bold mb-2" >
            Subject
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="sub"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <label className="block mr-[29rem] text-gray-700 text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="message"
            name="message"
            rows="4"
            placeholder="Your MessNaage"
          ></textarea>
        </div>
        <button
          className="bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500"
          type="submit"
        >
          Contact Now
        </button>
      </form>
       </div>
       
       <footer class="  p-4 mt-36">
    <p class=" text-center">© 2024 MediaMingle. All rights reserved.</p>
</footer>
       </div>
  )
}

export default ContactUs