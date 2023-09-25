import React from 'react'
import { Link } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'

const NotFound = () => {
  return (
    <div
    className='flex-colo w-full gap-6 min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img className='w-full h-96 object-contain bg-opacity-0'
       src="/images/404.png" alt="not found" />
       <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
       <p className="font-medium text-border italic leading-6">
        This Page you are looking for does not exist. you may mistyped the URL
       </p>
       <Link to={'/'}
       className="bg-Main flex-rows gap-4 text-white font-medium py-3 px-4 rounded-md border border-subMain transitions hover:bg-subMain "> <TiHome/>Back Home </Link>
    </div>
  )
}

export default NotFound