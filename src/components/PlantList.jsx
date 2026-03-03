import PlantItem from "./PlantItem"

export default function PlantList({ plants, setPlants }) {

//**When user press delete, the id is used to identify
    //** the event, it is excluded and a new vresion of the plants list is created. */
    
    function deletePlantHandler(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this plant guide");
        if (isConfirmed) {
            setPlants(plants.filter(plant => plant.id !== id));
        }
    }

    return (
        <>
            {plants.map(plant => (
                <PlantItem
                    key={plant.id}
                    plant={plant}
                    deleteHandler={deletePlantHandler}
                />
            ))}
        </>
    );
}