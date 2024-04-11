// General Assets
import { useEffect, useState } from "react"
import "./assets/fonts.css"
import "./assets/reset.css"

// Components
import LoadingScreen from "./assets/components/LoadingScreen/LoadingScreen"
import Navbar from "./assets/components/Navbar/Navbar"

// Pages
import Home from "./pages/Home/Home"
import Portfolio from "./pages/Portfolio/Portfolio"

export default function App() {
    // LoadindScreen handler
    const [loaded, setLoaded] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(true)
    const hasLoaded = () => {
        setLoaded(true)
        setTimeout(() => { setLoadingScreen(false) }, 2500)
    }

    // Pages
    const currentPathName = window.location.pathname
    const [showPage, setShowPage] = useState({
        Home: { id: "Home", isShown: true, animation: "", },
        Portfolio: { id: "Portfolio", isShown: false, animation: "", },
    })
    const [currentPage, setCurrentPage] = useState(showPage.Home)

    // Change page
    function changePage(pageName) {
        if(currentPage !== pageName) {
            pageName.isShown = true
        }
        setShowPage(showPageCopy)
        console.log(showPage)
    }
    
    // Change page based on url
    function handleChangePage() {
        let showPageCopy = showPage.map((x) => x)

        let pageName
        if(window.location.pathname === "/" ) pageName = showPageCopy.Home
        else pageName = showPageCopy[currentPathName.split("/")[1]]

        changePage(pageName)
    }
    useEffect(() => { handleChangePage() })

    // Check if images are loaded (or cached)
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
            {/* {loadingScreen ? <LoadingScreen loaded={loaded} /> : null} */}
            <Navbar handleChangePage={handleChangePage} />

            {/* Pages */}
            {showPage.Home.isShown && <Home hasLoaded={hasLoaded} loaded={loaded} />}
            {showPage.Portfolio.isShown && <Portfolio /> }
        </>
    )
}
