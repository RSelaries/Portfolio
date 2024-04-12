// General Assets
import { useEffect, useState } from "react"
import "./assets/generalStyle.css"
import "./assets/fonts.css"
import "./assets/reset.css"

// Background Images
import ciel from "./assets/images/Ciel.png" 
import homeBas from "./assets/images/Home-Bas.png" 
import homeHaut from "./assets/images/Home.png" 
import mur from "./assets/images/Mur.png"
import cassandre from "./pages/Home/assets/Cassandre.png"

// Components
import LoadingScreen from "./assets/components/LoadingScreen/LoadingScreen"
import Navbar from "./assets/components/Navbar/Navbar"

// Pages
import Error404Page from "./assets/components/Error404Page/Error404Page"
import Home from "./pages/Home/Home"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"

export default function App() {
    // LoadindScreen handler
    const [loaded, setLoaded] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(true)
    const hasLoaded = () => {
        setLoaded(true)
        setTimeout(() => { setLoadingScreen(false) }, 2500)
    }

    // Pages
    const [showPage, setShowPage] = useState({
        PageList: ["Home", "Portfolio", "Contact"],
        Error404: { isShown: false },
        Home: { isShown: true, animation: "", },
        Portfolio: { isShown: false, animation: "", fromHome: true, },
        Contact: { isShown: false, animation: "", fromHome: true, },
    })
    const [currentPage, setCurrentPage] = useState("Home")

    // for 404 error page
    const [for404err, setFor404err] = useState(0)

    // Change Page
    const changePage = (toPage, transition = true) => {
        if (toPage === currentPage) return
        let fromHome = true
        if (currentPage !== "Home") fromHome = false
        console.log(toPage)

        function withTransition () {
            setShowPage({ ...showPage,
                [toPage]: {...showPage[toPage], isShown: true, animation: "transition-arrive", fromHome: fromHome, },
                [currentPage]: {...showPage[currentPage], isShown: true, animation: "transition-part", }
            })

            setTimeout(() => {
                setShowPage({ ...showPage,
                    [toPage]: {...showPage[toPage], isShown: true, animation: "", fromHome: fromHome, },
                    [currentPage]: {...showPage[currentPage], isShown: false, animation: "", }
                }) 
            }, 2010)
        }
        function withoutTransition() {
            let showPageCopy = {...showPage,
                [currentPage]: {...showPage[currentPage], isShown: false },
                [toPage]: {...showPage[toPage], isShown: true},
            }
            setShowPage(showPageCopy)
        }

        // For 404 error
        if (!showPage.PageList.includes(toPage)) { toPage = "Error404"; setFor404err(for404err + 1); transition = false }
        if (currentPage === "Error404") { transition = false }
         
        if (transition) withTransition()
        else withoutTransition()
        
        setCurrentPage(toPage)
    }

    // Change page based on url at launch
    useEffect(() => {
        const toPage = window.location.pathname.split("/")[1]

        if (toPage !== "") {
            setTimeout(() => {
                changePage(toPage, false)
            }, 1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

        console.log("checked if loaded")

        return () => {
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad)
            })
        }
    }, [loaded, loadingScreen])

    return (
        <div className="App" style={{ overflow: "hidden", height: "100vh" }} >
            <div className="imgs-preload" style={{
                position: "absolute",
                bottom: "500vh",
                width: "5px",
                height: "5px",
                overflow: "hidden",
            }}>
                <img src={cassandre} alt="" />
                <img src={homeBas} alt="" />
                <img src={homeHaut} alt="" />
                <img src={ciel} alt="" />
                <img src={mur} alt="" />
            </div>

            {loadingScreen ? <LoadingScreen loaded={loaded} /> : null}
            <Navbar handlePageChange={changePage} />
            
            {/* Pages */}
            {showPage.Error404.isShown && <Error404Page for404err={for404err} />}
            {showPage.Home.isShown && <Home hasLoaded={hasLoaded} loaded={loaded} animation={showPage.Home.animation} />}
            {showPage.Portfolio.isShown && <Portfolio animation={showPage.Portfolio.animation} fromHome={showPage.Portfolio.fromHome} />}
            {showPage.Contact.isShown && <Contact animation={showPage.Contact.animation} fromHome={showPage.Contact.fromHome} />}

        </div>
    )
}

