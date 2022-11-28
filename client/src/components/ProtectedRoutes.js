import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "./Context";

function ProtectedRoutes() {

    const {state} = useContext(AppContext)
    console.log("🚀 ~ file: ProtectedRoutes.js ~ line 8 ~ ProtectedRoutes ~ state", state)

    console.log("protected root uid:", state.user._id)
    if (state.user._id) {
        return <Outlet />
    }

    return <Navigate to='/'/>
}

export default ProtectedRoutes;