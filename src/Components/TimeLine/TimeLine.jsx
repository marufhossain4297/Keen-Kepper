import { LayoutList } from "lucide-react";
import { FriendContext } from "../Context/UseContex";
import { useContext, useState } from "react"; // Added useState
import callImage from '../../image/Vector (1).png'
import textImage from '../../image/ChatDots.png'
import videoImage from '../../image/VideoCamera.png'
import { Link } from "react-router";

const TimeLine = () => {
    const { friendi } = useContext(FriendContext);

    const [filterType, setFilterType] = useState("All");

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const displayList = friendi
        .filter(friend => filterType === "All" || friend.btn === filterType)
        .sort((a, b) => b.id - a.id);

    return (
        <div className="mb-15 px-4 md:px-0">
            <h2 className="mt-20 text-5xl font-bold mb-6">TimeLine</h2>

            <div className="relative inline-block mb-8">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="select select-bordered w-full max-w-xs rounded-xl border-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-[#244D3F]/20"
                >
                    <option value="All">All Interactions</option>
                    <option value="Call">Calls</option>
                    <option value="Text">Texts</option>
                    <option value="Video">Videos</option>
                </select>
            </div>

            <div>
                {displayList.length === 0 ?
                    (
                        <div className="flex mb-10 flex-col items-center justify-center py-24 text-center border-2 border-dashed border-gray-100 rounded-4xl bg-gray-50/50">
                            <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                                <LayoutList size={48} className="text-[#2D4F3F] opacity-40" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No check-ins found.</h3>
                            <p className="text-gray-500 max-w-sm mb-8">
                                {filterType === "All"
                                    ? "Your personal shelf is empty. Start nurturing your connections."
                                    : `You haven't recorded any ${filterType} interactions yet.`}
                            </p>
                            <Link to="/" className="bg-[#2D4F3F] hover:bg-[#1a3026] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95">
                                + Record a Check-in
                            </Link>
                        </div>
                    )
                    :
                    displayList.map(friend => (
                        <div key={friend.id}>
                            <div className="rounded-[20px] mb-4 border border-[#E9E9E9] bg-white p-4 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 p-3 rounded-xl">
                                    <img
                                        className="w-6 h-6 object-contain"
                                        src={friend.btn === 'Call' ? callImage : friend.btn === 'Text' ? textImage : videoImage}
                                        alt={friend.btn}
                                    />
                                </div>
                                <div>
                                    <div className="text-[#1F2937] font-medium items-center mb-0.5 gap-2 flex">
                                        <p className="text-[20px] text-[#244D3F] font-bold">{friend.btn}</p>
                                        <p className="text-[18px] text-[#64748B] font-normal">with {friend.friend.name}</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[14px] text-[#94A3B8] font-medium uppercase tracking-wide">{currentDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TimeLine;