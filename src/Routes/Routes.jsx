import { createBrowserRouter } from "react-router"
import Layout from "../Layout/Layout"
import TimeLine from "../Components/TimeLine/TimeLine"
import Status from "../Components/Status/Status"
import Home from "../Components/Home/Home"

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
            }
        ]
    },
])

export default router 