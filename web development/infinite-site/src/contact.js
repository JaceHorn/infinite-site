import React from "react";
import {useParams} from "react-router-dom";

const contact = () => {
    const params = useParams();
    return(
        <div>
            Team Member: {params.person}
            Phone Number: 316.655.9223
        </div>
    );
};

export default contact;