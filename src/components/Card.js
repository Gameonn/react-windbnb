import style from "./Card.module.css";

export default function Card({
  image,
  superhost = false,
  info,
  rating,
  title,
}) {
  return (
    <div className={style["card"]}>
      <div className={style["image-container"]}>
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={title}
          className={style["image"]}
        ></img>
      </div>

      <div className={style["about-container"]}>
        <div>
          {superhost && (
            <button className={style["superhost-button"]}>super host</button>
          )}
          <span className={style["info"]}>{info}</span>
        </div>
        {rating && (
          <div className={style["rating-container"]}>
            <span className="material-icons star">star</span>
            <span className={style["rating"]}>{rating}</span>
          </div>
        )}
      </div>
      <div className={style["title"]}>{title}</div>
    </div>
  );
}
