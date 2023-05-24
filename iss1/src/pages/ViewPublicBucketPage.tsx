import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import OtherRequests from "../requests/OtherRequests";

import './styles.css';

const ViewPublicBucketPage: React.FC = () => {

    const [bucketList, setBucketList] = useState([]);


    const fetchPublicDestinationList = async () => {
        await OtherRequests.getPublicDestinations()
            .then((response) => {
                console.log(response.data);
                
                setBucketList(response.data.destinationList.map((destination: any) => {
                    return (
                        <DestinationCard
                            key={destination.id}
                            title={destination.title}
                            description={destination.descrption}
                            location={destination.geoLocation}
                            startDate={destination.startDate}
                            endDate={destination.endDate}
                            image={destination.image}
                        />
                    );
                }));
            })
            .catch((error) => {
                console.log(error.response);
            });
    };


    useEffect(() => {
        fetchPublicDestinationList();
    }, []);

    return (
        <div>
            <header className="header"></header>

            <h2>Public bucket list</h2>

            <div className="bucket-list">
                {bucketList}
            </div>
        </div>
    );
};

export default ViewPublicBucketPage;