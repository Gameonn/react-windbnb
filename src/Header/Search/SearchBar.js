import React, {useState} from 'react';

import SearchForm from './SearchForm';

const SearchBar = (props) => {

    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState('');
    const [showModal, setShowModal] = useState(false);
    const searchHandler = (e) => {
        e.preventDefault();
        console.log(location+" "+guests);
        setShowModal(true);
    }

    const inputHandler = (e, type) => {
        const val = e.target.value;
        console.log(val, type);
        if(type === 'location' ) setLocation(val);
        else setGuests(val);
    }

    return (
        <div  style={{marginLeft: 'auto',width: 'auto'}}>
            {showModal && 
                <SearchForm onConfirm={() => setShowModal(false)} 
                location={location} guests={guests} changeInput={inputHandler} /> } 
            <form onSubmit={searchHandler} className="input-group">
                {/* <span className="input-group-text">Helsinki, Finland</span> */}
                <input type="text" className="form-control" value={location} placeholder="Location" 
                onChange={(e) => inputHandler(e, 'location')} />
                <input type="number" min="0" className="form-control" value={guests} 
                onChange={(e) => inputHandler(e, 'guests')} placeholder="Add guests" />
                <button className="input-group-text" style={{color: "#EB5757"}}><i className="fa fa-search"></i></button>
            </form>
        </div>
        
    );
}

export default SearchBar;