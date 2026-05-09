import { useLoaderData, useParams } from "react-router";
import { FaBell } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import callImage from '../../image/Vector (1).png'
import textImage from '../../image/ChatDots.png'
import videoImage from '../../image/VideoCamera.png'
import { useContext, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import { FriendContext } from "../Context/UseContex";

const FriendDetails = () => {
    const [loading, setLoading] = useState(false)

    const { friendi, setFriendi } = useContext(FriendContext)
    console.log(friendi);

    // const btnValue = (e) => {
    //     e.target.value
    // }
    // console.log(btnValue);

    const { friendName } = useParams()
    const friends = useLoaderData()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate a loading delay of 1 second

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [friendName]); // Re-run the effect when friendName changes

    if (loading) {
        return <div className="flex justify-center py-60 items-center"> <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></div>;
    }

    const friend = friends.find(friend => friend.name === friendName)

    // const isExisting = friendi.find(f => f.name === friendi.name)
    // if(isExisting){
    //     toast.error("Already checked in with this friend!");
    //     return;
    // }
    // else{
    //     setFriendi([...friendi, friendi]);
    // }
    return (
        <div className="lg:flex justify-center lg:flex-row gap-6 flex-col py-20">
            <div className="">
                <div className="bg-white py-5 w-95 items-center justify-self-center rounded-lg shadow-sm mb-4 text-center">
                    <img className="w-20 h-20 rounded-full mx-auto" src={friend.picture} alt="" />
                    <h3 className="text-xl text-[#1F2937] font-semibold mb-1 mt-3">{friend.name}</h3>
                    <p className="text-[#64748B] mb-3">{friend.goal}d ago</p>
                    {
                        friend.tags.map((tag, ind) =>
                            <span key={ind} className="text-xs text-[#244D3F] bg-[#CBFADB] font-semibold px-2 py-1 rounded-full mr-1">{tag}</span>)
                    }
                    <p className={`text-white rounded-full w-26 justify-self-center mt-2.5 py-1 ${friend.status === 'Overdue' ? 'bg-[#EF4444]' : friend.status === 'Almost Due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'} font-medim`}>
                        {friend.status}
                    </p>
                    <p className="px-6 mt-3 text-[#64748B] font-medium">"{friend.bio}"</p>
                    <p className="text-[#64748B] font-light mt-1">Preferred: {friend.email}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="btn bg-white"><FaBell></FaBell>Snooze 2 weeks</button>
                    <button className="btn bg-white"><FaArchive></FaArchive> Archive</button>
                    <button className="btn bg-white text-[#EF4444]"><FaRegTrashAlt></FaRegTrashAlt> Delete</button>
                </div>
            </div>

            <div className="">
                <div className="grid mt-10 lg:mt-0 grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="bg-white py-5 px-3 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center">
                        <h3 className="text-3xl text-[#244D3F] font-bold mb-2">{friend.days_since_contact}</h3>
                        <p className="text-[#64748B]">Days Since Contact</p>
                    </div>
                    <div className="bg-white py-5 px-3 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center">
                        <h3 className="text-3xl text-[#244D3F] font-bold mb-2">{friend.goal}</h3>
                        <p className="text-[#64748B]">Goal (Days)</p>
                    </div>
                    <div className="bg-white py-5 px-3 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center">
                        <h3 className="text-3xl text-[#244D3F] font-bold mb-2">{friend.next_due_date}</h3>
                        <p className="text-[#64748B]">Next Due</p>
                    </div>
                </div>
                <div className="bg-white shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] my-6 p-6 rounded-lg">
                    <div className="flex justify-between">
                        <p className="text-xl font-medium mb-5">Relationship Goal</p>
                        <button className="btn">Edit</button>
                    </div>
                    <p className="font-light text-[#64748B]">Connect every <span className="font-bold text-black">30 days</span></p>
                </div>

                <div className="bg-white shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] my-6 p-6 rounded-lg">
                    <p className="text-xl font-medium mb-5 text-[#244D3F]">Quick Check-In</p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">

                        {
                            friend.button.map((btn, ind) => 
                            <button key={ind} onClick={() => { setFriendi([...friendi, {friend, btn}]); toast.success("Check-in recorded!");}} className="btn flex-col px-20 py-12">
                                <img src={btn === "Call" ? callImage : btn === "Text" ? textImage : videoImage} alt="" />
                                {btn == "Call" ? 'Call' : btn === "Text" ? 'Text' : 'Video'}
                            </button>)
                        }
                        {/* <button onClick={() => { setFriendi([...friendi, friend]); toast.success("Check-in recorded!"); }} className="btn flex-col px-20 py-12">
                            <img src={callImage} alt="" />
                            {friend.call}
                        </button>

                        <button onClick={() => { setFriendi([...friendi, friend, friend.call]); toast.success("Check-in recorded!"); }} className="btn flex-col px-20 py-12">
                            <img src={textImage} alt="" />
                            {friend.text}
                        </button>

                        <button onClick={() => { setFriendi([...friendi, friend]); toast.success("Check-in recorded!"); }} className="btn flex-col px-20 py-12">
                            <img src={videoImage} alt="" />
                            {friend.video}
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;