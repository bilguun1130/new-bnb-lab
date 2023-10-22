import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1B1B1E] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e8ad9e53-377b-4084-9adb-0df64cf0a300" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#00FF87] bg-[#1B1B1E]'>Contact</p>
                <p className='text-white py-4'>// Submit the form below or shoot us an email - bnblabb@gmail.com</p>
            </div>
            <input className='bg-[#1B1B1E] p-2 border-2 border-[#00FF87]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#1B1B1E] border-2 border-[#00FF87]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#1B1B1E] p-2 border-2 border-[#00FF87]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 border-[#00FF87] hover:bg-[#00FF87] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact