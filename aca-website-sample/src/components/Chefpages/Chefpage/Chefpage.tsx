import React from 'react'
import { useParams } from 'react-router'
import chefs from "../../../data/chefs.json";

export default function Chefpage() {
    const { link } = useParams();
    const chef = chefs.find((chef) => chef.link === link);

    if (!chef) {
        return <div className='content'>We could not find that chef. Please try again.</div>
    }

    return (
        <div className='content'>
            <h2>{chef.name}</h2>
            <p>{chef.bio}</p>
            <img src={chef.img} alt={`Chef ${chef.name}`} />
        </div>
    )
}
