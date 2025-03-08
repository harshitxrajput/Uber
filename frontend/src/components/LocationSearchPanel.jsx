import React from 'react'

const LocationSearchPanel = (props) => {


    const locations = [
        '175A, Near SRIMS, Bamnoli, Dwarka sector-28, New Delhi',
        '179B, Near SBI, Bamnoli, Dwarka sector-28, New Delhi',
        '181C, Near FITJEE, Bamnoli, Dwarka sector-28, New Delhi',
        '183D, Near AF, Bamnoli, Dwarka sector-28, New Delhi',
    ]

    return (
        <div>
            {
                locations.map(function(element, index){
                    return <div key={index} onClick={()=>{
                        props.setVehiclePanel(true),
                        props.setPanelOpen(false)
                        }} className='flex gap-4 border-2 border-gray-50 active:border-black rounded-xl p-3 items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-10 w-14 flex justify-center items-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                    <h4 className='font-medium'>{element}</h4>
                </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel
