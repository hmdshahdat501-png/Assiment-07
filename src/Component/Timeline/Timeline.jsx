import { useContext } from "react";
import { MyContext } from "../Context/Context";


const Timeline = () => {
  const {call, setCall} = useContext(MyContext);
  console.log(call)
    return (
        <div>
        {call.length}
        </div>
    );
};

export default Timeline;