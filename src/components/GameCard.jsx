const GameCard = ({onClick, image, name, rating}) => {
  
  return (
    <div className="card game-card" onClick={(e)=>(onClick(e))}>
      <div className="img-wrapper">
        <img src={image} alt="image" />
      </div>
      <div className="info-wrapper flex-col">
          <h3>Name: {name}</h3>
          <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default GameCard
