import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { gsap } from "gsap";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState (true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

    useEffect(()=>{
        if(ridePopUpPanel){
          gsap.to(ridePopUpPanelRef.current,{
            transform: 'translateY(0)'
          })
        }
        else{
          gsap.to(ridePopUpPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [ridePopUpPanel])
    
      useEffect(()=>{
        if(confirmRidePopUpPanel){
          gsap.to(confirmRidePopUpPanelRef.current,{
            transform: 'translateY(0)'
          })
        }
        else{
          gsap.to(confirmRidePopUpPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [confirmRidePopUpPanel])

  return (
      <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>

        {/* Map */}
        <div className='h-3/5'>
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='h-2/5'>
          <CaptainDetails />
          <div ref={ridePopUpPanelRef} className='fixed w-full  z-10 bottom-0 bg-white px-3 py-10 pt-12'>
            <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
          </div>
          <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-10 pt-12'>
            <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
          </div>
        </div>
      </div>
  )
}

export default CaptainHome