export default function TravelCard(props) {
  return (
    <div className="Travel">
      <img src={props.image} alt={props.title} />
      <div>
        <p>{props.country}</p>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

