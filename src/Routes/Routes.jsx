import { createBrowserRouter } from "react-router"
import Layout from "../Layout/Layout"
import TimeLine from "../Components/TimeLine/TimeLine"
import Status from "../Components/Status/Status"
import Home from "../Components/Home/Home"
import FriendDetails from "../Components/FriendDetails/FriendDetails"
import ErrorPage from "../ErrorPage/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/timeline',
                Component: TimeLine
            },
            {
                path: '/status',
                Component: Status
            },
            {
                path: '/friends/:friendName',
                Component: FriendDetails,
                loader: () => fetch('/friends.json'),
            },
        ],
        errorElement: <ErrorPage />
    },
])

export default router 