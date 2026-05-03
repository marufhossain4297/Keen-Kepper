import { use } from "react";

const Friend = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    return (
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {
                friends.map(friend =>
                    <div className="bg-white py-5 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center w-65">
                        <img className="w-20 h--20 rounded-full mx-auto" src={friend.picture} alt="" />
                        <h3 className="text-3xl text-[#244D3F] font-bold mb-2">{friend.name}</h3>
                        <p className="text-[#64748B] mb-4">{friend.goal}d ago</p>
                    </div>
                )
            }
        </div>
    );
};

export default Friend;