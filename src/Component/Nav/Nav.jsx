import React from 'react';
import { IoHome } from 'react-icons/io5';
import { LuTrendingUpDown } from 'react-icons/lu';
import { MdAccessTimeFilled } from 'react-icons/md';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
     <div className='bg-base-100 shadow-sm'>
         <div className="navbar container mx-auto">
  <div className="navbar-start">
   
    <a className="font-bold text-2xl hidden lg:block">Keen<span className='text-green-800'>Keeper</span></a>
  </div>
 
  <div className="navbar-end flex gap-4">
   <NavLink to = '/' className={({isActive})=> isActive ? 'bg-green-700 text-white btn' : 'btn'}><IoHome />Home</NavLink>
   <NavLink to = '/timeline'className={({isActive})=> isActive ? 'bg-green-700 text-white btn' : 'btn'}><MdAccessTimeFilled />Timeline</NavLink>
   <NavLink to = '/stats'className={({isActive})=> isActive ? 'bg-green-700 text-white btn' : 'btn'}><LuTrendingUpDown />Stats</NavLink>
  </div>
</div>
     </div>
    );
};

export default Nav;