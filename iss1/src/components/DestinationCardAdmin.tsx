import './DestinationCard.css';

type DestinationCardProps = {
    title: string,
    description: string,
    location: string,
    image: string,
}

const DestinationCardAdmin = (props: DestinationCardProps) => {

    console.log(props);

    return (
        <div className="destination-card">
            <div className="destination-card-image">
                <img className='card-img' alt='Destination' src={props.image}></img>
            </div>
            <div className="destination-card-info">
                <div className="destination-card-info-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="destination-card-info-description">
                    <p>{props.description}</p>
                </div>
                <div className="destination-card-info-location">
                    <p>Location: {props.location}</p>
                </div>
            </div>
        </div>
    );
}

export default DestinationCardAdmin;