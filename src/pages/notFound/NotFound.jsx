import React from 'react'
import './notFound.scss'
import { CgDanger } from "react-icons/cg";

const NotFound = () => {
  return (
    <div className='notFound'>
        <div className='notFound__block'>
        <h1 className='notFound__title'>
            404 Not Found
        </h1>
            <CgDanger  className='notFound__icon'/>
        </div>
    </div>
  )
}

export default NotFound