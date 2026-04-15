import { useContext } from "react";
import { MyContext } from "../Context/Context";
import { MdVideoCall } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";

const Timeline = () => {
  const {call, setCall} = useContext(MyContext);
  const now = new Date();
    return (
        <div className="mx-auto  container">
       <h2 className="text-4xl font-bold mt-8">Timeline </h2>
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