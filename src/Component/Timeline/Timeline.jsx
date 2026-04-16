import { useContext } from "react";
import { MyContext } from "../Context/Context";
import { MdVideoCall } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";

const Timeline = () => {
  const {call, setCall} = useContext(MyContext);
  const now = new Date();
  const calldata = call.filter(dat => dat.action === "call");
  const massgdata = call.filter(dat => dat.action === "massage");
  const veidodata = call.filter(dat => dat.action === "vedio");
  
    return (

        <div className="mx-auto  container">
            
        {/* <div className="mt-4 text-center">
        <select defaultValue="Pick a color" className="select">
  <option onClick={callhandel}>Call</option>
  <option onClick={massahandl}>Massage</option>
  <option onClick={veidodahandl}>Vdioe</option>
</select>
        </div> */}
       <h2 className="text-4xl font-bold mt-8">Timeline </h2>
       <select
  onChange={(e) => {
    const value = e.target.value;

    if (value === "call") setCall(calldata);
    else if (value === "message") setCall(massgdata);
    else if (value === "video") setCall(veidodata);
    else setCall(call);
  }}
  className="select mt-4">
  <option value="all">All</option>
  <option value="call">Call</option>
  <option value="message">Message</option>
  <option value="video">Video</option>
</select>
       <div>
        {
            call.map(data => <div className="flex items-center gap-4 border-2 p-4 mt-4 rounded-xl shadow border-gray-400 mx-4 lg:mx-0">
                <div>
                    {data.action == 'call' ? <TbPhoneCall size={40} />  : data.action == 'massage' ? <IoIosMailOpen size={40} /> : <MdVideoCall size={40} />}
                </div>
                <div>
                    <h2 className="text-xl"><span className="font-bold">{data.action} </span><span className=" opacity-50">with {data.name}</span> </h2>
                     <h3>
      {now.toLocaleDateString("en-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </h3>
                </div>
            </div>)
        }
       </div>
        </div>
    );
};

export default Timeline;