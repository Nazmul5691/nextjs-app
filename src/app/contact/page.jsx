"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {

    const router = useRouter();
    const isLoggedIn = true;

    const handleNavigation = () =>{
        if(isLoggedIn){
            router.push("/contact/address")
        }
        else{
            router.push("/")
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <h1 className='text-4xl text-red-700'>Contact Page</h1>
            <Link href="/contact/address">
                <p> Go to Address Page</p>
            </Link>

            <p className='cursor-pointer' onClick={handleNavigation} > Go to Address Page by useRouter</p>
        </div>
    );
};

export default ContactPage; <h1></h1>