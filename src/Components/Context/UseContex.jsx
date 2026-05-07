import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext()

const FriendProvider = ({ children }) => {
    const [friendi, setFriendi] = useState([])
    const data = {
        friendi,
        setFriendi
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;