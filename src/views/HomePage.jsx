
import main_img_2 from "../assets/main_img_2.jpg";
import PlantList from "../components/PlantList";
import { useEffect, useState } from 'react';
import SearchField from "../components/SearchField";


function HomePage() {
    //**Initialize state with data from localStorage or an empty array*/
    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });
    
    //**Load saved filter text from localStorage on initial render */
    const [filterText, setFilterText] = useState(() => {
        const savedFilter = localStorage.getItem("filterText");
        return savedFilter ? savedFilter : "";
    });

    //** me saving what user typed in *//
    //** Everytime the filterText variable changes, the information
    //* is saved to webstorage, with the key "filterTextinStorage"  */
    //**Sace filterText to localStorage whenever it changes */
    useEffect(() => {
        localStorage.setItem("filterText", filterText);
    }, [filterText]);

    //**Read the plants stored in webstorage/local storage */
    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);


    const sortedPlants = plants.toSorted((a, b) =>
        a.name.localeCompare(b.date, "en", { sensitivity: "base" })
    );

    //*Filter events based on the user input*//
    const filteredPlants = sortedPlants.filter(plant =>
        plant.name.toLowerCase().includes(filterText.toLowerCase())
    );
    //*Event handler function *//
    const handleInputChange = (plant) => {
        setFilterText(plant.target.value);
    }
    return (
        <>
            <h1>Wellcome to a Flower Plants!</h1>
            <h2>Where Every Leaf Matters...</h2>
            <p>Explore our curated plant care guides, master the basics of watering and light, and start managing your own personal collection with ease. Let’s grow something beautiful together!</p>
            <img
                src={main_img_2}
                alt="Main image man is taking care of flowers"
                style={{ width: 'auto', height: '600px' }} />
    
        
            {filteredPlants.length > 0 ? (
                <div>
                    <SearchField handleinput={handleInputChange} filter={filterText} />
                    <PlantList plants={filteredPlants} setPlants={setPlants} />
                </div>
            ) : (
                    <p>Sorry, nothing to show...</p>
                    
            )}
        </>
    );

}
export default HomePage