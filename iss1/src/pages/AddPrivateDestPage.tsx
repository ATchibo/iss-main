import OtherRequests from "../requests/OtherRequests";

const AddPrivateDestPage: React.FC = () => {


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

    return (
        <div>
            <header onClick={() => {window.location.href = "/"}} className="header"></header>

            <h2>Add destination to private bucket list</h2>

            <div className="form-container">
                <form className="form" onSubmit={submit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />

                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" />

                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" />

                    <label htmlFor="startDate">Start date</label>
                    <input type="date" id="startDate" name="startDate" />

                    <label htmlFor="endDate">End date</label>
                    <input type="date" id="endDate" name="endDate" />

                    <button type="submit">Add destination</button>
                </form>
            </div>
        </div>
    );
};

export default AddPrivateDestPage;