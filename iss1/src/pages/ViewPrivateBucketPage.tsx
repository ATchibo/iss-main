import { useEffect, useState } from "react";
import OtherRequests from "../requests/OtherRequests";

import './styles.css';
import LocalStorageManager from "../helpers/LocalStorageManager";
import DestinationCardUser from "../components/DestinationCardUser";

const ViewPrivateBucketPage: React.FC = () => {

    const [bucketList, setBucketList] = useState([]);

    const userRole = LocalStorageManager.getRole() || '';

    const fetchPrivateDestinationList = async () => {
        await OtherRequests.getPrivateDestinations()
            .then((response) => {
                console.log(response.data);
                
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
                            button={false}
                        />
                    );
                }));
            })
            .catch((error) => {
                console.log(error.response);
            });
    };


    useEffect(() => {
        fetchPrivateDestinationList();
    }, []);

    return (
        <div>
            <header onClick={() => {window.location.href = "/"}} className="header"></header>

            <h2>Private bucket list</h2>

            <div className="bucket-list">
                {bucketList}
            </div>
        </div>
    );
};

export default ViewPrivateBucketPage;