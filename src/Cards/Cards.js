import React, { useEffect } from 'react';

import Card from './Card';
import staysData from './stays.json';

const Cards = (props) => {
    const stays = localStorage.getItem('stays');
    useEffect(() => {
        if(!stays) {
            localStorage.setItem("stays", JSON.stringify(staysData));
        }
    },[stays]);

    const updatedStays = stays ? JSON.parse(stays) : staysData;
    const cards = updatedStays.map((stay, i) => (
            <Card stay={stay} key={i} />
        ));

    return (
        <div className="row g-3">
            {/* <div className="col-3"> */}
                {cards} 
            {/* </div> */}
        </div>
    );
}

export default Cards;