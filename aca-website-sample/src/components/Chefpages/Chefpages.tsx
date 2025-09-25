import React from "react";
import acaLogo from "../../media/aca-logo.png";
import { Link } from "react-router";
import shirleyChengPhoto from "../../media/shirley-cheng-photo-cropped.jpg";
import shirleyChengPhotoFull from "../../media/shirley-cheng-photo.jpg";

const tempChefDirectory = [
    {
        name: "Martin Yan",
        img: acaLogo,
        title: "Honorary Advisor of ACA",
        bio: "World Renowned Celebrity Chef, Television Cooking Show Host, Cookbook Author",
        link: "martin-yan"
    },
    {

        name: "Jet Tila",
        img: shirleyChengPhotoFull,
        title: "Honorary Advisor of ACA",
        bio: "Renowned Thai-American chef and star of Iron Chef, Cookbook Author, Restauranteur",
        link: "jet-tila"
    },
    {
        name: "Shirley Cheng",
        img: shirleyChengPhoto,
        title: "Vice President of ACA Central Region",
        bio: "Retired Professor of CIA/HAAC, Asian Culinary Education Expert",
        link: "shirley-cheng"

    },
    {
        name: "Anthony Jung",
        img: acaLogo,
        title: "Vice President of ACA Northeast Region",
        bio: "Multiple national gold medalist, Executive Sous Chef at the University of Massachusetts",
        link: "anthony-jung"
    },
    {
        name: "William Yee",
        img: acaLogo,
        title: "Vice President of ACA Western Region",
        bio: "Acclaimed California TV culinary showhost, past President of Le Cordon Bleu Alumni Association",
        link: "william-yee"
    }
]

function Chefpages() {
    

    return (
    <div className="content">
        <h1>Active Chef Directory</h1>
        {tempChefDirectory.map(({name, title, img, bio, link}) => {
            return (
            <Link to={`/chefs/${link}`} style={{textDecoration: 'none'}}>
                <div key={link} className="chef-line">
                    <div className="chef-line--pic">
                        <img className="chef-line--img"
                        src={img} alt="poggies"/>
                        <h2>{name}</h2>
                    </div>
                    <div className="chef-line--profile">
                        <h3>{title}</h3>
                        <p>{bio}</p>
                    </div>
                </div>
            </Link>
            )})}
    </div>
    )
}

export default Chefpages;