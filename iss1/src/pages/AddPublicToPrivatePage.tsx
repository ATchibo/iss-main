import { useParams } from "react-router-dom";
import OtherRequests from "../requests/OtherRequests";
import { useEffect, useState } from "react";

const AddPublicToPrivatePage: React.FC = () => {

    const { dId } = useParams<{ dId: string }>();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');

    const fetchDestination = async () => {
        await OtherRequests.getDestinationById(dId as string)
            .then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.descrption);
                setLocation(response.data.geoLocation);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const submit = async (event: any) => {
        event.preventDefault();

        const title = event.target.title.value;
        const description = event.target.description.value;
        const location = event.target.location.value;
        const image = event.target.image.value;
        const startDate = event.target.startDate.value;
        const endDate = event.target.endDate.value;

        const data = {
            title: title,
            descrption: description,
            geoLocation: location,
            image: image,
            startDate: startDate,
            endDate: endDate
        };

        await OtherRequests.addPrivateDestination(data)
            .then((response) => {
                alert("Successfully added destination to private bucket list!");
                window.location.href = "/private-list";
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        fetchDestination();
    }, []);

    return (
        <div>
            <header onClick={() => {window.location.href = "/"}} className="header"></header>

            <h2>Add destination to private bucket list</h2>

            <div className="form-container">
                <form className="form" onSubmit={submit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} disabled />

                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" value={description} disabled />

                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" value={location} disabled />

                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" value={image} disabled />

                    <label htmlFor="startDate">Start date</label>
                    <input type="date" id="startDate" name="startDate" />

                    <label htmlFor="endDate">End date</label>
                    <input type="date" id="endDate" name="endDate" />

                    <button id='add-btn' type="submit">Add destination</button>
                </form>
            </div>
        </div>
    );
};

export default AddPublicToPrivatePage;