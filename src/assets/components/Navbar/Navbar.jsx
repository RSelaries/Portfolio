import { Link } from "react-router-dom"
import "./navbarStyle.css"

export default function Navbar({ handlePageChange }) {
    function NavbarBtn({ children, to, className }) {
        let toPage = to
        if (toPage === "/") toPage = "Home"
        return (
            <Link
                className={className}
                to={to}
                onClick={() => { handleClick(toPage) }}
            >
                {children}
            </Link>
        )
    }

    function handleClick(toPage) {
        handlePageChange(toPage)
    }

    return (
        <div className="navbar">
            <NavbarBtn className="home-btn" to={"/"}>Selaries</NavbarBtn>
            <div className="page-btns">
                <NavbarBtn to={"Portfolio"}>Portfolio</NavbarBtn>
                <NavbarBtn to={"A-Propos"}>À propos</NavbarBtn>
                <NavbarBtn to={"Contact"}>Contact</NavbarBtn>
            </div>
        </div>
    )
}