import React from 'react';
import { useParams } from "react-router-dom"

const Detailspage = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Detailspage - {params.id}</h1>
        </div>
    );
};

export default Detailspage;