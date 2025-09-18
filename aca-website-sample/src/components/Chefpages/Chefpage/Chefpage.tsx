import React from 'react'
import { useParams } from 'react-router'

export default function Chefpage() {
    const { name } = useParams();
    return (
        <div className='content'>
            <h2>{name}</h2>
            <p>WooHoo!</p>
        </div>
    )
}
