import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import stayDetails from "./stays.json";

// Get the location names to show as options in filter
const locationList = [
  ...new Set(stayDetails.map((element) => element.location)),
];

function App() {
  const [location, setLocation] = useState();
  const [selected_location, setSelectedLocation] = useState(null);
  const [guestCount, setGuestCount] = useState();
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(true);
  const [showGuestCountOptions, setShowGuestCountOptions] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const dropdownRef = useRef(null);

  const onSubmit = function () {
    setLocation(selected_location);
    setGuestCount(adultCount + childCount);
    setDrawerOpen(false);
  };

  // To close drawer on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDrawerOpen(!drawerOpen);
      }
    };

    if (drawerOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [drawerOpen]);

  // To filter cards (stays)
  useEffect(() => {
    const list_of_Cards = stayDetails
      .filter(
        (element) =>
          (!location && !guestCount) ||
          (location &&
            guestCount &&
            location === element.location &&
            guestCount <= element.guests) ||
          (location && !guestCount && location === element.location) ||
          (!location && guestCount && guestCount <= element.guests)
      )
      .map((element) => (
        <Card
          key={element.key}
          image={element.photo}
          superhost={element.superhost}
          rating={element.rating}
          info={element.info}
          title={element.title}
        ></Card>
      ));

    setCards(list_of_Cards);
    setCardsCount(list_of_Cards.length);
  }, [location, guestCount, setCards]);

  return (
    <div className={`App`}>
      {/* Drawer */}
      {drawerOpen ? (
        <div className={`drawer`} ref={dropdownRef}>
          <div className={`drawer-contents`}>
            {/* Header Box */}
            <div className="drawer-header no-display-big">
              <span>Edit your search</span>
              <span class="material-icons" onClick={() => setDrawerOpen(false)}>
                close
              </span>
            </div>
            {/* Search Box */}
            <div className="search-box">
              <button
                id="select-location"
                className="select-button"
                onClick={() => {
                  setShowLocationOptions(true);
                  setShowGuestCountOptions(false);
                }}
              >
                <div className="button-name">Location</div>
                {selected_location ? (
                  <div>{selected_location}</div>
                ) : (
                  <div className="placeholder">Add Location</div>
                )}
              </button>

              <button
                id="select-guests"
                className="select-button"
                onClick={() => {
                  setShowLocationOptions(false);
                  setShowGuestCountOptions(true);
                }}
              >
                <div className="button-name">Guests</div>
                {adultCount || childCount ? (
                  <div>{`${adultCount + childCount} Guests`}</div>
                ) : (
                  <div className="placeholder">Add Guests</div>
                )}
              </button>

              <button className="select-button set-values">
                <button class="search-button" onClick={() => onSubmit()}>
                  <div className="flex-container">
                    <span className="material-icons">search</span>
                    <span className="icon-text">Search</span>
                  </div>
                </button>
              </button>
            </div>
            {/* End of Search Box */}

            {/* Filter Options */}
            <div className="search-container">
              {/* For Location */}
              <div
                className={`select-location-container ${
                  !showLocationOptions ? "no-display-small" : ""
                }`}
              >
                {showLocationOptions ? (
                  <div>
                    {locationList.map((location_name) => (
                      <div
                        className="select-location-options flex-container"
                        onClick={() => setSelectedLocation(location_name)}
                      >
                        <span className="material-icons">place</span>
                        <span className="icon-text">{location_name}</span>{" "}
                      </div>
                    ))}
                    <div
                      className="select-location-options flex-container"
                      onClick={() => setSelectedLocation(null)}
                    >
                      <span className="material-icons">place</span>
                      <span className="icon-text">Any</span>{" "}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* For Guests */}
              <div className="select-guests-container">
                {showGuestCountOptions ? (
                  <div>
                    <div className="select-guests-options">
                      <div className="option-content option-title">Adults</div>
                      <div className="placeholder">Ages 13 or above</div>
                      <div>
                        <button
                          className="option-content"
                          onClick={() => setAdultCount(adultCount - 1)}
                          disabled={adultCount <= 0}
                        >
                          -
                        </button>
                        <span className="option-content">{adultCount}</span>
                        <button
                          className="option-content"
                          onClick={() => setAdultCount(adultCount + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="select-guests-options">
                      <div className="option-content option-title">
                        Children
                      </div>
                      <div className="placeholder">Ages 2-12</div>
                      <div>
                        <button
                          className="option-content"
                          onClick={() => setChildCount(childCount - 1)}
                          disabled={childCount <= 0}
                        >
                          -
                        </button>
                        <span className="option-content">{childCount}</span>
                        <button
                          className=" option-content"
                          onClick={() => setChildCount(childCount + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* Submit Button visible only in small screens */}
              <button
                class="search-button no-display-big"
                onClick={() => onSubmit()}
              >
                <div className="flex-container">
                  <span className="material-icons">search</span>
                  <span className="icon-text">Search</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Header */}
      <header className="header-container">
        <div
          className="logo-container"
          onClick={() => {
            setLocation(null);
            setSelectedLocation(null);
            setGuestCount(0);
            setAdultCount(0);
            setChildCount(0);
          }}
        >
          <span className="triangle-logo"></span>
          <i className="fas fa-triangle"></i>
          <span className="logo-name">windbnb</span>
        </div>

        {/* Filter Buttons to open the drawer and Search Button */}
        <div className="filter-options-container">
          <button
            id="location"
            className="filter-option"
            onClick={() => {
              setShowGuestCountOptions(false);
              setShowLocationOptions(true);
              setDrawerOpen(!drawerOpen);
            }}
          >
            {selected_location ? (
              <div>{selected_location}</div>
            ) : (
              <div className="placeholder">Add Location</div>
            )}
          </button>
          <button
            id="guests"
            className="filter-option"
            onClick={() => {
              setShowGuestCountOptions(true);
              setShowLocationOptions(false);
              setDrawerOpen(!drawerOpen);
            }}
          >
            {adultCount || childCount ? (
              <div>{`${adultCount + childCount} Guests`}</div>
            ) : (
              <div className="placeholder">Add Guests</div>
            )}
          </button>
          <button
            id="search"
            className="filter-option"
            onClick={() => onSubmit()}
          >
            <span className="material-icons">search</span>
          </button>
        </div>
      </header>

      {/* Title of the page and count of stays */}
      <div className="title-container">
        <div className="main-title">Stays in Finland</div>
        <div className="property-count">{`${cardsCount} stays`}</div>
      </div>

      {/* When the Drawer is open, blur the rest of content */}
      {drawerOpen ? <div className="overlay"></div> : null}

      {/* Cards */}
      <div className={`card-container`}>
        {cards.length ? (
          cards
        ) : (
          <p className="cards-placeholder">No Stays Available</p>
        )}
      </div>
    </div>
  );
}

export default App;
