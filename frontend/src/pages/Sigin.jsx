import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function sigin() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const clickHandler = async()=>{
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
        username: email,
        firstname: firstName,
        lastname: lastName,
        password: password
      })
      navigate("/dashboard")
      console.log(response);
    } catch (error) {
      setErrors(error.response.data.message);

    }
  }
  return (
    <div className=' flex min-h-screen items-center justify-center bg-gray-400'>
      <div className='w-80 bg-white rounded-md p-4'>
        <div className='text-center font-bold text-3xl p-2'>Sign Up</div>
        <div className='text-center text-gray-400 p-2'>Enter your information to create the account</div>
        <div>
          <div className='p-2 font-bold'>First Name</div>
          <input type="text" placeholder='Enter your First name' className='border border-gray-200 rounded-md p-2 w-full' onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div>
          <div className='p-2 font-bold'>Last Name</div>
          <input type="text" placeholder='Enter your Last name' className='border border-gray-200 rounded-md p-2 w-full' onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <div>
          <div className='p-2 font-bold'>Email</div>
          <input type="text" placeholder='Enter your Email' className='border border-gray-200 rounded-md p-2 w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
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

export default sigin