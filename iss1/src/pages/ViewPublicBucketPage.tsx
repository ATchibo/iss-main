import { useEffect, useState } from "react";
import DestinationCardAdmin from "../components/DestinationCardAdmin";
import OtherRequests from "../requests/OtherRequests";

import './styles.css';
import LocalStorageManager from "../helpers/LocalStorageManager";
import DestinationCardUser from "../components/DestinationCardUser";

const ViewPublicBucketPage: React.FC = () => {

    const [bucketList, setBucketList] = useState([]);

    const userRole = LocalStorageManager.getRole() || '';

    const fetchPublicDestinationList = async () => {
        await OtherRequests.getPublicDestinations()
            .then((response) => {
                console.log(response.data);
                
                if (userRole === 'ROLE_ADMIN') {
                    setBucketList(response.data.destinationList.map((destination: any) => {
                        return (
                            <DestinationCardAdmin
                                key={destination.id}
                                title={destination.title}
                                description={destination.descrption}
                                location={destination.geoLocation}
                                image={destination.image}
                            />
                        );
                    }));
                } else {
                    setBucketList(response.data.destinationList.map((destination: any) => {
                        return (
                            <DestinationCardUser
                                key={destination.id}
                                id={destination.id}
                                title={destination.title}
                                description={destination.descrption}
                                location={destination.geoLocation}
                                startDate={destination.startDate.toString().substring(0, 10)}
                                endDate={destination.endDate.toString().substring(0, 10)}
                                image={destination.image}
                                button={true}
                            />
                        );
                    }));
                }
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
            <header onClick={() => {window.location.href = "/"}} className="header"></header>

            <h2>Public bucket list</h2>

            <div className="bucket-list">
                {bucketList}
            </div>
        </div>
    );
};

export default ViewPublicBucketPage;