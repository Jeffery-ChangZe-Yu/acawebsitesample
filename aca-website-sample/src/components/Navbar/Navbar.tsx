import React from "react";
import "./Navbar"
import { Link } from "react-router";
import acaLogo from "../../media/aca-logo.png"

function NavBar() {

    const pages = 
        [
            {
                title: "Home",
                link: "/"
            }, 
            {
                title: "About",
                link: "/about"
            }, 
            {
                title: "Chefs",
                link: "/chefs"
            }, 
            {
                title: "Contact Us",
                link: "/contact"

            }]

    return (
        <div className="horizontal navbar navbar-top">
            <Link to="/">
                <img src={acaLogo} alt="ACA logo" className="navbar--logo"/>
            </Link>
            {pages.map(({title, link}) => <h3><Link to={link}>{title}</Link></h3>)}
        </div>
    )
}

export default NavBar;