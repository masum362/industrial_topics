import React, { useContext, useState } from 'react'
import Card from '../../components/card/Card'
import Cards from '../../components/cards/Cards'
import Form from '../../components/form/Form'
import { AuthContext } from '../../context/AuthPorvider'

const Home = () => {

   
    const {value} = useContext(AuthContext)



 

    return (
        <div >
            <h1>{value}</h1>
            <Cards />
            <div className='flex items-center justify-center h-screen'>
            <Form />
            </div>
        </div>
    )
}

export default Home