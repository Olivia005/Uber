import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import axios from 'axios' 
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

        axios.get(`{impor.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                setUser(response.data)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/login')
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

export default UserProtectWrapper

//make token and check if it exists redirect to home, if not redirect to login page