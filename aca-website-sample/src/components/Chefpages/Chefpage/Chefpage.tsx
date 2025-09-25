import React from 'react';
import { useParams } from 'react-router';
import useImage from '../../../utils/useImage';

const chefs = [
    {
        "name": "Martin Yan",
        "img": "aca-logo.png",
        "title": "Honorary Advisor of ACA",
        "bio": "World Renowned Celebrity Chef, Television Cooking Show Host, Cookbook Author",
        "link": "martin-yan"
    },
    {
        "name": "Shirley Cheng",
        "img": "shirley-cheng-photo.jpg",
        "title": "Retired Professor in Culinary Arts, the Culinary Institute of America",
        "bio": "Shirley Cheng was a professor of culinary arts at the world's premier culinary college, the Culinary Institute of America for over 32 years, teaching Cuisines and Cultures of Asia. Chef Cheng earned an associate degree from Sichuan Culinary Institute in Sichuan, a Bachelor of English from Sichuan University in People's Republic of China, and a Master's of Science in Hospitality Administration from Johnson and Wales in Providence, Rhode Island of the United States. She was most recently inducted into the American Academy of Chefs' Culinary Hall of Fame as Celebrated Chef of 2024. Today, with 41 years of experience in culinary education, as well as in the food industry, Chef Cheng is an acconplished and respected professor of Asian cuisine, with a specialization in the Sichuan regional cuisine of China.",
        "link": "shirley-cheng"
    }
];


export default function Chefpage() {
    const { link } = useParams();
    const chef = chefs.find((chef) => chef.link === link);

    const imgLink = chef? chef.img : "aca-logo.jpg";

    const {loading, image} = useImage(imgLink);

    if (!chef) {
        return <div className='content'>We could not find that chef. Please try again.</div>
    }

    

    return (
        <div className='content--full horizontal'>
            <div className='chef-page--media'>
                <img src={image} alt={`Chef ${chef.name}`} className='chef-page--pic' />
            </div>
            <div className='chef-page--text'>
                <div className='chef-page--text-header'>
                    <h1>{chef.name}</h1>
                    <h2>{chef.title}</h2>
                </div>
                <div className='chef-page--text-body'>
                    <p>{chef.bio}</p>
                </div>
            </div>
        </div>
    )
}
