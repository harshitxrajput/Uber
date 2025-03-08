import React from 'react'
import { Link } from 'react-router-dom'

const FinishRidePopUp = (props) => {
  return (
    <div>
      <h5 onClick={() => { props.setRidePopUpPanel(false) }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Finish this ride to start</h3>
      <div className='flex items-center justify-between mt-4 p-4 border-2 bg-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-10 rounded-full object-cover' src="https://wallpapers.com/images/hd/portrait-of-random-person-on-leafy-background-8xtpcwzjlw7vbi63.jpg" alt="" />
            <h2 className='text-lg font-medium'>Shrishti Rajput</h2>
        </div>
        <div>
            <h5 className='text-lg font-semibold'>2.2 Km</h5>
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-map-pin-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='mt-10 w-full'>
                <Link to="/captain-home" className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
                <p className='mt-10 text-xs'>Click on finish ride if you have completed the payment.</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRidePopUp
