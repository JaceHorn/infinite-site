import React from "react";
import { useParams } from "react-router-dom";

const result= () => {
    const params= useParams ();
    return(
        <div>
            <br />
            result
            <br />
            {params.query}
            
            { params.query === 'edith' && <div> Hi, Edith! </div>}
            { params.query.indexOf('pilaf') === 0 && <div> Hi, pilaf! </div>}
        </div>
    );
};
export default result;