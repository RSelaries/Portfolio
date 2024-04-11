import { useEffect } from "react"

export default function Error404Page({ for404err }) {

    useEffect(() => {
        window.history.replaceState(null, "Error 404", "/Error-404")
    }, [for404err])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <p>Error 404</p>
            </div>
            <p><br/></p>
            <p>Cette page n'existe pas</p>
        </div>
    )
}