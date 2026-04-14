import React from 'react';
import { Link } from 'react-router';

const Card = ({dats}) => {
    return (
       <Link to={`ditels/${dats.id}`}>
        <div className='text-center flex flex-col justify-center items-center space-y-1 mt-4 bg-white shadow py-4  border border-gray-500 rounded-xl'>
          <img className='rounded-full w-20' src={dats.picture} alt="" />
          <h2 className='text-xl font-bold'>{dats.name}</h2>
          <p className=' opacity-50'>{dats.days_since_contact}d ago</p>
          <div className='flex uppercase gap-6 '>
            <p className='bg-green-200 text-sm text-green-800  rounded-full px-2 font-semibold'>{dats.tags[0]}</p>
          <p className='bg-green-200 font-semibold text-green-800 rounded-full px-2'>{dats.tags[1]}</p>
          </div>
          <p className={`${dats.status == 'almost due ' ? 'bg-amber-500' : dats.status == 'overdue' ? 'bg-red-600'  : 'bg-green-700'} uppercase text-white  px-4 font-bold rounded-full mt-4 `}>{dats.status}</p>
        </div>
       </Link>
    );
};

export default Card;