import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUserData({email: email,
            password: password});
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's your Email</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="email@example.com" name="" id="" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder="password" name="" id="" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Login</button>
      </form>
        <p className="text-center ">New here? <Link to='/signup' className="text-blue-600 ">Create New Account</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className="bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
        </div>
    </div>
  );
};

export default UserLogin;
