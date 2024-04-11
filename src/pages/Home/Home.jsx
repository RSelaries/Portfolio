import { useEffect, useState } from "react"

// CSS Style
import "./homeStyle.css"

// Assets
import homeHaut from "../../assets/images/Home.png"
import cielExtention from "../../assets/images/Ciel.png"
import cassandre from "./assets/Cassandre.png"

export default function Home({ hasLoaded, loaded }) {
    const homeStyle = { "--background-size-x": "100vw", "--background-size-y": "600vw", }
    const [classNames, setClassNames] = useState({
        bckgrnd: "",
        title: "",
    })
    const [imgsLoadState, setImgsLoadState] = useState({
        homeHaut: false,
        cielExtention: false,
        cassandre: false,
    })

    // Start Animation when page is loaded
    useEffect(() => {
        if (loaded) {
            setClassNames({
                bckgrnd: "cassandre-falling",
                title: "fade-in",
            })

            setTimeout(() => {
                setClassNames({
                    bckgrnd: "",
                    title: "",
                })
            }, 6000)
        }
    }, [loaded])

    // Check if all images are loaded
    // useEffect(() => {
    //     if (imgsLoadState.homeHaut && imgsLoadState.cielExtention && imgsLoadState.cassandre) {
    //         console.log("Home Page has loaded")
    //         hasLoaded()
    //         setTimeout(() => { hasLoaded() }, 3000)
    //     }
    // }, [imgsLoadState, hasLoaded])

    function Ciel({ bottom }) {
        return (
            <img
                onLoad={() => { setImgsLoadState({ ...imgsLoadState, cielExtention: true }) }}
                src={cielExtention} alt=""
                style={{
                    position: "absolute",
                    bottom: `${bottom}vw`,
                    width: "100vw",
                    objectFit: "contain",
                    userSelect: "none",
                }}
            />
        )
    }

    function cielCopies(numberOfCopies) {
        let bottom = 8
        let ciels = []

        for (let i = 0; i < numberOfCopies; i++) {
            const key = `key${i}`
            bottom = 8 + (18 * i)
            ciels = [...ciels, <Ciel bottom={bottom} key={key} />]
        }

        return ciels
    }

    return (
        <div className="home" style={homeStyle}>
            <div className={`home-background ${classNames.bckgrnd}`}>
                <img alt="" onLoad={() => { setImgsLoadState({ ...imgsLoadState, homeHaut: true }) }} src={homeHaut} />

                <div className="Copies of the sky image">
                    {cielCopies(33)}
                </div>
            </div>
            <div className="title">
                <h1 className={classNames.title}>SE<span className="L">L</span>AR<span className="I">I</span>ES</h1>
                <img
                    onLoad={() => { setImgsLoadState({ ...imgsLoadState, cassandre: true }) }}
                    src={cassandre}
                    alt="cassandre"
                    style={{
                        userSelect: "none",
                        position: "absolute",
                        width: "16vw",
                    }}
                />
                <h1 className={classNames.title}>RAPHAEL</h1>
            </div>
        </div>
    )
}


