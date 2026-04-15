
import { useContext } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { LuBellRing } from 'react-icons/lu';
import { MdDelete, MdVideoCall, MdWifiCalling3 } from 'react-icons/md';
import { VscFolderActive } from 'react-icons/vsc';
import { useLoaderData, useParams } from 'react-router';
import { MyContext } from '../Context/Context';




const ContectDitels = () => {
const {call, setCall} = useContext(MyContext)
const clickCall = (muldata, type) => {
    alert('data add')
   setCall(prev => [
    ...prev, {
        ...muldata, action: type
    }
   ])
}
const clickMasge = (muldata, type) => {
   setCall(prev => [
    ...prev, {
        ...muldata, action: type
    }
   ])
}
 
 const clickVeido = (muldata, type) => {
    setCall(prev => [
        ...prev, {
            ...muldata, action: type
        }
    ])
}
const params = useParams();
   const data = useLoaderData();
   const muldata = data.find(dts => dts.id == params.id)
   
    return (
        <div className='flex container mx-auto gap-4 mt-8'>
           <div className='text-center'>
            <div className=' bg-white shadow rounded-xl p-4 border-2 border-gray-400'>
                <img src= {muldata.picture} alt="" className='mx-auto rounded-full' />
            <h2 className='font-bold'>{muldata.name}</h2>
            <p className={`${muldata.status == 'almost due ' ? 'bg-amber-500' : muldata.status == 'overdue' ? 'bg-red-600'  : 'bg-green-700'} uppercase text-white  px-4 font-bold rounded-full mt-4 w-fit mx-auto `}>{muldata.status}</p>
            <div>
                <p className='bg-green-200 font-semibold text-green-800 rounded-full px-4 uppercase w-fit mx-auto mt-4' >{muldata.tags}</p>
            </div>
            <p className='mt-4 italic font-bold opacity-50'>"{muldata.bio}"</p>
            <p className='mt-4'>Preferred:{muldata.email}</p>
            </div>
            <div>
            <h2 className='bg-white shadow font-bold mt-4 py-4 flex justify-center items-center gap-3 rounded-xl border-2 border-gray-400'> <LuBellRing size={30} />Snooze 2 weeks</h2>
            <h2 className='bg-white shadow font-bold mt-4 py-4 flex justify-center items-center gap-3 rounded-xl border-2 border-gray-400'><VscFolderActive size={30} /> Archive</h2>
            <h2 className='bg-white shadow font-bold mt-4 py-4 flex justify-center items-center gap-3 rounded-xl text-red-700 border-2 border-gray-400'><MdDelete size={30} /> Delete</h2>
           </div>
           </div>
           
           <div >
            <div className='flex justify-between'>
                <div className='bg-white shadow p-8 rounded-xl border-2 border-gray-400'>
                <h2 className='text-2xl font-bold text-center'>{muldata.days_since_contact}</h2>
                <p className='text-center mt-4  opacity-50'>Days Since Contact</p>
            </div>
            <div className='bg-white shadow p-8 rounded-xl border-2 border-gray-400'>
                <h2 className='text-2xl font-bold text-center'>{muldata.goal}</h2>
                <p className='text-center mt-4  opacity-50'>Goal (Days)</p>
            </div>
            <div className='bg-white shadow p-8 rounded-xl border-2 border-gray-400'>
                <h2 className='text-2xl font-bold text-center'>{muldata.next_due_date}</h2>
                <p className='text-center mt-4 opacity-50'>Next Due</p>
            </div>
            </div>
            <div className='mt-4 bg-white shadow p-8 rounded-xl border-2 border-gray-400'>
                <div className='flex justify-between items-center  opacity-50'>
                    <h2>Relationship Goal</h2>
                    <button className='btn'>Edit</button>
                </div>
                <p>Connect every 30 days</p>
            </div>
            <div className='mt-8 bg-white shadow py-8 px-4 border-2 border-gray-400 rounded-xl'>
                <h2 className='text-xl font-bold mb-4'>Quick Check-In</h2>
               <div className='flex gap-5 '>
                <button onClick={() => clickCall(muldata, "call")}>
                     <div className=' bg-gray-200 shadow p-4 rounded-xl border-2 border-gray-400 text-center px-20 '>
                    <MdWifiCalling3 size={30}/>
                    <p className='text-2xl'>Call</p>
                </div>
                </button>
                <button onClick={() => clickMasge(muldata, "massage")}>
                     <div  className=' bg-gray-200 shadow p-4 rounded-xl border-2 border-gray-400 text-center px-20 '>
                   <FaEnvelopeOpenText size={30}/>
                    <p className='text-2xl'>Text</p>
                </div>
                </button>
                 <button onClick={() => clickVeido(muldata, "vedio")}>
                    <div  className=' bg-gray-200 shadow p-4 rounded-xl border-2 border-gray-400 text-center px-20 '>
                    <MdVideoCall size={30}/>
                    <p className='text-2xl'>Video</p>
                </div>
                 </button>
               </div>
            </div>
           </div>
        </div>
    );
};

export default ContectDitels;