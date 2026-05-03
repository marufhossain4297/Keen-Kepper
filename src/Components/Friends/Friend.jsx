import { use } from "react";
import { Link } from "react-router";

const Friend = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    return (
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {
                friends.map(friend =>
                    <Link to={`/friends/${friend.id}`} className="bg-white py-5 rounded-lg shadow-sm text-center">
                        <img className="w-20 h--20 rounded-full mx-auto" src={friend.picture} alt="" />
                        <h3 className="text-xl text-[#1F2937] font-semibold mb-1 mt-3">{friend.name}</h3>
                        <p className="text-[#64748B] mb-3">{friend.days_since_contact}d ago</p>
                        {
                            friend.tags.map(tag =>
                                <span className="text-xs text-[#244D3F] bg-[#CBFADB] font-semibold px-2 py-1 rounded-full mr-1">{tag}</span>)
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