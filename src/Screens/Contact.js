import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";


const Contact = () => {
    const ContactData = [
        {
            id:1,
            title: "Email us",
            info: 'interactively grow backend ideas for cross-platform models.',
            icon: FiMail,
            Contact:"Funtush@gmail.com"
        },
        {
            id:2,
            title: "call us",
            info: 'Distinctively exploites optical allingments for cross-platform models',
            icon: FiPhoneCall,
            Contact:"+91 9067 567 845"
        },
        {
            id:3,
            title: "Location",
            info: '3/77 jatin Das Nagar, Belgharia, Kol - 56',
            icon: FiMapPin,
            Contact:""
        },
    ]
  return ( 
    <Layout>
    <div class=" min-height-screen container mx-auto px-2 my-6">
      <Head title={"Contact Us"} />
      <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
     {
        ContactData?.map((item) => (
            <div 
            key={item.id}
            className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                <span className="felx-colo p-7 w-20 h-20  rounded-full bg-main text-subMain text-center text-2xl">
                    <item.icon /> 
                </span>
                <h5 className="text-xl font-semibold my-2"> {item.title}</h5>
                <p className="mb-0 text-sm text-text leading-7">
                    <Link to={`mailto:${item.Contact}`}
                    className="text-subMain hover:text-blue-600 transitions">{item.Contact} </Link> {` `}
                    {item.info}
                </p>
            </div>
        ))
     }
      </div>
    </div>
  </Layout>
  )
}

export default Contact