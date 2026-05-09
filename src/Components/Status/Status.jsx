import { useContext } from "react";
import { FriendContext } from "../Context/UseContex";
import { UserPlus, Sparkles, Coffee } from 'lucide-react';
import Grafic from "../PieChart/PieChart";
import { Link } from "react-router";

const EmptyStateUI = () => {

    const { friendi } = useContext(FriendContext);

    return (
        <div>
            <h2 className="text-5xl font-bold mb-10 mt-20">Friendship Analytics</h2>
            {friendi.length === 0 ?
                <div className="flex flex-col border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/50 items-center justify-center mb-16 py-10 w-full px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

                    <div className="relative mb-10">
                        <div className="absolute inset-0 bg-[#2D4F3F] opacity-5 blur-3xl rounded-full"></div>

                        <div className="relative flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-xl border border-stone-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Coffee size={48} className="text-[#2D4F3F] opacity-80" />

                            <div className="absolute -top-3 -right-3 bg-[#2D4F3F] p-3 rounded-2xl shadow-lg animate-bounce">
                                <Sparkles size={20} className="text-white" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Time for a check-in?
                    </h2>

                    <p className="text-gray-500 text-center max-w-md leading-relaxed mb-10">
                        Your <span className="text-[#2D4F3F] font-semibold italic">personal shelf</span> of connections is empty.
                        Don't let those meaningful relationships gather dust!
                    </p>

                    <Link to="/" className="group relative flex items-center gap-3 bg-[#2D4F3F] hover:bg-[#1f3a2e] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-[#2d4f3f4d] active:scale-95 overflow-hidden">

                        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <UserPlus size={22} />
                        <span>Call your friends</span>
                    </Link>

                    <div className="mt-6 flex items-center gap-2 opacity-20 grayscale">
                        <div className="h-px w-8 bg-black"></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em]">KeenKeeper</span>
                        <div className="h-px w-8 bg-black"></div>
                    </div>
                </div>
                :
                <div>
                    <div className="p-8 shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] rounded-lg mb-20">
                        <p className="text-lg font-medium">By Interaction Type</p>
                        <div className="flex justify-center mt-10">
                            <Grafic></Grafic>
                        </div>
                        <div className="flex gap-4 justify-center mt-6">
                            <div className="flex items-center">
                                <p className="h-3 w-3 bg-[#7F37F5] rounded-full mr-2"></p>
                                <p className="text-[#7F37F5]">Text</p>
                            </div>
                            <div className="flex items-center">
                                <p className="h-3 w-3 bg-[#244D3F] rounded-full mr-2"></p>
                                <p className="text-[#244D3F]">Call</p>
                            </div>
                            <div className="flex items-center">
                                <p className="h-3 w-3 bg-[#37A163] rounded-full mr-2"></p>
                                <p className="text-[#37A163]">Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default EmptyStateUI;