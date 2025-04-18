import React from 'react'

const LocationSearchPanel = (props) => {
    

    //sample arr for location
    const locations = [
        "24B, Near kapoor's cafe, Kolkata",
        "25B, Near saha's cafe, Kolkata",
        "28B, Near malhotra's cafe, Kolkata",
        "29BA, Near sharma's cafe, Kolkata",
    ]

  return (
    <div>
        {/* this is just sample data */}

        { locations.map(function(elemment, idx){
            return(
                <div key={idx} onClick={() => {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}
                className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center justify-start my-2'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-8 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elemment}</h4>
        </div>
            )
        })
    }
    </div>
  )
}

export default LocationSearchPanel