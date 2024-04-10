import { useEffect, useState } from "react"
import "./loadingScreenStyle.css"

export default function LoadingScreen({ loaded }) {
    const [animation, setAnimation] = useState("")

    useEffect(() => {
        if(loaded) setAnimation("fade-out")
    }, [loaded])

    return (
        <div
            className={`loading-screen ${animation}`}
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "5vw",

                backgroundColor: "#111",
            }}
        >
            <div>test for 'cassandre' style</div>
        </div>
    )
}