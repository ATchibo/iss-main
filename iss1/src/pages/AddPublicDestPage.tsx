import OtherRequests from "../requests/OtherRequests";

const AddPublicDestPage: React.FC = () => {


    const submit = async (event: any) => {
        event.preventDefault();

        const title = event.target.title.value;
        const description = event.target.description.value;
        const location = event.target.location.value;
        const image = event.target.image.value;

        const data = {
            title: title,
            descrption: description,
            geoLocation: location,
            image: image,
            startDate: "2021-05-01",
            endDate: "2021-05-02"
        };

        await OtherRequests.addPublicDestination(data)
            .then((response) => {
                alert("Successfully added destination to public bucket list!");
                window.location.href = "/pending-list";
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    return (
        <div>
            <header onClick={() => {window.location.href = "/"}} className="header"></header>

            <h2>Add destination to public bucket list</h2>

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

                    <button type="submit">Add destination</button>
                </form>
            </div>
        </div>
    );
};

export default AddPublicDestPage;