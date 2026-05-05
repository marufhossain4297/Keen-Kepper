import grafic from '../../image/image 1.png'
const Status = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold mt-20 mb-6">Friendship Analytics</h2>
            <div className="p-8 shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] rounded-lg mb-20">
                <p>By Interaction Type</p>
                <div>
                    <img src={grafic} alt="grafic" className="justify-self-center" />
                </div>
                <div className="flex gap-4 justify-center mt-6">
                    <div className="flex items-center">
                        <p className="h-3 w-3 bg-[#7F37F5] rounded-full mr-2"></p>
                        <p>Text</p>
                    </div>
                    <div className="flex items-center">
                        <p className="h-3 w-3 bg-[#244D3F] rounded-full mr-2"></p>
                        <p>Call</p>
                    </div>
                    <div className="flex items-center">
                        <p className="h-3 w-3 bg-[#37A163] rounded-full mr-2"></p>
                        <p>Video</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;