import { MessageSquareText, Phone, TextAlignJustify, Video } from "lucide-react";
import { FriendContext } from "../Context/UseContex";
import { useContext } from "react";
import callImage from '../../image/Vector (1).png'
import textImage from '../../image/ChatDots.png'
import videoImage from '../../image/VideoCamera.png'

const TimeLine = () => {
    const { friendi } = useContext(FriendContext)
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
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
                {friendi.length === 0 ? <p className="text-center text-[#64748B]">No check-ins recorded yet.</p>
                    :

                    friendi.map(friend => (

                        <div key={friend.id} className="bg-white py-4 w-full items-center rounded-lg mb-4 shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)]">
                            <div className="flex items-center gap-2.5">
                                <img src={friend.button === 'Call' ? callImage : friend.button === 'Text' ? textImage : videoImage} alt="" />
                                <div>
                                    <div className="text-[#1F2937] font-semibold mb-1 flex mt-3">
                                        <p>{friend.button === 'Call' ? 'Call' : friend.button === 'Text' ? 'Text' : 'Video'}</p>
                                        <p>with {friend.name}</p>
                                    </div>
                                    <div className="text-left">
                                        <p>{currentDate}</p>
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