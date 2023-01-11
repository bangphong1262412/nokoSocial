import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <nav className='header '>
            <div className="header_container">
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
                
                <div class="create">
                <label class="btn btn-primary" for="create-post">Create</label>
                <div class="profile-photo">
                    {/* <img src="./images/profile-1.jpg" alt=""> */}
                    {/* <img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg" alt="BigCo Inc. logo"/> */}
                    <Menu />
                </div>
            </div>
                
            {/* </nav> */}
        </div>
        </nav>
        
    )
}

export default Header
