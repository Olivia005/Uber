import React, { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import axios from 'axios' 

const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!token){
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [ token ])

    if(isLoading){
        return <div>Loading...</div>
    }
    

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper

//make token and check if it exists redirect to captain-home, if not redirect to login page
//if token is not in the application..captain-home will not open anyhow