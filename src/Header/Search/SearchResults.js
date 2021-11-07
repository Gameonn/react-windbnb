import React from 'react';

const SearchResults = ({location, guests}) => {
        const stays = JSON.parse(localStorage.getItem('stays'));
            const filteredStays =  stays.filter(s => s.city.toUpperCase().indexOf(location.toUpperCase()) > -1 ||  s.country.toUpperCase().indexOf(location.toUpperCase()) > -1);
            let filteredResults = (<h5> No Location Found</h5>);
            if(filteredStays.length) {
                filteredResults = filteredStays.map((stay, i) => (
                    <li className="list-group-item d-flex justify-content-between" key={i}> {stay.city + ', ' + stay.country} 
                        <span className="badge bg-primary rounded-pill">{stay.maxGuests}</span>
                    </li>  
                ));
            }
    
    return (
        <div className="row p-4">
            <div className="col-6">
            <ul className="list-group"> {filteredResults} </ul>
            </div>
            <div className="col-6">
                {/* <input type="number" className="form-control" placeholder="Guests" /> */}
            </div>
        </div>
    );
}

export default SearchResults;