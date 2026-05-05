import { use } from "react";
import { Link } from "react-router";

const Friend = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    return (
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {
                friends.map(friend =>
                    <Link key={friend.id} to={`/friends/${friend.name}`} className="border border-[#E9E9E9] bg-white py-5 rounded-lg hover:text-white text-center before:absolute before:left-4 before:right-4 before:top-8 before:-bottom-4  before:rounded-[28px] before:z-[-1] before:bg-linear-to-br before:from-fuchsia-400 before:via-purple-500 before:to-cyan-400 before:opacity-0 before:blur-2xl before:transition-opacity before:duration-300 hover:before:opacity-75 transition-all duration-300 ease-out hover:-translate-y-1">
                        <img className="w-20 h-20 rounded-full mx-auto" src={friend.picture} alt="" />
                        <h3 className="text-xl text-[#1F2937] font-semibold mb-1 mt-3">{friend.name}</h3>
                        <p className="text-[#64748B] mb-3">{friend.days_since_contact}d ago</p>
                        {
                            friend.tags.map((tag, ind) =>
                                <span key={ind} className="text-xs text-[#244D3F] bg-[#CBFADB] font-semibold px-2 py-1 rounded-full mr-1">{tag}</span>)
                        }
                        <p className={`text-white rounded-full w-26 justify-self-center mt-2.5 py-1 ${friend.status === 'Overdue' ? 'bg-[#EF4444]' : friend.status === 'Almost Due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'} font-medim`}>
                            {friend.status}
                        </p>
                    </Link>
                )
            }
        </div>
    );
};

export default Friend;