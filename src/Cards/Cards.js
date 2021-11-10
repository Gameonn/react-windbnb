import React, { useEffect } from 'react';

import Card from './Card';
import staysData from './stays.json';

const Cards = ({counter}) => {
    const stays = JSON.parse(localStorage.getItem('stays'));
    const location = localStorage.getItem('location');
    useEffect(() => {
        if(!stays) {
            localStorage.setItem("stays", JSON.stringify(staysData));
        }
        if(location) {
            stays.filter(s => s.city.toUpperCase().indexOf(location.toUpperCase()) > -1 ||  
                    s.country.toUpperCase().indexOf(location.toUpperCase()) > -1);
        }
        counter(staysData.length);
    },[stays, counter, location]);

    let updatedStays = stays ? stays : staysData;
    console.log(stays, 'updatedStays');
    const cards = updatedStays.map((stay, i) => (
            <Card stay={stay} key={i} />
        ));

    return (
        <div className="row g-3"> {cards} </div>
    );
}

export default Cards;