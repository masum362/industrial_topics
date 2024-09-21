import React, { useContext } from 'react'
import { authContext } from '../../context/AuthProvider'

const Navbar = () => {
    const { user } = useContext(authContext)
    console.log(user)
   
    return (
        <div>
           {user.email}
        </div>
    )
}

export default Navbar