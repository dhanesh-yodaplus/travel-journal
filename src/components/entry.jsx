import './entry.css'
import markerIcon from '../assets/marker.svg'

export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.imageUrl} alt={props.title} className="entry--image" />

      <div className="entry--details">
        <div className="entry--location">
          <img src={markerIcon} alt="Map marker icon" className="entry--marker" />
          <span className="entry--country">{props.country}</span>
          <a
            className="entry--map-link"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="entry--title">{props.title}</h2>
        <p className="entry--date">{props.date}</p>
        <p className="entry--description">{props.description}</p>
      </div>
    </article>
  )
}
