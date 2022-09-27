const Card = (props) => {
  const { photo, title, type, superHost, beds, rating } = props.stay;

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card text-start">
        <img
          src={photo}
          className="card-img-top"
          alt={title}
          style={{ width: "auto", height: "300px" }}
        />
        <div className="card-body row g-2">
          {superHost && (
            <div className="col-4">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                Super Host
              </button>
            </div>
          )}
          <div className={superHost ? "col-6" : "col-8"}>
            <p className="text-muted">
              {type} {beds && ", " + beds + " beds"}{" "}
            </p>
          </div>
          <div className="col-2 text-end">
            <small>
              <i className="fa fa-star" style={{ color: "#EB5757" }}></i>
              {rating}
            </small>
          </div>
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
