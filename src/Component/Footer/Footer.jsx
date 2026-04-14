import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' text-center bg-green-800 text-white py-8 mt-8'>
          <h1 className='text-5xl font-bold '>KeenKeeper</h1>
          <p className='mt-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <h2>Social Links</h2>
          <div className='flex justify-center gap-4 mt-4'>
            <a href=""><FaInstagramSquare size={40} /></a>
            <a href=""><FaFacebookSquare  size={40}/></a>
            <a href=""><FaYoutube size={40} /></a>
          </div>
          <div className='flex justify-between container mx-auto opacity-50'>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className='flex gap-4'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p> Cookies</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;