import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ category = category }) => {
  return (
    <div className='container py-6 flex items-center gap-3 text-sm text-dark/80'>
      <Link to="/"> Home </Link>
      &rsaquo;
      <Link to="/marketplace"> Market Place </Link>
      &rsaquo;
      <Link className='capitalize' to="/"> {category} </Link>
    </div>
  )
}

export default Breadcrumbs;