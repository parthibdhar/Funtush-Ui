import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Register = () => {
  return (
    <Layout>
        <div className="container mx-auto flex-colo my-24">
            <div className="w-full 2xl:w-2/5 p-14  md:w-3/5 flex-colo gap-4 bg-dry rounded-lg border border-border">
                <img src="/images/logo(1).png" 
                alt="logo"
                className='w-full h-12 object-contain ' />
                 <Input 
                lable='Full Name'
                placeholder={"Parthib Dhar"} 
                 type='text'
                 bg={true}/>
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
                    <FiLogIn/> Sign up
                 </Link>
                 <p className="text-center text-border">
                    Already have an account? {' '}
                    <Link to={'/login'} className='text-dryGray font-semibold ml-2 my3'>
                        Sign in
                    </Link>
                 </p>
            </div>
        </div>
    </Layout>
  )
}

export default Register