import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
    const { id } = useParams();
    //** Initialize state with data from localStorage or an empty array */
    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });

    //**Find the specific event that the user wants to update */
    const plant = plants.find(plant => plant.id === Number(id)); //** Find the event in question */

    const [name, setName] = useState("");
    const [scientificname, setScientificname] = useState("");
    const [light, setLight] = useState("");
    const [watering, setWatering] = useState("");
    const [soil, SetSoil] = useState("");
    const [level, SetLevel] = useState("");

    let navigate = useNavigate();

    //** Save events to webstorage/local storage */
    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);

    //**Update event title, date and description when
    //** specific event is found. This will affect the
    //** values in the form */
    useEffect(() => {
        if (plant) {
            setName(plant.name);
            setScientificname(plant.scientificname);
            setLight(plant.light);
            setWatering(plant.watering);
            SetSoil(plant.soil);
            SetLevel(plant.level);
        }
    }, [plant]);

    //** When the user presses form update button,
    //* the specific event is updated */
    function updateHandler(e) {
        e.preventDefault();
        const updatedPlant = { id: Number(id), name: name, scientificname: scientificname, light: light, watering: watering, soil: soil, level: level };
        setPlants(plants.map((plant) =>
            plant.id === Number(id) ? updatedPlant : plant
        )
        );

        //* After update, the user is redirected to the default page. */
        navigate("/");
    }

    return (
        <form onSubmit={updateHandler}>
            <h2>Update Plant Guide</h2>
            <>
                <label htmlFor="id">ID:</label>
                <input type="number" id="id" name="id" value={id} readOnly />
            </>
            <>
                <label htmlFor="id">Common name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={ (e) => setName(e.target.value)} />
            </>
            <div>
                <label htmlFor="scientificname">Scientific name:</label>
                <textarea id="scientificname" name="scientificname" value={scientificname} required onChange={(e) => setScientificname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="light">Light:</label>
                <textarea id="light" name="light" value={light} required onChange={(e) => setLight(e.target.value)} />
            </div>
            <div>
                <label htmlFor="watering">Watering:</label>
                <input type="text" id="watering" name="watering" value={watering} required onChange={(e) => setWatering(e.target.value)} />
            </div>
            <div>
                <label htmlFor="soil">Soil:</label>
                <textarea id="soil" name="soil" value={soil} required onChange={(e) => SetSoil(e.target.value)} />
            </div>
            <div>
                <label htmlFor="level">Level:</label>
                <input type="text" id="level" name="level" value={level} required onChange={(e) => SetLevel(e.target.value)} />
            </div>
<button type="submit">Update</button>
        </form>
    )
}
