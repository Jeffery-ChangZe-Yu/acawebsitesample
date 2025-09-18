import React from "react";
import acaLogo from "../../media/aca-logo.png";

const tempChefDirectory = [
    {
        name: "Martin Yan",
        img: acaLogo,
        title: "Honorary Advisor of ACA",
        bio: "World Renowned Celebrity Chef, Television Cooking Show Host, Cookbook Author"
    },
    {

        name: "Jet Tila",
        img: acaLogo,
        title: "Honorary Advisor of ACA",
        bio: "Renowned Thai-American chef and star of Iron Chef, Cookbook Author, Restauranteur"
    },
    {
        name: "Shirley Cheng",
        img: acaLogo,
        title: "Vice President of ACA Central Region",
        bio: "Retired Professor of CIA/HAAC, Asian Culinary Education Expert"

    },
    {
        name: "Anthony Jung",
        img: acaLogo,
        title: "Vice President of ACA Northeast Region",
        bio: "Multiple national gold medalist, Executive Sous Chef at the University of Massachusetts"
    },
    {
        name: "William Yee",
        img: acaLogo,
        title: "Vice President of ACA Western Region",
        bio: "Acclaimed California TV culinary showhost, past President of Le Cordon Bleu Alumni Association"
    }
]

function Chefpages() {

    return (
    <div className="content">
        <h1>Active Chef Directory</h1>
        {tempChefDirectory.map(({name, title, img, bio}, idx) => {
            return (
            <div key={idx} className="chef-line">
                <div className="chef-line--pi">
                    <img className="chef-line--img"
                    src={img} alt="poggies"/>
                    <h2>{name}</h2>
                </div>
                <div className="chef-line--profile">
                    <h3>{title}</h3>
                    <p>{bio}</p>
                </div>
            </div>)
        })}
    </div>
    )
}

export default Chefpages;