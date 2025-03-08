import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRidePopUp from '../components/FinishRidePopUp';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useEffect(()=>{
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(0)'
          })
        }
        else{
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [finishRidePanel])

    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>

            {/* Map */}
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div onClick={()=>{setFinishRidePanel(true)}} className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
            <h5 className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>4 Kms away</h4>
                <button  className='flex justify-center bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-10 pt-12'>
            <FinishRidePopUp setFinishRidePanel={setFinishRidePanel}/>
          </div>
        </div>
    )
}

export default CaptainRiding
