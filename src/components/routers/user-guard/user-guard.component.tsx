import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPath } from "../../../screens/login/login.types";

import { State } from "../../../store/store/store.types";


export default function UserGuard({children}:any){
 const isUserAuthenticated = useSelector((state: State) => !!state.user.data)
    const navigate = useNavigate()
    const from = useLocation()

useEffect(
    ()=>{
        if(!isUserAuthenticated){
            navigate(LoginPath, {
                state: {from}
            })
            
            console.log(isUserAuthenticated)

        }


    },
    [isUserAuthenticated]
)

if (isUserAuthenticated) return children

return <></>

}