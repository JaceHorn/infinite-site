import React from "react";
import {Outlet, useNavigate} from "react-router-dom";


const search= () =>{
    const navigate = useNavigate();
    return(
        <div>
            <input onChange={ change => navigate(change.target.value)}></input>
            <button>Submit</button>
            <Outlet />
        </div>
    );
};
export default search;