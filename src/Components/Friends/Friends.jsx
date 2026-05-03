// import { Suspense } from 'react';
import { Suspense } from 'react';
import Friend from './Friend';
import { CirclesWithBar } from 'react-loader-spinner';

const Friends = () => {
    const friendsPromise = fetch('/friends.json')
        .then(res => res.json())
    return (
        <div>
            <h2 className='text-2xl text-[#1F2937] font-semibold mb-4'>Friends</h2>
            <Suspense fallback={
                <div className='justify-center flex items-center'>
                    {/* <DNA
                        visible={true}
                        height="200"
                        width="100"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        dnaColorOne='#4FA94D'
                        dnaColorTwo='#4FA94D'
                    /> */}
                    {/* <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#254D3F"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> */}
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>}
            >
                <Friend friendsPromise={friendsPromise} />
            </Suspense>
        </div>
    );
};

export default Friends;