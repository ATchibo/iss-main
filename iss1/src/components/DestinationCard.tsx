import './DestinationCard.css';

type DestinationCardProps = {
    title: string,
    description: string,
    location: string,
    startDate: string,
    endDate: string,
    image: string
}

const DestinationCard = (props: DestinationCardProps) => {

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
                {
                    props.startDate !== '' && props.endDate !== '' &&
                    <div className="destination-card-info-dates">
                        <p>Start Date: {props.startDate}</p>
                        <p>End Date: {props.endDate}</p>
                    </div>
                }
                <div className="destination-card-info-button">
                    <button>Add destination to private list</button>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;