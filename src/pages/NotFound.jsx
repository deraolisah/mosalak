import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='py-12 text-center'> 
      <h1 className="text-3xl"> Page Not Found </h1>
      <br/>
      <Link to="/" className='btn btn-text px-0'> Go Back Home </Link>

    </section>
  )
}

export default NotFound;