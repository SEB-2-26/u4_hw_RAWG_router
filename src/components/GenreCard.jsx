const GenreCard = (props) => {
  const { image_background, games_count, name } = props.genre;
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={image_background} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{games_count}</p>
      </div>
    </div>
  );
};

export default GenreCard;
