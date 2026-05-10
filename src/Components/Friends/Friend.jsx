// import { Search } from "lucide-react";
import { use } from "react";
import { Link } from "react-router";

const Friend = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    // const [search, setSearch] = useState('');

    // const handleSearch = () => {
    //     const wentFriends = friends.filter(friend => friend.name.toLowerCase().includes(search.toLowerCase()));
    //     friends(wentFriends)
    //     console.log(wentFriends);
    // }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className='text-2xl text-[#1F2937] font-semibold'>Friends</h2>
                {/* <div className="flex gap-3">

                    <input className='border border-[#a3a1a1] pl-4 focus:outline-[#9BC9AE] rounded-lg' type="text" placeholder="Search friends" value={search} onChange={(e) => setSearch(e.target.value)} />

                    <button onClick={handleSearch} className='bg-[#254D3F] btn border-none rounded-lg text-white px-4 py-2'><Search size={18} />Search</button>
                </div> */}
            </div>
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                {
                    friends.map(friend =>
                        <Link key={friend.id} to={`/friends/${friend.name}`} className="border border-[#E9E9E9] bg-white py-5 rounded-lg hover:text-white text-center before:absolute before:left-4 before:right-4 before:top-8 before:-bottom-4  before:rounded-[28px] before:z-[-1] before:duration-300transition-all duration-300 ease-out hover:-translate-y-3">
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
        </div>

    );
};

export default Friend;