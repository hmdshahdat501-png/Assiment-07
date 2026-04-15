import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../Footer/Footer';
import { CiCirclePlus } from 'react-icons/ci';
import Card from '../Card/Card';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='mx-auto container'>
            <div className='text-center space-y-5 mt-10'>
        <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
        <p className='opacity-50'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='btn bg-green-900 text-white'><CiCirclePlus />Add a Friend</button>
        </div>
        <div className='grid  text-center gap-10 mt-8 sm:grid-cols-1 lg:grid-cols-4'>
            <div className='bg-white shadow py-15 mt-4 m-8 lg:m-0 lg:mt-0'>
                <h2 className='text-4xl font-bold'>10</h2>
                <p className='mt-2 opacity-50'>Total Friends</p>
            </div>
            <div className='bg-white shadow py-15 mt-4 m-8 lg:m-0 lg:mt-0' >
                <h2 className='text-4xl font-bold'>3</h2>
                <p className='mt-2 opacity-50'>On Track</p>
            </div>
            <div className='bg-white shadow py-15 mt-4 m-8 lg:m-0 lg:mt-0 '>
                <h2 className='text-4xl font-bold'>6</h2>
                <p className='mt-2 opacity-50'>Need Attention</p>
            </div>
            <div className='bg-white shadow py-15 mt-4 m-8 lg:m-0 lg:mt-0'>
                <h2 className='text-4xl font-bold'>12</h2>
                <p className='mt-2 opacity-50'>Interactions This Month</p>
            </div>
        </div>
        <div className='mx-auto container mt-8'>
            <h2 className='text-xl font-bold'>Your Friends</h2>
           <div className='grid grid-cols-1 gap-8 mx-4 lg:grid-cols-4 mx-0'>
             {
                data.map(dats => <Card key={dats.id} dats={dats} ></Card>)
            }
           </div>
        </div>
        </div>
    );
};

export default Home;