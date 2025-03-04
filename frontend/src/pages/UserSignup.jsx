import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { userDataContext } from '../context/userContext'

const UserSignup = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const { user, setUser } = React.useContext(userDataContext);

    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        const newUser = {
            fullname:{
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import .meta.env.VITE_BASE_URL}/users/register`, newUser);
        if(response.status == 201){
          const data = response.data;
          setUser(data.user);
          localStorage.setItem('token', JSON.stringify(data.token));
          navigate('/home');
        }
    }

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's your name</h3>
        <div className='flex gap-4 mb-6'>
            <input type="text" required placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} name="" id="" className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"/>
            <input type="text" required placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)} name="" id="" className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"/>
        </div>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="email@example.com" name="" id="" className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder="password" name="" id="" className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <button className="bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Create Account</button>
      </form>
        <p className="text-center ">Already have an Account? <Link to='/login' className="text-blue-600 ">Login</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
    </div>
    </div>
  )
}

export default UserSignup
