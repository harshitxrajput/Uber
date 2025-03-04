import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
        if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's your Email</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="email@example.com" name="" id="" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder="password" name="" id="" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Login</button>
      </form>
        <p className="text-center ">Join a fleet <Link to='/captain-signup' className="text-blue-600 ">Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className="bg-[#d5622d] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
        </div>
    </div>
  );
};

export default CaptainLogin;
