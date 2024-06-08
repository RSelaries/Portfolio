import { useState, useEffect } from "react"

// Style
import "./portfolioStyle.css"

// Assets
import moi1 from "./assets/images moi/1.png"
import moi2 from "./assets/images moi/2.png"
import moi3 from "./assets/images moi/3.png"
import moi4 from "./assets/images moi/4.png"

import PagesBackground from "../../assets/components/pages' backgrounds/PagesBackground"

export default function Portfolio({ animation, fromHome }) {
    const [subPage, setSubPage] = useState("/")

    return (
        <div className={`portfolio ${animation}`}>
            { (subPage === "/") && <PortofolioHome fromHome={fromHome} setSubPage={setSubPage} />}
        </div>
    )
}

function PortofolioHome ({ fromHome, setSubPage }) {
    // For the gif's frames
    const nbrOfPhotos = 4
    const [moiNbr, setMoiNbr] = useState(1)
    const [grayscale, setGrayscale] = useState("100%")
    
    // Creates the "Gif" from my photos
    function changeMoiImg() {
        if (moiNbr < nbrOfPhotos) setMoiNbr(moiNbr + 1)
        else setMoiNbr(1)
    }
    useEffect(() => {
        setTimeout(() => {
            changeMoiImg()
        }, 200)
    })

    return (
        <>
            <PagesBackground fromHome={fromHome} />
            <div
                style={{
                    height: "100%",
                    position: "relative",
                    top: 0,
                    overflow: "scroll",
                    "--grayscale": grayscale,
                }}
            >
                <div className="moi-container">
                    { moiNbr === 1 && <img className="moi" src={moi1} alt="" />}
                    { moiNbr === 2 && <img className="moi" src={moi2} alt="" />}
                    { moiNbr === 3 && <img className="moi" src={moi3} alt="" />}
                    { moiNbr === 4 && <img className="moi" src={moi4} alt="" />}
                    <div className="detect"
                        onMouseEnter={() => setGrayscale("0%")}
                        onMouseLeave={() => setGrayscale("100%")}
                        onClick={() => {
                            // window.history.replaceState(null, null, "/Portfolio/Photos")
                            // setSubPage("/Photos")
                        }}
                    >   
                        <h1>PHOTOS</h1>
                    </div>
                </div>
            </div>
        </>
    )
}