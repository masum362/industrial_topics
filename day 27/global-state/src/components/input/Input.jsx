import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthPorvider'

const Input = () => {

const {handleFormValue } = useContext(AuthContext)
  return (
    <div>
        <input type="text " placeholder="enter your value" onChange={(e) =>handleFormValue(e.target.value)} />
    </div>
  )
}

export default Input