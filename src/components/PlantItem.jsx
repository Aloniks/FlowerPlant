import { Link } from "react-router-dom";

export default function PlantItem({ plant, deleteHandler }) {
    return (
        <div>
            <h3>{plant.name}</h3>
            
            <p><i>{plant.scientificname}</i></p>

            <div>
                <p><strong>Light:</strong> {plant.light}</p>
                <p><strong>Watering:</strong> {plant.watering}</p>
                <p><strong>Soil:</strong> {plant.soil}</p>
            </div>

            <p>Level: {plant.level}</p>

            <div>
                <Link to={`/update/${plant.id}`}>Update guide</Link>
                <button onClick={() => deleteHandler(plant.id)}>Delete guide</button>
            </div>
            <hr />
        </div>
    );
}
