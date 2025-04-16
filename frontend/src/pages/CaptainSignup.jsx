import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName:{
        firstName: firstName,
        lastName: lastName
      } 
    })
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

  }
  return (
    <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div >
          <img className='w-20 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt=''/>
          <form onSubmit={(e) => submitHandler(e)}>

          <h3 className='text-lg w-full font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex gap-4 mb-7'>
            <input 
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='First name'
            />
            <input 
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Last name'
            />
          </div>


          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 w-full border text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'/>

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 w-full border text-lg placeholder:text-base'
            type="password"
            placeholder='********'/>

          <button
          className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
          >Create account</button>

          </form>
          <p className='text-center mb-3'>Already have an account? <Link to='/captain-login' className='text-blue-600 font-semibold'>Login here</Link></p>
        </div>

          <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainSignup