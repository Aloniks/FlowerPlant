import { Link } from "react-router-dom";
import flower_main_picture from "../assets/flowers_main_picture.jpg";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Homepage</Link>&nbsp;&nbsp;
                <Link to="/myPlants">My plants</Link>&nbsp;&nbsp;
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    )
}