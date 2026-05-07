import { MessageSquareText, Phone, TextAlignJustify, Video } from "lucide-react";
import { FriendContext } from "../Context/UseContex";
import { useContext } from "react";

const TimeLine = () => {
    const { friendi } = useContext(FriendContext)
    return (
        <div>
            <h2 className="mt-20 text-5xl font-bold mb-6">TimeLine</h2>
            <select defaultValue="Pick a color" className="select mb-6">
                <option><TextAlignJustify size={15} />All</option>

                <option><Phone size={15} />Call</option>

                <option> <MessageSquareText size={15} /> Text</option>

                <option><Video size={15} />Video</option>
            </select>
            <div>
                {friendi.map(friend => (
                    <div key={friend.id} className="bg-white py-5 w-95 items-center justify-self-center rounded-lg shadow-sm mb-4 text-center">
                        <img className="w-20 h-20 rounded-full mx-auto" src={friend.picture} alt="" />
                        <h3 className="text-xl text-[#1F2937] font-semibold mb-1 mt-3">{friend.name}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default TimeLine;