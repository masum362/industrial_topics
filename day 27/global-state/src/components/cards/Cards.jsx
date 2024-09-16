import React, { useContext } from 'react'
import Card from '../card/Card'
import { AuthContext } from '../../context/AuthPorvider'

const Cards = () => {


    const {items} = useContext(AuthContext)
    console.log(items)
    return (
        <div>
{
    items.map(item =><Card item={item} key={item.id} />)
}
        </div>
    )
}

export default Cards