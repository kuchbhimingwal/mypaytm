import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function dashboard() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState("");
  const [userList, setUserList] = useState([]);
  const onChnageHandler = async(e)=>{
    const filter = e.target.value;
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      setUserList(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    const asyncFunc = async()=>{
    const AuthStr = 'Bearer '.concat(localStorage.getItem('jwt'));
      try {
        const response = await axios.get('http://localhost:3000/api/v1/account/balance', { headers: { Authorization: AuthStr } })
        setBalance(response.data.balance);
      } catch (error) {
        console.log(error);
      }
    }
    asyncFunc();
  },[])
  return (
    <div>
      <div className='flex justify-between border'>
        <div className='text-2xl font-bold p-4'>Payment App</div>
        <div className='p-4'>Hello, User</div>
      </div>
      <div className='font-bold p-4'>
        Your Balance ${balance}
      </div>
      <div className='p-4'>
        <div className='font-bold'>Users</div>
        <div>
          <input type="text" placeholder='Search Users...' className='border w-full p-2 my-2' onChange={onChnageHandler}/>
        </div>
      </div>
      {userList.map((user)=>(
        <div className='flex justify-between p-4' key={user._id}>
          <div className='font-bold'>{user.firstname} {user.lastname}</div>
          <div>
            <button className='rounded-md bg-black text-white p-2' onClick={()=>{
              navigate('/send', { state: user })
            }}>Send Money</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default dashboard