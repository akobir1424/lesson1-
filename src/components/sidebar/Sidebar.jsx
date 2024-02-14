import React from 'react'
import './sidebar.scss'
import { IoSettings } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import Logo from '../../assets/images/Logo.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <NavLink to='/'><img className='logo__img' width={50} height={40} src={Logo} alt="Logo" /></NavLink>

        <div className='sidebar__block'>
            <NavLink to='/' ><IoSettings className='sidebar__icon'/></NavLink>
            <NavLink to='/product' ><BsHandbagFill className='sidebar__icon'/></NavLink>
            <NavLink to='/newProduct' ><FaCirclePlus className='sidebar__icon' /></NavLink>
            <NavLink to='/login' ><CgProfile className='sidebar__icon'/></NavLink>
        </div>

      </div>
  )
}

export default Sidebar