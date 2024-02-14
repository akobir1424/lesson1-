import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Header = ({user}) => {
  return (
    <div className='header'>
        <div className="header__container">
        <div className='header__block'>
            <div>
                <h1>Товары</h1>
                <div className='header__link_block'>
                <NavLink to='/' className='header__link'>Главная</NavLink>
                <NavLink to='/product' className='header__link'>Товары</NavLink>
                <NavLink to='/newProduct' className='header__link'>Новый товар</NavLink>
                </div>
            </div>

            {user ? <span>{user}</span> :<NavLink to='/login'>
            <div className='header__btn_block'>
                <FaArrowRight className='header__icon' />
                <button className='header__btn'>Выйти</button>
            </div>
            </NavLink>}


        </div>

        </div>

    </div>
  )
}

export default Header