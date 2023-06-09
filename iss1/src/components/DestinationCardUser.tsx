import './DestinationCard.css';

type DestinationCardProps = {
    id: number,
    title: string,
    description: string,
    location: string,
    startDate: string,
    endDate: string,
    image: string,
    button: boolean
}

const DestinationCardUser = (props: DestinationCardProps) => {

    const addDestToPrivateList = async () => {
        window.location.href = "/add-to-private-list/" + props.id;
    }

    const btnId = "card-btn-" + props.id;
    const titleId = "card-title-" + props.id;

    return (
        <div className="destination-card">
            <div className="destination-card-image">
                <img className='card-img' alt='Destination' src={props.image}></img>
            </div>
            <div className="destination-card-info">
                <div className="destination-card-info-title">
                    <h3 id={titleId}>{props.title}</h3>
                </div>
                <div className="destination-card-info-description">
                    <p>{props.description}</p>
                </div>
                <div className="destination-card-info-location">
                    <p>Location: {props.location}</p>
                </div>
                <div className="destination-card-info-dates">
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                </div>
                {
                    props.button &&
                    <div className="destination-card-info-button">
                        <button id={btnId} onClick={addDestToPrivateList}>Add destination to private list</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default DestinationCardUser;