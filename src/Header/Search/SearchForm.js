import Modal from "../../UI/Modal";
import SearchResults from "./SearchResults";

const SearchForm = ({location, guests, onConfirm, changeInput}) => {
    return (
            <Modal onConfirm={onConfirm}>
                <div className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Filter by city or country" 
                            value={location} onChange={(e) => changeInput(e, 'location')} />
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" placeholder="Guests" 
                            value={guests} onChange={(e) => changeInput(e, 'guests')} />
                    </div>
                </div>
                {location && <SearchResults location={location} guests={guests} />}
            </Modal>
    )
}



export default SearchForm;
