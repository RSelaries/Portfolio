import { Link } from "react-router-dom"
import "./navbarStyle.css"

export default function Navbar() {

    return (
        <div className="navbar">
            <Link className="home-btn" to={""}>Selaries</Link>
            <div className="page-btns">
                <Link to={"Portfolio"}>Portfolio</Link>
                <Link>À propos</Link>
                <Link>Contact</Link>
            </div>
        </div>
    )
}