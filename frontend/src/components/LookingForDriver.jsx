import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
          props.setVehicleFound(false)
        }}>
        <i className="text-5xl rounded-lg text-gray-300 ri-subtract-fill"></i></h5>
        <h3 className='text-2xl ml-5 font-semibold mb-5'>Looking for a nearby Driver</h3>
         <div className='flex gap--2 justify-between flex-col items-center'>
            <img className='h-20' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png' alt=''/>
            <div className='w-full mt-5'>

              <div className='flex gap-5 items-center p-3 border-b-2'>
              <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h3 className='font-semibold text-lg'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                </div>
              </div>

              <div className='flex gap-5 items-center p-3 border-b-2'>
              <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className='font-semibold text-lg'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                </div>
              </div>

              <div className='flex gap-5 items-center p-3'>
              <i className="text-lg ri-currency-line"></i>
                <div>
                  <h3 className='font-semibold text-lg'>₹193.20</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
              </div>
            </div>
         </div>
    </div>
    </div>
  )
}

export default LookingForDriver