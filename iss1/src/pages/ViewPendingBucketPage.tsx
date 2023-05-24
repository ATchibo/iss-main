import { useEffect, useState } from "react";
import OtherRequests from "../requests/OtherRequests";

import './styles.css';
import LocalStorageManager from "../helpers/LocalStorageManager";
import DestinationCardPending from "../components/DestinationCardPending";

const ViewPendingBucketPage: React.FC = () => {

    const [bucketList, setBucketList] = useState([]);

    const userRole = LocalStorageManager.getRole() || '';

    const fetchPendingDestinationList = async () => {
        await OtherRequests.getPendingDestinations()
            .then((response) => {
                console.log(response.data);
                
                setBucketList(response.data.destinationList.map((destination: any) => {
                    return (
                        <DestinationCardPending
                            key={destination.id}
                            id={destination.id}
                            title={destination.title}
                            description={destination.descrption}
                            location={destination.geoLocation}
                            image={destination.image}
                            startDate={destination.startDate}
                            endDate={destination.endDate}
                        />
                    );
                }));
            })
            .catch((error) => {
                console.log(error.response);
            });
    };


    useEffect(() => {
        fetchPendingDestinationList();
    }, []);

    return (
        <div>
            <header className="header"></header>

            <h2>Approve destinations</h2>

            <div className="bucket-list">
                {bucketList}
            </div>
        </div>
    );
};

export default ViewPendingBucketPage;