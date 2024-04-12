// Assets
import homeBas from "../../../assets/images/Home-Bas.png"
import mur from "../../../assets/images/Mur.png"

export default function PagesBackground({ fromHome }) {

    return (
        <div className="not-home-background"
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                position: "absolute",
                top: 0,
                zIndex: "-1",
            }}
        >
            {fromHome ?
                <img src={homeBas} alt=""
                    style={{
                        width: "100vw",
                        userSelect: "none",
                    }}
                />
            : null}
            {murCopies(6)}
        </div>
    )
}

function murCopies(nbrOfCopies) {
    function Mur({ i }) {

        return (
            <img src={mur} alt=""
                style={{
                    width: "100vw",
                    zIndex: 1,
                    top: `calc(-7vw + calc(${i} * -7vw) )`,
                    position: "relative",
                    userSelect: "none",
                }}
            />
        )
    }

    let murCopies = []

    for (let i = 0; i < nbrOfCopies; i++) {
        murCopies.push(<Mur i={i} key={`${i} mure`} />)
    }

    return (
        <div>
            {murCopies}
        </div>
    )
}