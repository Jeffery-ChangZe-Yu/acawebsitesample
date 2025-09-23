import React from 'react'
import { useParams } from 'react-router'
import chefs from "../../../data/chefs.json";
import logo from '../../../media/aca-logo.png'

export default function Chefpage() {
    const { link } = useParams();
    const chef = chefs.find((chef) => chef.link === link);

    if (!chef) {
        return <div className='content'>We could not find that chef. Please try again.</div>
    }

    return (
        <div className='content--full horizontal'>
            <div className='chef-page--media'>
                <img src={logo} alt={`Chef ${chef.name}`} />
            </div>
            <div className='chef-page--text'>
                <div className='chef-page--text-header'>
                    <h2>{chef.title}</h2>
                    <h1>{chef.name}</h1>
                </div>
                <div className='chef-page--text-body'>
                    <p>{chef.bio}</p>
                </div>
            </div>
        </div>
    )
}
