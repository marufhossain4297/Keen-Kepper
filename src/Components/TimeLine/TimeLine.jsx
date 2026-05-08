import { LayoutList, MessageSquareText, Phone, TextAlignJustify, Video } from "lucide-react";
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
                {friendi.length === 0 ?
                    (
                        /* Enhanced Empty State UI */
                        <div className="flex mb-10 flex-col items-center justify-center py-24 text-center border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/50">
                            <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                                <LayoutList size={48} className="text-[#2D4F3F] opacity-40" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No check-ins recorded yet.</h3>
                            <p className="text-gray-500 max-w-sm mb-8">
                                Your personal shelf is empty. Start nurturing your connections by recording your first interaction.
                            </p>
                            <button className="bg-[#2D4F3F] hover:bg-[#1a3026] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95">
                                + Record a Check-in
                            </button>
                        </div>
                    )
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