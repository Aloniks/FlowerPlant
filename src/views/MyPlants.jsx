import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPlants() {

    //Get the list of events from webstorage/local storage
    //as a string an format it as a list of plants objects.

    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });
    
    const [name, setName] = useState("");
    const [scientificname, setScientificname] = useState("");
    const [light, setLight] = useState("");
    const [watering, setWatering] = useState("");
    const [soil, SetSoil] = useState("");
    const [level, SetLevel] = useState("");

    let navigate = useNavigate();
    
    //**Save plants to webstorage/local  storage as a string */
    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);

    //**When the user press create button, I find the highest
    //** id-value in the list, thereafter I add 1 to that number*/
    //** and it bacomes the id of the new event */
    function createHandler(e) {
    e.preventDefault();
    const newPlant = { id: Date.now(), name, scientificname, light, watering, soil, level };
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
    navigate("/");
}

    return (

        <form onSubmit={createHandler}>
            <h2>Create new Plant Guide</h2>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name">Common name:</label>
                <input style={{ marginLeft: '15px' }} type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="scientificname">Scientific name:</label>
                <textarea style={{ marginLeft: '15px' }} id="scientificname" name="scientificname" value={scientificname} required onChange={(e) => setScientificname(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="light">Light:</label>
                <textarea style={{ marginLeft: '15px' }} id="light" name="light" value={light} required onChange={(e) => setLight(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="watering">Watering:</label>
                <input style={{ marginLeft: '15px' }} type="text" id="watering" name="watering" value={watering} required onChange={(e) => setWatering(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="soil">Soil:</label>
                <textarea style={{ marginLeft: '15px' }} id="soil" name="soil" value={soil} required onChange={(e) => SetSoil(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="level">Level:</label>
                <input style={{ marginLeft: '15px' }} type="text" id="level" name="level" value={level} required onChange={(e) => SetLevel(e.target.value)} />
            </div>
            <button type="submit">Create a plant guide</button>
        </form>

        
    );

    
};