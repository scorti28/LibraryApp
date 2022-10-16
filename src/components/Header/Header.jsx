import React from 'react';
import Navbar from '../Navbar/Navbar';
import { SearchForm } from '../SearchForm/SearchForm';
import "./Header.css";


export const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Cauta o carte...</h2><br />
                <p className='header-text fs-18 fw-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus nesciunt minus consectetur facilis, culpa est assumenda quidem rerum iure. Expedita porro animi et cum molestiae? Beatae commodi perspiciatis perferendis.</p>
                <SearchForm />
            </div>
        </header>

    </div>
  )
}

export default Header
