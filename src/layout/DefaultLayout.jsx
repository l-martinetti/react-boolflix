import { Outlet } from "react-router-dom"

import Header from "../components/Header"


const DefaultLayout = () => {
    return (
        <>
            <div><Header /></div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout