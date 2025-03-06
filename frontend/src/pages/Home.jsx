import React, { useState } from 'react'
import { useEffect } from 'react';
import { gsap } from "gsap";
import { useRef } from 'react';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    if(panelOpen){
      gsap.to(panelRef.current, {height: '100%', duration: 0.8, opacity:1, padding: 24});
      gsap.to(panelCloseRef.current,{opacity: 1})
    }
    else{
      gsap.to(panelRef.current, {height: '0%', duration: 0.5, opacity:0, padding:0});
      gsap.to(panelCloseRef.current,{opacity:0})
    }
  },[panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen z-0'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-screen'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute top-6 right-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input onClick={() => { setPanelOpen(true) }} value={pickUp} onChange={(e) => setPickUp(e.target.value)} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
            <input value={destination} onChange={(e) => setDestination(e.target.value)} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[0] bg-white p-5'>
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  )
}

export default Home
