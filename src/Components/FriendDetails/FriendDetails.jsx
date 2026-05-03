import { use } from "react";
import { useParams } from "react-router";

const friendsPromise = fetch('/friends.json')
.then(res => res.json());

const FriendDetails = () => {
    const params = useParams();
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <div>
            <h2>FriendDetails: {params.friendId}</h2>
        </div>
    );
};

export default FriendDetails;