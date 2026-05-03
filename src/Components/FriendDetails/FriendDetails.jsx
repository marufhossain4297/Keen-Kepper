import { useLoaderData, useParams } from "react-router";
import { FaBell } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import call from '../../image/Vector (1).png'
import text from '../../image/ChatDots.png'
import video from '../../image/VideoCamera.png'

const FriendDetails = () => {

    const { friendId } = useParams()
    const friends = useLoaderData()

    const friend = friends.find(friend => friend.id == friendId)

    return (
        <div className="lg:flex justify-center lg:flex-row gap-6 flex-col py-20">
            <div className="">
                <div className="bg-white py-5 w-95 items-center justify-self-center rounded-lg shadow-sm mb-4 text-center">
                    <img className="w-20 h-20 rounded-full mx-auto" src={friend.picture} alt="" />
                    <h3 className="text-xl text-[#1F2937] font-semibold mb-1 mt-3">{friend.name}</h3>
                    <p className="text-[#64748B] mb-3">{friend.goal}d ago</p>
                    {
                        friend.tags.map(tag =>
                            <span className="text-xs text-[#244D3F] bg-[#CBFADB] font-semibold px-2 py-1 rounded-full mr-1">{tag}</span>)
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
                <div className="grid mt-10 md:mt-0 grid-cols-1 gap-5 md:grid-cols-3">
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
                        <button className="btn flex-col px-20 py-12">
                            <img src={call} alt="" />
                            Call
                        </button>
                        <button className="btn flex-col px-20 py-12">
                            <img src={text} alt="" />
                            Text
                        </button>
                        <button className="btn flex-col px-20 py-12">
                            <img src={video} alt="" />
                            Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;