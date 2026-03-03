export default function SearchField({ handleinput, filter }) {

    return (
        <input type="search" placeholder="Search for plant..." value={filter} onChange={handleinput} /> 
    )
}