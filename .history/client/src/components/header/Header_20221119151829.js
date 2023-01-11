import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header header_container">
            {/* <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"> */}

                <Link to="/" className="logo">
                    {/* <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        V-Network
                    </h1> */}
                    <h2 className="log">
                        nokoSocial
                    </h2>
                </Link>
                <div className="search-bar">
                <Search />
                </div>
                

                <Menu />
            {/* </nav> */}
        </div>
    )
}

export default Header
