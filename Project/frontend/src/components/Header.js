import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <div className='header'>
            <ul className='list'>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/add">Add Products</Link>
                </li>
                <li>
                    <Link to="/update">Update Products</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;