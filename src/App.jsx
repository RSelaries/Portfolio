// General Assets
import { useEffect, useState } from "react"
import "./assets/fonts.css"
import "./assets/reset.css"

// Pages
import Home from "./pages/Home/Home"
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen"
import Navbar from "./assets/components/Navbar/Navbar"

export default function App() {
    // LoadindScreen handler
    const [loaded, setLoaded] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(true)
    const hasLoaded = () => {
        setLoaded(true)
        setTimeout(() => { setLoadingScreen(false) }, 2500)
    }

    // Pages
    // const [showPage, setShowPage] = useState({
    //     Home: { id: "Home", isShown: true, animation: "", component: <Home hasLoaded={hasLoaded} loaded={loaded} />  },
    // })

    useEffect(() => {
        function handleImageLoad() {
            const allImagesLoaded = Array.from(document.querySelectorAll('img')).every(img => img.complete)
            if (allImagesLoaded) {
                hasLoaded()
            }
        }

        const images = document.querySelectorAll('img')
        images.forEach(img => {
            if (img.complete) {
                handleImageLoad()
            } else {
                img.addEventListener('load', handleImageLoad)
            }
        })

        return () => {
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad)
            })
        }
    }, [])

    return (
        <>
            {loadingScreen ? <LoadingScreen loaded={loaded} /> : null}
            <Navbar />

            {/* Pages */}
            <Home hasLoaded={hasLoaded} loaded={loaded} />
        </>
    )
}
