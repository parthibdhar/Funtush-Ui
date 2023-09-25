import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Login = () => {
  return (
    <Layout>
        <div className="container mx-auto flex-colo my-24">
            <div className="w-full 2xl:w-2/5 sm:p-14 p-8  md:w-3/5 flex-colo gap-4 bg-dry rounded-lg border border-border">
                <img src="/images/logo(1).png" 
                alt="logo"
                className='w-full h-12 object-contain ' />
                <Input 
                lable='Email'
                placeholder={"parthibdhar3690@gmail.com"} 
                 type='email'
                 bg={true}/>
                   <Input 
                lable='Password'
                placeholder={"********"} 
                 type='password'
                 bg={true}/>
                 <Link to={'/dashboard'}
                 className='bg-subMain transitions mt-3 hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    <FiLogIn/> Sign in
                 </Link>
                 <p className="text-center text-border">
                    Don't have an account? {' '}
                    <Link to={'/register'} className='text-dryGray font-semibold ml-2 my3'>
                        Sign Up
                    </Link>
                 </p>
            </div>
        </div>
    </Layout>
  )
}

export default Login