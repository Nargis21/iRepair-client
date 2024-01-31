'use client'
import React from 'react';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, RightCircleFilled, HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import Link from "next/link"

const Footer = () => {
    return (
        <div className=' px-12 lg:pt-24 md:pt-16 pt-10 pb-12 bg-blue-600 text-white' >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-4'>
                <div className='lg:text-left md:text-left text-center'>
                    <div className='flex items-center lg:justify-start md:justify-start justify-center'>
                        <p className='text-2xl text-white font-semibold mb-2'>iRepair</p>
                    </div>
                    <p className=' text-sm'>your one-stop place for all kinds ofMacbook repairsand diagnostics.</p>
                    <p className='text-xl font-semibold mt-6 text-white'>Follow Us On:</p>
                    <div className=' space-x-3 mt-2 mb-4'>
                        <Link href='/' className='text-xl text-white'><FacebookFilled /></Link>
                        <Link href='/' className='text-xl text-white'><TwitterSquareFilled /></Link>
                        <Link href='/' className='text-xl text-white'><InstagramFilled /></Link>
                    </div>
                </div>

                <div className=' lg:text-left md:text-left text-center'>
                    <p className='text-xl font-semibold text-white mb-4'>Links</p>
                    <Link href='/services' className='text-white mb-2 text-sm'>Services</Link> <br /><br />
                    <Link href='/privacy-policy' className='text-white mb-2 text-sm'>Privacy Policy</Link><br /><br />
                    <Link href='/terms-and-condition' className='text-white mb-2 text-sm'>Terms and Conditions</Link><br /><br />
                    <Link href='/cancellation-policy' className='text-white mb-2 text-sm'>Cancellation Policy</Link><br /><br />
                </div>
                <div className=' lg:text-left md:text-left text-center'>
                    <p className='text-xl font-semibold text-white mb-4'>Information</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><HomeFilled className=' text-xl' /> 59 Street, B4 Apartment, Australia</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><PhoneFilled className=' text-xl' />  +985-8844-000</p>
                    <p className='mb-2 flex items-center lg:justify-start md:justify-start justify-center  gap-2 text-sm'><MailFilled className=' text-xl' /> info@irepair.com</p>
                </div>
            </div>
            <hr />
            <div className='pt-10 text-center  text-sm'>
                <p>Copyright © {new Date().getFullYear()} iRepair. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;