import { useState } from 'react';
import OtherRequests from '../requests/OtherRequests';
import './DestinationCard.css';

type DestinationCardProps = {
    id: number,
    title: string,
    description: string,
    location: string,
    startDate: string,
    endDate: string,
    image: string,
}

const DestinationCardPending = (props: DestinationCardProps) => {

    const [visible, setVisible] = useState(true);

    const approveDest = async () => {
        await OtherRequests.approveDestination(props.id)
            .then((response) => {
                setVisible(false);
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    return (
        visible ?
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
                <div className="destination-card-info-dates">
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                </div>
                <div className="destination-card-info-button">
                    <button onClick={approveDest}>Approve</button>
                </div>
            </div>
        </div>
        : null
    );
}

export default DestinationCardPending;