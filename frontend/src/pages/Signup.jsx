import React, { useState } from 'react'

function signup() {
  const [errors, setErrors] = useState('')
  const clickHandler = ()=>{
    
  }
  return (
    <div className=' flex min-h-screen items-center justify-center bg-gray-400'>
      <div  className='w-80 bg-white rounded-md p-4'>
          <div className='text-center font-bold text-3xl p-2'>Sign In</div>
          <div className='text-center text-gray-400 p-2'>Enter your credentials to access your account</div>
          <div>
            <div className='p-2 font-bold'>Email</div>
            <input type="text" placeholder='Write your email' className='border border-gray-200 rounded-md p-2 w-full' onChange={(e)=>{setFirstName(e.target.value)}}/>
          </div>
          <div>
            <div className='p-2 font-bold'>Password</div>
            <input type="password" placeholder='Enter your Password' className='border border-gray-200 rounded-md p-2 w-full' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div>
            <button className='w-full bg-black text-white rounded-md p-2 my-2' onClick={clickHandler}>Sign Up</button>
          </div>
          <div className='text-center text-red-400'>{errors}</div>
          <div className='text-center'>Already have a account? <span className='underline cursor-pointer'>Sign In</span></div>
      </div>
    </div>
  )
}

export default signup