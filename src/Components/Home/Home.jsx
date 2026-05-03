import Friends from "../Friends/Friends";

const Home = () => {
    return (
        <div className="">
            <div className="mt-20 mb-10 items-center text-center">
                <h2 className="text-5xl font-bold mb-4">Friends to keep close in your life</h2>
                <p className="text-[#64748B] mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
                </p>
                <button className="btn bg-[#244D3F] border-none text-white font-bold py-2 px-4 rounded">
                    + Add a Friend
                </button>
            </div>
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
                <div className="bg-white py-5 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center w-65">
                    <h3 className="text-3xl text-[#244D3F] font-bold mb-2">10</h3>
                    <p className="text-[#64748B]">Total Friends</p>
                </div>
                <div className="bg-white py-5 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center w-65">
                    <h3 className="text-3xl text-[#244D3F] font-bold mb-2">3</h3>
                    <p className="text-[#64748B] mb-4">On Track</p>
                </div>
                <div className="bg-white py-5 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center w-65">
                    <h3 className="text-3xl text-[#244D3F] font-bold mb-2">6</h3>
                    <p className="text-[#64748B] mb-4">Need Attention</p>
                </div>
                <div className="bg-white py-5 rounded-lg shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] text-center w-65">
                    <h3 className="text-3xl text-[#244D3F] font-bold mb-2">12</h3>
                    <p className="text-[#64748B] mb-4">Interactions This Month</p>
                </div>
            </div>
            <div className="border-t border-[#E9E9E9] mb-10"></div>
            <Friends/>
        </div>
    );
};

export default Home;