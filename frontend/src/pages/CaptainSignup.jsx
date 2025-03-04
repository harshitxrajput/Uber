import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
        const captainData = {
            fullname:{
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
          };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
    }

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
        <div className='flex flex-wrap gap-4 mb-6'>
            <input type="text" required placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} name="" id="" className="bg-[#eeeeee] w-full sm:w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"/>
            <input type="text" required placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)} name="" id="" className="bg-[#eeeeee] w-full sm:w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"/>
        </div>
        <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="email@example.com" name="" id="" className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder="password" name="" id="" className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
        <input type="text" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} required placeholder="Vehicle Color" className="bg-[#eeeeee] mb-5 mr-8 rounded px-4 py-2 border w-1/3 text-lg placeholder:text-base" />
        <input type="text" value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} required placeholder="Vehicle Plate" className="bg-[#eeeeee] mb-5 mr-8 rounded px-4 py-2 border w-1/3 text-lg placeholder:text-base" />
        <input type="number" value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} required placeholder="Vehicle Capacity" className="bg-[#eeeeee] mb-5 mr-8 rounded px-4 py-2 border w-1/3 text-lg placeholder:text-base" />
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="bg-[#eeeeee] mb-5 mr-8 rounded px-4 py-2 border w-1/3 text-lg placeholder:text-base">
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
        <button className="bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Sign Up</button>
      </form>
        <p className="text-center mb-7">Already have an Account? <Link to='/captain-login' className="text-blue-600 ">Login</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the Google <span className='underline font-semibold'>Privacy Policy</span> and <span className='underline font-semibold'>Terms of Service</span> apply.</p>
        </div>
    </div>
    </div>
  )
}

export default CaptainSignup
